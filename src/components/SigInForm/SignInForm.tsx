import Input from "../Input";
import Button from "../Button";
import { useState } from "preact/hooks";
import styles from "../LogInForm/styles.module.css";
import { API_ROUTES, ClickActions, WebRoutesEnum } from "@/constants/enums";

export default function SignInForm() {
  const [message, setMessage] = useState("");

  async function submit(e: SubmitEvent) {
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      e.preventDefault();

      const response = await fetch(API_ROUTES.REGISTER, {
        method: "POST",
        body: formData,
        mode: "cors",
      });
      const data = await response.json();

      if (response.status === 201) {
        window.location.href = WebRoutesEnum.GLOBAL_CHAT;
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      const err = error as Error;
      setMessage("Error en la solicitud " + err.message);
    }
  }

  return (
    <form
      class={styles.lowerSection}
      id="form"
      method="post"
      encType="multipart/form-data"
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
      <Input
        placeholder="Enter your image"
        name="myFile"
        title="image"
        type="file"
        required
      />
      <Input
        placeholder="Enter your username"
        name="username"
        type="text"
        required
      />
      <Button
        title={"sign in"}
        clickAction={ClickActions.NONE}
        style="margin:5rem 0rem"
        background
      />
      {message && <p>{message}</p>}
    </form>
  );
}
