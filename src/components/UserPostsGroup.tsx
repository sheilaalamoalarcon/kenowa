import { AlertType } from "@/constants/enums";
import { useEffect, useState } from "preact/hooks";
import {
  type APIResponse,
  type CMessage,
  type IAlert,
} from "@/constants/classes";
import Alert from "@/components/Alert";
import { sortByDate } from "@/constants/methods";
import { PostGroupBase } from "./PostGroupBase";

interface Props {
  user_id: string;
}

export function UserPostsGroup({ user_id }: Props) {
  const [messages, setMessages] = useState<CMessage[]>([]);
  const [res, setRes] = useState<IAlert | null>(null);

  async function GetUserPost(url: string) {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data: APIResponse<CMessage[]> = await response.json();
        setMessages(data.data || []);
        setRes(null);
      } else {
        setRes({ type: AlertType.WARNING, message: response.statusText });
      }
    } catch (error) {
      const err: Error = error as Error;
      setRes({
        type: AlertType.ERROR,
        message: err.message,
      });
    }
  }

  useEffect(() => {
    sortByDate(messages);
  }, [messages]);

  useEffect(() => {
    GetUserPost(`/api/messages/${user_id}`);
  }, []);

  return (
    <div>
      {res && <Alert {...res} />}
      <PostGroupBase
        data={messages}
        _id={user_id}
        isDelete={false}
        scroll={false}
      />
    </div>
  );
}
