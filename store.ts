import { create } from "zustand";

export type AvatarFormData = {
  model: string | null;
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
  generatingAvatar: boolean;
  loadingProject: boolean;
  setSelectedAvatar: (avatarUrl: string | null) => void;
  setAvatars: (avatarsList: { url: string }[]) => void;
  setFormData: (name: string, value: string | number | null) => void;
  setGeneratingAvatar: (generatingAvatar: boolean) => void;
  setLoadingProject: (loadingProject: boolean) => void;
}

interface SpeechStore {
  formData: SpeechFormData;
  generatingSpeech: boolean;
  loadingProject: boolean;
  setFormData: (name: string, value: string | number | null) => void;
  speechUrl: string;
  setSpeechUrl: (speechUrl: string) => void;
  setGeneratingSpeech: (generatingSpeech: boolean) => void;
  setLoadingProject: (loadingProject: boolean) => void;
}

export const useAvatarStore = create<AvatarStore>()((set) => ({
  formData: {
    model: null,
    ethnicity: null,
    ageGroup: null,
    hairColor: null,
    gender: null,
    numberOfCharacters: 1,
  },
  avatars: [],
  selectedAvatar: null,
  generatingAvatar: false,
  loadingProject: false,
  setSelectedAvatar: (avatarUrl) => set(() => ({ selectedAvatar: avatarUrl })),
  setAvatars: (avatars) => set(() => ({ avatars })),
  setFormData: (name, value) =>
    set((state) => ({ formData: { ...state.formData, [name]: value } })),
  setGeneratingAvatar: (generatingAvatar) => set(() => ({ generatingAvatar })),
  setLoadingProject: (loadingProject) => set(() => ({ loadingProject })),
}));

export const useSpeechStore = create<SpeechStore>()((set) => ({
  formData: {
    gender: null,
    speed: null,
    speechInput: "",
  },
  generatingSpeech: false,
  loadingProject: false,
  setFormData: (name, value) =>
    set((state) => ({ formData: { ...state.formData, [name]: value } })),
  speechUrl: "",
  setSpeechUrl: (speechUrl) => set(() => ({ speechUrl })),
  setGeneratingSpeech: (generatingSpeech) => set(() => ({ generatingSpeech })),
  setLoadingProject: (loadingProject) => set(() => ({ loadingProject })),
}));

// useAvatarStore.subscribe((state) =>
//   console.log("Avatar Store updated:", state.formData)
// );
// useSpeechStore.subscribe((state) =>
//   console.log("Speech Store updated:", state.generatingSpeech)
// );
