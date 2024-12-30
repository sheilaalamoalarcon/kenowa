import { db, Saved } from "astro:db";
import type { APIRoute } from "astro";
import { createResponse, ErrorHandler } from "@/constants/classes";

export const GET: APIRoute = async () => {
  try {
    const result = await db.select().from(Saved);

    if (!result) {
      throw ErrorHandler.VALIDATION("Could not get saved posts");
    }

    return createResponse({
      success: true,
      data: result,
    });
  } catch (error) {
    const err = error as Error;
    throw ErrorHandler.VALIDATION(err.message);
  }
};
