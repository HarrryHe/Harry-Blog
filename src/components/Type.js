'use client';

import { TypeAnimation } from 'react-type-animation';

export default function Type() {
    return (
    <div className="pt-1 flex flex-col md:flex-row text-text text-base md:text-lg tracking-tighter">
        <TypeAnimation
            sequence={[
                1000,
                '\"每一段旅行都有终点。\"',
                2000,
                '\"Every journey has its destination.\"',
                1000,
            ]}
            speed={15}
            wrapper="span"
            deletionSpeed={10}
            repeat={Infinity}
        />
    </div>
    )
}