"use client";

import { useAvatarStore } from "@/store";
import React, { useState } from "react";

const HairColorPicker = () => {
  const hairColor = useAvatarStore((state) => state.formData.hairColor);
  const setHairColor = useAvatarStore((state) => state.setFormData);

  const colors = [
    { name: "Black", value: "bg-black", ringValue: "ring-black" },
    { name: "Blue", value: "bg-blue-600", ringValue: "ring-blue-600" },
    { name: "Red", value: "bg-red-600", ringValue: "ring-red-600" },
    { name: "Yellow", value: "bg-yellow-400", ringValue: "ring-yellow-400" },
    { name: "Pink", value: "bg-pink-300", ringValue: "ring-pink-300" },
    { name: "Gray", value: "bg-gray-400", ringValue: "ring-gray-400" },
  ];

  return (
    <div>
      <h1 className=" text-lg font-medium py-2">Hair Color</h1>
      <div className="flex items-center space-x-4 p-4 rounded-full">
        {colors.map((color) => (
          <button
            type="button"
            key={color.name}
            className={`w-6 h-6 rounded-full ${color.value}
              ${
                hairColor == color.name
                  ? `ring-2 ${color.ringValue} ring-offset-4 ring-offset-background`
                  : ""
              }`}
            onClick={() => setHairColor("hairColor", color.name)}
            aria-label={`Select ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HairColorPicker;
