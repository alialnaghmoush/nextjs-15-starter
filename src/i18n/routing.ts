import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'ar'],

    // Used when no locale matches
    defaultLocale: 'en',
    localePrefix: 'as-needed'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);


/**
 * Determines the text direction (left-to-right or right-to-left) based on the provided locale.
 * @param locale - The locale to determine the text direction for.
 * @returns The text direction, either "rtl" for right-to-left or "ltr" for left-to-right.
 */
export const localeDir = (locale: string) => locale === "ar" ? "rtl" : "ltr";

/**
 * The type of a locale supported by the application.
 */
export type Locale = (typeof routing.locales)[number];


