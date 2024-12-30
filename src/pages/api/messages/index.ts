import { createResponse, ErrorHandler } from "@/constants/classes";
import type { APIRoute } from "astro";
import { db, Messages } from "astro:db";

export const GET: APIRoute = async () => {
  try {
    const data = await db.select().from(Messages);
    if (data.length === 0) {
      throw ErrorHandler.VALIDATION("No messages found");
    }
    return createResponse({
      success: true,
      data: data,
    });
  } catch (error) {
    const err = error as Error;
    throw ErrorHandler.VALIDATION(err.message);
  }
};
