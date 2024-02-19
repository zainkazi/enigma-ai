"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import vision from "@/public/vision.jpg";
import { useAvatarStore } from "@/store";

function CharacterTab() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const avatars = useAvatarStore((state) => state.avatars);
  console.log(avatars);

  if (avatars.length == 0) return null;

  return (
    <>
      {avatars.map((avatar, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`m-2 cursor-pointer ${
            selectedIndex === index ? "ring-2 ring-blue-500" : ""
          }`}
        >
          <Image
            alt="avatar"
            priority
            src={avatar.url}
            width={500}
            height={500}
            className="rounded-lg border-2 border-zinc-800 "
          />
        </div>
      ))}
    </>
  );
}

export default CharacterTab;
