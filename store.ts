import { StaticImageData } from "next/image";
import { create } from "zustand";

interface AvatarStore {
  formData: {
    ethnicity:
      | "Asian"
      | "Black/African descent"
      | "Hispanic/Latino"
      | "White/Caucasian"
      | "Middle Eastern"
      | "Native American"
      | "Pacific Islander"
      | null;
    ageGroup:
      | "0 - 12"
      | "13 - 17"
      | "18 - 24"
      | "25 - 34"
      | "35 - 44"
      | "45 - 54"
      | "55 - 64"
      | "65+"
      | null;
    hairColor: "Black" | "Blue" | "Red" | "Yellow" | "Pink" | "Gray" | null;
    gender: "Male" | "Female" | null;
    numberOfCharacters: 1 | 2 | 3 | 4;
  };
  avatars: { url: string }[];
  setAvatars: (avatarsList: { url: string }[]) => void;
  setFormData: (name: string, value: string | number) => void;
  resetForm: () => void;
}

export const useAvatarStore = create<AvatarStore>()((set) => ({
  formData: {
    ethnicity: null,
    ageGroup: null,
    hairColor: null,
    gender: null,
    numberOfCharacters: 1,
  },
  avatars: [],
  setAvatars: (avatars) => set(() => ({ avatars })),
  setFormData: (name, value) =>
    set((state) => ({ formData: { ...state.formData, [name]: value } })),
  resetForm: () =>
    set(() => ({
      formData: {
        ethnicity: null,
        ageGroup: null,
        hairColor: null,
        gender: null,
        numberOfCharacters: 1,
      },
    })),
}));

useAvatarStore.subscribe((state) =>
  console.log("State updated:", state.formData)
);
