import { z } from "zod";

export const MessageSchema = z.object({
  id: z.string().uuid(),
  propietary: z.string(), // ✅ Validación específica
  text: z.string().min(1).max(280), // ✅ Límites claros
  image: z.string().url().optional(), // ✅ Campos opcionales
  createdAt: z.date().default(() => new Date()), // ✅ Valores por defecto
});

// Tipo inferido del schema
export type Message = z.infer<typeof MessageSchema>;

// Ejemplo de uso en endpoint Validación con Zod
//const result = MessageSchema.safeParse(body);
