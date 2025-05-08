import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: text().primaryKey(),
    name: text().notNull(),
    local_name: text(),
    email: text().notNull().unique(),
    emailVerified: boolean().notNull(),
    image: text(),
    lang: text(),
    role: text(),
    banned: boolean(),
    banReason: text(),
    banExpires: timestamp({ withTimezone: true }),
    createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow()
});