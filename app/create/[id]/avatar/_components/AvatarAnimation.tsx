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
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default AvatarAnimation;
