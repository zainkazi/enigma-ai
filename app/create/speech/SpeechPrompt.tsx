import React from "react";
import SpeedSelector from "./_components/SpeechSelector";
import SpeechInput from "./_components/SpeechInput";
import GenderSelector from "../avatar/_components/GenderSelector";

function SpeechPrompt() {
  return (
    <section className="space-y-10">
      <div className="flex gap-24">
        <GenderSelector />
        <SpeedSelector />
      </div>
      <div>
        <SpeechInput />
      </div>
    </section>
  );
}

export default SpeechPrompt;
