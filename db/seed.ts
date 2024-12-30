import { db, Messages, NOW, Saved } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Messages).values([
    {
      id: "0",
      propietary: "0",
      text: "new message created by seed",
      created_at: NOW,
    },
  ]);
  await db.insert(Saved).values([
    {
      id: "0",
      user_id: "0",
      message_id: "0",
      created_at: NOW,
    },
  ]);
}
