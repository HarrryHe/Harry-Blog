import Banner from "@/components/Banner";
import MainPage from '@/components/MainPage';
import { getBlogList } from '@/helper/blog';

export default async function Home() {
  const blogs = await getBlogList();
  const recent5Blogs = blogs.slice(0, 5);

  return (
    <div className="px-4 flex flex-col">
      
      <Banner Image='/Images/winter1.jpg' />
      <MainPage recent5Blogs={recent5Blogs}/>
      
    </div>

  );
}
