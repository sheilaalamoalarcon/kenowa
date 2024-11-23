import { API_ROUTES } from "@/constants/enums";
import { useEffect, useState } from "preact/hooks";
import styles from "./style.module.css";
import type { CMessage } from "@/constants/classes";
import Card from "@/components/Card/index";

export default function CardGroupRenderer() {
  const [messages, setMessages] = useState<CMessage[]>([]);
  const [errors, setErrors] = useState<string | null>(null);
  const [token, setToken] = useState<string>("");

  const isEmpty = (value: Array<CMessage>) => value.length === 0;

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? "");
  }, [token]);

  useEffect(() => {
    updateMessages();
  }, [token]);

  const updateMessages = async () => {
    try {
      const response: Response = await fetch(API_ROUTES.GET_ALL_MESSAGES, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
      });

      if (response.ok) {
        const data: CMessage[] = await response.json();
        const isArray = Array.isArray(data);
        if (isArray && !isEmpty(data)) {
          setMessages(data);
          setErrors(null);
        } else {
          setMessages([]);
          setErrors("No messages found: " + data.length);
        }
      } else {
        setErrors("Could not get posts: " + response.statusText);
      }
    } catch (error) {
      const err = error as Error;
      return setErrors(err.message);
    }
  };

  return (
    <div className={styles.container}>
      {messages.map((message, index) => {
        return <Card {...message} key={index} />;
      })}
      {errors && <p>{errors}</p>}
    </div>
  );
}
