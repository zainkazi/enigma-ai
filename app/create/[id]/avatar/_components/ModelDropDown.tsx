import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAvatarStore } from "@/store";
import { models } from "@/validationSchemas";

const ModelDropdown = () => {
  const selectedModel = useAvatarStore((state) => state.formData.model);
  const setModel = useAvatarStore((state) => state.setFormData);

  return (
    <div>
      <h1 className="text-lg font-medium py-2">Model</h1>
      <Select
        value={selectedModel || ""}
        onValueChange={(value) => setModel("model", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select model" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Models</SelectLabel>
            {models.map((model) => (
              <SelectItem key={model} value={model}>
                {model}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ModelDropdown;
