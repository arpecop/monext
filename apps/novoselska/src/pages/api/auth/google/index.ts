import { googleAuth } from "../../../../lib/lucia";

export async function GET() {

  const [url, state] = await googleAuth.getAuthorizationUrl();



  return new Response(url.toString(), {
    headers: {
      "Set-Cookie": stateCookie,
    },
    status: 200,
  });
};



