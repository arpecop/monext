import { drizzle } from "drizzle-orm/pg-proxy";

// import { Lucia } from "lucia";
import { text, integer, pgTable, json } from "drizzle-orm/pg-core";

import { eq, lt, gte, ne, le, and, or, sql, desc } from "drizzle-orm";
export { eq, lt, gte, ne, le, and, or, sql, desc };

export const questions = pgTable("questions", {
  genid: text("genid").primaryKey(),
  text: text("text").notNull(),
  image: text("image"),
  type: text("type").notNull(),
});

export const newsbg = pgTable("newsbg", {
  id: integer("id").primaryKey(),
  nid: text("nid").notNull(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  date: text("date").notNull(),
  cat: text("cat").notNull(),
  html: json("html").notNull(),
  type: text("type").notNull(),
});

export const agregator = pgTable("aggregator", {
  cat: text("cat_with_suffix").notNull().primaryKey(),
  count: integer("total_count").notNull(),
});

export const jokes = pgTable("jokes", {
  uid: text("uid").notNull().primaryKey(),
  id: text("id").notNull(),
  cat: text("cat").notNull(),
  joke: text("joke").notNull(),
  count: integer("total_count").notNull(),
});
export const tweets = pgTable("tweets", {
  uid: text("uid").notNull().primaryKey(),
  cat: text("cat").notNull(),
});

export const db = drizzle(
  async (sql, params, method) => {
    try {
      const rows = await fetch("http://sql.kloun.lol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          sql,
          params,
          method,
        }),
      });
      const json = await rows.json();
      return { rows: json };
    } catch (e: any) {
      console.error("Error from pg proxy server: ", e.response);
      return { rows: [] };
    }
  },
  { schema: { questions } }
);

// export const lucia = new Lucia(adapter, {
//   sessionCookie: {
//     attributes: {
//       // set to `true` when using HTTPS
//       secure: import.meta.env.PROD,
//     },
//   },
// });
