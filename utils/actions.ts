"use server";

import { FormData } from "@/store";
import axios from "axios";
import supabase from "./supabase";
import prisma from "@/utils/db";

export async function createProject(formData: FormData, avatar: string) {
  console.log("calling server action");
  const { ethnicity, ageGroup, gender, hairColor } = formData;
  const downloadedImage = await axios.get(avatar, {
    responseType: "arraybuffer",
  });

  const fileName = `public/${Date.now()}.png`;

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(fileName, downloadedImage.data, {
      contentType: "image/png",
    });

  if (error) return "Error uploading image";
  console.log("Data", data);

  const { data: storedImage } = supabase.storage
    .from("avatars")
    .getPublicUrl(fileName);
  console.log("Public url", storedImage.publicUrl);

  const newProject = await prisma.project.create({
    data: {
      ethnicity: ethnicity as string,
      ageGroup: ageGroup as string,
      hairColor: hairColor as string,
      gender: gender as string,
      avatarUrl: storedImage.publicUrl,
    },
  });
  console.log(newProject);
}
