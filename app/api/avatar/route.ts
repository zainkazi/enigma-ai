import { minusTokens } from "@/utils/actions";
import { getUserByClerkId } from "@/utils/getUserByClerkId";
import openai from "@/utils/openai";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 300;

export const POST = async (request: NextRequest) => {
  const { model, ethnicity, ageGroup, gender, hairColor, numberOfCharacters } =
    await request.json();

  const tokenUsage = model == "dall-e-3" ? 10 : 2;
  const newCharacterNum = model == "dall-e-3" ? 1 : numberOfCharacters;

  const user = await getUserByClerkId();
  if (user.tokens - tokenUsage * newCharacterNum < 0) redirect("/subscription");

  const imagePrompt = `Generate a realistic portrait of a ${ethnicity} ${gender} in the age group of ${ageGroup} with ${hairColor} hair, facing directly towards the viewer. Ensure that the background is neutral and unobtrusive, focusing solely on the subject. Exclude any additional elements or objects from the image.`;

  const image = await openai.images.generate({
    model: model,
    prompt: imagePrompt,
    n: newCharacterNum,
    size: "1024x1024",
  });

  const imageUrl = image.data[0].url;

  if (!imageUrl) {
    return NextResponse.json({ error: "Could not generate image" });
  }

  //subtract tokens
  await minusTokens(numberOfCharacters * 2);

  return NextResponse.json(image);
};
