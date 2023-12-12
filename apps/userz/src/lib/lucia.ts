import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { lucia } from "lucia";
import { astro } from "lucia/middleware";


const client = new PrismaClient().$extends(withAccelerate())




export const auth = lucia({
  adapter: prisma(client, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  getUserAttributes: (databaseUser) => {
    return {
      username: databaseUser.username,
    };
  },
  middleware: astro(),
  env: "PROD",
});

