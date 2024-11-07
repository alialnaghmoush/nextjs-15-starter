"use client"

import { useTheme } from "next-themes"
import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";


export function ToggleMode() {
    const { theme, setTheme } = useTheme();
    const t = useTranslations('Language');


    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <Button variant="outline" onClick={toggleTheme}>
            {theme === "dark" ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
        </Button>
    )
}

