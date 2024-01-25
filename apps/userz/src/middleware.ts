

import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const userAgent = context.request.headers.get("user-agent");

  // Check if the user agent is a popular bot like Google
  const isBot = userAgent && /googlebot|bingbot|yandexbot|slurp|duckduckbot/i.test(userAgent);

  // Check if the user agent is a common browser
  const isBrowser = userAgent && /chrome|safari|firefox|edge/i.test(userAgent);

  // Check if the user agent is a mobile browser
  const isMobileBrowser = userAgent && /android|iphone|ipad|ipod/i.test(userAgent);

  if (isBot) {

    console.log("Bot request detected");

    return next();
  } else if (isBrowser || isMobileBrowser) {
    return next();
  } else {
    return;
  }
};

