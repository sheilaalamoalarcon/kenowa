import Input from "../Input";
import Button from "../Button";
import { useEffect, useState } from "preact/hooks";
import styles from "@/components/LogInForm/styles.module.css";
import { API_ROUTES, ClickActions } from "@/constants/enums";

export default function MessageForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [token, setToken] = useState<string>("");
  const [userID, setUserID] = useState<string>("");

  useEffect(() => {
    const localToken = window.localStorage.getItem("token");
    setToken(localToken ?? "");
  }, [token]);

  useEffect(() => {
    const userID = window.localStorage.getItem("ID");
    setUserID(userID ?? "");
  }, [userID]);

  async function submit(e: SubmitEvent) {
    const formData = new FormData(e.target as HTMLFormElement);

    formData.append("propietary", userID);

    try {
      e.preventDefault();

      //there is no propietary
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
      setMessage("Error creating message: " + err.message);
    }
  }
  return (
    <form
      className={styles.lowerSection}
      id="form"
      method="post"
      encType="multipart/form-data"
      onSubmit={submit}
      action={"/uploads/posts"}
    >
      <Input
        placeholder="Enter your email"
        name="content"
        type="text"
        required
      />
      <Input
        placeholder="Enter your password"
        name="myFile"
        title="image"
        type="file"
        required
      />
      <Button
        title={"Send Message"}
        type="submit"
        style="margin:5rem 0rem"
        clickAction={ClickActions.NONE}
        background
      />

      {message && <p>{message}</p>}
    </form>
  );
}
