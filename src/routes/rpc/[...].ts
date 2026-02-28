import { auth } from "$lib/server/auth";
import { db, schema } from "$lib/server/db";
import { router } from "$lib/server/routers";
import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { defineHandler, HTTPError } from "nitro/h3";

const handler = new RPCHandler(router, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export default defineHandler(async (event) => {
  const authSession = await auth.api.getSession({ headers: event.req.headers });
  const { response } = await handler.handle(event.req, {
    prefix: "/rpc",
    context: {
      headers: event.req.headers,
      db,
      schema,
      user: authSession?.user,
      session: authSession?.session,
    },
  });
  if (response) {
    return response;
  }
  return HTTPError.status(404);
});
