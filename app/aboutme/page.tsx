"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const MotionImage=motion(Image)
const AboutMe = () => {
  return (
    <div className="px-4 sm:px-8 md:px-25 py-10 md:py-20 ">
      <div className="relative font-bold py-5 border-b-2 border-[#394150]">
        <div className="absolute w-48 md:w-72 h-32 md:h-48 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
            -left-1/12 -translate-y-1/12"></div>
        <motion.h2
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}} 
        className="text-4xl sm:text-5xl md:text-7xl text-[#ffffff] mb-3">
          About Me
        </motion.h2>
        <motion.h5
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6,delay:0.2}}  
        className="text-xs sm:text-sm md:text-base text-[#d3d5da] mt-2">
          Littile Brief About Myself
        </motion.h5>
      </div>
        <div className="grid grid-cols-2 py-5 md:py-15 gap-10 2xl:gap-20 ">
          <motion.h2 
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="text-4xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl tracking-wide font-bold text-[#ffffff]">
            My mission is to make design eadier.
          </motion.h2>
          <motion.p 
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6,staggerChildren: 0.5 }}
            className="text-xs sm:text-sm md:text-lg text-[#ffffff] tracking-widest leading-normal md:leading-relaxed  xl:mr-10 ">
            Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle. 
            Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.
          </motion.p>
        </div>
        <div className="md:py-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center
            gap-10 lg:my-10">
            <MotionImage 
            src="/images/about2.png"
            alt="about2"
            width={500}
            height={300}
            className="w-full h-auto lg:w-100 lg:h-100 relative "
             initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeInOut" }}/>
            <div className="hidden 2xl:block 2xl:absolute 2xl:py-20 2xl:px-6 2xl:border 2xl:border-amber-500 2xl:rounded-full
                2xl:left-1 2xl:translate-x-25 2xl:-translate-y-28">
            </div>
            <MotionImage
            src="/images/aboutme.png"
            alt="about1"
            width={500}
            height={300}
            className="w-full h-auto md:w-200 md:h-100 relative"
             initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration:2,ease: "easeInOut" }}/>
            <div className="hidden 2xl:block 2xl:absolute 2xl:py-6 2xl:px-20 2xl:border 2xl:border-amber-500 2xl:rounded-full
                2xl:right-1 2xl:-translate-x-50 2xl:translate-y-50">
              </div>
        </motion.div>
      </div>
      <div className="my-10">
        <motion.h2 
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        className="text-3xl sm:text-4xl md:text-6xl text-[#ffffff] my-5">
          Follow me on :
        </motion.h2>
        <motion.ul 
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="flex flex-wrap items-center justify-between gap-6 sm:gap-10 
        text-[#9ea3ae] font-bold text-lg sm:text-xl md:text-3xl uppercase tracking-wider">
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hover:text-[#ffffff] cursor-pointer"> dribble
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5,delay:0.3}}
            className="hover:text-[#ffffff] cursor-pointer">
            twitter
          </motion.li>
          <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,delay:0.6}}
              className="hover:text-[#ffffff] cursor-pointer">
            facebook
          </motion.li>
          <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,delay:0.9}}
              className="hover:text-[#ffffff] cursor-pointer">
            instagram
          </motion.li>
        </motion.ul>
      </div>
    </div>
  )
}

export default AboutMe