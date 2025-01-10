import Banner from "@/components/Banner"
import GiscusComment from "@/components/GiscusComment"
import MotionWrapper from "@/components/MotionWrapper"
import SocialMedia from "@/components/SocialMedia"
export default function Message() {
    return (
        <div className='px-4 mb-6 md:mb-10'>
            <MotionWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}>

                <Banner Image='/Images/Bocchi.jpg' />
                
                <h1 className="mt-24 font-bold text-xl md:text-2xl text-text mb-8 md:mb-10 border-gstart border-l-4 px-4 mx-2">
                    💭 Message
                </h1>
                <p className="text-text2 text-sm md:text-base mb-4 px-2 w-full md:w-2/3">
                    Welcome to the comment section! <br />欢迎在下方留言与我交流！😊
                </p>
                <SocialMedia />

                <GiscusComment />
            </MotionWrapper>
        </div>
    )
}