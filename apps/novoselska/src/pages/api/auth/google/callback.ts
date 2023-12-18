import { OAuthRequestError } from "@lucia-auth/oauth";
import type { APIRoute } from 'astro';
import client from '../../../../lib/client';
import { googleAuth } from "../../../../lib/lucia";
export const prerender = false
const CREATE_USER_MUTATION = gql`
  mutation CreateMessage($channelid: String!, $message: String!) {
    insert_work_chat_one(object: { channel: $channelid, chunk: $message }) {
      id
      channel
      chunk
    }
  }
 `

export async function GET({ url }: APIRoute) {
  const code = url.searchParams.get("code");


  try {
    const { googleUser } = await googleAuth.validateCallback(code);
    console.log(googleUser);

    await client.mutate({
      mutation: CREATE_USER_MUTATION,
      variables: {
        id: googleUser.sub.toString(),
        data: googleUser,
      },
    });


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
