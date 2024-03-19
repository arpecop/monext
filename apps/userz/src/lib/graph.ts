import { drizzle } from "drizzle-orm/pg-proxy";
import { serial, text, integer, pgSchema } from "drizzle-orm/pg-core";
import axios from "axios";
const db = drizzle(async (sql, params, method) => {
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
});

export const mySchema = pgSchema("q");
export const q_q = mySchema.table("q", {
  id: serial("genid").primaryKey(),
  text: text("text"),
  image: text("image"),
  rand: integer("rand"),
});

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
