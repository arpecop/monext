import { drizzle } from "drizzle-orm/neon-serverless";

import { Pool } from "@neondatabase/serverless";

export const sql = new Pool({
  connectionString:
    "postgresql://rudix.lab:sV6LEpc7KWmd@ep-ancient-bread-80418612.eu-central-1.aws.neon.tech/neondb?sslmode=require",
});

// import { text, pgTable } from "drizzle-orm/pg-core";
// import { customVector } from "@useverk/drizzle-pgvector";
//
// const questions = pgTable("questions", {
//   genid: text("genid"),
//   image: text("image"),
//   embed: customVector("embed", { dimensions: 30 }),
// });

export const db = drizzle(sql);

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
