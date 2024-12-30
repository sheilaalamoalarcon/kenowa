import { getSession } from "auth-astro/server";

export async function validateSession(context: Request) {
  const session = await getSession(context);

  if (!session?.user) {
    return {
      success: false,
      response: new Response(
        JSON.stringify({
          error: "No autorizado",
          code: "UNAUTHORIZED",
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      ),
    };
  }

  return {
    success: true,
    session,
    userId: session.user.id,
  };
}
