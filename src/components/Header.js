'use client';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from 'next-themes';
import Link from "next/link";
import NavBar from './NavBar.js';

export default function Header() {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <header className='flex w-full top-0 z-10 p-4 justify-between'>
            <div className=''>
                <img
                src='/Images/kemiao.jpg'
                className='rounded-md w-10 h-10 border-border border hover:animate-spin'
                />
            </div>

            <div className='flex items-center justify-between gap-x-4 px-2'>
                <NavBar />
                <div className='flex items-center justify-between gap-x-4'>
                    <button
                        onClick={toggleTheme}
                        className="hover:bg-card p-1 rounded-md"
                    >
                        { theme === 'light' ? (
                            <LightModeIcon
                                sx={{
                                    fontSize: { xs: 32, sm: 32, md: 28, lg: 30 },
                                }}
                            />
                        ): (
                            <DarkModeIcon 
                                sx={{
                                    fontSize: { xs: 32, sm: 32, md: 28, lg: 30 },
                                }}
                            />
                        )}
                    </button>
                    <Link
                        href="https://github.com/HarrryHe"
                        target="_blank"
                        className="hover:bg-card p-1 rounded-md"
                        >
                        <GitHubIcon 
                            sx={{
                                fontSize: { xs: 32, sm: 32, md: 28, lg: 30 },
                            }}
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}