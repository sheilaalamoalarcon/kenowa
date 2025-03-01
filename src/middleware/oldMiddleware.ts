/*

import type { APIContext } from "astro";
import { getSession } from "auth-astro/server";

async function validateSession(context: Request) {
  try {
    const session = await getSession(context);

    if (!session) {
      return {
        success: false,
        response: new Response(
          JSON.stringify({
            error: "No autorizado",
            code: "UNAUTHORIZED",
            details: "Se requiere inicio de sesión",
          }),
          {
            status: 401,
            headers: {
              "Content-Type": "application/json",
              // Prevenir cache de respuestas no autorizadas
              "Cache-Control": "no-store",
            },
          }
        ),
      };
    }

    return {
      success: true,
      userId: session?.user?.id,
      session,
    };
  } catch (error) {
    console.error("🔥 Error en validateSession:", error);
    return {
      success: false,
      response: new Response(
        JSON.stringify({
          error: "Error de autenticación",
          code: "AUTH_ERROR",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      ),
    };
  }
}

export async function onRequest(
  context: APIContext,
  next: () => Promise<Response>
) {
  const path = new URL(context.request.url).pathname;

  // Rutas públicas que no requieren autenticación
  const publicRoutes = [
    "/api/auth/login",
    "/api/auth/callback",
    "/api/messages",
    "/api/messages/index",
  ];
  const isPublicRoute = publicRoutes.includes(path);

  if (!isPublicRoute) {
    // Validar sesión para rutas protegidas
    const auth = await validateSession(context.request);
    if (!auth.success) {
      return new Response(
        JSON.stringify({
          error: "No autorizado",
          code: "UNAUTHORIZED",
          details: "Se requiere inicio de sesión",
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      // Añadir información de usuario al contexto
      context.locals.userId = auth.userId;

      return next();
    }
  } else {
    return next();
  }
}

*/
