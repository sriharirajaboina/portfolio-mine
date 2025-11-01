"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const MotionImage=motion(Image)
const AboutMe = () => {
  return (
    <div className="md:mx-50 my-20">
      <div className="relative font-bold my-15 py-10 border-b-2 border-[#394150]">
        <div className="absolute w-72 h-48 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
            -left-1/6 -translate-y-1/3"></div>
        <motion.h2
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}} 
        className="text-7xl text-[#ffffff]">
          About Me
        </motion.h2>
        <motion.h5
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6,delay:0.2}}  
        className="text-base text-[#d3d5da]">
          Littile Brief About Myself
        </motion.h5>
      </div>
      <div className="grid">
        <div className="grid grid-cols-2 my-10">
          <motion.h1 
           initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
          className="text-7xl tracking-wider font-bold text-[#ffffff]">
          My mission is to make design eadier.
        </motion.h1>
        <motion.p 
         initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,staggerChildren: 0.5 }}
        className="text-[#ffffff] tracking-wider leading-relaxed text-lg md:mr-10 ">
          Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle. 
          Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.
        </motion.p>
        </div>
        <motion.div 
          className="flex items-center justify-center
            gap-10 my-10">
            <MotionImage 
            src="/images/about2.png"
            alt="about2"
            width={500}
            height={300}
            className="w-100 h-100 relative"
             initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeInOut" }}/>
            <div className="absolute py-20 px-6 border border-amber-500 rounded-full
                left-1 translate-x-43 -translate-y-28">
            </div>
            <MotionImage
            src="/images/aboutme.png"
            alt="about1"
            width={500}
            height={300}
            className="w-200 h-100 relative"
             initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration:2,ease: "easeInOut" }}/>
            <div className="absolute py-6 px-20 border border-amber-500 rounded-full
                right-1 -translate-x-50 translate-y-50">
              </div>
        </motion.div>
      </div>
      <div className="my-10">
        <motion.h2 
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        className="text-6xl text-[#ffffff] my-5">
          Follow me on :
        </motion.h2>
        <motion.ul 
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="flex items-center justify-between 
        text-[#9ea3ae] font-bold text-3xl uppercase tracking-wider">
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