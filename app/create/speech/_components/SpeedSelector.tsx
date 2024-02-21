import { useSpeechStore } from "@/store";

const SpeedSelector = () => {
  const speeds = [1, 1.25, 1.5, 2];
  const speed = useSpeechStore((state) => state.formData.speed);
  const setSpeed = useSpeechStore((state) => state.setFormData);

  return (
    <div>
      <h1 className=" text-lg font-medium py-2">Speed</h1>
      <div className="flex items-center gap-2 rounded-lg">
        {speeds.map((currentSpeed) => (
          <button
            type="button"
            key={currentSpeed}
            onClick={() => setSpeed("speed", currentSpeed)}
            className={`w-20  py-2  rounded-full text-white ${
              speed === currentSpeed
                ? "bg-indigo-600 ring-2 ring-indigo-500"
                : "border-2 border-zinc-100"
            }`}
          >
            {`${currentSpeed}x`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeedSelector;
