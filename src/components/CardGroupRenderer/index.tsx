import { API_ROUTES } from "@/constants/enums";
import { useEffect, useState } from "preact/hooks";
import { CMessage } from "@/constants/classes";
import Card from "@/components/Card/index";
import { Get } from "@/constants/methods";

export default function CardGroupRenderer() {
  const [messages, setMessages] = useState<CMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? "");
  }, [token]);

  useEffect(() => {
    if (token) {
      Get<CMessage[]>(token, API_ROUTES.GET_ALL_MESSAGES).then((result) => {
        if (typeof result === "string") {
          setError(result);
        } else {
          setError(null);
          setMessages(result);
        }
      });
    } else {
      setError("Could not get ID");
    }
  }, [token]);

  return (
    <div className={"cardRenderer"}>
      {error && <p>{error}</p>}

      {messages.map((message, index) => {
        return <Card {...message} key={index} />;
      })}
    </div>
  );
}
