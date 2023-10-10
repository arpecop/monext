import { lucia } from "lucia";
import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import { astro } from "lucia/middleware";
import postgres from "postgres";
const sql = postgres(
  "postgresql://rudixrudix:MzNP0Vn4FlHC@ep-late-hill-89493737-pooler.eu-central-1.aws.neon.tech:5432/neondb?sslmode=require"
);

export const auth = lucia({
  adapter: postgresAdapter(sql, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  middleware: astro(),
  env: "DEV",
});

export type Auth = typeof auth;
