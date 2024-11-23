import Input from "../Input";
import Button from "../Button";
import { useEffect, useState } from "preact/hooks";
import styles from "./styles.module.css";
import { API_ROUTES, ClickActions, WebRoutesEnum } from "@/constants/enums";
import { $isFetching, $token, $userEmail } from "@/constants/constants";
import Loader from "../Loader";

export default function LoginForm() {
  const [responseMessage, setResponseMessage] = useState("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    $isFetching.set(isFetching);
    localStorage.setItem("isFetching", isFetching.toString());
  }, [isFetching]);

  useEffect(() => {
    localStorage.setItem("userEmail", email);
    $userEmail.set(email);
  }, [email]);

  useEffect(() => {
    $token.set(token);
    localStorage.setItem("token", token);
  }, [token]);

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
        setToken(token);
        setIsFetching(false);
        setEmail(email?.toString() ?? "");
        window.location.href = WebRoutesEnum.GLOBAL_CHAT;
      } else {
        setIsFetching(false);
        setResponseMessage(data.message || "Login failed");
      }
    } catch (error) {
      setIsFetching(false);
      setResponseMessage("An error occurred. Please try again. " + error);
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
      />

      {responseMessage && <p>{responseMessage}</p>}
      <Loader />
    </form>
  );
}
