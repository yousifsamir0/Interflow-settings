import React from 'react'
import { Input } from './ui/input'
import { MoonIcon, Sun } from 'lucide-react'
import { SidebarTrigger } from './ui/sidebar'
import { LanguageSelect } from './language-select'
import ThemeButton from './theme-button'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className='w-full flex justify-between items-center pe-[5%] ps-[2%] py-2 shadow-sm relative'>
            <div className='flex justify-center items-center gap-4'>
                <SidebarTrigger />
                <div><Input placeholder='Search' /></div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <ThemeButton />
                <LanguageSelect />
            </div>
        </nav>
    )
}

export default NavBar