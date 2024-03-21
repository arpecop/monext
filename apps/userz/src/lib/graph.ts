import { drizzle } from "drizzle-orm/pg-proxy";

import { Lucia } from "lucia";
import {
  text,
  integer,
  pgSchema,
  pgTable,
  timestamp,
} from "drizzle-orm/pg-core";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

import { eq, lt, gte, ne, and, or, sql } from "drizzle-orm";
export { eq, lt, gte, ne, and, or, sql };

const mySchema = pgSchema("q");
const mySchema1 = pgSchema("u");
export const q_q = mySchema.table("q", {
  genid: text("genid").primaryKey(),
  text: text("text").notNull(),
  image: text("image"),
  rand: integer("rand"),
});
export const q_qtags = mySchema.table("qtags", {
  hashtag: text("hashtag").primaryKey(),
  count: integer("count").notNull(),
  rows_with_tag: text("rows_with_tag").notNull(),
});
export const q_a = mySchema.table("a", {
  genid: text("genid").primaryKey(),
  text: text("text").notNull(),
});
export const questions = pgTable("questions", {
  genid: text("genid").primaryKey(),
  text: text("text").notNull(),
  image: text("image"),
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
  { schema: { q_a, q_q, questions } }
);

const userTable = mySchema1.table("user", {
  id: text("id").primaryKey(),
});

const sessionTable = mySchema1.table("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: import.meta.env.PROD,
    },
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}

export const gquery = async (
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

  return Promise.resolve(json.data);
};
