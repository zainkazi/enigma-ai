"use client";

import { useAvatarStore } from "@/store";
import React, { useState } from "react";

const CharacterQuantitySelector = () => {
  const numberOfCharacters = useAvatarStore(
    (state) => state.formData.numberOfCharacters
  );
  const setNumberOfCharacters = useAvatarStore((state) => state.setFormData);
  const quantities = [1, 2, 3, 4];

  return (
    <div className=" text-white flex flex-col ">
      <h1 className=" text-lg font-medium py-2">Number of Characters</h1>
      <div className="flex">
        {quantities.map((quantity) => (
          <button
            key={quantity}
            className={`w-10 h-10 rounded-full mx-1 text-center ${
              numberOfCharacters === quantity
                ? " border-indigo-600 bg-indigo-600 border-2 "
                : "border-2 border-zinc-100 "
            }`}
            onClick={() =>
              setNumberOfCharacters("numberOfCharacters", quantity)
            }
          >
            {quantity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterQuantitySelector;
