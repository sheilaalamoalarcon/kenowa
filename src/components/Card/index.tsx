import { type CUser, type CMessage } from "@/constants/classes";
import styles from "./styles.module.css";
import { useEffect, useState } from "preact/hooks";
import { API_ROUTES } from "@/constants/enums";
import CardHeader from "./CardHeader";
import { arrayBufferToBase64 } from "@/constants/methods";

export default function Card(params: CMessage) {
  const [user, setUser] = useState<CUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? "");
  }, [token]);

  const { image, content, created_at, propietary } = params;

  const imageUrl = `data:image/jpeg;base64,${arrayBufferToBase64(image.data)}`;

  async function getUser(id: string) {
    try {
      const result = await fetch(API_ROUTES.GET_USER + id.toString(), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data: CUser = await result.json();

      if (result.ok) {
        return setUser(data);
      } else {
        return setError("could not get user: " + result.statusText);
      }
    } catch (error) {
      const err = error as Error;
      setError(err.message);
    }
  }
  useEffect(() => {
    getUser(propietary);
  }, [propietary]);

  return (
    <div className={styles.card}>
      {user && <CardHeader {...user} />}
      <img
        width={100}
        height={100}
        id="card-image"
        src={imageUrl}
        alt={"card"}
        loading="lazy"
      />
      <p className={styles.text}>{content}</p>
      <p className={styles.description}>{created_at}</p>
      {error && <p>{error}</p>}
    </div>
  );
}
