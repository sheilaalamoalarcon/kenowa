import type { WebRoutesEnum } from "@/constants/enums";
import styles from "../styles/CButton.module.css";

interface Props {
  title: string;
  href?: WebRoutesEnum;
}
export default function CustomButton({ title, href }: Props) {
  return (
    <a href={href}>
      <button id="custom-button" className={styles.container}>
        <p id="custom-button-title" className={styles.title}>
          {title}
        </p>
      </button>
    </a>
  );
}
