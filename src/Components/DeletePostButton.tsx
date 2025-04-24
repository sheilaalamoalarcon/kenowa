import { AlertType } from "../Constants/Enumerations";
import { useState } from "preact/hooks";
import { IAlert } from "../Constants/Classes";

interface Props {
  proprietary: string;
  message_id: string;
}

export function DeletePostButton({ proprietary, message_id }: Props) {
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

  async function DeletePost() {
    try {
      const response = await fetch(
        `/api/messages/${proprietary}/${message_id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setRes(null);
        window.location.href = "/profile";
      }
      return SetError(response.statusText);
    } catch (error) {
      return ParsedError(error);
    }
  }

  const btnProps = {
    type: "button",
    class: "primary-button square-button",
  };

  const iconSize = 14;
  const iconSVGProps = {
    width: iconSize,
    height: iconSize,
    viewBox: `0 0 14 14`,
    class: "white-icon",
  };

  const deleteIconPathProps = {
    d: "M5.28015 4.22003C5.13798 4.08755 4.94993 4.01543 4.75563 4.01885C4.56133 4.02228 4.37594 4.10099 4.23853 4.23841C4.10112 4.37582 4.02241 4.56121 4.01898 4.75551C4.01555 4.94981 4.08767 5.13785 4.22015 5.28003L6.94015 8.00003L4.22015 10.72C4.14647 10.7887 4.08736 10.8715 4.04637 10.9635C4.00538 11.0555 3.98334 11.1548 3.98156 11.2555C3.97979 11.3562 3.99831 11.4562 4.03603 11.5496C4.07375 11.643 4.1299 11.7278 4.20112 11.7991C4.27233 11.8703 4.35717 11.9264 4.45056 11.9642C4.54394 12.0019 4.64397 12.0204 4.74468 12.0186C4.84538 12.0168 4.94469 11.9948 5.03669 11.9538C5.12869 11.9128 5.21149 11.8537 5.28015 11.78L8.00015 9.06003L10.7202 11.78C10.7888 11.8537 10.8716 11.9128 10.9636 11.9538C11.0556 11.9948 11.1549 12.0168 11.2556 12.0186C11.3563 12.0204 11.4564 12.0019 11.5498 11.9642C11.6431 11.9264 11.728 11.8703 11.7992 11.7991C11.8704 11.7278 11.9266 11.643 11.9643 11.5496C12.002 11.4562 12.0205 11.3562 12.0187 11.2555C12.017 11.1548 11.9949 11.0555 11.9539 10.9635C11.9129 10.8715 11.8538 10.7887 11.7802 10.72L9.06015 8.00003L11.7802 5.28003C11.9126 5.13785 11.9848 4.94981 11.9813 4.75551C11.9779 4.56121 11.8992 4.37582 11.7618 4.23841C11.6244 4.10099 11.439 4.02228 11.2447 4.01885C11.0504 4.01543 10.8623 4.08755 10.7202 4.22003L8.00015 6.94003L5.28015 4.22003Z",
    class: "white-icon",
  };

  return (
    <button {...btnProps} onClick={DeletePost}>
      <svg {...iconSVGProps}>
        <path {...deleteIconPathProps} />
      </svg>
    </button>
  );
}
