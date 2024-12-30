import { createResponse, ErrorHandler } from "@/constants/classes";
import type { APIRoute } from "astro";
import { db, eq, Messages } from "astro:db";

export const GET: APIRoute = async ({ params }) => {
  try {
    const { message_id } = params;

    if (!message_id) {
      throw ErrorHandler.VALIDATION("Could not get messages");
    }
    const data = await db
      .select()
      .from(Messages)
      .where(eq(Messages.id, message_id));

    return createResponse({
      success: true,
      data: data,
    });
  } catch (error) {
    const err = error as Error;
    throw ErrorHandler.VALIDATION(err.message);
  }
};
