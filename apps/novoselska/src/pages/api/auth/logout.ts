import type { APIRoute } from "astro";
import { auth } from "../../../lib/lucia";

export const prerender = false;

export const POST: APIRoute = async ({ locals }) => {
  await auth.invalidateSession(locals.session!.sessionId);
  locals.authRequest!.setSession(null);

  return new Response(null, {
    status: 204,
  });
};
