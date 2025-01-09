"use client";
import catLottie from '@/components/assets/cat.json';
import Lottie from 'react-lottie-player';

export default function CatLottie() {
    return (
        <Lottie
            loop
            animationData={catLottie}
            play
            style={{ width: 125, height: 125 }}
        />
    )
}