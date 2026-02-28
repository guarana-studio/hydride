import { base } from "$lib/server/rpc";

export const users = {
  me: base.handler(async ({ context }) => {
    return context.user;
  }),
};
