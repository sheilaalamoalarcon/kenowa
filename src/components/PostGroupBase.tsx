import type { CMessage } from "@/constants/classes";
import Alert from "@/components/Alert.tsx";
import { AlertType } from "@/constants/enums";
import Card from "@/components/Card.tsx";

interface Props {
  ID?: string;
  data: Array<CMessage>;
  _id: string;
  isDelete: boolean;
  scroll: boolean;
}

const PostGroupBase = ({ data, _id, isDelete, scroll, ID }: Props) => {
  return (
    <div
      id={ID ?? "posts-base"}
      className={`${
        scroll ? "flex overflow-x-scroll h-full" : "grid grid-cols-2 "
      } p-4 gap-10 w-dvw`}
    >
      {data.length > 0 ? (
        data.map((message) => (
          <Card
            key={message.id}
            user_id={_id}
            isDelete={!isDelete}
            message={message}
          />
        ))
      ) : (
        <Alert type={AlertType.WARNING} message="No hay posts" />
      )}
    </div>
  );
};

export default PostGroupBase;
