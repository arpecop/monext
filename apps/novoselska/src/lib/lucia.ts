// src/lib/lucia.ts

import { prisma } from "@lucia-auth/adapter-prisma";
import { google } from '@lucia-auth/oauth/providers';
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
  getUserAttributes: (data) => {
    return {
      id: data.id,
      name: data.name,
      picture: data.picture,
      email: data.email,
    };
  },
  middleware: astro(),
  env: "PROD",
});





export const googleAuth = google(auth, {
  clientId:
    '505450551021-vu1amcbd0ls2gokvssqqh5k1gdq3s55q.apps.googleusercontent.com',
  clientSecret: process.env.GSECRET || 'GSECRET',
  redirectUri: process.env.LOGNAME
    ? 'http://localhost:4321/auth/google/'
    : 'https://dr-novoselska.com/auth/google/',
});

export type Auth = typeof auth;
