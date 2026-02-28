import "$lib/server/server-only";
import { os } from "@orpc/server";

import { users } from "./users";

export const router = {
  users,
  ping: os.handler(async () => {
    return "pong";
  }),
};
