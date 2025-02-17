import { db, Saved, NOW, eq } from "astro:db";
import type { APIRoute } from "astro";
import { v4 } from "uuid";
import { ApiRes, ErrorHandler } from "@/constants/classes";

interface SavedPayload {
  user_id: string;
  message_id: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as SavedPayload;
    const { user_id, message_id } = body;
    const newId = v4();

    if (!message_id) {
      return ErrorHandler.VALIDATION("Message id and user id are required");
    }

    const isAlreadySaved = await db
      .select()
      .from(Saved)
      .where(eq(Saved.message_id, message_id)); // await db.select(Messages).where(eq(message_id, otrovalue))

    if (isAlreadySaved.length > 0) {
      return ErrorHandler.VALIDATION("Already saved");
    }
    const message = {
      id: newId,
      user_id: user_id.toString().trim(), //puede no ser necesario ya que del propio mensaje id  se puede obtener el mensaje donde ya está
      message_id: message_id.toString().trim(),
      created_at: NOW,
    };
    const insertValue = await db.insert(Saved).values(message);

    if (insertValue.rowsAffected === 0) {
      return ErrorHandler.VALIDATION("Could not create post");
    }
    return ApiRes({ success: true, data: "Post created correctly" });
  } catch (error) {
    const err = error as Error;
    return ErrorHandler.VALIDATION(err.message);
  }
};
