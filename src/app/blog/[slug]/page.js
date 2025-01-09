import MotionWrapper from '@/components/MotionWrapper';
import { getBlog, getBlogList } from '@/helper/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
    const blogs = await getBlogList();

    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function Blog({ params }){
    const { slug } = await params;
    const blog = await getBlog(slug);
    //const mdxSource = await serialize(content);

    if (!blog) {
        notFound();
    }

    const { data, content } = blog;

    return (
        <div className="w-full mx-auto my-6 md:my-10 px-8">
            <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}>
                {/* 博客封面 */}
                {data.cover && (
                    <div className="mb-8">
                        <img
                            src={data.cover}
                            alt={data.title}
                            className="w-full h-58 md:h-64 object-cover rounded-lg shadow-md"
                        />
                    </div>
                )}

                {/* 博客标题 */}
                <header className="mb-10 md:mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">{data.title}</h1>
                    <p className="text-sm text-text2">
                        {data.date} |{' '}
                        {data.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs mx-1 px-2 py-1 bg-green-300/20 text-text2 rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </p>
                    <p className="mt-4 text-text2 text-sm">
                        {data.description}
                    </p>
                </header>

                {/* 博客内容 */}
                <article className="mt-16 max-w-none prose dark:prose-invert prose-neutral prose-base prose-img:rounded-md prose-img:shadow-md prose-h1:text-2xl prose-h2:text-xl prose-p:text-sm prose-li:text-sm prose-p:tracking-tight prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-code:text-sm">
                    <MDXRemote source={content} />
                </article>
            </MotionWrapper>
        </div>
    )
}