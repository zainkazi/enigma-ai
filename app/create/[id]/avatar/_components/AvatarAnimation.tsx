"use client";

import Lottie from "react-lottie";
import avatarAnimation from "@/app/animations/avatar-generation.json";

const AvatarAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: avatarAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="text-center opacity-70">
      <h1 className="text-2xl">Generating your character...</h1>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default AvatarAnimation;
