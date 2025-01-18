import { column, defineDb } from "astro:db";

const Messages = {
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    propietary: column.text({}),
    propietary_name: column.text({}),
    image: column.text({ optional: true }),
    text: column.text({ optional: false }),
    created_at: column.date({}),
  },
};

const Saved = {
  columns: {
    id: column.text({ primaryKey: true, unique: true, multiline: true }),
    user_id: column.text({ optional: false }),
    message_id: column.text({ optional: false }),
    created_at: column.date(),
  },
  indexes: {
    messageIndex: { on: ["message_id"], unique: true },
    userIndex: { on: ["user_id"] },
  },
};

// https://astro.build/db/config
export default defineDb({
  tables: { Messages, Saved },
});
