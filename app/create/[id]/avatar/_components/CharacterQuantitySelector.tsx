"use client";

import { useAvatarStore } from "@/store";
import React from "react";

const CharacterQuantitySelector = () => {
  const numberOfCharacters = useAvatarStore(
    (state) => state.formData.numberOfCharacters
  );
  const setNumberOfCharacters = useAvatarStore((state) => state.setFormData);
  const quantities = [1, 2, 3, 4];

  return (
    <div className=" dark:text-white flex flex-col ">
      <h1 className=" text-lg font-medium py-2">Number of Characters</h1>
      <div className="flex space-x-3">
        {quantities.map((quantity) => (
          <button
            type="button"
            key={quantity}
            className={`w-8 h-8 rounded-full text-sm mx-1 text-center ${
              numberOfCharacters === quantity
                ? " border-blue-500 bg-blue-500 border-2 "
                : "border-2 border-zinc-500 dark:border-zinc-100 "
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
