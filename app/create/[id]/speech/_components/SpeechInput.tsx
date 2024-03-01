import { Textarea } from "@/components/ui/textarea";
import { useSpeechStore } from "@/store";

const SpeechInput = () => {
  const speechInput = useSpeechStore((state) => state.formData.speechInput);
  const setSpeechInput = useSpeechStore((state) => state.setFormData);

  return (
    <div>
      <h1 className="text-lg font-medium py-2">Speech</h1>
      <Textarea
        placeholder="Enter your speech..."
        onChange={(e) => setSpeechInput("speechInput", e.target.value)}
        className="h-[40dvh]"
      />
    </div>
  );
};

export default SpeechInput;
