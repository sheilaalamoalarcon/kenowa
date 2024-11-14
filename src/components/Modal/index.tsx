import styles from "./styles.module.css";
import { useEffect, useState } from "preact/hooks";
import MessageForm from "../MessageForm/MessageForm";
import { $isOpen } from "@/constants/constants";
import { useStore } from "@nanostores/preact";
import { ModalChildrens } from "@/constants/enums";
import type { JSXInternal } from "node_modules/preact/src/jsx";

interface IModal {
  type: ModalChildrens;
}

export default function Modal({ type }: IModal) {
  const isOpen = useStore($isOpen);
  const [cStyles, setCStyles] = useState<CSSModuleClasses[string]>();
  const [children, setChildren] = useState<JSXInternal.Element>();

  function switchChildren(type: ModalChildrens) {
    switch (type) {
      case ModalChildrens.NEW_MESSAGE:
        return setChildren(<MessageForm />);
      default:
        return;
    }
  }
  useEffect(() => {
    switchChildren(type);
  }, [type]);
  useEffect(() => {
    // Cambiar la clase según el estado de `isOpen`
    if (isOpen) {
      setCStyles(styles.container);
    } else {
      setCStyles(styles.none);
    }
  }, [isOpen]);

  return (
    <div className={cStyles} onClick={() => $isOpen.set(false)}>
      <div
        style={"display:flex;flex-direction:row;justify-content: space-between"}
      >
        <p>Create new message</p>
        <button type={"button"}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1C4.1 1 1 4.1 1 8C1 11.9 4.1 15 8 15C11.9 15 15 11.9 15 8C15 4.1 11.9 1 8 1ZM10.7 11.5L8 8.8L5.3 11.5L4.5 10.7L7.2 8L4.5 5.3L5.3 4.5L8 7.2L10.7 4.5L11.5 5.3L8.8 8L11.5 10.7L10.7 11.5Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      {children}
    </div>
  );
}
