import { type CMessage } from "@/constants/classes";
import { parseDate } from "@/constants/methods";
import { HeaderButton } from "../HeaderButton";

interface Props extends CMessage {
  user_id: string;
  isDelete: boolean;
}

export default function Card(params: Props) {
  const { image, text, created_at, id, isDelete, user_id } = params;

  return (
    <figure className="flex flex-col gap-9 min-w-96 rounded p-12 bg-stone-400/25 shadow-xl drop-shadow-sm aria-busy:animate-fade-up animate-once animate-ease-in-out animate-fill-both">
      <HeaderButton propietary={user_id} message_id={id} isDelete={isDelete} />

      {image && (
        <img
          className="w-full h-96 self-center rounded shadow drop-shadow-md object-cover"
          src={image}
          alt={text || "Post image"} // Meaningful alt text
          loading="lazy"
          role="img"
        />
      )}
      <figcaption className="flex flex-col w-full items-start">
        <h4 className="w-full font-semibold text-xl text-black dark:text-white">
          {text}
        </h4>
        <time
          className="w-full text-xs font-light text-black dark:text-white opacity-30"
          dateTime={created_at}
        >
          {parseDate(created_at)}
        </time>
      </figcaption>
    </figure>
  );
}
