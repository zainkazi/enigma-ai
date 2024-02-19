"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAvatarStore } from "@/store";
import { Card } from "@/components/ui/card";

function CharacterTab() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const avatars = useAvatarStore((state) => state.avatars);

  if (avatars.length === 0) return null;

  return (
    <Card className="grid grid-cols-3 gap-4 p-4">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`m-2 cursor-pointer ${
            selectedIndex === index &&
            "ring-2 ring-blue-500 rounded-lg border-2"
          }`}
        >
          <Image
            alt="avatar"
            priority
            src={avatar.url}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      ))}
    </Card>
  );
}

export default CharacterTab;
