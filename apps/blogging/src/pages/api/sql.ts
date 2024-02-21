import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const query = data.get("query");
  if (!query) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
