import Banner from "@/components/Banner";
import BlogListComponent from "@/components/BlogListComponent";
import MotionWrapper from '@/components/MotionWrapper';
import { getBlogList } from '@/helper/blog';

export default async function BlogList() {
    const blogs = await getBlogList();

    return (
        <div className="px-4 flex flex-col">
            <Banner Image='Images/winter.jpg' />
            <section className="mt-24">
                <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}>
                    <h1 className="font-bold text-xl md:text-2xl text-text mb-8 md:mb-10 border-gstart border-l-4 px-4 mx-2">
                        ✒️ Blog List
                    </h1>
                </MotionWrapper>
                <BlogListComponent blogs={blogs} />
            </section>
        </div>
    );
    }