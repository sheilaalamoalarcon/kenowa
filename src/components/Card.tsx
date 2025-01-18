import { type CMessage } from "@/constants/classes";
import { parseDate } from "@/constants/methods";
import { HeaderButton } from "./HeaderButton";

export interface Props {
  user_id: string;
  isDelete: boolean;
  message: CMessage;
}

function Card(params: Props) {
  const { isDelete, user_id, message } = params;
  const { text, created_at, id, propietary_name } = message;

  return (
    <article id="card-test" test-id="card-test" className="card">
      <header class="flex items-center justify-between">
        <h3 class="text-stone-600 dark:text-stone-200">{propietary_name}</h3>
        <HeaderButton
          propietary={user_id}
          message_id={id}
          isDelete={isDelete}
        />
      </header>
      <p className="text-stone-800 truncate max-w-[200px] sm:max-w-[300px] md:max-w-[400px] overflow-hidden text-ellipsis dark:text-stone-50">
        {text}
      </p>
      <time
        className="text-xs font-light text-stone-800/50  mt-6 dark:text-stone-200/50 "
        dateTime={created_at}
      >
        {parseDate(created_at)}
      </time>
    </article>
  );
}
export default Card;
