"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

// const MotionImage=motion(Image)
const HomePage = () => {
    
  return (
    <div className="md:mx-50 md:my-10">
        <motion.div 
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.6}}
        className="relative text-center py-10 md:py-25">
            <div className="absolute w-72 h-72 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
            left-1/2 top-1"></div>
            <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold leading-tight
             text-[#ffffff]">
                Adaptive Logo Design
                <br/>for Your Brand
            </h1>
            <div className="flex items-center justify-center mt-15">
                <motion.div 
                whileHover={{scale:1.1,backgroundColor:"orange"}}
                className="bg-[#cc9966] flex items-center justify-between py-3 px-6 rounded-full
                font-bold text-[#ffffff] cursor-pointer">
                    <button className="mr-3 ">EXPLORE WORKS</button>
                    <span className="text-2xl font-bold">&#8594;</span>
                </motion.div>
            </div>  
        </motion.div>
        <motion.div className="flex items-center justify-between md:my-30 gap-10">
            <div className="relative text-[#ffffff]">
                <div className="absolute w-72 h-72 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
                    -left-1/4 -top-1/4"></div>
                <motion.h2
                initial={{opacity:0,x:-50}} 
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.2}}
                className="font-bold text-7xl tracking-wide leading-tighter">
                    Lets get know about me close
                </motion.h2>
                <motion.p 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.4}}
                className="text-xl tracking-wider leading-tight my-8">
                    Aaron is a New York-based visual designer focusing on branding and visual
                    identity. Her portfolio showcases her wide range of work,
                    spanning books,posters and web design.
                </motion.p>
                <motion.div 
                
                className="font-bold">
                    <motion.button
                    initial={{opacity:0,x:-50}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.6,delay:0.6}}
                    whileHover={{scale:1.1,backgroundColor:"orange"}} 
                    className="bg-[#cc9966] py-3 px-6 rounded-full">
                        DISCOVER MORE ABOUT ME
                    </motion.button>
                </motion.div>
            </div>
            <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="relative w-full h-auto"
                >
                <Image
                    src="/images/about.png"
                    alt="about"
                    width={100}
                    height={100}
                    className="w-full h-auto"
                    priority
                />
                </motion.div>

            <div className="absolute py-20 px-6 border border-amber-500 rounded-full
            right-1/3 -translate-x-25 translate-y-25">
            </div>

            <div className="absolute py-5 px-16 border border-amber-500 rounded-full
            right-1 -translate-x-55 -translate-y-60">
            </div>
        </motion.div>
        <div className="my-30">
            <div className="relative text-[#ffffff] ">

                <div className="absolute w-72 h-56 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
                    left-1/2 -translate-y-1/2"></div>
                    <motion.h2 
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.6,delay:0.2}}
                    className="text-center text-7xl font-bold my-10">
                        My Projects Highlight
                    </motion.h2>
                <div className="text-center flex item-center justify-center">
                    <motion.div 
                    initial={{opacity:0,y:-50}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.6}}
                     whileHover={{scale:1.1,backgroundColor:"black"}}
                    className="bg-transparent border border-amber-500 py-3 px-6 rounded-full font-bold">
                        <motion.button
                       >
                            EXPLORE MORE
                        </motion.button>
                        <span className="ml-4 text-2xl">&#8594;</span>
                    </motion.div>
                </div>
                <motion.div

                className="grid grid-cols-2 my-15 gap-10">
                    <motion.div
                    initial={{opacity:0,x:-50}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.6}}
                    >
                        <Image 
                        src="/images/p1.png"
                        alt="p1"
                        width={50}
                        height={50}
                        className="w-130 h-130"/>
                        <div className="md:my-10">
                            <h2 className="text-3xl font-bold">
                                Brand Journey Improvements
                            </h2>
                            <h5 className="text-[#4d5461]">
                                Client : 
                                <span className="text-[#ffffff] ml-5">
                                    Organc
                                </span>
                            </h5>
                            <h5 className="text-[#4d5461]">Work : 
                                <span className="text-[#ffffff] ml-5">
                                    Branding Logo design
                                </span>
                            </h5>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{opacity:0,x:50}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:0.6}}
                        >
                        <Image 
                        src="/images/p2.png"
                        alt="p1"
                        width={50}
                        height={50}
                        className="w-130 h-130"/>
                        <div className="md:my-10">
                            <h2 className="text-3xl font-bold">
                                Brand Grouping
                            </h2>
                            <h5 className="text-[#4d5461]">Client : 
                                <span className="text-[#ffffff] ml-5">FR</span>
                            </h5>
                            <h5 className="text-[#4d5461]">Work : 
                                <span className="text-[#ffffff] ml-5">Branding Logo design</span>
                            </h5>
                        </div> 
                    </motion.div>
                    <motion.div 
                        initial={{opacity:0,x:-50}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:0.6}}
                        >
                        <Image 
                        src="/images/p3.png"
                        alt="p1"
                        width={50}
                        height={50}
                        className="w-130 h-130"/>
                        <div className="md:my-10">
                            <h2 className="text-3xl font-bold">
                                NFT GLIMPS
                            </h2>
                            <h5 className="text-[#4d5461]">Client : 
                                <span className="text-[#ffffff] ml-5">Rumanda</span>
                            </h5>
                            <h5 className="text-[#4d5461]">Work : 
                                <span className="text-[#ffffff] ml-5">NFT Design</span>
                            </h5>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{opacity:0,x:50}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:0.6}}
                        >
                        <Image 
                        src="/images/p4.png"
                        alt="p1"
                        width={50}
                        height={50}
                        className="w-130 h-130"/>
                        <div className="md:my-10">
                            <h2 className="text-3xl font-bold">
                                Brand Suggestions
                            </h2>
                            <h5 className="text-[#4d5461]">Client : 
                                <span className="text-[#ffffff] ml-5">T3d</span>
                            </h5>
                            <h5 className="text-[#4d5461]">Work : 
                                <span className="text-[#ffffff] ml-5">NFT logo</span>
                            </h5>
                        </div>  
                    </motion.div>
                </motion.div>
            </div>
        </div>
        <div className="text-[#ffffff] flex items-start justify-between ">
            <div className="relative">
                <div className="absolute w-72 h-72 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
                    -left-1/6 -translate-y-1/3">
                </div>
                <motion.h1 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6}}
                className="text-6xl font-bold mb-10 tracking-wide">
                    Testimonial
                </motion.h1>
                <motion.p 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.2}}
                className="text-lg text-[#6c727f] mb-10 w-[88%] leading-relaxed tracking-wide"> 
                    “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. 
                    I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. 
                    Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. 
                    I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”
                </motion.p>
                <motion.h2 
                 initial={{opacity:0,x:-50}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:0.6,delay:0.4}}
                 className="text-xl font-bold tracking-wide">
                    -Martin lee
                </motion.h2>
            </div>
            <motion.div
             initial={{ clipPath: "inset(0 100% 0 0)" }}
             whileInView={{ clipPath: "inset(0 0% 0 0)" }}
             transition={{ duration: 1, ease: "easeInOut"}}>
                <Image 
                src="/images/testimonial.png"
                alt="testimonial"
                width={500}
                height={300}
                className=""/>
            </motion.div>
                
        </div>
    </div>
  );
}

export default HomePage