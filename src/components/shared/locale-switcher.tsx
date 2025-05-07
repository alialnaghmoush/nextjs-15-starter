"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    getLocaleName,
    getLocalizedUrl
} from "intlayer";
import { Globe } from "lucide-react";
import { useLocale } from "next-intlayer";
import Link from "next/link";

export const LocaleSwitcher = () => {
    const { locale, pathWithoutLocale, availableLocales, setLocale } =
        useLocale();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 px-0">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                {availableLocales.map((localeItem) => (
                    <DropdownMenuItem key={localeItem} asChild>
                        <Link
                            href={getLocalizedUrl(pathWithoutLocale, localeItem)}
                            hrefLang={localeItem}
                            aria-current={locale === localeItem ? "page" : undefined}
                            onClick={(e) => {
                                e.preventDefault();
                                setLocale(localeItem);
                            }}
                            className="flex items-center gap-2"
                        >
                            <span className="font-medium">
                                {localeItem}
                            </span>
                            <span className="text-muted-foreground">
                                {getLocaleName(localeItem, locale)}
                            </span>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};