import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL as string, { max: 1 });
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
