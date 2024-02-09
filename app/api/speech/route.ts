import openai from "@/utils/openai";
import supabase from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { speechInput }: { speechInput: string } = await request.json();
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: speechInput,
  });

  const speech = Buffer.from(await mp3.arrayBuffer());
  const { data, error } = await supabase.storage
    .from("speeches")
    .upload("public/speech2.mp3", speech);

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  return NextResponse.json(data);
};
