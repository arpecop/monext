import { drizzle } from "drizzle-orm/pg-proxy";
import { serial, text, integer, pgSchema, pgTable } from "drizzle-orm/pg-core";
import axios from "axios";

const mySchema = pgSchema("q");
const q_q = mySchema.table("q", {
  id: text("genid").primaryKey(),
  text: text("text"),
  image: text("image"),
  rand: integer("rand"),
});
const q_a = mySchema.table("a", {
  id: text("genid").primaryKey(),
  text: text("text"),
  image: text("image"),
  rand: integer("rand"),
});
const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  text: text("text"),
  image: text("image"),
  rand: integer("rand"),
});
export const db = drizzle(
  async (sql, params, method) => {
    try {
      const rows = await axios.post("https://sql.kloun.lol/", {
        sql,
        params,
        method,
      });
      return { rows: rows.data };
    } catch (e: any) {
      console.error("Error from pg proxy server: ", e.response.data);
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
