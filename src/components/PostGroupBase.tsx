import Card from "@/components/Card/index";
import type { CMessage } from "@/constants/classes";
import Alert from "./Alert";
import { AlertType } from "@/constants/enums";

interface Props {
  data: Array<CMessage>;
  _id: string;
  isDelete: boolean;
  scroll: boolean;
}

export function PostGroupBase({ data, _id, isDelete, scroll }: Props) {
  return (
    <div
      className={`flex ${
        scroll ? "flex-row overflow-x-scroll w-dvw h-96" : "flex-col w-full"
      } h-fit p-4 gap-10`}
    >
      {data.length > 0 ? (
        data.map((message) => (
          <Card
            key={message.id}
            user_id={_id}
            isDelete={!isDelete}
            {...message}
          />
        ))
      ) : (
        <Alert type={AlertType.WARNING} message="No hay posts" />
      )}
    </div>
  );
}
