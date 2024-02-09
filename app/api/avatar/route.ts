import openai from "@/utils/openai";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { ethnicity, ageGroup, gender, hairColor, numberOfCharacters } =
    await request.json();

  const imagePrompt = `Generate a realistic portrait of a ${ethnicity} ${ageGroup} ${gender} with ${hairColor} hair color, facing directly towards the viewer as if they are a news reporter speaking to the camera. Ensure that the background is neutral and unobtrusive, focusing solely on the subject. Exclude any additional elements or objects from the image.`;

  console.log(ethnicity, ageGroup, gender, hairColor, numberOfCharacters);
  console.log(typeof numberOfCharacters);

  const image = await openai.images.generate({
    model: "dall-e-2",
    prompt: imagePrompt,
    n: numberOfCharacters,
  });

  return NextResponse.json(image);
};
