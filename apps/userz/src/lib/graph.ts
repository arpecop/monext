import { text, pgTable } from "drizzle-orm/pg-core";
import { customVector } from "@useverk/drizzle-pgvector";
//
export const questionz = pgTable("questions", {
  genid: text("genid"),
  image: text("image"),
  embed: customVector("embed", { dimensions: 30 }),
});

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle(client);

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
