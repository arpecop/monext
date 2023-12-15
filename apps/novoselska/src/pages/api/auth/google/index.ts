import type { APIRoute } from "astro";
import { serializeCookie } from "lucia/utils";
import { googleAuth } from "../../../../lib/lucia";
export async function GET({ request }: APIRoute) {

  const [url, state] = await googleAuth.getAuthorizationUrl();
  const stateCookie = serializeCookie("google_oauth_state", state, {
    httpOnly: true,
    secure: process.env.LOGNAME === 'rudix' ? false : true,
    path: "/",
    maxAge: 60 * 60,
    sameSite: "strict",
  });

  return new Response(url.toString(), {
    headers: {
      "Set-Cookie": stateCookie,
    },
    status: 200,
  });
};



