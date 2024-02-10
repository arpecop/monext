import type { APIRoute } from "astro";

import client, { gql } from "../../../../data/hasura";
export const prerender = false;

export const get: APIRoute = async function get({ params }) {
  const id = params.id || "";
  try {


    const datax = await client.query({
      query: gql`
       query MyQuery($offset: Int = 0, $_eq: String = "") {
      newsbg(limit: 30, offset: $offset, where: { nid: { _eq: $_eq } }) {
        image
      }
    }
  `,
      variables: {
        _eq: id,
      },
    });
    const response = await fetch(datax[0].image);
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
