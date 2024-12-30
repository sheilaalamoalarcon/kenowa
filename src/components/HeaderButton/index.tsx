import { SaveButton } from "./SaveButton";
import { UnsaveButton } from "./UnsaveButton";

interface Props {
  propietary: string;
  message_id: string;
  isDelete: boolean;
}

export function HeaderButton({ propietary, message_id, isDelete }: Props) {
  return isDelete ? (
    <SaveButton propietary={propietary} message_id={message_id} />
  ) : (
    <UnsaveButton message_id={message_id} />
  );
}
