'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function GiscusComment() {
    const { theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState('noborder_dark');

    useEffect(() =>{
        if (theme === 'dark') {
            setCurrentTheme('noborder_dark');
        } else {
            setCurrentTheme('noborder_light');
        }
    }, [theme])
    return (
        <div className="mt-20">
            <Giscus 
            id="comments"
            repo="HarrryHe/Harry-Blog"
            repoId="R_kgDONmMt_w"
            category="General"
            categoryId="DIC_kwDONmMt_84Cl3JP"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={currentTheme}
            lang="en"
            loading="lazy" />
        </div>
    )
}