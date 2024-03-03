"use client";

import React, { useEffect, useState } from "react";
import SpeedSelector from "./_components/SpeedSelector";
import SpeechInput from "./_components/SpeechInput";
import SpeechGenderSelector from "./_components/SpeechGenderSelector";
import { Button } from "@/components/ui/button";
import { useSpeechStore } from "@/store";
import axios from "axios";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchProject } from "@/utils/actions";
import { Project } from "@prisma/client";
import { ArrowRight, Loader2 } from "lucide-react";

function SpeechPrompt() {
  const params = useParams();
  const formData = useSpeechStore((state) => state.formData);
  const setFormData = useSpeechStore((state) => state.setFormData);
  const setSpeechUrl = useSpeechStore((state) => state.setSpeechUrl);
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  const { data } = useQuery({
    queryKey: ["speech"],
    queryFn: async () => fetchProject(params.id as string),
  });

  useEffect(() => {
    if (data) {
      setFormData("speed", data.speechSpeed);
      setFormData("gender", data.speechGender);
      setFormData("speechInput", data.speechPrompt);
    }
    if (data?.speechUrl) {
      setSpeechUrl(data.speechUrl);
      setGenerated(true);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setGenerating(true);
    const speech = await axios.post<Project>("/api/speech", {
      ...formData,
      projectId: params.id,
    });

    setGenerating(false);
    setGenerated(true);
    setSpeechUrl(speech.data.speechUrl || "");
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
            <Button disabled={generating} type="submit" className="px-8">
              {generating ? "Generating" : "Regenerate"}
              {generating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
            </Button>
            <Button disabled={generating} type="button" className="px-8">
              Continue <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </>
        ) : (
          <Button disabled={generating} type="submit" className="px-16">
            {generating ? "Generating" : "Generate"}
            {generating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
        )}
      </div>
    </form>
  );
}

export default SpeechPrompt;
