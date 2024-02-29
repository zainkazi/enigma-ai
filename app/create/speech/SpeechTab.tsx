"use client";

import { Card } from "@/components/ui/card";
import { useSpeechStore } from "@/store";

function SpeechTab() {
  const speechUrl = useSpeechStore((state) => state.speechUrl);

  if (!speechUrl) return null;

  return (
    <Card className="p-8">
      <audio className="w-full" controls>
        <source src={speechUrl} type="audio/mpeg" />
      </audio>
    </Card>
  );
}

export default SpeechTab;
