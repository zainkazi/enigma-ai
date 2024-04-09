"use client";

import { Card } from "@/components/ui/card";
import { useSpeechStore } from "@/store";
import SpeechAnimation from "./_components/SpeechAnimation";
import SpeechLoading from "./_components/SpeechLoading";

function SpeechTab() {
  const speechUrl = useSpeechStore((state) => state.speechUrl);
  const generatingSpeech = useSpeechStore((state) => state.generatingSpeech);
  const loadingProject = useSpeechStore((state) => state.loadingProject);

  if (loadingProject) return <SpeechLoading />;

  if (generatingSpeech)
    return (
      <Card className="p-10 flex justify-center items-center">
        <SpeechAnimation />
      </Card>
    );

  if (!speechUrl)
    return (
      <Card className="p-12 flex justify-center items-center">
        <h1 className="opacity-40">
          Click <span className="font-bold">Generate</span> to create speech
        </h1>
      </Card>
    );

  return (
    <Card className="p-8">
      <audio className="w-full" controls>
        <source src={speechUrl} type="audio/wav" />
      </audio>
    </Card>
  );
}

export default SpeechTab;
