import type { WebRoutesEnum } from "@/constants/enums";
import styles from "../styles/CButton.module.css";

interface Props {
  title: string;
  href?: WebRoutesEnum;
  style?: string;
}
export default function CustomButton({ title, href, style }: Props) {
  return (
    <button id="custom-button" style={style} className={styles.container}>
      <a href={href}>
        <p id="custom-button-title" className={styles.title}>
          {title}
        </p>
      </a>
    </button>
  );
}
