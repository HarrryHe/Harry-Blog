import DateRangeIcon from '@mui/icons-material/DateRange';
import Link from "next/link";

export default function Blogs({ blogs }) {
    return (
        <div className="mt-8">
            <ul className="flex justify-center flex-col items-center gap-10">
                {blogs.map((blog) => (
                    <li key={blog.slug} className="p-2 w-full border-2 border-border rounded-lg shadow-lg hover:shadow-xl hover:bg-card transition duration-100">
                        <Link href={`/blog/${blog.slug}`} className="flex flex-col gap-8 h-full">
                        <div className="aspect-[16/9] h-56 md:h-52 md:h-64 w-full overflow-hidden rounded-lg">
                            <img
                                src={blog.cover}
                                alt={blog.title}
                                className="w-full h-full object-cover shadow transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                            <div className="px-4 w-full h-32 md:h-28">
                                <h2 className="text-gstart font-bold text-xl">{blog.title}</h2>
                                <p className="text-text2 text-light text-sm md:text-base mb-4"> <DateRangeIcon 
                                sx={{
                                    fontSize: { xs:14, sm:16, md:18 },
                                }}/>&nbsp;
                                {blog.date} | {blog.tags.map((tag) => (<span key={tag} className="px-2">#{tag}</span>))}</p>
                                <p className="text-text text-sm text-light md:text-base truncate">{blog.description}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}