import type { APIRoute } from 'astro';
import { SignJWT } from "jose";
export const prerender = false;

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

  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(key);
  console.log(token);

  return new Response(token, {
    status: 200,
  });
};
