import { AlertType } from "@/constants/enums";
import { useEffect, useState } from "preact/hooks";
import {
  type APIResponse,
  type CMessage,
  type IAlert,
  type Saved,
} from "@/constants/classes";
import { sortByDate } from "@/constants/methods";
import PostGroupBase from "@/components/PostGroupBase";

interface Props {
  _id?: string;
}

export default function SavedGroup({ _id }: Props) {
  const [messages, setMessages] = useState<CMessage[]>([]);
  const [res, setRes] = useState<IAlert | null>(null);

  useEffect(() => {
    sortByDate(messages);
  }, [messages]);

  async function GetBase(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);

      return response.json();
    } catch (error) {
      const err = error as Error;
      setRes({
        type: AlertType.ERROR,
        message: err.message,
      });
    }
  }
  useEffect(() => {
    const getSavedMessages = async () => {
      try {
        const saved: APIResponse<Saved[]> = await GetBase(
          `/api/posts/get/${_id}`
        );
        const data = saved.data;

        if (data) {
          const posts = await Promise.all(
            data.map(async ({ message_id }) => {
              const res: APIResponse<CMessage[]> = await GetBase(
                `/api/messages/individual/${message_id}`
              );
              return res.data?.at(0);
            })
          );
          setRes(null);
          setMessages(posts as CMessage[]);
        } else {
          setMessages([]);
        }
      } catch (error) {
        setRes({
          type: AlertType.ERROR,
          message: (error as Error).message,
        });
      }
    };

    getSavedMessages();
  }, []);

  return (
    <PostGroupBase
      _id={_id ?? ""}
      data={messages}
      scroll={true}
      isDelete={true}
    />
  );
}
