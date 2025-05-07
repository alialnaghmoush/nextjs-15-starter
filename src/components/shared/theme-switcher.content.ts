import { t, type Dictionary } from "intlayer";

const themeSwitcherContent = {
  key: 'theme-switcher',
  content: {
    light: t({
      en: "Light",
      ar: "فاتح",
    }),
    dark: t({
      en: "Dark",
      ar: "غامق",
    }),
    system: t({
      en: "System",
      ar: "النظام",
    }),
  },
} satisfies Dictionary;

export default themeSwitcherContent;
