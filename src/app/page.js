import Banner from "@/components/Banner";
import Blogs from '@/components/Blogs';
import Introduction from "@/components/Introduction";
import Project from "@/components/Project";
import SocialMedia from "@/components/SocialMedia";
import Type from "@/components/Type";
import { getBlogList } from '@/helper/blog';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default async function Home() {
  const blogs = await getBlogList();
  const recent5Blogs = blogs.slice(0, 5);

  return (
    <div className="px-4 flex flex-col">

      <Banner Image='/Images/fushi.jpg' />

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
    </div>

  );
}
