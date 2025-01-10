"use client";

import CatLottie from "./CatLottie";


const textVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut",
        },
    },
};

export default function LoadingPage() {
    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center">

            <CatLottie />
        </div>
    );
}