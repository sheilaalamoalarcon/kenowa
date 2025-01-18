import { AlertType } from "@/constants/enums";
import { useEffect, useState } from "preact/hooks";
import {
  type APIResponse,
  type CMessage,
  type IAlert,
} from "@/constants/classes";
import { sortByDate } from "@/constants/methods";
import PostGroupBase from "./PostGroupBase";

interface Props {
  user_id: string;
}

export default function AllPostsGroup({ user_id }: Props) {
  const [messages, setMessages] = useState<CMessage[]>([]);
  const [res, setRes] = useState<IAlert | null>(null);

  async function GetBase(url: string) {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      return response;
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message);
    }
  }

  async function GetAllPost(url: string) {
    try {
      await GetBase(url).then(async (response) => {
        if (response.ok) {
          const data: APIResponse<CMessage[]> = await response.json();
          setMessages(data?.data ?? []);
          setRes(null);
        } else {
          setRes({ type: AlertType.WARNING, message: response.statusText });
        }
      });
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
  }, []);

  useEffect(() => {
    GetAllPost("/api/messages");
  }, []);

  return (
    <PostGroupBase
      data={messages}
      _id={user_id}
      isDelete={false}
      scroll={false}
    />
  );
}
