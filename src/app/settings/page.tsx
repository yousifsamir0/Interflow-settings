import SettingCard from '@/components/setting-card'
import { Bell, Building, Clock, CreditCard, Globe, HeadphonesIcon, LayoutDashboard, Settings, Shield, Ticket, Truck, UserCog, Users, Wallet } from 'lucide-react'
import React from 'react'


let settings = [
    // {
    //     title: 'General Settings',
    //     description: 'Manage your account preferences and basic information.',
    //     href: '/settings',
    //     icon: Settings,
    // },
    // {
    //     title: 'Payment Settings',
    //     description: 'Update your payment methods and billing information.',
    //     href: '/settings/payment',
    //     icon: CreditCard,
    // },
    // {
    //     title: 'Dashboard Settings',
    //     description: 'Customize your dashboard layout and widgets.',
    //     href: '/settings/dashboard',
    //     icon: LayoutDashboard,
    // },
    // {
    //     title: 'Notification Settings',
    //     description: 'Control how and when you receive notifications.',
    //     href: '/settings/notifications',
    //     icon: Bell,
    // },
    // {
    //     title: 'Security Settings',
    //     description: 'Manage your account security and privacy options.',
    //     href: '/settings/security',
    //     icon: Shield,
    // },
    { key: 'generalSettings', href: '/settings', icon: Settings },
    { key: 'paymentSettings', href: '/settings/payment', icon: CreditCard },
    { key: 'wallet', href: '/settings/wallet', icon: Wallet },
    { key: 'temporaryMaintenance', href: '/settings/maintenance', icon: Clock },
    { key: 'domainSettings', href: '#', icon: Globe, comingSoon: true },
    { key: 'usersSettings', href: '/settings/users', icon: Users },
    { key: 'technicalSupport', href: '/settings/support', icon: HeadphonesIcon },
    { key: 'branches', href: '/settings/branches', icon: Building },
    { key: 'employeesPermissions', href: '/settings/permissions', icon: UserCog },
    { key: 'deliverySettings', href: '#', icon: Truck, comingSoon: true },
    { key: 'coupons', href: '/settings/coupons', icon: Ticket },
]
const SettingsPage = () => {

    return (
        <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>

            {settings.map((setting, index) => (

                <SettingCard key={index} cardData={setting} />
            ))}
            {settings.map((setting, index) => (

                <SettingCard key={index} cardData={setting} />
            ))}

        </div>
    )
}

export default SettingsPage