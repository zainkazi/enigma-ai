import React from "react";
import SpeechPrompt from "./SpeechPrompt";
import SpeechTab from "./SpeechTab";
import SpeechBreadcrumb from "./SpeechBreadcrumb";

const SpeechPage = () => {
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
