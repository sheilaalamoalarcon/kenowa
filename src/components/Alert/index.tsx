import { AlertType } from "@/constants/enums";
import type { IAlert } from "@/constants/classes";
import {
  SuccessIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
} from "../Icons/AlertIcons";

export default function Alert(alert: IAlert) {
  const { type, message } = alert;
  const color =
    type === AlertType.SUCCESS
      ? "green"
      : type === AlertType.ERROR
        ? "red"
        : type === AlertType.INFO
          ? "blue"
          : "yellow";

  const icon =
    type === AlertType.SUCCESS
      ? SuccessIcon(color)
      : type === AlertType.ERROR
        ? ErrorIcon(color)
        : type === AlertType.INFO
          ? InfoIcon(color)
          : WarningIcon(color);

  return (
    <div
      style={`display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;border-radius:0.4rem;padding:1rem 1rem 1rem 1rem;background:var(--soft-${color}); color: var(--dark-${color});`}
    >
      {icon}
      <p class={`alert-${type}`}>{message}</p>
    </div>
  );
}
