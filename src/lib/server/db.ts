import "$lib/server/server-only";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL environment variable is not set");

export { schema };
export const db = drizzle({ connection: { url: process.env.DATABASE_URL }, schema });

export type Database = typeof db;
export type Schema = typeof schema;
