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

const AgeGroupDropDownMenu = () => {
  const setAgeGroup = useAvatarStore((state) => state.setFormData);

  const ageGroups = [
    "0 - 12",
    "13 - 17",
    "18 - 24",
    "25 - 34",
    "35 - 44",
    "45 - 54",
    "55 - 64",
    "65+",
  ];

  return (
    <div>
      <h1 className="text-lg font-medium py-2">Age Group</h1>
      <Select onValueChange={(value) => setAgeGroup("ageGroup", value)}>
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
