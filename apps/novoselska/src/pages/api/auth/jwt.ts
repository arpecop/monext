
import type { APIRoute } from 'astro';
import { createSecretKey } from "crypto";
import { SignJWT } from "jose";
export const prerender = false


export async function GET(req: APIRoute) {
  const secret = "1347cc301b614b6b264527e494148261";
  const key = createSecretKey(Buffer.from(secret, "utf8"));

  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(key);
  console.log(token);

  return new Response(token, {
    status: 200,
  });
};
