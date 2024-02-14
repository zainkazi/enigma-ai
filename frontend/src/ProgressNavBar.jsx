import React, { useState } from "react";

const steps = ["Home", "Character", "Speech", "Video"];

const ProgressNavBar = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className=" text-white p-4 flex justify-start items-center space-x-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          {index !== 0 && (
            <span className="mx-2">{index <= currentStep ? "▶︎" : "▷"}</span>
          )}
          <button
            onClick={() => goToStep(index)}
            className={`px-2 ${
              index <= currentStep ? "text-white" : "text-gray-500"
            }`}
          >
            {step}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProgressNavBar;
