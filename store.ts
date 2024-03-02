import { z } from "zod";
import { create } from "zustand";
import { AvatarSchema, SpeechSchema } from "./validationSchemas";

type AvatarFormData = z.infer<typeof AvatarSchema>;

type SpeechFormData = z.infer<typeof SpeechSchema>;

interface AvatarStore {
  formData: AvatarFormData;
  avatars: { url: string }[];
  selectedAvatar: string | null;
  setSelectedAvatar: (avatarUrl: string) => void;
  setAvatars: (avatarsList: { url: string }[]) => void;
  setFormData: (name: string, value: string | number | null) => void;
  resetForm: () => void;
}

interface SpeechStore {
  formData: SpeechFormData;
  setFormData: (name: string, value: string | number) => void;
  speechUrl: string;
  setSpeechUrl: (speechUrl: string) => void;
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
  selectedAvatar: null,
  setSelectedAvatar: (avatarUrl) => set(() => ({ selectedAvatar: avatarUrl })),
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

export const useSpeechStore = create<SpeechStore>()((set) => ({
  formData: {
    gender: null,
    speed: 1,
    speechInput: "",
  },
  setFormData: (name, value) =>
    set((state) => ({ formData: { ...state.formData, [name]: value } })),
  speechUrl: "",
  setSpeechUrl: (speechUrl) => set(() => ({ speechUrl })),
}));

useAvatarStore.subscribe((state) => console.log("State updated:", state));
