import openai from "@/utils/openai";
import supabase from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { minusTokens } from "@/utils/actions";
import { getUserByClerkId } from "@/utils/getUserByClerkId";
import { redirect } from "next/navigation";

export const maxDuration = 300;

export const POST = async (request: NextRequest) => {
  const { gender, speed, speechInput, projectId } = await request.json();

  const user = await getUserByClerkId();
  if (user.tokens - 6 < 0) redirect("/subscription");

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: gender === "Male" ? "alloy" : "nova",
    input: speechInput,
    speed: speed,
    response_format: "wav",
  });

  const speech = Buffer.from(await mp3.arrayBuffer());

  const speechFileName = `public/${Date.now()}.wav`;

  const { data, error } = await supabase.storage
    .from("speeches")
    .upload(speechFileName, speech, {
      upsert: true,
    });

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const speechUrl = supabase.storage
    .from("speeches")
    .getPublicUrl(speechFileName);

  const updatedProject = await prisma.project.update({
    where: {
      id: projectId,
    },
    data: {
      speechGender: gender,
      speechSpeed: speed.toString(),
      speechPrompt: speechInput,
      speechUrl: speechUrl.data.publicUrl,
      updateVideo: true,
    },
  });

  await minusTokens(6);

  return NextResponse.json(updatedProject);
};
