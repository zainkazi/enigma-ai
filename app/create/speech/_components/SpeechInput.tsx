"use client";

import React, { useState } from "react";

const SpeechInput = () => {
  // State to keep track of the input's value
  const [speech, setSpeech] = useState("");

  // Function to update the state when the input changes
  const handleInputChange = (event) => {
    setSpeech(event.target.value);
  };

  return (
    <div className="">
      <h1 className=" text-lg font-medium py-2">Speech</h1>
      <div className=" rounded-lg w-full ">
        <input
          id="speechInput"
          type="text"
          placeholder="Enter your speech..."
          value={speech}
          onChange={handleInputChange}
          className="p-2 h-96 w-full rounded-md text-white bg-zinc-950  placeholder-zinc-400 ring-2 ring-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 place-items-start"
        />
      </div>
    </div>
  );
};

export default SpeechInput;
