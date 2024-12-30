import { AlertType } from "@/constants/enums";
import { DeleteIcon } from "../Icons";
import { useState } from "preact/hooks";
import type { IAlert } from "@/constants/classes";

interface Props {
  message_id: string;
}

export function UnsaveButton({ message_id }: Props) {
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

  async function UnsavePost() {
    try {
      const response = await fetch(`/api/posts/delete/${message_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setRes(null);
        window.location.href = "/profile";
      }
      return SetError(response.statusText);
    } catch (error) {
      return ParsedError(error);
    }
  }

  return (
    <button
      onClick={UnsavePost}
      class={`aspect-square items-center justify-center bg-orange-500 border-transparent rounded p-1 w-fit hover:animation-pulse`}
    >
      {DeleteIcon("white", 15)}
    </button>
  );
}
