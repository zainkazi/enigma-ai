import openai from "@/utils/openai";
import { NextRequest, NextResponse } from "next/server";

const speechInput = "Today is a wonderful day to build something people love!";

export const POST = async (request: NextRequest) => {
  const speech = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: speechInput,
  });

  return NextResponse.json(speech);
};
