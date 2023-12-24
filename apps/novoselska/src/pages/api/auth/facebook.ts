import type { APIRoute } from 'astro';
import { SignJWT } from 'jose';
import { serializeCookie } from 'lucia/utils';
import { facebookAuth } from "../../../lib/lucia"; // Change to the Facebook authentication library

export const prerender = false;

export async function GET({ url }: APIRoute & { url: URL }) {
  const code = url.searchParams.get("code") || "";
  if (!code) {
    return new Response("No code provided", { status: 400 });
  }
  const { facebookUser } = await facebookAuth.validateCallback(code); // Change to the Facebook authentication library function

  const secret = process.env.SECRET;
  const encoder = new TextEncoder();
  const data = encoder.encode(secret);
  const key = await crypto.subtle.importKey(
    "raw",
    data,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const token = await new SignJWT({
    "https://hasura.io/jwt/claims": {
      "x-hasura-user-id": facebookUser.id.toString(),
      "x-hasura-default-role": "public",
      "x-hasura-allowed-roles": ["public"],
    }
  })
    .setProtectedHeader({ alg: "HS256" })
    // .setExpirationTime("24h")
    .setIssuedAt()
    .sign(key);

  const stateCookie = serializeCookie("token", token, {
    httpOnly: true,
    secure: process.env.LOGNAME === 'rudix' ? false : true,
    path: "/",
    maxAge: 60 * 60,
    sameSite: "strict",
  });

  return new Response(
    JSON.stringify({
      id: facebookUser.id,
      picture: facebookUser.picture,
      name: facebookUser.name,
      date: new Date().toISOString(),
    }), {
    headers: {
      "Set-Cookie": stateCookie,
    },
    status: 200,
  });
};
