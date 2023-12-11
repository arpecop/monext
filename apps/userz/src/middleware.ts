
import type { MiddlewareHandler } from "astro";



const middleware: MiddlewareHandler = (context, next) => {

  return next();
};

export const onRequest = middleware;