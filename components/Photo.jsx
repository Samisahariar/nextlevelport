"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Photo = () => {
  return (
    <div className='w-full h-full relative '>
        <motion.div 
            initial={{opacity: 0}}
            animate={
                {
                    opacity: 1,
                    transition: {delay: 2, duration: 0.4, ease: "easeIn"}
                }
            }
        >
            <div className='w-[297px] h-[290px] xl:w-[498px] xl:h-[450px] mix-blend-lighten absolute top-0 right-4'>
                <Image src="/sami.png" priority quality={100} fill alt='' className='object-contain' ></Image>
            </div>
        </motion.div>
        <motion.svg className="w-[307px] xl:w-[566px] h-[300px] xl:h-[506px] "
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/20/svg"
        >
            <motion.circle 
                cx="256px"
                cy="243px"
                r="254px"
                stroke="#00ff99"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={
                    {
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360]
                    }
                }
                transition={
                    {
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }
            >

            </motion.circle>
        </motion.svg>
    </div>
  )
}

export default Photo
