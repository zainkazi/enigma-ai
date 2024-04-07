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
import { AvatarSchema, ageGroups } from "@/validationSchemas";
import CharacterPromptLoading from "./_components/CharacterPromptLoading";
import { useQueryClient } from "@tanstack/react-query";

type FormErrors = {
  ethnicity?: { _errors: string[] };
  ageGroup?: { _errors: string[] };
  gender?: { _errors: string[] };
  hairColor?: { _errors: string[] };
};

export const errorClassnames = "text-red-500 text-sm mt-2";

const CharacterPrompt = () => {
  const queryClient = useQueryClient();
  const params = useParams();
  const formData = useAvatarStore((state) => state.formData);
  const setGeneratingAvatar = useAvatarStore(
    (state) => state.setGeneratingAvatar
  );
  const setAvatars = useAvatarStore((state) => state.setAvatars);
  const setFormData = useAvatarStore((state) => state.setFormData);
  const selectedAvatar = useAvatarStore((state) => state.selectedAvatar);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [validationErrors, setValidationErrors] = useState<FormErrors>({});

  const { data, isLoading, error } = useQuery({
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

    return () => {
      setAvatars([]);
    };
  }, [data, setFormData, setAvatars]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationResult = AvatarSchema.safeParse(formData);

    if (validationResult.success) {
      setGeneratingAvatar(true);
      setValidationErrors({});
      setGenerating(true);
      const generatedAvatars = await axios.post("/api/avatar", formData);
      setGenerated(true);
      setGenerating(false);
      setGeneratingAvatar(false);
      queryClient.invalidateQueries({ queryKey: ["project"] });
      setAvatars(generatedAvatars.data.data);
    } else {
      setValidationErrors(validationResult.error.format());
      console.log(validationResult.error.format());
    }
  };

  if (isLoading) return <CharacterPromptLoading />;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <EthnicityDropDownMenu />
        {validationErrors.ethnicity && (
          <p className={errorClassnames}>Please select an ethnicity</p>
        )}
      </div>
      <div>
        <AgeGroupDropDownMenu />
        {validationErrors.ageGroup && (
          <p className={errorClassnames}>Please select an age group</p>
        )}
      </div>
      <div>
        <HairColorPicker />
        {validationErrors.hairColor && (
          <p className={errorClassnames}>Please select a hair color</p>
        )}
      </div>
      <div>
        <AvatarGenderSelector />
        {validationErrors.gender && (
          <p className={errorClassnames}>Please select a gender</p>
        )}
      </div>
      <div>
        <CharacterQuantitySelector />
      </div>
      {generated || data?.avatarUrl ? (
        <div className="space-x-6">
          <Button disabled={generating || uploadingAvatar} type="submit">
            {generating ? "Generating" : "Regenerate"}
            {generating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
          <Button
            type="button"
            disabled={generating || selectedAvatar == null || uploadingAvatar}
            onClick={async () => {
              setUploadingAvatar(true);
              await updateAvatar(
                formData,
                selectedAvatar!,
                params.id as string
              );
              setUploadingAvatar(false);
              setAvatars([]);
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
