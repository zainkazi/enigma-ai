import openai from "@/utils/openai";
import supabase from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

export const POST = async (request: NextRequest) => {
  const { gender, speed, speechInput, projectId } = await request.json();
  console.log("Generating Speech");
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: gender === "Male" ? "alloy" : "nova",
    input: speechInput,
    speed: speed,
    response_format: "wav",
  });

  const speech = Buffer.from(await mp3.arrayBuffer());

  const speechFileName = `public/${Date.now()}.wav`;
  console.log(speechFileName);

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
    },
  });

  return NextResponse.json(updatedProject);
};
