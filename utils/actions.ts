"use server";

import axios from "axios";
import supabase from "./supabase";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import { getUserByClerkId } from "./getUserByClerkId";
import { revalidatePath } from "next/cache";
import { AvatarFormData } from "@/store";

// Create new project
export async function createProject(projectName: string) {
  const user = await getUserByClerkId();

  const newProject = await prisma.project.create({
    data: {
      name: projectName.length == 0 ? "Project" : projectName,
      userId: user.id,
    },
  });

  revalidatePath("/dashboard");
  redirect(`/create/${newProject.id}/avatar`);
}

// Fetch existing project
export async function fetchProject(projectId: string) {
  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
  });

  if (!project) {
    redirect("/dashboard");
  }

  return project;
}

// Delete a project
export async function deleteProject(projectId: string) {
  const deleteProject = await prisma.project.delete({
    where: {
      id: projectId,
    },
  });

  revalidatePath("/dashboard");
  return deleteProject;
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
        updateVideo: true,
      },
    });
  }

  revalidatePath("/dashboard");
  revalidatePath(`/create/${oldProject?.id}/avatar`);
  revalidatePath(`/create/${oldProject?.id}/video`);
  redirect(`/create/${oldProject?.id}/speech`);
}

export async function minusTokens(amount: number) {
  const user = await getUserByClerkId();

  const updatedProject = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      tokens: {
        decrement: amount,
      },
    },
  });

  revalidatePath("/dashboard");
  return updatedProject;
}
