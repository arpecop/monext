import { drizzle } from "drizzle-orm/pg-proxy";

// import { Lucia } from "lucia";
import {
  text,
  integer,
  pgSchema,
  pgTable,
  json,
  timestamp,
} from "drizzle-orm/pg-core";

import { eq, lt, gte, ne, and, or, sql, desc } from "drizzle-orm";
export { eq, lt, gte, ne, and, or, sql, desc };

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
  image: text("image"),
  date: text("date"),
  cat: text("cat").notNull(),
  html: json("html"),
  type: text("type").notNull(),
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

export const gql = async (
  query: string,
  variables?: { [key: string]: unknown }
) => {
  const response = await fetch("https://hasura.kloun.lol/v1/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));

  return json.data;
};
