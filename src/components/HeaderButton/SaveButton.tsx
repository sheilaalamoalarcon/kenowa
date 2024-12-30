import { AlertType } from "@/constants/enums";
import { SaveIcon } from "../Icons";
import { useState } from "preact/hooks";
import type { IAlert } from "@/constants/classes";

interface Props {
  propietary: string;
  message_id: string;
}
export function SaveButton({ propietary, message_id }: Props) {
  const [res, setRes] = useState<IAlert | null>(null); //This res should be in a res modal

  function ParsedError(error: unknown) {
    const err = error as Error;
    throw new Error(err.message);
  }
  function SetError(errMessage: string) {
    setRes({
      type: AlertType.ERROR,
      message: errMessage,
    });
  }
  async function SavePost() {
    try {
      const response = await fetch(`/api/posts/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: propietary, message_id: message_id }),
      });

      if (response.ok) {
        window.location.href = "/profile";
        return setRes(null);
      } else {
        return SetError(response.statusText);
      }
    } catch (error) {
      return ParsedError(error);
    }
  }

  return (
    <button
      onClick={() => SavePost()}
      class={`aspect-square items-center justify-center bg-orange-500 border-transparent rounded p-1 w-fit active:animate-once animate-ease-in-out animate-normal animate-fill-both`}
    >
      {SaveIcon(15, "white")}
    </button>
  );
}
