'use client';

import Blogs from '@/components/Blogs';
import Introduction from "@/components/Introduction";
import MotionWrapper from '@/components/MotionWrapper';
import Project from "@/components/Project";
import SocialMedia from "@/components/SocialMedia";
import Type from "@/components/Type";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


export default function MainPage ({ recent5Blogs }) {
    return (
        <>
        <MotionWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        >
            {/* Main Content */}
            <section className="p-4 md:p-8 mt-12">
                <h1 className="text-text md:text-5xl text-3xl pb-2 font-bold">Hello,</h1>
                <h2 className="text-text md:text-4xl text-2xl font-semibold mt-1">
                I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gstart to-gend font-bold md:text-5xl text-3xl">
                    Jiacheng He
                </span>
                !
                </h2>
                <Type />
                <div className="text-text2 mt-2 italic text-sm md:text-base">
                <span>#Developer </span> <span>#Harry</span> <span>#何佳骋</span>
                </div>
                <Introduction />
                <SocialMedia />
            </section>
        </MotionWrapper>


        <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        >
            <section className="mt-28 px-4">
                <div className="flex justify-between items-center px-2 pb-2 mb-8 ">
                <h2 className="text-lg text-text md:text-xl font-semibold">Github Project/项目</h2>

                <a
                    href=" "
                    className="p-1 md:p-2 rounded-lg text-text2 text-lg md:text-xl border border-border flex items-center gap-1 hover:bg-card animate-bounce"
                    aria-label="More information"
                >
                    <span className="text-base">More</span>
                    <ArrowOutwardIcon sx={{
                    fontSize: { xs: 14, sm: 14, md: 18, lg: 22 },
                    }}/>
                    </a>
                </div>
                <Project />
            </section>
        </MotionWrapper>


        <MotionWrapper
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        >
            <section className="mt-28 px-4">
                <div className="flex justify-between items-center pb-2 mb-8 font-semibold px-2 ">
                <h2 className="text-lg text-text md:text-xl">Latest Posts/近期博客</h2>

                <a
                    href="/blog"
                    className="p-1 md:p-2 rounded-lg text-text2 text-lg md:text-xl border border-border flex items-center gap-1 hover:bg-card animate-bounce"
                    aria-label="More information"
                >
                    <span className="text-base">More</span>
                    <ArrowOutwardIcon sx={{
                    fontSize: { xs: 14, sm: 14, md: 18, lg: 22 },
                    }}/>
                </a>
                </div>
                <div className='mt-10'>
                <Blogs blogs={recent5Blogs}/>
                </div>
            </section>
        </MotionWrapper>
        
    </>
    )
}