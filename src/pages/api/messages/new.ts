import { db, Messages, NOW } from "astro:db";
import type { APIRoute } from "astro";
import { v4 } from "uuid";
import { ApiRes, ErrorHandler } from "@/Constants/Classes";
import { newPostSchema } from "@/Schemas/Post.schema";

interface MessagePayload {
  proprietary: string;
  proprietary_name: string;
  title: string;
  subtitle: string;
  html_content: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as MessagePayload;
    const { proprietary, title, subtitle, proprietary_name, html_content } =
      body;

    const message = {
      id: v4(),
      proprietary: proprietary.trim(),
      proprietary_name: proprietary_name.trim(),
      title: title.trim(),
      subtitle: subtitle.trim(),
      html_content: html_content,
      created_at: NOW,
    };

    const validation = newPostSchema.safeParse(message);

    if (!validation.success) {
      const errorMessage = validation.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return ErrorHandler.VALIDATION(errorMessage);
    }

    const insertValue = await db.insert(Messages).values(message);

    if (insertValue.rowsAffected === 0) {
      return ErrorHandler.VALIDATION("Failed to create message");
    }
    return ApiRes({
      success: true,
      data: "Message created successfully",
    });
  } catch (error) {
    const err = error as Error;
    return ErrorHandler.VALIDATION(err.message);
  }
};
