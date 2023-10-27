import type { APIRoute } from "astro";

import { sql } from "../../../components/gql";
export const prerender = false;

export const get: APIRoute = async function get({ params }) {
  const id = params.id || "";

  const datax = (await sql`select image from newsbg where nid = ${id}`) as {
    image: string;
  }[];
  const response = await fetch(datax[0].image);
  const buffer = await response.arrayBuffer();
  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
};
