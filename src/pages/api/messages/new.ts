import { db, Messages, NOW } from "astro:db";
import type { APIRoute } from "astro";
import { v4 } from "uuid";
import { createResponse, ErrorHandler } from "@/constants/classes";

interface MessagePayload {
  propietary: string;
  text: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as MessagePayload;
    const { propietary, text } = body;

    if (!text) {
      throw ErrorHandler.VALIDATION("Text content is required");
    }

    const message = {
      id: v4(),
      propietary: propietary.trim(),
      text: text.trim(),
      created_at: NOW,
    };

    const insertValue = await db.insert(Messages).values(message);

    if (insertValue.rowsAffected === 0) {
      throw ErrorHandler.VALIDATION("Failed to create message");
    }
    return createResponse({
      success: true,
      data: "Message created successfully",
    });
  } catch (error) {
    const err = error as Error;
    throw ErrorHandler.VALIDATION(err.message);
  }
};
