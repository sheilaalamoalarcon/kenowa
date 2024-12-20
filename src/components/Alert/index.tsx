import { useEffect, useState } from "preact/hooks";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../Icons";
import { AlertType } from "@/constants/enums";
import type { JSXInternal } from "node_modules/preact/src/jsx";
import type { IAlert } from "@/constants/classes";

export default function Alert(alert: IAlert) {
  const { type, message } = alert;
  const [color, setColor] = useState<string | null>(null);

  const [icon, setIcon] = useState<JSXInternal.Element>(
    SuccessIcon(`var(--${color})`)
  );
  const baseStyle = (color: string) => {
    return `display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;border-radius:0.4rem;padding:1rem 1rem 1rem 1rem;background:var(--soft-${color}); color: var(--dark-${color});`;
  };

  useEffect(() => {
    if (type === AlertType.SUCCESS) {
      setColor("green");
      setIcon(SuccessIcon(`var(--${color})`));
    } else if (type === AlertType.ERROR) {
      setColor("red");
      setIcon(ErrorIcon(`var(--${color})`));
    } else if (type === AlertType.INFO) {
      setColor("blue");
      setIcon(InfoIcon(`var(--${color})`));
    } else {
      setColor("yellow");
      setIcon(WarningIcon(`var(--${color})`));
    }
  }, [color, icon]);

  return (
    <div style={baseStyle(color ?? "")}>
      {icon}
      <p class={"error"}>{message}</p>
    </div>
  );
}
