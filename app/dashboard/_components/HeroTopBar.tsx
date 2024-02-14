"use client";

import React, { useState } from "react";

function HeroTopBar() {
  const [userTokens, setUserTokens] = useState(3000);
  const [username, setUsername] = useState("Nicholas Turner");
  const [userProfession, setUserProfession] = useState("Influencer");

  return (
    <section className="flex justify-end w-full ">
      <div className="flex space-x-4">
        <div className="flex items-center justify-center bg-zinc-800 py-2 px-4 space-x-2 rounded-full">
          <div className="w-8 h-8 rounded-full bg-yellow-500" />
          <h1>{userTokens}</h1>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-white" />
          <div>
            <h1 className="text-white">{username}</h1>
            <h1 className="text-zinc-400">{userProfession}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTopBar;
