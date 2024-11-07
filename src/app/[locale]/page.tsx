import { NextLogo } from "@/components/global/next-logo";
import { ToggleLocale } from "@/components/global/toggle-locale";
import { ToggleMode } from "@/components/global/toggle-mode";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations('Navbar');
  return (
    <div className="min-h-screen min-w-full flex flex-col justify-start p-8">
      <header className="flex flex-row justify-between gap-2">
        <div>
          <Link href="/">
            <NextLogo />
          </Link>
        </div>
        <div className="flex flex-row gap-2">
          <ToggleMode />
          <ToggleLocale />
          <Button variant="outline">
            <Link href="#">{t('login')}</Link>
          </Button>
          <Button variant="default">
            <Link href="#">{t('register')}</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}