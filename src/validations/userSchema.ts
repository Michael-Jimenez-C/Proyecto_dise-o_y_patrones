import { z } from "zod";

export const userSchema = z.object({
  user: z.string().email({ message: "Por favor ingrese un correo válido" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener mínimo 8 letras" }),
});
