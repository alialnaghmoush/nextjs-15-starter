import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { isRtlLang } from 'rtl-detect';

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


export const isRtl = (locale: string) => isRtlLang(locale);
export const sideDir = (locale: string) => isRtl(locale) ? "right" : "left";
/**
 * The type of a locale supported by the application.
 */
export type Locale = (typeof routing.locales)[number];


