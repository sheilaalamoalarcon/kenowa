import styles from "./styles.module.css";
import { API_ROUTES, ClickActions, WebRoutesEnum } from "@/constants/enums";
import { Delete } from "@/constants/methods";
import { useEffect, useState } from "preact/hooks";
import type { JSX } from "preact/jsx-runtime";

interface Props {
  title: string;
  clickAction: ClickActions;
  background: boolean;
  style?: string;
  type?: string;
  navigateTo?: string;
  icon?: JSX.Element;
}

export default function CustomButton({
  title,
  style,
  type,
  clickAction,
  navigateTo,
  icon,
  background,
}: Props) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail(localStorage.getItem("userEmail") ?? "");
  }, [email]);

  async function LogOut() {
    Delete(API_ROUTES.LOGOUT + `/${localStorage.getItem("ID") ?? ""}`).then(
      (result) => {
        if (typeof result === "number") {
          localStorage.removeItem("isFetching");
          localStorage.removeItem("userEmail");
          localStorage.removeItem("ID");
          localStorage.removeItem("token");

          window.location.href = WebRoutesEnum.LANDING;
        } else {
          return;
        }
      }
    );
  }

  function navigateToLocation(location: string) {
    return (window.location.href = location);
  }

  function SwitchClickAction(type: ClickActions) {
    switch (type) {
      case ClickActions.LOG_OUT:
        return LogOut();
      case ClickActions.NAVIGATE:
        return navigateToLocation(navigateTo ?? "/");

      default:
        break;
    }
  }
  return (
    <button
      type={type}
      style={style}
      className={background ? styles.container : styles.withoutBackground}
      onClick={() => SwitchClickAction(clickAction)}
    >
      {icon && <span className={styles.icon}>{icon}</span>}

      <p className={styles.title}>{title}</p>
    </button>
  );
}
