"use client";

import Lottie from "react-lottie";
import videoAnimation from "@/app/animations/video-generation.json";

const VideoAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: videoAnimation,
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

export default VideoAnimation;
