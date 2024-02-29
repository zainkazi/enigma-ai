import openai from "@/utils/openai";
import supabase from "@/utils/supabase";
import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { gender, speed, speechInput } = await request.json();
  console.log("Generating Speech");
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: gender === "Male" ? "alloy" : "nova",
    input: speechInput,
    speed: speed,
  });

  const speech = Buffer.from(await mp3.arrayBuffer());

  const speechFileName = `public/${Date.now()}.mp3`;
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

  return NextResponse.json(speechUrl);
};
