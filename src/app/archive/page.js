import Archives from '@/components/Archives';
import MotionWrapper from '@/components/MotionWrapper';
import { getBlogList, getTags } from '@/helper/blog';

export default async function Archive() {
    const blogs = await getBlogList();

    const tagMap = getTags(blogs);


    return (
        <div className="mt-8 px-4">
            <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}>
                <Archives tagMap={tagMap} />
            </MotionWrapper>
            
        </div>
    );
}