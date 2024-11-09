"use client";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";
import { DirectionProvider } from "@radix-ui/react-direction";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";

export default function AppBreadcrumb() {
    const locale = useLocale();
    const localeDir = getLangDir(locale);
    return (
        <DirectionProvider dir={localeDir}>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                            Building Your Application
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </DirectionProvider>

    );
}