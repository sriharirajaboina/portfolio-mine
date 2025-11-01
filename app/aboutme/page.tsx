"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const MotionImage=motion(Image)
const AboutMe = () => {
  return (
    <div className="mx-10 md:mx-50 md:my-20">
      <div className="relative font-bold md:my-15 py-10 border-b-2 border-[#394150]">
        <div className="absolute w-72 h-48 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
            -left-1/6 -translate-y-1/3"></div>
        <motion.h2
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}} 
        className="text-5xl md:text-7xl text-[#ffffff]">
          About Me
        </motion.h2>
        <motion.h5
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6,delay:0.2}}  
        className="text-sm md:text-base text-[#d3d5da]">
          Littile Brief About Myself
        </motion.h5>
      </div>
      <div className="grid">
        <div className="grid grid-cols-2 my-10">
          <motion.h1 
           initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
          className="text-5xl md:text-7xl tracking-wider font-bold text-[#ffffff]">
          My mission is to make design eadier.
        </motion.h1>
        <motion.p 
         initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,staggerChildren: 0.5 }}
        className="text-sm md:text-lg text-[#ffffff] tracking-wider leading-normal md:leading-relaxed  md:mr-10 ">
          Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle. 
          Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.
        </motion.p>
        </div>
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center
            gap-10 my-10">
            <MotionImage 
            src="/images/about2.png"
            alt="about2"
            width={500}
            height={300}
            className="w-full h-auto md:w-100 md:h-100 relative"
             initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeInOut" }}/>
            <div className="hidden md:block md:absolute md:py-20 md:px-6 md:border md:border-amber-500 md:rounded-full
                md:left-1 md:translate-x-43 md:-translate-y-28">
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
            <div className="hidden md:block md:absolute md:py-6 md:px-20 md:border md:border-amber-500 md:rounded-full
                md:right-1 md:-translate-x-50 md:translate-y-50">
              </div>
        </motion.div>
      </div>
      <div className="my-10">
        <motion.h2 
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        className="text-4xl md:text-6xl text-[#ffffff] my-5">
          Follow me on :
        </motion.h2>
        <motion.ul 
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="flex items-center justify-between 
        text-[#9ea3ae] font-bold text-xl md:text-3xl uppercase tracking-wider">
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          > dribble
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5,delay:0.3}}>
            twitter
          </motion.li>
          <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,delay:0.6}}>
            facebook
          </motion.li>
          <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5,delay:0.9}}>
            instagram
          </motion.li>
        </motion.ul>
      </div>
    </div>
  )
}

export default AboutMe