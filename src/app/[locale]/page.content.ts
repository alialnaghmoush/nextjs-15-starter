import { t, type Dictionary } from "intlayer";

const pageContent = {
    key: "home",
    content: {
        meta: {
            title: t({
                en: "Home",
                ar: "الرئيسية",
            }),
            description: t({
                en: "Home page",
                ar: "الصفحة الرئيسية",
            }),
        },
        main: t({
            en: "Get started by editing",
            ar: "ابدأ بتعديل",
        }),
        pageLink: "src/app/[locale]/page.tsx",
        save: t({
            en: "Save and see your changes instantly.",
            ar: "حفظ ورؤية التغييرات في اللحظة.",
        }),
        deploy: t({
            en: "Deploy now",
            ar: "انشر الآن",
        }),
        readDocs: t({
            en: "Read our docs",
            ar: "اقرأ وثائقنا",
        }),
        learn: t({
            en: "Learn",
            ar: "تعلم",
        }),
        examples: t({
            en: "Examples",
            ar: "أمثلة",
        }),
        goToNextjs: t({
            en: "Go to nextjs.org",
            ar: "الذهاب إلى nextjs.org",
        }),

    },
} satisfies Dictionary;

export default pageContent;