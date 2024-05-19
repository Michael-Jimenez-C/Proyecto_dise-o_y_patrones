import { z } from "zod";

export const userScherma = z.object({
  user: z
    .string()
    .min(8, {
      message: "El nombre debe ser de mínimo 8 letras.",
    })
    .max(50, {
      message: "El nombre debe contener máximo 50 letras",
    }),
  password: z.string(),
});
