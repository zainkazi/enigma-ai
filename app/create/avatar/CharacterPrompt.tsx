"use client";

import React from "react";
import EthnicityDropDownMenu from "./_components/EthnicityDropDownMenu";
import AgeGroupDropDownMenu from "./_components/AgeGroupDropDownMenu";
import HairColorPicker from "./_components/HairColorPicker";
import GenderSelector from "./_components/GenderSelector";
import CharacterQuantitySelector from "./_components/CharacterQuantitySelector";
import { Button } from "@/components/ui/button";

function CharacterPrompt() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
