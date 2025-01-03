import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

type Props = {
    className?: string,
    cardData: {
        key: string,
        href: string,
        icon: any,
        comingSoon?: boolean,
    }
}





const SettingCard = ({ className, cardData }: Props) => {
    const t = useTranslations();
    return (
        <div
            className={cn(
                "px-4 py-8 shadow-lg w-full text-center relative",
                "border-muted-foreground border rounded-lg",
                "cursor-pointer font-cairo",
                "hover:bg-slate-200 dark:hover:bg-slate-800",
                // `${cardData.comingSoon ? 'opacity-50' : ''}`,
                className)}
        >
            <div className={cn(
                "px-2 py-1 rounded-3xl",
                "absolute top-3 end-3",
                "bg-[#baf3e6] text-[#003c47] font-medium",
                !cardData.comingSoon && "hidden",
            )}>
                {t('comingSoon')}
            </div>
            <Link href={cardData.href} className='flex flex-col items-center gap-2'>
                <cardData.icon className="dark:text-[#baf3e6] text-[#003c47]" size={32} />
                <h1 className='text-lg'> {t(`${cardData.key}.title`)} </h1>
                {cardData.comingSoon && <span className="ml-2 text-xs text-muted-foreground">{t('comingSoon')}</span>}
                <p className='text-sm text-muted-foreground'>{t(`${cardData.key}.description`)} </p>
            </Link>
        </div>
    )
}

export default SettingCard