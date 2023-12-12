import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { lucia } from "lucia";

const client = new PrismaClient().$extends(withAccelerate())




export const auth = lucia({
  adapter: prisma(client, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  // middleware: astro(),
  env: "DEV",
});

