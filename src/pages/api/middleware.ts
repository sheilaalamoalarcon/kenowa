import type { APIContext } from "astro";
import { validateSession } from "@/middleware/auth";

export async function onRequest(
  context: APIContext,
  next: () => Promise<Response>
) {
  // Rutas públicas que no requieren autenticación
  const publicRoutes = [
    "/api/auth/login",
    "/api/auth/callback",
    "/api/messages",
    "/api/messages/index",
  ];

  if (publicRoutes.includes(new URL(context.request.url).pathname)) {
    return next();
  }

  // Validar sesión para rutas protegidas
  const auth = await validateSession(context.request);
  if (!auth.success) {
    return auth.response;
  }

  // Añadir información de usuario al contexto
  context.locals = {
    userId: auth.userId,
  };

  return next();
}
