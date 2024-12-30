import type { AlertType } from "./enums";

export interface CUser {
  _id?: string;
  email: string;
  _password: string;
  image?: string;
  username: string;

  messages?: string[]; //id de cada mensaje
}

export interface CMessage {
  id: string;
  text: string;
  propietary: string; //propietary id
  created_at: string;

  image?: string;
}
export interface IAlert {
  type: AlertType;
  message: string;
}
export interface Saved {
  id: string;
  user_id: string;
  message_id: string;
  created_at: Date;
}
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
}

export function createResponse<T>(options: {
  success: boolean;
  data?: T;
  status?: number;
}) {
  return new Response(
    JSON.stringify({
      success: options.success,
      data: options.data,
    }),
    {
      status: options.status || (options.success ? 200 : 400),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number = 500
  ) {
    super(message);
    this.name = "AppError";
  }
}

export const ErrorHandler = {
  AUTH: (message = "No autorizado") => new AppError("AUTH_ERROR", message, 401),
  VALIDATION: (message: string) =>
    new AppError("VALIDATION_ERROR", message, 400),
  RATE_LIMIT: () => new AppError("RATE_LIMIT", "Demasiadas peticiones", 429),
};
