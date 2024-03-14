import { text, pgTable } from "drizzle-orm/pg-core";
import { customVector } from "@useverk/drizzle-pgvector";

//

export const questionz = pgTable("questions", {
  genid: text("genid"),
  image: text("image"),
  embed: customVector("embed", { dimensions: 30 }),
});

export const gquery = async (
  query: string,
  variables?: { [key: string]: unknown }
) => {
  const response = await fetch("http://130.204.65.82/v1/graphql", {
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
