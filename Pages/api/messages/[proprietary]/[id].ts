import { db, eq, and, Messages } from "astro:db";
import type { APIRoute } from "astro";
import { ApiRes, ErrorHandler } from "../../../../Constants/Classes";

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { id, proprietary } = params;

    if (!proprietary || !id) {
      return ErrorHandler.VALIDATION("Message need a text");
    } else {
      const deleteAction = await db
        .delete(Messages)
        .where(and(eq(Messages.id, id), eq(Messages.proprietary, proprietary)));

      if (deleteAction.rowsAffected === 0) {
        return ErrorHandler.VALIDATION("Could not delete post");
      }

      return ApiRes({
        success: true,
        data: "Post deleted correctly",
      });
    }
  } catch (error) {
    const err = error as Error;
    return ErrorHandler.VALIDATION(err.message);
  }
};
