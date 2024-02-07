import openai from "@/utils/openai";
import { NextRequest, NextResponse } from "next/server";

const imagePrompt = `Generate a realistic portrait of a [ethnicity] [age group] [gender] with [hair color], facing directly towards the viewer as if they are a news reporter speaking to the camera. Ensure that the background is neutral and unobtrusive, focusing solely on the subject. Exclude any additional elements or objects from the image.`;

export const POST = async (request: NextRequest) => {
  const image = await openai.images.generate({
    model: "dall-e-2",
    prompt: "cute puppy",
  });

  return NextResponse.json(image);
};
