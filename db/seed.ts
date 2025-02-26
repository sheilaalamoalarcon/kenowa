import { db, Messages, NOW, Saved } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Messages).values([
    {
      id: "0",
      proprietary: "7bc1554f-dcf8-4ddb-918f-de4afb0f170a",
      proprietary_name: "Sheila Álamo",
      title: "New Message Title",
      subtitle: "New Message Subtitle",
      html_content: "<strong>new message created by seed</strong>",
      created_at: NOW,
    },
  ]);
}
