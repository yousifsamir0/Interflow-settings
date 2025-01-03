import { Breadcrumb } from '@/components/bread-crumb'
import NavBar from '@/components/nav-bar'
import { AppSidebar } from '@/components/side-bar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <SidebarProvider >
            <AppSidebar />
            <div className=' w-full flex flex-col font-cairo '>
                <NavBar />
                <div className='px-4 py-4'>
                    <Breadcrumb className='h-16 flex text-lg' />
                    <main className=''>
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Layout