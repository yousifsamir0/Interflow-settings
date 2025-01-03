"use client"
import { Bell, Building, Clock, CreditCard, Globe, HeadphonesIcon, LayoutDashboard, Settings, Shield, Ticket, Truck, UserCog, Users, Wallet } from 'lucide-react'
import { useLocale } from 'next-intl';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Menu items.
interface SettingsSection {
    key: string
    href: string
    icon: React.ElementType
    comingSoon?: boolean
}

const settingsSections: SettingsSection[] = [
    { key: "generalSettings", href: "/settings", icon: Settings },
    { key: "paymentSettings", href: "/settings/payment", icon: CreditCard },
    { key: "wallet", href: "/settings/wallet", icon: Wallet },
    { key: "temporaryMaintenance", href: "/settings/maintenance", icon: Clock },
    { key: "domainSettings", href: "#", icon: Globe, comingSoon: true },
    { key: "usersSettings", href: "/settings/users", icon: Users },
    { key: "technicalSupport", href: "/settings/support", icon: HeadphonesIcon },
    { key: "branches", href: "/settings/branches", icon: Building },
    { key: "employeesPermissions", href: "/settings/permissions", icon: UserCog },
    { key: "deliverySettings", href: "#", icon: Truck, comingSoon: true },
    { key: "coupons", href: "/settings/coupons", icon: Ticket },
]

export function AppSidebar() {
    const locale = useLocale();
    const pathname = usePathname()
    const t = useTranslations()
    return (
        <Sidebar className='font-cairo' side={locale === 'ar' ? "right" : "left"} >
            <SidebarHeader>
                <h2 className="text-lg font-semibold">{t('settings')}</h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {settingsSections.map((section) => (
                        <SidebarMenuItem key={section.key} className='relative'>
                            <SidebarMenuButton className='py-3' asChild isActive={pathname === section.href} disabled={section.comingSoon}>
                                <Link href={section.href} className="flex items-center h-full rounded-none">
                                    <section.icon className="mr-2 h-4 w-4" />
                                    {t(`${section.key}.title`)}
                                </Link>
                            </SidebarMenuButton>
                            {section.comingSoon &&
                                <SidebarMenuBadge className='mt-2'>
                                    <div className='text-sm bg-[#baf3e6] text-[#000] hover:text[#000] rounded-full px-3 py-1 '>

                                        {t('comingSoon')}
                                    </div>

                                </SidebarMenuBadge>}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
