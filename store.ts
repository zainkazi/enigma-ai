import { z } from "zod";
import { create } from "zustand";
import { AvatarSchema, SpeechSchema } from "./validationSchemas";

export type AvatarFormData = {
  ethnicity: string | null;
  ageGroup: string | null;
  hairColor: string | null;
  gender: string | null;
  numberOfCharacters: number;
};

export type SpeechFormData = {
  gender: string | null;
  speed: number | null;
  speechInput: string;
};

interface AvatarStore {
  formData: AvatarFormData;
  avatars: { url: string }[];
  selectedAvatar: string | null;
  setSelectedAvatar: (avatarUrl: string) => void;
  setAvatars: (avatarsList: { url: string }[]) => void;
  setFormData: (name: string, value: string | number | null) => void;
}

interface SpeechStore {
  formData: SpeechFormData;
  setFormData: (name: string, value: string | number | null) => void;
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

useAvatarStore.subscribe((state) =>
  console.log("Avatar Store updated:", state.formData)
);
useSpeechStore.subscribe((state) =>
  console.log("Speech Store updated:", state.formData)
);
