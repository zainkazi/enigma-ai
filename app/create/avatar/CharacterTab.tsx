"use client";

import React, { useState } from "react";
import Image from "next/image";
import vision from "@/public/vision.jpg";

function CharacterTab() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const images = [vision, vision, vision, vision];

  return (
    <section className="bg-zinc-800 rounded-lg p-4">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`m-2 cursor-pointer ${
              selectedIndex === index ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <Image
              alt="image"
              priority
              src={image}
              className="rounded-lg border-2 border-zinc-800 "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CharacterTab;
