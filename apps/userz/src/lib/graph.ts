import { drizzle } from "drizzle-orm/pg-proxy";
import { text, integer, pgSchema, pgTable } from "drizzle-orm/pg-core";

import { eq, lt, gte, ne, and, or, sql } from "drizzle-orm";
export { eq, lt, gte, ne, and, or, sql };

const mySchema = pgSchema("q");
export const q_q = mySchema.table("q", {
  genid: text("genid").primaryKey(),
  text: text("text"),
  image: text("image"),
  rand: integer("rand"),
});
export const q_a = mySchema.table("a", {
  genid: text("genid").primaryKey(),
  text: text("text"),
});
export const questions = pgTable("questions", {
  genid: text("genid").primaryKey(),
  text: text("text"),
  type: text("type"),
});
export const db = drizzle(
  async (sql, params, method) => {
    try {
      const rows = await fetch("https://sql.kloun.lol/", {
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
