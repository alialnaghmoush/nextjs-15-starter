import db from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { jwt, openAPI } from "better-auth/plugins";


export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        usePlural: true,
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    plugins: [
        openAPI(),
        jwt(),
    ],
    user: {
        additionalFields: {
            local_name: {
                type: "string",
                required: false,
            },
            lang: {
                type: "string",
                required: false,
                defaultValue: "en",
            },
        },
    },
});