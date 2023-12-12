import { lucia } from "lucia";


import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();


export const auth = lucia({
  adapter: prisma(client, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  // middleware: astro(),
  env: "DEV",
});

