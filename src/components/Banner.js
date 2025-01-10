'use client';
import { motion } from "motion/react";

export default function Banner({ Image="/Images/fushi.jpg" }) {
    return (
        <motion.div className="relative w-full h-60 md:h-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
        >
            
            <img
            src={Image}
            alt="Banner"
            className="w-full h-full object-cover rounded-lg"
            />

            <div className="absolute bottom-[-36px] left-4 md:left-6 w-24 h-24 md:w-28 md:h-28">
            <img
                src="/Images/kemiao2.jpg"
                alt="Profile"
                className="border-border border-2 rounded-lg w-full h-full hover:scale-105 transition-transform duration-300 overflow-hidden"
            />
            </div>
        </motion.div>
    )
}