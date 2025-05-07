import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

import "./globals.css";

export async function generateMetadata() {
  return {
    title: "Next.js 15 Starter",
    description: "Next.js 15 with Shadcn UI, Next Themes, Drizzle ORM, Better Auth, and more",
  }
}

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function LocaleLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={cn("bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class">
              {children}
        </ThemeProvider>
      </body>
    </html>
  );
}