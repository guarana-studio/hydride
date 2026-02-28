import type { Database, Schema } from "$lib/server/db";
import { os } from "@orpc/server";
import type { Session, User } from "better-auth";

export const base = os
  .$context<{
    headers: Headers;
    db: Database;
    schema: Schema;
    user: User | undefined;
    session: Session | undefined;
  }>()
  .errors({
    BAD_REQUEST: {},
    UNAUTHORIZED: {},
    FORBIDDEN: {},
    NOT_FOUND: {},
    TOO_MANY_REQUESTS: {},
    INTERNAL_SERVER_ERROR: {},
  });
