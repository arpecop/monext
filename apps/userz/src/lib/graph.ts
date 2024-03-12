import { drizzle } from "drizzle-orm/neon-http";

import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL!) as any;

export const db = drizzle(sql);
import { text, pgSchema } from "drizzle-orm/pg-core";
import { customVector } from "@useverk/drizzle-pgvector";
const mySchema = pgSchema("q");
export const ans = mySchema.table("a", {
  genid: text("genid"),
  image: text("image"),
  embed: customVector("embed", { dimensions: 30 }),
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
