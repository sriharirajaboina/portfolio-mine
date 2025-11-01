"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

const MotionImage=motion(Image)

const Footer = () => {
  return (
    <div className="bg-black ">
        <div className="md:mx-50">
            <div className="text-center">
                <motion.h5 
                initial={{opacity:0,y:-40}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}}
                className="text-[#cc9966] font-bold my-5 pt-20">
                    Get in Touch With Us
                </motion.h5>
                <motion.h1 
                initial={{opacity:0,y:-40}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6,delay:0.2}}
                className="text-[#ffffff] text-6xl font-bold
                tracking-wide mb-30 border-b-5 inline-block pb-1">
                    info@aaronn.com
                </motion.h1>

            </div>
            <div className="flex items-center justify-between
            text-[#ffffff]">
                <MotionImage 
                src="/images/logo.png"
                alt="footer-logo"
                width={100} 
                height={100}
                className="w-30 h-10"
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6}}/>
                <motion.div 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.4}}
                className="font-bold w-[18%]">
                    <p className="leading-loose tracking-widest">Street Avenue 21, CA 0-8-00-888-000</p>
                </motion.div>
                <motion.div 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.6}}
                className="flex flex-col font-bold">
                    <p className="mb-4 tracking-wider text-xl">+90283353</p>
                    <div className="flex items-center gap-3">
                        <MotionImage
                        src="/images/fb.png"
                        alt="fb"
                        width={50}
                        height={50}
                        className="w-5 h-5"
                        transition={{delay:0.8}}/>
                        <MotionImage src="/images/tweeter.png"
                        alt="tweeter"
                        width={50}
                        height={50}
                        className="w-5 h-5"
                        transition={{delay:1}}/>
                        <MotionImage 
                        src="/images/insta.png"
                        alt="insta"
                        width={50}
                        height={50}
                        className="w-5 h-5"
                        transition={{delay:1.2}}/>
                    </div>
                </motion.div>
            </div>
            <motion.div 
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.6}}
            className="text-[#ffffff] text-center mt-15 text-2xl font-bold
            border-t-2 py-20">
                © 2023. Ideapeel. All rights reserved. 
            </motion.div>
        </div>
    </div>
  )
}

export default Footer