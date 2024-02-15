"use client";

import React, { useState } from "react";

const SpeechInput = () => {
  // State to keep track of the input's value
  const [speech, setSpeech] = useState("");

  return (
    <div className="">
      <h1 className=" text-lg font-medium py-2">Speech</h1>
      <div className="rounded-lg">
        <textarea
          id="speechInput"
          placeholder="Enter your speech..."
          value={speech}
          onChange={(e) => setSpeech(e.target.value)}
          className="p-3 h-[50dvh] w-full rounded-md text-white bg-zinc-950  placeholder-zinc-400 ring-2 ring-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 place-items-start"
        />
      </div>
    </div>
  );
};

export default SpeechInput;
