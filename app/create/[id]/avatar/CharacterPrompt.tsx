"use client";

import React, { useEffect, useState } from "react";
import EthnicityDropDownMenu from "./_components/EthnicityDropDownMenu";
import AgeGroupDropDownMenu from "./_components/AgeGroupDropDownMenu";
import HairColorPicker from "./_components/HairColorPicker";
import AvatarGenderSelector from "./_components/AvatarGenderSelector";
import CharacterQuantitySelector from "./_components/CharacterQuantitySelector";
import { Button } from "@/components/ui/button";
import { useAvatarStore } from "@/store";
import axios from "axios";
import { ArrowRight, Loader2 } from "lucide-react";
import { fetchProject, updateAvatar } from "@/utils/actions";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const CharacterPrompt = () => {
  const params = useParams();
  const formData = useAvatarStore((state) => state.formData);
  const avatars = useAvatarStore((state) => state.avatars);
  const setAvatars = useAvatarStore((state) => state.setAvatars);
  const setFormData = useAvatarStore((state) => state.setFormData);
  const selectedAvatar = useAvatarStore((state) => state.selectedAvatar);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);

  const { data } = useQuery({
    queryKey: ["project"],
    queryFn: async () => await fetchProject(params.id as string),
  });

  useEffect(() => {
    if (data) {
      setFormData("ethnicity", data.ethnicity);
      setFormData("ageGroup", data.ageGroup);
      setFormData("hairColor", data.hairColor);
      setFormData("gender", data.gender);
    }
    if (data?.avatarUrl) {
      setAvatars([{ url: data.avatarUrl }]);
      setGenerated(true);
    }
  }, [data, setFormData, setAvatars]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setGenerating(true);
    const generatedAvatars = await axios.post("/api/avatar", formData);

    setGenerated(true);
    setGenerating(false);
    setAvatars(generatedAvatars.data.data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <EthnicityDropDownMenu />
      <AgeGroupDropDownMenu />
      <HairColorPicker />
      <AvatarGenderSelector />
      <CharacterQuantitySelector />
      {generated || data?.avatarUrl ? (
        <div className="space-x-6">
          <Button disabled={generating} type="submit">
            {generating ? "Generating" : "Regenerate"}
            {generating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
          <Button
            type="button"
            disabled={
              avatars.length !== 1 &&
              (generating || selectedAvatar == null || uploadingAvatar)
            }
            onClick={async () => {
              setUploadingAvatar(true);
              await updateAvatar(
                formData,
                selectedAvatar!,
                params.id as string
              );
              setUploadingAvatar(false);
            }}
          >
            Next{" "}
            {uploadingAvatar ? (
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4 ml-2" />
            )}
          </Button>
        </div>
      ) : (
        <Button disabled={generating} type="submit" className="w-full">
          {generating ? "Generating" : "Generate"}
          {generating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      )}
    </form>
  );
};

export default CharacterPrompt;