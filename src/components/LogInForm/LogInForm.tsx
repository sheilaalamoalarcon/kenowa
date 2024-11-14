import Input from "../CustomInput";
import Button from "../CustomButton";
import { useState } from "preact/hooks";
import styles from "./styles.module.css";
import { ClickActions } from "@/constants/enums";
import { navigate } from "astro:transitions/client";

export default function LoginForm() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("http://localhost:3600/api/auth/login", {
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
    if (data.message) {
      setResponseMessage(data.message);
    }
    if (response.status === 201) {
      navigate("/globalChat");
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
    </form>
  );
}
