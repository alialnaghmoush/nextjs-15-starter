import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const jwkss = pgTable("jwkss", {
    id: text().primaryKey(),
    publicKey: text().notNull(),
    privateKey: text().notNull(),
    createdAt: timestamp({ withTimezone: true }).notNull().defaultNow()
});