'use client';
import { fetchGitHubRepos } from '@/helper/github';
import { useEffect, useState } from "react";
import MotionWrapper from './MotionWrapper';

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
        <div className="w-full mb-12">
            <MotionWrapper
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
            <ul className="list-disc space-y-2">
                {repos.map((repo) => (
                <li
                    key={repo.name}
                    className="flex space-x-2 border-b border-border items-center p-2"
                >
                    <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:underline font-semibold text-base"
                    >
                    {repo.name}
                    </a>

                    <div className="">
                    <p className="text-sm text-text2">{repo.created_at} <span className="tracking-wider">⭐{repo.stars}</span></p>
                    </div>
                </li>
                ))}
            </ul>
            </MotionWrapper>
        </div>

    );
}