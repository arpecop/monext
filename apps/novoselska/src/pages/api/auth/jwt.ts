
import type { APIRoute } from 'astro';
import { SignJWT } from 'jose'; // Import the SignJWT class from the 'jose/jwt' package
import { serializeCookie } from "lucia/utils";
import clientssr from "../../../lib/clientssr";

const CREATE_MESSAGE_MUTATION = `
mutation MyMutation($object: chat_u_insert_input = {}) {
  insert_chat_u_one(object: $object) {
    id
    data
  }
}
`;


export async function GET(req: APIRoute) {
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

  const userId = "test2"; // replace with actual user id
  const defaultRole = "public"; // replace with actual default role
  const allowedRoles = ["public"]; // replace with actual allowed roles

  const token = await new SignJWT({
    "https://hasura.io/jwt/claims": {
      "x-hasura-user-id": userId,
      "x-hasura-default-role": defaultRole,
      "x-hasura-allowed-roles": allowedRoles
    }
  })
    .setProtectedHeader({ alg: "HS256" })
    // .setExpirationTime("24h")
    .setIssuedAt()
    .sign(key);


  const t = await clientssr(CREATE_MESSAGE_MUTATION, { "object": { "id": "test2" } }, token);
  console.log(t);

  const stateCookie = serializeCookie("token", token, {
    httpOnly: true,
    secure: process.env.LOGNAME === 'rudix' ? false : true,
    path: "/",
    maxAge: 60 * 60,
    sameSite: "strict",
  });


  return new Response(JSON.stringify({ token }), {
    status: 200,
    headers: {
      "Set-Cookie": stateCookie,
      "Content-Type": "application/json",
    }
  });
};
