'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

export function Breadcrumb({ className }: { className?: string }) {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)
    const t = useTranslations('breadcrumbs')

    return (
        <nav className={cn("text-sm mb-4", className)}>
            <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                    <Link href="/" className="text-[#003c47] hover:text-[#29997f] dark:text-[#baf3e6] dark:hover:text-[#97e3d1]">
                        {t('home')}
                    </Link>
                    <span className="mx-2">/</span>
                </li>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join('/')}`
                    const isLast = index === pathSegments.length - 1
                    return (
                        <li key={segment} className="flex items-center">
                            {isLast ? (
                                <span className="text-gray-500"> {t(segment)}</span>
                            ) : (
                                <>
                                    <Link href={href} className="text-[#003c47] hover:text-[#29997f] dark:text-[#baf3e6] dark:hover:text-[#97e3d1]">
                                        {t(segment)}
                                    </Link>
                                    <span className="mx-2">/</span>
                                </>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

