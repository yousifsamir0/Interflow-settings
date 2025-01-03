"use client"
import React from 'react'
import { useTheme } from "next-themes";
import { Moon, Sun } from 'lucide-react';


const ThemeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
            className='p-1  rounded-lg shadow-md focus:outline-none'
        >
            {(currentTheme !== 'dark') ? <Moon className='text-[#000]' /> : <Sun className='text-[#fff]' />}

        </button>
    )
}

export default ThemeButton
