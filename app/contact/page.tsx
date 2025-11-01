"use client"
import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"

const MotionImage=motion(Image)

const Contact = () => {
  return (
    <div className="mx-10 md:mx-50 md:my-20 text-[#ffffff]">
      <div className="relative my-10 font-bold pb-10 border-b-2">
        <div className="absolute w-72 h-57 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
            -left-1/6 -translate-y-1/2"></div>
          <motion.h1
           initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}} 
            className="text-5xl md:text-7xl ">
          Contact Me
        </motion.h1>
        <motion.h5 
         initial={{opacity:0,x:-50}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:0.6}}
         className="text-sm md:text-base text-[#d3d5da]">
          For Any Project Knock Us
        </motion.h5>
      </div>
      <div>
        <div className="grid grid-cols-2">
          <motion.h1 
           initial={{opacity:0,x:-100}}
           whileInView={{opacity:1,x:0}}
           transition={{duration:0.6}}
          className="text-6xl md:text-7xl font-bold tracking-widest">
            Get in Touch with Us
          </motion.h1>
          <motion.form 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}>
            <div className="uppercase font-bold text-sm md:text-base">
              <motion.h2 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="pb-6 border-b-2">
                Name
              </motion.h2>
              <motion.h2 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              className="py-6 border-b-2">
                subject
              </motion.h2>
              <motion.h2 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                className="py-6 border-b-2">
                Message
              </motion.h2>
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#e0a46c" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="my-6 bg-[#cc9966] py-2 px-8 rounded-full">
                send
              </motion.button>
            </div>
          </motion.form>
        </div>
        <div className="flex flex-col my-10">
          <MotionImage 
          src="/images/contact.png"
          alt="contact"
          width={500}
          height={300}
          className="w-full h-auto"
           initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1,ease: "easeInOut" }}/>
          <motion.div 
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6,staggerChildren:0.3}}
          className="my-10 flex items-center justify-evenly
          font-bold text-lg">
            <motion.h3 
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6}}>
              Street Avenue 21, CA
            </motion.h3>
            <motion.h3
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.3}}>
              +9 0283353
            </motion.h3>
            <motion.h3 
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.6}}
            className="border-b-2">
              info@aaronn.com
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact