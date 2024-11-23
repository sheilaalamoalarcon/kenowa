import { type CUser } from "@/constants/classes";
import styles from "./styles.module.css";

export default function CardHeader(params: CUser) {
  const { image, username } = params;

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
      <p>{username}</p>
    </div>
  );
}
