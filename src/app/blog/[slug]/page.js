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
        <div>
            <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl prose-text">
                <MDXRemote source={content} />
            </article>
        </div>
    )
}