import type { HTMLInputTypeAttribute } from "preact/compat";
import { useLayoutEffect, useState } from "preact/hooks";
import styles from "../styles/CInput.module.css";
interface CustomInputProps {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  required: boolean;
}
export default function CustomInput({
  name,
  placeholder,
  type,
  required = false,
}: CustomInputProps) {
  const [props, setProps] = useState({});

  function switchProps() {
    const basicProps = {
      type,
      required,
      placeholder,
      name,
    };
    switch (type) {
      case "file":
        return setProps({
          ...basicProps,
          accept: "image/png",
          className: styles.inputFile,
        });
      case "password":
        return setProps({
          ...basicProps,
          minlength: "8",
          className: styles.input,
        });
      case "email":
        return setProps({
          ...basicProps,
          pattern: ".+@example.com",
          className: styles.input,
        });
      case "text":
        return setProps({
          ...basicProps,
          minlength: "8",
          maxlength: "25",
          className: styles.input,
        });
      default:
        break;
    }
  }
  useLayoutEffect(() => {
    switchProps();
  }, [type]);
  return (
    <div className={styles.customInput} id={"input-container"}>
      <p className={styles.title} id="input-title">
        {name}
      </p>
      <input class={"custom-input"} id="input" {...props} />
    </div>
  );
}
