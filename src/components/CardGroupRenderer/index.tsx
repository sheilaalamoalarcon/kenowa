import { AlertType, API_ROUTES } from "@/constants/enums";
import { useEffect, useState } from "preact/hooks";
import { CMessage, type IAlert } from "@/constants/classes";
import Card from "@/components/Card/index";
import { Get } from "@/constants/methods";
import Alert from "../Alert";

export default function CardGroupRenderer() {
  const [messages, setMessages] = useState<CMessage[]>([]);
  const [res, setRes] = useState<IAlert | null>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token") ?? "";
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, [token]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (token) {
        try {
          const result = await Get<CMessage[]>(
            token,
            API_ROUTES.GET_ALL_MESSAGES
          );
          if (typeof result === "string") {
            setRes({ type: AlertType.ERROR, message: result });
          } else {
            setMessages(result);
            setRes({
              type: AlertType.SUCCESS,
              message: "Get posts was successful",
            });
          }
        } catch (error) {
          setRes({
            type: AlertType.ERROR,
            message: "An error occurred while fetching messages",
          });
        }
      } else {
        setRes({ type: AlertType.ERROR, message: "Could not get ID" });
      }
    };

    fetchMessages();
  }, [token]);

  return (
    <div>
      {res && <Alert {...res} />}
      <div className="card-renderer">
        {messages.map((message, index) => (
          <Card {...message} key={index} />
        ))}
      </div>
    </div>
  );
}
