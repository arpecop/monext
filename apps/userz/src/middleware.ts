


export const onRequest: defineMiddleware = ((context, next) => {
  const userAgent = context.request.headers.get("user-agent");
  const botDiff = context.request.cf?.verifiedBotCategory



  // Check if the user agent is a popular bot like Google
  const isBot = userAgent && /googlebot|bingbot|yandexbot|slurp|duckduckbot/i.test(userAgent);

  // Check if the user agent is a common browser
  const isBrowser = userAgent && /chrome|safari|firefox|edge/i.test(userAgent);

  // Check if the user agent is a mobile browser
  const isMobileBrowser = userAgent && /android|iphone|ipad|ipod/i.test(userAgent);

  if (botDiff === "AI Crawler" || botDiff === "Search Engine Optimization") {
    return;
  } else if (isBrowser || isMobileBrowser || isBot) {
    return next();
  } else {
    return;
  }
}
);

