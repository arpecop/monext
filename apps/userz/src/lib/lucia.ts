import { lucia } from "lucia";


import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import { neon } from "@neondatabase/serverless";
import { astro } from "lucia/middleware";

const sql1 = neon(process.env.DB_URL2 || "");
const sql = {
  ...sql1,
  unsafe: async (query: string, ...params: any[]) => {
    const result = await sql1(query, ...params);
    return (result as any).rows;
  },
};


export const auth = lucia({
  adapter: postgresAdapter(sql as any, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  middleware: astro(),
  env: "DEV",
});