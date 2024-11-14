import Input from "../CustomInput";
import Button from "../CustomButton";
import { useState } from "preact/hooks";
import styles from "../LogInForm/styles.module.css";
import { ClickActions } from "@/constants/enums";

export default function SignInForm() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: SubmitEvent) {
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      e.preventDefault();

      const response = await fetch("http://localhost:3600/api/auth/register", {
        method: "POST",
        body: formData,
        mode: "cors",
      });
      const data = await response.json();

      if (data.message) {
        setResponseMessage(data.message);
      }
    } catch (error) {
      const err = error as Error;
      setResponseMessage("Error en la solicitud " + err.message);
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
      />
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
