import { ApiRes, ErrorHandler } from "@/constants/classes";
import type { APIRoute } from "astro";
import { db, eq, Messages } from "astro:db";

export const GET: APIRoute = async ({ params }) => {
  try {
    const { user_id } = params;

    if (!user_id) {
      return ErrorHandler.VALIDATION("User id is required");
    }

    const messages = await db
      .select()
      .from(Messages)
      .where(eq(Messages.propietary, user_id));

    if (!messages) {
      ErrorHandler.VALIDATION("No messages found");
    }
    return ApiRes({
      success: true,
      data: messages,
    });
  } catch (error) {
    const err = error as Error;
    throw ErrorHandler.VALIDATION(err.message);
  }
};
