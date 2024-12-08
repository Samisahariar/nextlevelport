"use client";
import React from 'react';
import CountUp from 'react-countup';


const status = [
  {
    num: 2,
    text: "Years of Experience"
  },
  {
    num: 6,
    text: "Projects Developed"
  }
  ,
  {
    num: 14,
    text: "Technoligy Mastered"
  }
  ,
  {
    num: 395,
    text: "Code Commits"
  }

]



const Stats = () => {
  return (
    <section className='pt-6 pb-12 xl:pt-0 xl:pb-0'>
      <div className="container mx-auto">
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none cols-2'>
          {
            status.map((items, index) => {

              return (
                <div key={index} className='flex flex-1 gap-4 items-center justify-center
                xl:justify-center
                '>
                  <CountUp end={items.num} duration={5} delay={2}
                    className='text-5xl md:text-6xl xl:text-7xl font-extrabold'>
                  </CountUp>
                  <p className={`${items.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/60`}>{items.text}</p>
                </div>

              );
            })
          }
        </div>

      </div>

    </section>
  )
}

export default Stats