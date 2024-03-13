import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const cartTable = pgTable("nasircart", {
  id: serial("id").primaryKey(),
  userid: varchar("userid", { length: 255 }).notNull(),
  productid: varchar("productid", { length: 255 }).notNull(),
  quantity: integer("quantity").notNull(),
});

export type cart = InferModel<typeof cartTable>;
export type Newcart = InferModel<typeof cartTable, "insert">; // insert type

export const db = drizzle(sql);
