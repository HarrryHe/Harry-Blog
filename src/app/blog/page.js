import BlogListComponent from "@/components/BlogListComponent";
import { getBlogList } from '@/helper/blog';

const itemsPerPage = 6;

export default async function BlogList() {
    const blogs = await getBlogList();

    return <BlogListComponent blogs={blogs} />;
    }