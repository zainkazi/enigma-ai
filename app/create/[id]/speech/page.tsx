import React from "react";
import SpeechPrompt from "./SpeechPrompt";
import SpeechTab from "./SpeechTab";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";

const SpeechPage = () => {
  noStore();
  return (
    <>
      <div className="px-16 py-4 space-y-16 h-screen mb-36">
        <SpeechPrompt />
        <SpeechTab />
      </div>
    </>
  );
};

export default SpeechPage;
