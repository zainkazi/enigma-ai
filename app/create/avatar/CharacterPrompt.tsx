import React from "react";
import EthnicityDropDownMenu from "./_components/EthnicityDropDownMenu";
import AgeGroupDropDownMenu from "./_components/AgeGroupDropDownMenu";
import HairColorPicker from "./_components/HairColorPicker";
import GenderSelector from "./_components/GenderSelector";
import CharacterQuantitySelector from "./_components/CharacterQuantitySelector";

function CharacterPrompt() {
  return (
    <section className="space-y-4">
      <EthnicityDropDownMenu />
      <AgeGroupDropDownMenu />
      <HairColorPicker />
      <GenderSelector />
      <CharacterQuantitySelector />
    </section>
  );
}

export default CharacterPrompt;
