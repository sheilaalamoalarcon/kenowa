import { type CUser, type CMessage } from "@/constants/classes";
import styles from "./styles.module.css";
import { useEffect, useState } from "preact/hooks";
import { API_ROUTES } from "@/constants/enums";
import CardHeader from "./CardHeader";
import { arrayBufferToBase64, Get, parseDate } from "@/constants/methods";

interface ICard extends CMessage {
  isDelete?: boolean;
}

export const ArrowIcon = (width: string, color: string) => (
  <svg width={width} height="12" viewBox="0 0 876 12" fill="none">
    <path
      d="M1.5 5C0.947715 5 0.5 5.44772 0.5 6C0.5 6.55228 0.947715 7 1.5 7V5ZM875.273 6L869.5 0.226497L863.726 6L869.5 11.7735L875.273 6ZM1.5 7H869.5V5H1.5V7Z"
      fill={color}
    />
  </svg>
);

export default function Card(params: ICard) {
  const [user, setUser] = useState<CUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? "");
  }, [token]);

  const { image, content, created_at, propietary, _id, isDelete } = params;

  const imageUrl = `data:image/jpeg;base64,${arrayBufferToBase64(image.data)}`;

  useEffect(() => {
    Get<CUser[]>(token, `${API_ROUTES.GET_USER}${propietary}`).then(
      (result) => {
        if (typeof result === "string") {
          setError(result);
        } else {
          setUser(result[0]);
        }
      }
    );
  }, [propietary]);

  return (
    <div className={styles.card}>
      <div className={styles.mainInfo}>
        {user && (
          <CardHeader {...user} message_id={_id} isDelete={isDelete ?? false} />
        )}
      </div>
      <img
        width={100}
        height={100}
        className={styles.image}
        src={imageUrl}
        alt={"card"}
        loading="lazy"
      />
      <div style={"width:100%;align-items: flex-start;"}>
        <p className={styles.text}>{content}</p>
        <p
          class={"body"}
          style={"text-transform:capitalize; font-size:0.74rem; opacity:0.74"}
        >
          {parseDate(created_at)}
        </p>
        {error && <p>{error}</p>}
      </div>
      {ArrowIcon("100%", "var(--orange)")}
    </div>
  );
}
