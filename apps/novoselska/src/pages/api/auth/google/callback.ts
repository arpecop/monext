import { OAuthRequestError } from "@lucia-auth/oauth";
import type { APIRoute } from 'astro';
import { SignJWT } from 'jose';
import { serializeCookie } from 'lucia/utils';
import client from '../../../../lib/clientssr';
import { googleAuth } from "../../../../lib/lucia";
export const prerender = false
const CREATE_USER_MUTATION = `
mutation MyMutation($object: chat_u_insert_input = {}) {
  insert_chat_u_one(object: $object) {
    id
    data
  }
}

 `

export async function GET({ url }: APIRoute & { url: URL }) {
  const code = url.searchParams.get("code") || "";
  try {
    const { googleUser } = await googleAuth.validateCallback(code);
    console.log(googleUser);


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
        "x-hasura-user-id": googleUser.sub.toString(),
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


    await client(CREATE_USER_MUTATION,
      {
        object: {
          id: googleUser.sub.toString(),
          data: googleUser,
          uid: token
        }
      }
    );

    return new Response(
      JSON.stringify({
        id: googleUser.sub,
        picture: googleUser.picture,
        name: googleUser.name,
        date: new Date().toISOString(),
      }), {
      headers: {
        "Set-Cookie": stateCookie,
      },
      status: 200,
    }
    );
  } catch (err) {
    if (err instanceof OAuthRequestError) {
      return new Response(err.message, {
        status: 401,
        statusText: "Unauthorized",
      });
    }
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
