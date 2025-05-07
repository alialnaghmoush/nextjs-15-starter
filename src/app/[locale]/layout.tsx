import { RedixProvider } from "@/components/shared/redix-provider";
import { fontSans } from "@/lib/fonts";
import { getDir } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { getHTMLTextDir } from "intlayer";
import type { NextLayoutIntlayer } from "next-intlayer";
import { IntlayerClientProvider } from "next-intlayer";
import { ThemeProvider } from "next-themes";

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
    const { locale } = await params;

    return (
        <html lang={locale} dir={getHTMLTextDir(locale)} suppressHydrationWarning>
            <body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
                <IntlayerClientProvider locale={locale}>
                    <ThemeProvider attribute="class">
                        <RedixProvider dir={getDir(locale)}>
                            {children}
                        </RedixProvider>
                    </ThemeProvider>
                </IntlayerClientProvider>
            </body>
        </html >
    );
};

export default LocaleLayout;