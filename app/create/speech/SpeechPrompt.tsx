"use client";

import React from "react";
import SpeedSelector from "./_components/SpeedSelector";
import SpeechInput from "./_components/SpeechInput";
import SpeechGenderSelector from "./_components/SpeechGenderSelector";

function SpeechPrompt() {
  return (
    <section className="space-y-10">
      <div className="flex gap-24">
        <SpeechGenderSelector />
        <SpeedSelector />
      </div>
      <div>
        <SpeechInput />
      </div>
    </section>
  );
}

export default SpeechPrompt;
