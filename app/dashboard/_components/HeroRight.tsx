"use client";

import { useState } from "react";
import vision from "@/public/vision.jpg";
import Image from "next/image";

function HeroRight() {
  const [images, setImages] = useState([
    vision,
    vision,
    vision,
    vision,
    vision,
    vision,
    vision,
  ]);
  return (
    <section>
      <div className="">
        <div className="space-y-2">
          <div className="w-full h-[1px] bg-zinc-600" />
          <h1 className="text-lg py-6 font-semibold">Recent</h1>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-8">
            {images.map((image, i) => (
              <div key={i}>
                <Image
                  src={image}
                  alt="image"
                  priority
                  className="rounded-lg border-2 border-zinc-800"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroRight;
