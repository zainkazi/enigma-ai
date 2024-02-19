"use client";

import React from "react";
import EthnicityDropDownMenu from "./_components/EthnicityDropDownMenu";
import AgeGroupDropDownMenu from "./_components/AgeGroupDropDownMenu";
import HairColorPicker from "./_components/HairColorPicker";
import GenderSelector from "./_components/GenderSelector";
import CharacterQuantitySelector from "./_components/CharacterQuantitySelector";
import { Button } from "@/components/ui/button";
import { useAvatarStore } from "@/store";
import axios from "axios";

function CharacterPrompt() {
  const formData = useAvatarStore((state) => state.formData);
  const setAvatars = useAvatarStore((state) => state.setAvatars);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Generating");

    const generatedAvatars = await axios.post("/api/avatar", formData);

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
      <Button type="submit" className="w-full">
        Generate
      </Button>
    </form>
  );
}

export default CharacterPrompt;
