import React from "react";
import EthnicityDropDownMenu from "./_components/EthnicityDropDownMenu";
import AgeGroupDropDownMenu from "./_components/AgeGroupDropDownMenu";
import HairColorPicker from "./_components/HairColorPicker";
import GenderSelector from "./_components/GenderSelector";
import CharacterQuantitySelector from "./_components/CharacterQuantitySelector";

function CharacterPrompt() {
  return (
    <section>
      <div className="space-y-6">
        <EthnicityDropDownMenu />
        <AgeGroupDropDownMenu />
        <HairColorPicker />
        <GenderSelector />
        <CharacterQuantitySelector />
      </div>
    </section>
  );
}

export default CharacterPrompt;
