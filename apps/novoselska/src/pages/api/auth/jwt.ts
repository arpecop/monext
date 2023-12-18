import pkg from '@apollo/client';
import type { APIRoute } from 'astro';
import { SignJWT } from 'jose'; // Import the SignJWT class from the 'jose/jwt' package
import { serializeCookie } from "lucia/utils";
import clientssr from "../../../lib/clientssr";

const { gql } = pkg;


const CREATE_MESSAGE_MUTATION = gql`
mutation MyMutation($object: chat_u_insert_input = {}) {
  insert_chat_u_one(object: $object) {
    id
    data
  }
}
`;


export async function GET(req: APIRoute) {
  const secret = "1347cc301b614b6b264527e494148268";
  const encoder = new TextEncoder();
  const data = encoder.encode(secret);

  const key = await crypto.subtle.importKey(
    "raw",
    data,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const userId = "test"; // replace with actual user id
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


  clientssr(token)
    .mutate({
      mutation: CREATE_MESSAGE_MUTATION,
      variables: {
        "object": { "id": "test" }
      },
    })
    .then((result) => {
      console.log(result.data);
    })
    .catch((error) => {
      console.error(error);
    });
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
