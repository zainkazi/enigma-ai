"use client";

import React, { useState } from "react";
import SpeedSelector from "./_components/SpeedSelector";
import SpeechInput from "./_components/SpeechInput";
import SpeechGenderSelector from "./_components/SpeechGenderSelector";
import { Button } from "@/components/ui/button";

function SpeechPrompt() {
  const [generated, setGenerated] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="flex gap-24">
        <SpeechGenderSelector />
        <SpeedSelector />
      </div>
      <div>
        <SpeechInput />
      </div>
      <div className="flex justify-end gap-4">
        {generated ? (
          <>
            <Button type="button" className="px-8">
              Regenerate
            </Button>
            <Button type="submit" className="px-8">
              Continue
            </Button>
          </>
        ) : (
          <Button type="submit" className="px-16">
            Generate
          </Button>
        )}
      </div>
    </form>
  );
}

export default SpeechPrompt;
