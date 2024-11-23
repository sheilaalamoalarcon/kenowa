import CustomInput from "../Input";
import CustomButton from "../Button";
import { useEffect, useState } from "preact/hooks";
import styles from "@/components/LogInForm/styles.module.css";
import { API_ROUTES, ClickActions } from "@/constants/enums";

export default function MessageForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const localToken = window.localStorage.getItem("token");
    setToken(localToken ?? "");
  }, [token]);

  async function submit(e: SubmitEvent) {
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      e.preventDefault();

      const response = await fetch(API_ROUTES.POST_MESSAGE, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
        mode: "cors",
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage("Could not upload messsage: " + response.statusText);
      }
    } catch (error) {
      const err = error as Error;
      setMessage("Could not upload messsage: " + err.message);
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

      {message && <p>{message}</p>}
    </form>
  );
}
