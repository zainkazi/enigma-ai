import { z } from "zod";

export const AvatarSchema = z.object({
  ethnicity: z
    .enum([
      "Asian",
      "Black/African descent",
      "Hispanic/Latino",
      "White/Caucasian",
      "Middle Eastern",
      "Native American",
      "Pacific Islander",
    ])
    .nullable(),
  ageGroup: z
    .enum([
      "0 - 12",
      "13 - 17",
      "18 - 24",
      "25 - 34",
      "35 - 44",
      "45 - 54",
      "55 - 64",
      "65+",
    ])
    .nullable(),
  hairColor: z
    .enum(["Black", "Blue", "Red", "Yellow", "Pink", "Gray"])
    .nullable(),
  gender: z.enum(["Male", "Female"]).nullable(),
  numberOfCharacters: z.number().int().min(1).max(4),
});

export const SpeehSchema = z.object({
  gender: z.enum(["Male", "Female"]).nullable(),
  speed: z.number().multipleOf(0.25).min(1).max(2),
  speechInput: z.string().min(1).max(4000),
});
