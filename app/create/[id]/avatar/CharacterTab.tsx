"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAvatarStore } from "@/store";
import { Card } from "@/components/ui/card";

function CharacterTab() {
  const selectedAvatar = useAvatarStore((state) => state.selectedAvatar);
  const setSelectedAvatar = useAvatarStore((state) => state.setSelectedAvatar);
  const avatars = useAvatarStore((state) => state.avatars);
  const [disableSelection, setDisableSelection] = useState(false);

  useEffect(() => {
    if (avatars.length === 1) {
      setSelectedAvatar(avatars[0].url);
      setDisableSelection(true);
    }
  }, [avatars]);

  if (avatars.length === 0)
    return (
      <Card className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl opacity-40">
          Click 'Generate' to create your character
        </h1>
      </Card>
    );

  return (
    <Card className=" p-4 min-h-screen">
      {avatars.length > 1 && (
        <h1 className="text-center my-4 text-2xl">Select your character</h1>
      )}
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {avatars.map((avatar) => (
          <div
            key={avatar.url}
            onClick={() => setSelectedAvatar(avatar.url)}
            className={`m-2 cursor-pointer rounded-lg hover:opacity-70 transition-all ${
              selectedAvatar === avatar.url &&
              !disableSelection &&
              "ring-4 ring-primary"
            }`}
          >
            <Image
              alt="avatar"
              priority
              src={avatar.url}
              width={500}
              height={500}
              className="rounded-lg w-full"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CharacterTab;
