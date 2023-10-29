import { Database } from "./types"; // this is the Database interface we defined earlier
import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";

const dialect = new PostgresDialect({
  pool: new Pool({
    database: "neondb",
    host: "ep-ancient-bread-80418612.eu-central-1.aws.neon.tech",
    user: "rudix.lab",
    password: process.env.DB_URL1?.split(":")[2].split("@")[0] || "",
    port: 5432,
    max: 1000,
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
});
