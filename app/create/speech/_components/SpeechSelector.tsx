"use client";

import React, { useState } from "react";

const speeds = [1, 1.25, 1.5, 2]; // The different speed options available

const SpeedSelector = () => {
  const [selectedSpeed, setSelectedSpeed] = useState(speeds[0]); // Default to the first speed option

  return (
    <div>
      <h1 className=" text-lg font-medium py-2">Speed</h1>
      <div className="flex items-center gap-2 rounded-lg">
        {speeds.map((speed) => (
          <button
            key={speed}
            onClick={() => setSelectedSpeed(speed)}
            className={`w-20  py-2  rounded-full text-white ${
              selectedSpeed === speed
                ? "bg-indigo-600 ring-2 ring-indigo-500"
                : "border-2 border-zinc-100"
            }`}
          >
            {`${speed}x`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeedSelector;
