import React from "react";
import SpeechPrompt from "./SpeechPrompt";
import SpeechTab from "./SpeechTab";

const SpeechPage = () => {
  return (
    <div className="w-[100%] px-16 py-8  space-y-16 h-screen">
      <SpeechPrompt />
      <SpeechTab />
    </div>
  );
};

export default SpeechPage;
