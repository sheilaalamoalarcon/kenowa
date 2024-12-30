import { db, Saved, eq } from "astro:db";
import type { APIRoute } from "astro";
import { createResponse, ErrorHandler } from "@/constants/classes";

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { message_id } = params;

    if (!message_id) {
      throw ErrorHandler.VALIDATION("Message need a text");
    }

    const deleteValue = await db
      .delete(Saved)
      .where(eq(Saved.message_id, message_id));

    if (deleteValue) {
      return createResponse({
        success: true,
        data: "Post deleted correctly",
      });
    }
    throw ErrorHandler.VALIDATION("Could not create post");
  } catch (error) {
    const err = error as Error;
    throw ErrorHandler.VALIDATION(err.message);
  }
};
