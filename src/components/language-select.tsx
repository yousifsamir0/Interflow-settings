"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { setUserLocale } from "@/services/locale";
import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react";

type Props = {
    className?: string,
}


const languages = [
    { value: "en", label: "English", flag: "🇬🇧" },
    { value: "ar", label: "عربي", flag: "🇸🇦" },
]

export function LanguageSelect({ className }: Props) {
    const t = useTranslations();
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    return (
        <div className={cn(
            "",
            className
        )}>
            <Select
                defaultValue={locale}
                onValueChange={(v) => startTransition(() => setUserLocale(v as Locale))}
            >
                <SelectTrigger className="w-[100px] border-none outline-none focus:ring-0 focus:border-none text-muted-foreground text-lg select-none">
                    <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                    {languages.map((language) => (
                        <SelectItem key={language.value} value={language.value}>
                            {language.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div >
    )
}

