import { db, Messages, NOW } from "astro:db";
import type { APIRoute } from "astro";
import { v4 } from "uuid";
import { ApiRes, ErrorHandler } from "@/constants/classes";

interface MessagePayload {
  propietary: string;
  propietary_name: string;
  text: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as MessagePayload;
    const { propietary, text, propietary_name } = body;

    if (!text) {
      return ErrorHandler.VALIDATION("Text content is required");
    }

    const message = {
      id: v4(),
      propietary: propietary.trim(),
      propietary_name: propietary_name.trim(),
      text: text.trim(),
      created_at: NOW,
    };

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
