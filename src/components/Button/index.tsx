import { useStore } from "@nanostores/preact";
import styles from "./styles.module.css";
import { $isOpen, $token } from "@/constants/constants";
import { API_ROUTES, ClickActions, WebRoutesEnum } from "@/constants/enums";
import { useEffect, useState } from "preact/hooks";

class Button {
  title: string = "";
  clickAction: ClickActions = ClickActions.NONE;
  style!: string;
  type!: string;
  navigateTo!: string;

  constructor(title: string, clickAction: ClickActions) {
    this.title = title;
    this.clickAction = clickAction;
  }
}

interface Props {
  title: string;
  clickAction: ClickActions;
  style?: string;
  type?: string;
  navigateTo?: string;
}

export default function CustomButton({
  title,
  style,
  type,
  clickAction,
  navigateTo,
}: Props) {
  const isOpen = useStore($isOpen);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail(localStorage.getItem("userEmail") ?? "");
  }, [email]);

  async function logOut() {
    const response = await fetch(API_ROUTES.LOGOUT, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
      mode: "cors",
    });

    if (response.status === 201) {
      $token.set(null);
      localStorage.removeItem("token");
      localStorage.removeItem("email");

      window.location.href = WebRoutesEnum.LANDING;
    }
    return;
  }

  function SwitchClickAction(type: ClickActions) {
    switch (type) {
      case ClickActions.OPEN_MODULE:
        return $isOpen.set(!isOpen);
      case ClickActions.LOG_OUT:
        return logOut();
      default:
        break;
    }
  }
  return clickAction != ClickActions.NAVIGATE ? (
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
  ) : (
    <a id="custom-button" className={styles.anchor} href={navigateTo}>
      <p id="custom-button-title" className={styles.title}>
        {title}
      </p>
    </a>
  );
}
