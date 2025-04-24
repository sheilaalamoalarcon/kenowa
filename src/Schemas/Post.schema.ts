import { z } from "astro:content";

export const newPostSchema = z.object({
  id: z.string().min(1, "Text is too short").uuid(),
  proprietary: z.string().min(1, "Text is too short").uuid(),
  proprietary_name: z.string().min(1, "Text is too short").max(100).trim(),
  title: z.string().min(1, "Text is too short").max(50).trim(),
  subtitle: z.string().min(1, "Text is too short").max(50).trim(),
  html_content: z
    .string()
    .min(1, "Text is too short")
    .max(50000)
    .refine((html) => !/<script.*?>.*?<\/script>/i.test(html)),
});
export const newPostFormSchema = z.object({
  proprietary: z.string().min(1, "Text is too short").uuid(),
  proprietary_name: z.string().min(1, "Text is too short").max(100).trim(),
  title: z.string().min(1, "Text is too short").max(50).trim(),
  subtitle: z.string().min(1, "Text is too short").max(50).trim(),
  html_content: z
    .string()
    .min(1, "Text is too short")
    .max(50000)
    .refine((html) => !/<script.*?>.*?<\/script>/i.test(html)),
});

export const MessageSchema = z.object({
  id: z.string().uuid(),
  proprietary: z.string(), // ✅ Validación específica
  text: z.string().min(1).max(280), // ✅ Límites claros
  image: z.string().url().optional(), // ✅ Campos opcionales
  createdAt: z.date().default(() => new Date()), // ✅ Valores por defecto
});

export type Message = z.infer<typeof MessageSchema>;