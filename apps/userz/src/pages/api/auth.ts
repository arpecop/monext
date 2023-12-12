import type { APIRoute } from "astro";
import { auth } from "../../lib/lucia";
export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  let errormsg = null;
  const action = data.get("action");

  const username = data.get("username") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  switch (action) {
    case "signin":



      try {
        await auth.useKey(
          "username",
          username,
          password
        );
        // const session = await auth.createSession({
        //   userId: key.userId,
        //   attributes: {}
        // });


      } catch (error) {
        console.log(error);

        errormsg = (error as Error).message;
      }
      break;
    case "signup":
      try {
        await auth.createUser({
          userId: username as string,
          key: null,
          attributes: { username: "" },
        });
        const key = await auth.createKey({
          userId: username as string,
          providerId: "email",
          providerUserId: email,
          password,
        });
      } catch (error) {
        errormsg = (error as Error).message;
      }
      break;
    case "forgot":
      try {
        // Implement forgot password logic here
      } catch (error) {
        errormsg = (error as Error).message;
      }
      break;
    default:
      break;
  }
  // Return a response , handle errors
  if (errormsg) {
    return new Response(
      JSON.stringify({
        message: errormsg,
        success: false,
      }),
      { status: 400 }
    );
  }
  return new Response(
    JSON.stringify({
      message: "Success!",
      success: true,
    }),
    { status: 200 }
  );
};






