
import { MiddlewareHandler } from "astro";
export const onRequest: MiddlewareHandler = ((context, next) => {
  const userAgent = context.request.headers.get("user-agent");
  const botDiff = context.request.cf?.verifiedBotCategory


  const isBot = userAgent && /googlebot|bingbot|yandexbot|slurp|duckduckbot/i.test(userAgent);

  // Check if the user agent is a common browser
  const isBrowser = userAgent && /chrome|safari|firefox|edge/i.test(userAgent);

  // Check if the user agent is a mobile browser
  const isMobileBrowser = userAgent && /android|iphone|ipad|ipod/i.test(userAgent);

  if (botDiff === "AI Crawler") {
    return new Response(
      'Sorry, this site is not available in your country.',
      {
        status: 404,
      }
    );
  } else if (isBrowser || isMobileBrowser || isBot) {
    return next();
  } else {
    return new Response(
      'Sorry, this site is not available in your country.',
      {
        status: 404,
      }
    );
  }
}
);

