import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import { lucia } from "lucia";
import { astro } from "lucia/middleware";
// import postgres from "postgres";
const pgurl = process.env.PGURL as string;
// const sql = postgres(pgurl);

export const auth = lucia({
  adapter: postgresAdapter({}, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  middleware: astro(),
  env: "DEV",
});

export type Auth = typeof auth;
