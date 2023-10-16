import type { APIRoute } from "astro";

import { gql } from "../../../components/gql";
export const prerender = false;

export const get: APIRoute = async function get({ params }) {
  const id = params.id || "";

  const datax = await gql(`newssingle`, { _eq: id });
  console.log(datax);

  const response = await fetch(datax.newsbg_by_pk.image);
  const buffer = await response.arrayBuffer();
  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
};
