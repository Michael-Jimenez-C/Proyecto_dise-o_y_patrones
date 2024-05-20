import { z } from "zod";

export const userRegisterSchema = z
  .object({
    user: z.string().email({ message: "Por favor ingrese un correo válido" }),
    password: z
      .string()
      .min(8, { message: "La contraseña debe tener mínimo 8 letras" }),
    confirmPassword: z
      .string()
      .min(8, { message: "La contraseña debe tener mínimo 8 letras" }),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "La contraseña debe coincidir",
    path: ["confirmPassword"],
  });
