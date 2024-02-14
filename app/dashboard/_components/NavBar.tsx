"use client";

import React, { useState } from "react";

function NavBar() {
  const [ActiveNavButton, setActiveNavButton] = useState("home");
  return (
    <section className="flex  justify-center bg-zinc-900 min-h-screen w-[50%] px-4 py-10">
      <div className="w-full">
        <div className="space-y-4 w-[100%]">
          <h1 className="text-center text-4xl">ENIGMA AI</h1>
          <button className="w-[100%] py-2 bg-blue-600 text-white rounded-lg">
            Create
          </button>
        </div>
        <nav>
          <div
            className={
              ActiveNavButton == ActiveNavButton
                ? "bg-zinc-400 w-[100%] rounded-lg"
                : "bg-zinc-800 w-[100%] rounded-lg"
            }
          >
            Home
          </div>
          <div>Projects</div>
        </nav>
      </div>
    </section>
  );
}

export default NavBar;
