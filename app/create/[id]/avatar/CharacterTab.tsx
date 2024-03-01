"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAvatarStore } from "@/store";
import { Card } from "@/components/ui/card";

function CharacterTab() {
  const selectedAvatar = useAvatarStore((state) => state.selectedAvatar);
  const setSelectedAvatar = useAvatarStore((state) => state.setSelectedAvatar);
  const avatars = useAvatarStore((state) => state.avatars);

  if (avatars.length === 0) return null;

  return (
    <Card className="grid grid-cols-3 grid-rows-2 gap-4 p-4 min-h-screen">
      {avatars.map((avatar) => (
        <div
          key={avatar.url}
          onClick={() => setSelectedAvatar(avatar.url)}
          className={`m-2 cursor-pointer ${
            selectedAvatar === avatar.url &&
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
