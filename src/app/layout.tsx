import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function LocaleLayout({ children }: RootLayoutProps) {
  return children;
}