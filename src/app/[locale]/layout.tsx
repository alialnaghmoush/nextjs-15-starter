import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { localeDir } from "@/i18n/routing";

export function generateMetadata(): Metadata {
  return {
    title: "Next Start Kit",
    description: "NextJs v15 + ShadCN + Drizzle + Next Intl + Next Themes",
    // openGraph: { locale },
  }
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={localeDir(locale)} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
