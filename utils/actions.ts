"use server";

import { AvatarFormData } from "@/store";
import axios from "axios";
import supabase from "./supabase";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export async function createProject() {
  console.log("Creating project");

  const newProject = await prisma.project.create({
    data: {},
  });

  console.log(newProject);
  redirect(`/create/${newProject.id}/avatar`);
}

export async function updateAvatar(formData: AvatarFormData, avatar: string) {
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

  // avatarUrl: storedImage.publicUrl,
}
