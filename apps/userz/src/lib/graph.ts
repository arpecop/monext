import { drizzle } from "drizzle-orm/neon-http";
import pkg from "pg";
const { Client } = pkg;

import { text, pgTable } from "drizzle-orm/pg-core";
import { customVector } from "@useverk/drizzle-pgvector";
const questions = pgTable("questions", {
  genid: text("genid"),
  image: text("image"),
  embed: customVector("embed", { dimensions: 30 }),
});

export const db = async () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  }) as any;
  await client.connect();
  const dbx = drizzle(client, { schema: { questions } });
  return dbx;
};

// export const db = drizzle(sql, { schema: { questions } });

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
