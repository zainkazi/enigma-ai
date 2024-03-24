"use client";

import { Card } from "@/components/ui/card";
import { useSpeechStore } from "@/store";

function SpeechTab() {
  const speechUrl = useSpeechStore((state) => state.speechUrl);

  if (!speechUrl)
    return (
      <Card className="p-10 flex justify-center items-center">
        <h1 className="opacity-40">Click 'Generate' to create speech</h1>
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
