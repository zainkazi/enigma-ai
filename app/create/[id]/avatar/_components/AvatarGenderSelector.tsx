import { useAvatarStore } from "@/store";
import React from "react";

const AvatarGenderSelector = () => {
  const gender = useAvatarStore((state) => state.formData.gender);
  const setGender = useAvatarStore((state) => state.setFormData);

  return (
    <div>
      <h1 className=" text-lg font-medium py-2">Gender</h1>
      <div className="flex dark:text-white">
        <button
          type="button"
          className={`px-4 py-2 rounded-full w-24 ${
            gender === "Male"
              ? "bg-blue-500 "
              : "border-2 border-zinc-500 dark:border-zinc-100"
          } mx-1`}
          onClick={() => setGender("gender", "Male")}
        >
          Male
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-full w-24 ${
            gender === "Female"
              ? "bg-pink-500"
              : "border-2 border-zinc-500 dark:border-zinc-100"
          } mx-1`}
          onClick={() => setGender("gender", "Female")}
        >
          Female
        </button>
      </div>
    </div>
  );
};

export default AvatarGenderSelector;
