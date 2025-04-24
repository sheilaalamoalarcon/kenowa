import { ApiRes, ErrorHandler } from "../../../Constants/Classes";
import type { APIRoute } from "astro";
import { db, Messages } from "astro:db";

export const GET: APIRoute = async () => {
  try {
    const data = await db.select().from(Messages);
    if (data.length === 0) {
      return ErrorHandler.VALIDATION("No messages found");
    }
    return ApiRes({
      success: true,
      data: data,
    });
  } catch (error) {
    const err = error as Error;
    return ErrorHandler.VALIDATION(err.message);
  }
};
