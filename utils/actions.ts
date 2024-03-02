"use server";

import axios from "axios";
import supabase from "./supabase";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import { AvatarSchema } from "@/validationSchemas";
import { z } from "zod";

type AvatarFormData = z.infer<typeof AvatarSchema>;

export async function createProject() {
  console.log("Creating project");

  const newProject = await prisma.project.create({
    data: {},
  });

  redirect(`/create/${newProject.id}/avatar`);
}

export async function fetchProject(projectId: string) {
  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });

  return project;
}

export async function updateAvatar(
  formData: AvatarFormData,
  avatar: string,
  projectId: string
) {
  const oldProject = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });

  if (oldProject?.avatarUrl !== avatar) {
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

    const { data: storedImage } = supabase.storage
      .from("avatars")
      .getPublicUrl(fileName);

    const updatedProject = await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        ethnicity,
        ageGroup,
        gender,
        hairColor,
        avatarUrl: storedImage.publicUrl,
      },
    });
  }

  redirect(`/create/${oldProject?.id}/speech`);
}
