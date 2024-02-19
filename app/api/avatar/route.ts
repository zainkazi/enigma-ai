import openai from "@/utils/openai";
import supabase from "@/utils/supabase";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { ethnicity, ageGroup, gender, hairColor, numberOfCharacters } =
    await request.json();

  const imagePrompt = `Generate a realistic portrait of a ${ethnicity} ${ageGroup} ${gender} with ${hairColor} hair color, facing directly towards the viewer as if they are a news reporter speaking to the camera. Ensure that the background is neutral and unobtrusive, focusing solely on the subject. Exclude any additional elements or objects from the image.`;

  const image = await openai.images.generate({
    model: "dall-e-2",
    prompt: imagePrompt,
    n: numberOfCharacters,
    size: "256x256",
  });

  const imageUrl = image.data[0].url;

  if (!imageUrl) {
    return NextResponse.json({ error: "Could not generate image" });
  }

  // const downloadedImage = await axios.get(imageUrl, {
  //   responseType: "arraybuffer",
  // });

  // const { data, error } = await supabase.storage
  //   .from("avatars")
  //   .upload("public/avatar1.png", downloadedImage.data, {
  //     contentType: "image/png",
  //   });

  // if (error) {
  //   return NextResponse.json({ error }, { status: 400 });
  // }

  return NextResponse.json(image);
};
