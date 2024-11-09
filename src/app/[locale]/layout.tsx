import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { getLangDir } from "rtl-detect";
import { fontSans } from "@/lib/fonts";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

import "../globals.css";


export function generateMetadata(): Metadata {
  return {
    title: "Next.js Start Kit",
    description: "NextJs v15 + ShadCN + Drizzle + Next Intl + Next Themes",
  }
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
