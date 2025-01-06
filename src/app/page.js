import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Introduction from "../components/Introduction";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className="p-4 flex flex-col">
      <div className="p-8">
        <div>
          <img
            src='/Images/kemiao2.jpg'
            className='rounded-full w-24 h-24 md:w-28 md:h-28 border-border border-2 mb-6'
            />
        </div>
        <h1 className="text-3xl text-text md:text-4xl pb-2">Hello, </h1>
        <h2 className="text-text md:text-4xl text-3xl">I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-gstart to-gend font-bold md:text-5xl text-4xl">Jiacheng He</span>!</h2>
        <div className="pt-2 flex flex-col md:flex-row">
          <p className="text-sm md:text-base">每一段旅行都有终点.&nbsp;</p>
          <p className="text-sm md:text-base">Every journey has its destination.</p>
        </div>
        <div className="text-text2 mt-2 italic">
          <span>#Developer </span> <span>#Harry</span> <span>#何佳骋</span>
        </div>
        <Introduction />
      </div>

      <div className="mt-28 py-4 flex flex-col md:flex-row md:gap-y-4">
        <div className="w-full md:w-4/6 mb-36 md:mb-2">
          <div className="flex flex-row justify-between text-xl md:text-2xl pb-8 p-2">
            <h2 className="text-text">Starred Repo (5)</h2>
            <a
              href=" "
              className="p-2 rounded-lg text-text2 text-xl border-border border flex items-center gap-1 animate-bounce hover:bg-card"
              aria-label="More information"
            >
              <span className="text-base">More</span>
              <ArrowOutwardIcon />
            </a>

          </div>
          <Project />
        </div>
        <aside className="w-full md:w-2/6 flex flex-col md:ml-10 gap-y-4 mt-0">
          <div className="w-full border-border rounded-lg border h-96"></div>
          <div className="w-full border-border rounded-lg border h-60"></div>
        </aside>
      </div>
    </div>
  );
}
