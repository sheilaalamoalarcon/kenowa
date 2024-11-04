import type { WebRoutesEnum } from "@/constants/enums";
import styles from "../styles/CButton.module.css";

interface Props {
  title: string;
  href?: WebRoutesEnum;
}
export default function CustomButton({ title, href }: Props) {
  return (
    <button id="custom-button" className={styles.container}>
      <a href={href}>
        <p id="custom-button-title" className={styles.title}>
          {title}
        </p>
      </a>
    </button>
  );
}
