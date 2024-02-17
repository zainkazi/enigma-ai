"use client";

import { useAvatarStore } from "@/store";
import React, { useState } from "react";

const HairColorPicker = () => {
  const hairColor = useAvatarStore((state) => state.formData.hairColor);
  const setHairColor = useAvatarStore((state) => state.setFormData);

  const colors = [
    { name: "Black", value: "bg-black" },
    { name: "Blue", value: "bg-blue-600" },
    { name: "Red", value: "bg-red-600" },
    { name: "Yellow", value: "bg-yellow-400" },
    { name: "Pink", value: "bg-pink-300" },
    { name: "Gray", value: "bg-gray-400" },
  ];

  return (
    <div>
      <h1 className=" text-lg font-medium py-2">Hair Color</h1>
      <div className="flex items-center space-x-4 p-4 bg-zinc-900 rounded-full">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`w-6 h-6 rounded-full focus:outline-none focus:ring focus:ring-offset-1 ${
              hairColor === color.value ? "ring ring-white" : ""
            } ${color.value}`}
            onClick={() => setHairColor("hairColor", color.name)}
            aria-label={`Select ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HairColorPicker;
