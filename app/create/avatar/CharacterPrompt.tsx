"use client";

import React, { useState } from "react";
import EthnicityDropDownMenu from "./_components/EthnicityDropDownMenu";
import AgeGroupDropDownMenu from "./_components/AgeGroupDropDownMenu";
import HairColorPicker from "./_components/HairColorPicker";
import GenderSelector from "./_components/GenderSelector";
import CharacterQuantitySelector from "./_components/CharacterQuantitySelector";
import { Button } from "@/components/ui/button";
import { useAvatarStore } from "@/store";
import axios from "axios";
import { ArrowRight, Loader2 } from "lucide-react";
import { createProject } from "@/utils/actions";

function CharacterPrompt() {
  const formData = useAvatarStore((state) => state.formData);
  const setAvatars = useAvatarStore((state) => state.setAvatars);
  const selectedAvatar = useAvatarStore((state) => state.selectedAvatar);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Generating");

    setGenerating(true);
    const generatedAvatars = await axios.post("/api/avatar", formData);

    setGenerated(true);
    setGenerating(false);
    setAvatars(generatedAvatars.data.data);

    console.log("Generated");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <EthnicityDropDownMenu />
      <AgeGroupDropDownMenu />
      <HairColorPicker />
      <GenderSelector />
      <CharacterQuantitySelector />
      {generated ? (
        <div className="space-x-6">
          <Button disabled={generating} type="submit">
            {generating ? "Generating" : "Regenerate"}
            {generating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
          <Button
            type="button"
            disabled={generating || selectedAvatar == null}
            onClick={async () => await createProject(formData, selectedAvatar!)}
          >
            Next <ArrowRight className="h-4 w-4 ml-2" />
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
}

export default CharacterPrompt;
