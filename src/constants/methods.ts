import { API_ROUTES } from "./enums";

export const arrayBufferToBase64 = (buffer: ArrayBufferLike) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};
export async function LogOut(email: string, token: string) {
  try {
    const result = await fetch(API_ROUTES.LOGOUT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email }),
    });

    if (result.ok) {
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("isFetching");
      return result.statusText;
    } else {
      return result.statusText;
    }
  } catch (error) {
    const err = error as Error;
    return err;
  }
}

export async function Get<T>(token: string, url?: string) {
  try {
    const result = await fetch(url ?? "", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
    });
    const data: T = await result.json();
    if (result.ok) {
      return data;
    } else {
      return "could not get: " + result.status + result.statusText;
    }
  } catch (error) {
    const err = error as Error;
    return err.message;
  }
}
export async function Post(token: string, body: BodyInit, url?: string) {
  try {
    const result = await fetch(url ?? "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body,
      mode: "cors",
    });

    if (result.ok) {
      return "created correctly";
    } else {
      return "could not create: " + result.status;
    }
  } catch (error) {
    const err = error as Error;
    return err.message;
  }
}
export async function Put(token: string, body: BodyInit, url?: string) {
  try {
    const result = await fetch(url ?? "", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body,
      mode: "cors",
    });

    if (result.ok) {
      return "updated correctly";
    } else {
      return result.status;
    }
  } catch (error) {
    const err = error as Error;
    return err.message;
  }
}
export async function Delete(url?: string, token?: string) {
  try {
    const response = await fetch(url ?? "", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      mode: "cors",
    });

    return response.status;
  } catch (error) {
    const err = error as Error;
    return err.message;
  }
}
export function parseDate(value: string) {
  const now = new Date();
  const date = new Date(value);
  const diffInMs = now.getTime() - date.getTime();

  const msToMinutes = 60 * 1000;
  const msToHour = msToMinutes * 60;
  const msToDays = msToHour * 24;

  const days = Math.floor(diffInMs / msToDays);
  const hours = Math.floor(diffInMs % msToDays) / msToHour;
  const minutes = Math.floor(diffInMs % msToHour) / msToMinutes;

  const daysParsed = days.toFixed(0);
  const hoursParsed = hours.toFixed(0);
  const minutesParsed = minutes.toFixed(0);

  if (days === 0 && hoursParsed !== "0" && minutesParsed !== "0") {
    return `${hoursParsed} horas, ${minutesParsed} minutos`;
  } else if (hoursParsed === "0" && minutesParsed != "0") {
    return `${minutesParsed} minutos`;
  } else if (
    minutesParsed === "0" &&
    hoursParsed === "0" &&
    daysParsed === "0"
  ) {
    return `Just Uploaded`;
  }
  return `${daysParsed} días, ${hoursParsed} horas, ${minutesParsed} minutos`;
}
