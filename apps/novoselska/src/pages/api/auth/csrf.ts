import authConfig from 'auth:config';
console.log(authConfig);


import type { APIRoute } from 'astro';

export const prerender = false
export async function GET({ url }: APIRoute & { url: URL }) {

  return new Response(
    JSON.stringify({
      // id: googleUser.sub,
      // picture: googleUser.picture,
      // name: googleUser.name,
      // date: new Date().toISOString(),
    }), {
    // headers: {
    //   "Set-Cookie": stateCookie,
    // },
    status: 200,
  }
  );
}