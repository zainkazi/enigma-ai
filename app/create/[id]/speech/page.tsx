import React from "react";
import SpeechPrompt from "./SpeechPrompt";
import SpeechTab from "./SpeechTab";
import SpeechBreadcrumb from "./SpeechBreadcrumb";

const SpeechPage = () => {
  return (
    <>
      <div className="p-8">
        <SpeechBreadcrumb />
      </div>
      <div className="px-16 py-8 space-y-16 h-screen">
        <SpeechPrompt />
        <SpeechTab />
      </div>
    </>
  );
};

export default SpeechPage;
