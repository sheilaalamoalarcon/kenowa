import { defaultBttns, userBttns, type INav } from "@/constants/constants";
import styles from "./styles.module.css";
import Button from "../Button";
import { useEffect, useState } from "preact/hooks";
import { Logo } from "../Icons";

export default function Header() {
  const [token, setToken] = useState<string>("");
  const [buttons, setButtons] = useState<INav[]>([]);

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? "");

    const isNull = token === null;
    const isEmpty = token === "";

    if (isNull || isEmpty) {
      setButtons(defaultBttns);
    } else {
      setButtons(userBttns);
    }
  }, [token]);

  return (
    <header className={styles.header} id="header">
      <a href="/" aria-label={"Go to landing page"}>
        {Logo}
      </a>
      <nav className={styles.nav}>
        {buttons.map(({ href, title, action, icon }: INav) => {
          return (
            <Button
              navigateTo={href}
              background={false}
              clickAction={action}
              title={title}
              icon={icon}
            />
          );
        })}
      </nav>
    </header>
  );
}
