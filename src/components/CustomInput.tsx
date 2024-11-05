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
  const [className, setClassName] = useState<string>();

  function switchProps() {
    const basicProps = {
      type,
      required,
      placeholder,
      name,
    };
    switch (type) {
      case "file":
        setClassName(styles.customInputFile);

        return setProps({
          ...basicProps,
          accept: "image/png",
          className: styles.inputFile,
        });
      case "password":
        setClassName(styles.customInput);

        return setProps({
          ...basicProps,
          minlength: "8",
          className: styles.input,
        });
      case "email":
        setClassName(styles.customInput);

        return setProps({
          ...basicProps,
          pattern: ".+@example.com",
          className: styles.input,
        });
      case "text":
        setClassName(styles.customInput);

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
    <div className={className}>
      <p className={styles.title}>{name}</p>
      <input {...props} />
    </div>
  );
}
