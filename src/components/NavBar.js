'use client';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Drawer } from '@mui/material';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

const navList = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Blog',
        href: '/blog',
    },
    {
        title: 'Archives',
        href: '/archive',
    },
    {
        title: 'Message',
        href: '/message',
    },
];

export default function NavBar() {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();
    const page = pathname.split("/").slice(0, 2).join("/");

    const handleToggle = () => setOpen(!isOpen);

    return (
        <div>
            <button
                onClick={handleToggle}
                className="md:hidden hover:bg-card p-1 rounded-md"
            >
                {isOpen ? (
                    <CloseOutlinedIcon 
                        sx={{
                            fontSize: { xs: 32, sm: 32, md: 28, lg: 30 },
                        }}
                    />
                ) : (
                    <DehazeIcon
                        sx={{
                            fontSize: { xs: 32, sm: 32, md: 28, lg: 30 },
                        }}
                    />
                )}
            </button>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-6 bg-neutral-300/10 backdrop-blur-md rounded-full px-4 py-2 border border-border shadow">
                {navList.map((link) => (
                    <Link
                        key={link.title}
                        href={link.href}
                        className={`font-medium transition-colors duration-300 ease-in-out ${
                            page === link.href
                                ? "text-text font-bold"
                                : "text-text2 hover:font-bold hover:text-text"
                        }`}
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>

            {/* Drawer */}
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={handleToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'rgb(var(--color-card))',
                        color: 'rgb(var(--color-text))',
                    },
                }}
            >
                <div
                    className="w-64 h-full flex flex-col space-y-4 p-6"
                    role="presentation"
                    onClick={handleToggle}
                    onKeyDown={handleToggle}
                >
                    {navList.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="text-lg font-medium hover:text-gray-400"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </Drawer>
        </div>
    );
}