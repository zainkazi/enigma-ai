import React from "react";
import SpeechPrompt from "./SpeechPrompt";
import SpeechTab from "./SpeechTab";
import SpeechBreadcrumb from "./SpeechBreadcrumb";

const SpeechPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <div className="p-8">
        <SpeechBreadcrumb id={id} />
      </div>
      <div className="px-16 py-4 space-y-16 h-screen">
        <SpeechPrompt />
        <SpeechTab />
      </div>
    </>
  );
};

export default SpeechPage;
