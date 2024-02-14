"use client";

import React, { useState } from "react";

const GenderSelector = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div>
      <h1 className=" text-lg font-medium py-2">Gender</h1>
      <div className="text-white flex  ">
        <button
          className={`px-4 py-2 rounded-full w-24 ${
            selectedGender === "Male"
              ? "bg-blue-500 "
              : "border-2 border-zinc-100"
          } mx-1`}
          onClick={() => handleSelectGender("Male")}
        >
          Male
        </button>
        <button
          className={`px-4 py-2 rounded-full w-24 ${
            selectedGender === "Female"
              ? "bg-pink-500"
              : "border-2 border-zinc-100"
          } mx-1`}
          onClick={() => handleSelectGender("Female")}
        >
          Female
        </button>
      </div>
    </div>
  );
};

export default GenderSelector;
