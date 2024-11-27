import { CMessage, CUser, type IAlert } from "@/constants/classes";
import { AlertType, API_ROUTES } from "@/constants/enums";
import { Get } from "@/constants/methods";
import { useState, useEffect } from "preact/hooks";
import Card from "../Card";
import styles from "./styles.module.css";
import Alert from "../Alert";

interface Result<T> {
  message: string;
  result: T;
}
export default function ProfileWrapper() {
  const [user, setUser] = useState<CUser | null>(null);
  const [res, setRes] = useState<IAlert | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [messages, setMessages] = useState<CMessage[] | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  useEffect(() => {
    const localID = localStorage.getItem("ID");
    if (localID) {
      Get<CUser[]>(token ?? "", `${API_ROUTES.GET_USER}${localID}`).then(
        (result) => {
          if (typeof result === "string") {
            setRes({ type: AlertType.ERROR, message: result });
          } else {
            setUser(result[0]);
            setRes(null);
          }
        }
      );
    } else {
      setRes({
        type: AlertType.ERROR,
        message: "Could not get ID",
      });
    }
  }, [token]);

  function GetMessages(id: string) {
    Get<Result<CMessage[]>>(
      token ?? "",
      `${API_ROUTES.GET_SAVED_MESSAGES}${id}`
    ).then((result) => {
      if (typeof result === "string") {
        setRes(null);
      } else {
        setMessages(result.result);
      }
    });
  }

  useEffect(() => {
    GetMessages(user?._id ?? "");
    if (messages) {
      setRes(null);
    }
  }, [user]);

  return (
    <div>
      <h1 className={styles.text}>Saved Posts</h1>
      {res && <Alert {...res} />}
      <div className={"cardRenderer"}>
        {messages &&
          messages.map((message: CMessage) => {
            return <Card {...message} isDelete={true} />;
          })}
      </div>
      {res && res}
    </div>
  );
}
