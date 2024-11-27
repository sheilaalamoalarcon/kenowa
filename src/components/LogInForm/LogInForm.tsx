import Input from "../Input";
import Button from "../Button";
import { useEffect, useState } from "preact/hooks";
import styles from "./styles.module.css";
import {
  AlertType,
  API_ROUTES,
  ClickActions,
  WebRoutesEnum,
} from "@/constants/enums";
import Loader from "../Loader";
import Alert from "../Alert";
import { type IAlert } from "@/constants/classes";

export default function LoginForm() {
  const [res, setRes] = useState<IAlert | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [ID, setID] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("isFetching", isFetching.toString());
  }, [isFetching]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("ID", ID);
  }, [ID]);

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    setIsFetching(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch(API_ROUTES.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        mode: "cors",
      });
      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        const userID = data._id;

        setToken(token);
        setID(userID);
        setIsFetching(false);

        window.location.href = WebRoutesEnum.GLOBAL_CHAT;
      } else {
        setIsFetching(false);
        setRes({
          type: AlertType.WARNING,
          message: data.message || "Login failed",
        });
      }
    } catch (error) {
      setIsFetching(false);
      setRes({
        type: AlertType.ERROR,
        message: "An error occurred. Please try again. " + error,
      });
    }
  }

  return (
    <form
      className={styles.lowerSection}
      id="form"
      method="post"
      onSubmit={submit}
    >
      <Input
        placeholder="Enter your email"
        name="email"
        type="email"
        required
      />
      <Input
        placeholder="Enter your password"
        name="password"
        type="password"
        required
      />
      <Button
        title={"Log In"}
        clickAction={ClickActions.NONE}
        style="margin:5rem 0rem"
        background
      />

      {res && <Alert {...res} />}
      <Loader />
    </form>
  );
}
