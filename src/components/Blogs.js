import Bell from '@/components/assets/Bell';
import Link from "next/link";

export default function Blogs({ blogs }) {
    return (
        <div className="my-12">
        <div className="relative">
            <ul className="space-y-8 ">
            {blogs.map((blog) => (
                <li key={blog.slug} className="relative p-2 border-l-2 border-border mx-4 w-full md:w-2/3">
                <Bell className="absolute left-[-13px] top-[-28px] w-6 h-6 rounded-full text-text2" />
                
                <p className="text-sm text-gray-500">{blog.date}</p>
                
                <Link href={`/blog/${blog.slug}`} className="group">
                    <h3 className="text-base md:text-lg font-semibold text-text group-hover:underline">
                    {blog.title}
                    </h3>
                </Link>
                <p className="text-gray-600 text-sm line-clamp-2 w-5/6">
                    {blog.description}
                </p>

                <div className="mt-1 flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-green-300/20 text-text2 rounded-md"
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
}
