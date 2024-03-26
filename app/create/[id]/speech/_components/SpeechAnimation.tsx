import Lottie from "react-lottie";
import speechAnimation from "@/app/animations/speech-generation.json";

const SpeechAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: speechAnimation,
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

export default SpeechAnimation;
