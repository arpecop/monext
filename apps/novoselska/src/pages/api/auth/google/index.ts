import type { APIContext } from "astro";


import { serializeCookie } from "lucia/utils";
import { googleAuth } from "../../../../lib/lucia";

export async function POST({ request }: APIContext) {

  const jsonData = await request.json();
  const { cookie } = jsonData;

  const [url, state] = await googleAuth.getAuthorizationUrl();

  const stateCookie = serializeCookie("google_oauth_state", state, {
    httpOnly: true,
    secure: process.env.LOGNAME ? false : true,
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



