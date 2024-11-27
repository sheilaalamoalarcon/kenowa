import { API_ROUTES } from "@/constants/enums";
import { Put } from "@/constants/methods";
import { DeleteIcon, SaveIcon } from "../Icons";
import { useEffect, useState } from "preact/hooks";

interface ISaveButton {
  propietary: string;
  message_id: string;
  isDelete?: boolean;
}
export default function SaveButton({
  propietary,
  message_id,
  isDelete,
}: ISaveButton) {
  const [error, setError] = useState<string | null>(null); //This error should be in a error modal
  const [token, setToken] = useState<string | null>(null);
  const [color, setColor] = useState<string>("var(--black)");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  function SavePost() {
    setColor("var(--orange)");
    Put(
      token ?? "",
      `${API_ROUTES.PUT_MESSAGE}/${propietary}/${message_id}`
    ).then((result) => {
      return setError(result.toString());
    });
  }

  return (
    <>
      <button
        onClick={() => SavePost()}
        style={
          "width: 2rem;align-items: center;justify-content: center;background: transparent;border: transparent;"
        }
      >
        {isDelete ? DeleteIcon(color, 37) : SaveIcon(24, color)}
      </button>
    </>
  );
}
