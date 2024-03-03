"use client";

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
import { ethnicities } from "@/validationSchemas";

const EthnicityDropDownMenu = () => {
  const selectedEthnicity = useAvatarStore((state) => state.formData.ethnicity);
  const setEthnicity = useAvatarStore((state) => state.setFormData);

  return (
    <div>
      <h1 className="text-lg font-medium py-2">Ethnicty</h1>
      <Select
        value={selectedEthnicity || ""}
        onValueChange={(value) => setEthnicity("ethnicity", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select ethnicity" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ethnicities</SelectLabel>
            {ethnicities.map((ethnicity) => (
              <SelectItem key={ethnicity} value={ethnicity}>
                {ethnicity}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EthnicityDropDownMenu;
