import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: text().primaryKey(),
    name: text().notNull(),
    local_name: text(),
    email: text().notNull().unique(),
    emailVerified: boolean().notNull(),
    image: text(),
    lang: text(),
    createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow()
});