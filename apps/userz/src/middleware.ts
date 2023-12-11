

import type { MiddlewareHandler } from "astro";
import { auth } from './lib/lucia';

export const onRequest: MiddlewareHandler = async (context, next) => {
  context.locals.auth = auth.handleRequest(context);
  return next();
};

