import type { APIRoute } from "astro";

export const prerender = false;

export const get: APIRoute = async function get({ params }) {
  const id = params.id as string;
  try {
    const response = await fetch("datax[0].image");
    const buffer = await response.arrayBuffer();
    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  } catch (e) {
    return new Response("", {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
  }
};
