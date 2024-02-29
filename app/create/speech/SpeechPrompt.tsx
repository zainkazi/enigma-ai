"use client";

import React, { useState } from "react";
import SpeedSelector from "./_components/SpeedSelector";
import SpeechInput from "./_components/SpeechInput";
import SpeechGenderSelector from "./_components/SpeechGenderSelector";
import { Button } from "@/components/ui/button";
import { useSpeechStore } from "@/store";
import axios from "axios";

function SpeechPrompt() {
  const formData = useSpeechStore((state) => state.formData);
  const setSpeechUrl = useSpeechStore((state) => state.setSpeechUrl);
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setGenerating(true);
    const speech = await axios.post("/api/speech", formData);

    setGenerating(false);
    setGenerated(true);
    setSpeechUrl(speech.data.data.publicUrl);

    console.log(speech.data.data.publicUrl);
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
