import type { APIRoute } from "astro";
import { auth } from "../../lib/lucia";
export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  let errormsg = null;
  let payload = null;
  const action = data.get("action");

  const username = data.get("username") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;


  switch (action) {
    case "signin":
      try {
        console.log(username, password);

        const key = await auth.useKey(
          "username",
          username,
          password
        );
        console.log(key);

        const session = await auth.createSession({
          userId: key.userId,
          attributes: {}
        });
        payload = session;


      } catch (error) {
        console.log(error);

        errormsg = (error as Error).message;
      }
      break;
    case "signup":
      try {

        // const key = await auth.createKey({
        //   userId: username,
        //   providerId: "username",
        //   providerUserId: username,
        //   password
        // });
        const user = await auth.createUser({
          key: {
            providerId: "username",
            providerUserId: username.toLowerCase(),
            password
          },
          attributes: {


          }
        });

      } catch (error) {
        console.log(error);
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
      payload,
    }),
    { status: 200 }
  );
};






