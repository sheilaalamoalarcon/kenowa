import { ApiRes, ErrorHandler } from "@/constants/classes";
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
/*
! [user_id].ts
import { ApiRes, ErrorHandler } from "@/constants/classes";
import type { APIRoute } from "astro";
import { db, eq, Messages } from "astro:db";

export const GET: APIRoute = async ({ params, locals }) => {
  console.log("user_id", locals);

  try {
    const { user_id } = params;
    console.log("user_id", user_id);
    if (!user_id) {
      console.log("user_id", user_id);
      return ErrorHandler.VALIDATION("User id is required");
    }

    const messages = await db
      .select()
      .from(Messages)
      .where(eq(Messages.proprietary, user_id));

    if (!messages) {
      ErrorHandler.VALIDATION("No messages found");
    }
    return ApiRes({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.log("error", error);
    const err = error as Error;
    throw ErrorHandler.VALIDATION(err.message);
  }
};

*/
