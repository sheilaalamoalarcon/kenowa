import { type CUser } from "@/constants/classes";
import styles from "./styles.module.css";
import SaveButton from "../SaveButton";

interface ICardHeader extends CUser {
  message_id: string;
  isDelete: boolean;
}
export default function CardHeader(params: ICardHeader) {
  const { image, username, _id, message_id, isDelete } = params;

  const arrayBufferToBase64 = (buffer: ArrayBufferLike) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const imageUrl = `data:image/jpeg;base64,${arrayBufferToBase64(image.data)}`;

  return (
    <div className={styles.header}>
      <img
        width={100}
        height={100}
        src={imageUrl}
        alt={"card-header"}
        loading="lazy"
        className={styles.headerImage}
      />
      <div
        style={"display: flex;align-items: flex-end;flex-direction: column;"}
      >
        <p
          class={"body"}
          style={"text-transform:capitalize; opacity:0.74;font-weight:700"}
        >
          {username}
        </p>
        <SaveButton
          propietary={_id ?? ""}
          message_id={message_id}
          isDelete={isDelete}
        />
      </div>
    </div>
  );
}
