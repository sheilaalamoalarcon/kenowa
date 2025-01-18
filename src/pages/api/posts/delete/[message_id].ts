import { db, Saved, eq } from "astro:db";
import type { APIRoute } from "astro";
import { ApiRes, ErrorHandler } from "@/constants/classes";

//To delete the saved post the user must be the creator of that saved post
export const DELETE: APIRoute = async ({ params, locals }) => {
  try {
    const { message_id } = params;
    const { userId } = locals;

    if (!message_id) {
      return ErrorHandler.VALIDATION("Message need a text");
    }

    const deleteValue = await db
      .delete(Saved)
      .where(eq(Saved.message_id, message_id));

    if (deleteValue) {
      return ApiRes({
        success: true,
        data: "Post deleted correctly",
      });
    }
    return ErrorHandler.VALIDATION("Could not create post");
  } catch (error) {
    const err = error as Error;
    return ErrorHandler.VALIDATION(err.message);
  }
};
