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
import { ageGroups } from "@/validationSchemas";

const AgeGroupDropDownMenu = () => {
  const selectedAgeGroup = useAvatarStore((state) => state.formData.ageGroup);
  const setAgeGroup = useAvatarStore((state) => state.setFormData);

  return (
    <div>
      <h1 className="text-lg font-medium py-2">Age Group</h1>
      <Select
        value={selectedAgeGroup || ""}
        onValueChange={(value) => setAgeGroup("ageGroup", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select age group" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Age Groups</SelectLabel>
            {ageGroups.map((ageGroup) => (
              <SelectItem key={ageGroup} value={ageGroup}>
                {ageGroup}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AgeGroupDropDownMenu;
