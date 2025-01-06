'use client';
import { fetchGitHubRepos } from '@/helper/github';
import { useEffect, useState } from "react";

const languageIcons = {
    Java: "/Icons/java.svg",
    Python: "/Icons/python.svg",
    JavaScript: "/Icons/javascript.svg",
    TypeScript: "/Icons/typescript.svg",
    Vue: "/Icons/vue.svg",
    "Unknown": "/Icons/unknown.svg",
}

function LanguageIcon({ language }) {
    const getLanguageIcon = (lang) => languageIcons[lang] || languageIcons["Not specified"];
    return <img src={getLanguageIcon(language) || "/Icons/unknown.svg"} alt={`${language} logo`} className="w-6 h-6" />;
}


export default function Project() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const topRepos = await fetchGitHubRepos('HarrryHe');
            setRepos(topRepos);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) {
        return <p className='text-text2'>Loading...</p>;
    }

    if (repos.length === 0) {
        return <p className='text-text2'>No repositories found.</p>;
    }

    return (
        <div>
            <ul className="list-none space-y-6">
                {repos.map((repo) => (
                <li key={repo.name} className="flex items-center space-x-4">
                    <LanguageIcon language={repo.language} />
                    <div>
                    <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gstart hover:underline font-bold"
                    >
                        {repo.name}
                    </a>
                    <p className="text-sm text-text2">{repo.description}</p>
                    <p className="text-xs text-text">Stars: {repo.stars}</p>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}