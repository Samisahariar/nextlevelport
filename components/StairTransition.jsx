"use client";
import { AnimatePresence, motion } from "framer-motion"
import Stair from "./Stair";
import { usePathname } from "next/navigation"

const StairTransition = () => {
    const pathname = usePathname();

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="h-screen w-screen fixed top-0 left-o right-00 pointer-events-none z-40 flex">
                        <Stair></Stair>
                    </div>
                    <motion.div
                        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                        initial={{opacity: 1}}
                        animate={{opacity: 0, transition: {delay: 1, duration: 0.4, ease:"easeInOut"}}}
                    >
                    </motion.div>
                </div>
            </AnimatePresence></>
    )
}

export default StairTransition
