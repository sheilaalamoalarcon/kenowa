import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { useState } from "preact/hooks";
import styles from "@/components/LogInForm/styles.module.css";
import { ClickActions } from "@/constants/enums";

export default function MessageForm() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("http://localhost:3600/api/messages/post", {
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
  }

  return (
    <form
      className={styles.lowerSection}
      id="form"
      method="post"
      encType="multipart/form-data"
      onSubmit={submit}
    >
      <CustomInput
        placeholder="Enter your email"
        name="content"
        type="text"
        required
      />
      <CustomInput
        placeholder="Enter your password"
        name="message-image"
        type="file"
        required
      />
      <CustomButton
        title={"Send Message"}
        type="submit"
        style="margin:5rem 0rem"
        clickAction={ClickActions.NONE}
      />

      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
