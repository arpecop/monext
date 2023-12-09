
// This is the function that returns the SVG code
import type { APIRoute } from "astro";
import { svg } from './img';

export const GET: APIRoute = async ({ params }) => {

  return new Response((svg), {
    status: 200,
    headers: {
      "content-type": "image/svg+xml",
    },
  });
}

// Get all posts that are not drafts
