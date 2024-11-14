import { useStore } from "@nanostores/preact";
import styles from "../styles/CButton.module.css";
import { $isOpen } from "@/constants/constants";
import { ClickActions } from "@/constants/enums";

interface Props {
  title: string;
  clickAction: ClickActions;
  style?: string;
  type?: string;
}

export default function CustomButton({
  title,
  style,
  type,
  clickAction,
}: Props) {
  const isOpen = useStore($isOpen);
  function SwitchClickAction(type: ClickActions) {
    switch (type) {
      case ClickActions.OPEN_MODULE:
        return $isOpen.set(!isOpen);
      default:
        break;
    }
  }
  return (
    <button
      type={type}
      id="custom-button"
      style={style}
      className={styles.container}
      onClick={() => SwitchClickAction(clickAction)}
    >
      <p id="custom-button-title" className={styles.title}>
        {title}
      </p>
    </button>
  );
}
