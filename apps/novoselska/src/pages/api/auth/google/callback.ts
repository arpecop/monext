import { OAuthRequestError } from "@lucia-auth/oauth";
import { googleAuth } from "../../../../lib/lucia";

export async function GET({ url }) {
  const code = url.searchParams.get("code") as string;
  try {
    const { googleUser } = await googleAuth.validateCallback(code);
    console.log(googleUser);

    return new Response(
      JSON.stringify({
        id: googleUser.sub,
        picture: googleUser.picture,
        name: googleUser.name,
        date: new Date().toISOString(),
      })
    );
  } catch (err) {
    if (err instanceof OAuthRequestError) {
      return new Response("Unauthorized", {
        status: 401,
        statusText: "Unauthorized",
      });
    }
    return new Response("Something went wrong", {
      status: 500,
    });
  }
};
