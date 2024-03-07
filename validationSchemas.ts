import { z } from "zod";

export const ethnicities = [
  "Asian",
  "Black/African descent",
  "Hispanic/Latino",
  "White/Caucasian",
  "Middle Eastern",
  "Native American",
  "Pacific Islander",
] as const;

export const ageGroups = [
  "0 - 12",
  "13 - 17",
  "18 - 24",
  "25 - 34",
  "35 - 44",
  "45 - 54",
  "55 - 64",
  "65+",
] as const;

export const hairColors = [
  "Black",
  "Blue",
  "Red",
  "Yellow",
  "Pink",
  "Gray",
] as const;

export const genders = ["Male", "Female"] as const;

export const AvatarSchema = z.object({
  ethnicity: z.enum(ethnicities),
  ageGroup: z.enum(ageGroups),
  hairColor: z.enum(hairColors),
  gender: z.enum(genders),
  numberOfCharacters: z.number().int().min(1).max(4),
});

export const SpeechSchema = z.object({
  gender: z.enum(["Male", "Female"]),
  speed: z.number().multipleOf(0.25).min(1).max(2),
  speechInput: z.string().min(1).max(4000),
});
