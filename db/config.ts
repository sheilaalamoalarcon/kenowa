import { column, defineDb } from "astro:db";

const Messages = {
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    proprietary: column.text({}),
    proprietary_name: column.text({}),
    title: column.text({ optional: false }),
    subtitle: column.text({ optional: false }),
    html_content: column.text({ optional: false, multiline: true }),
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
