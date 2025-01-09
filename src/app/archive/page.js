import { getBlogList, getTags } from '@/helper/blog';
import Link from "next/link";

export default async function Archive() {
    const blogs = await getBlogList();

    const tagMap = getTags(blogs);

    const getRandomSizeClass = () => {
        const sizes = ["text-lg", "text-xl", "text-2xl", "text-3xl"];
        return sizes[Math.floor(Math.random() * sizes.length)];
    };

    const getRandomColorClass = () => {
        const colors = ["text-blue-500", "text-red-500", "text-green-500", "text-yellow-500", "text-purple-500"];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="flex flex-wrap gap-4 mt-8">
            {Array.from(tagMap.keys()).map((tag) => (
                <Link key={tag} href={`/archive/${tag}`}>
                    <div
                        className={`transition-transform duration-300 hover:scale-110 ${getRandomSizeClass()} ${getRandomColorClass()} bg-gray-500/10 rounded-lg`}
                        aria-label={`View blogs tagged with ${tag}`}
                    >
                        <p className='p-2'>{tag}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}