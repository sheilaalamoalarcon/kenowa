import { AlertType } from "@/constants/enums";
import type { IAlert } from "@/constants/classes";
import {
  SuccessIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
} from "@/components/Icons/AlertIcons";

export default function Alert(alert: IAlert) {
  const { type, message } = alert;
  const color =
    type === AlertType.SUCCESS
      ? "green"
      : type === AlertType.ERROR
        ? "red"
        : type === AlertType.INFO
          ? "blue"
          : "amber";

  const icon =
    type === AlertType.SUCCESS ? (
      <SuccessIcon color={color} />
    ) : type === AlertType.ERROR ? (
      <ErrorIcon color={color} />
    ) : type === AlertType.INFO ? (
      <InfoIcon color={color} />
    ) : (
      <WarningIcon color={color} />
    );

  return (
    <div
      class={`flex flex-row items-center gap-4 rounded p-4 bg-${color}-500/50 text-${color}-500 `}
    >
      {icon}
      <p class={`alert-${type}`}>{message}</p>
    </div>
  );
}
