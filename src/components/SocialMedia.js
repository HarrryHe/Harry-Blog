"use client";
import BilibiliIcon from './assets/BilibiliIcon';
import EmailIcon from './assets/EmailIcon';
import GithubIcon from './assets/GithubIcon';
import LinkedInIcon from './assets/LinkedInIcon';

const socialMediaList = [
    {
        name: 'Github',
        href: 'https://github.com/HarrryHe',
        Icon: GithubIcon,
    },
    {
        name: 'LinkedIn',
        href: 'www.linkedin.com/in/jiacheng-he-harry',
        Icon: LinkedInIcon,
    },
    {
        name: 'Bilibili',
        href: 'https://space.bilibili.com/678613973',
        Icon: BilibiliIcon,
    },
    {
        name: 'Email',
        href: 'mailto:harry.he@temple.edu',
        Icon: EmailIcon,
    },
];

export default function SocialMedia() {
    return (
        <div className="mt-10 md:mt-12">
            <ul className="flex space-x-4 md:space-x-6">
            {socialMediaList.map((social, index) => (
                <li key={index} className="flex flex-row space-between">
                <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-2 border border-border rounded-lg hover:opacity-75 hover:bg-card"
                    aria-label={social.name}
                >
                    <social.Icon className="w-4 h-4 md:w-6 md:h-6 text-text" />
                </a>
                </li>
            ))}
            </ul>
        </div>
    );
}
