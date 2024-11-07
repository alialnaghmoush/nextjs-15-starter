"use client"
import { RiTranslate } from "@remixicon/react"
import { Button } from "../ui/button"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"

export function ToggleLocale() {
    const pathname = usePathname()
    const router = useRouter()
    const locale = useLocale() === 'en' ? 'ar' : 'en'

    return (
        <Button
            variant="outline"
            onClick={() => router.replace(pathname, { locale })}
        >
            <RiTranslate size={16} />
        </Button>
    )
}

