"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

const HomePage = () => {

    const router=useRouter();
    
  return (
    <div className="mx-10 md:mx-25 md:my-10">
        <motion.div 
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.6}}
        className="relative text-center py-10 md:py-25">
            <div className="absolute w-48 h-36 md:w-72 md:h-72 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
            left-1/2 top-1"></div>
            <h1 className="text-xl sm:text-4xl md:text-6xl xl:text-7xl font-bold leading-tight
             text-[#ffffff]">
                Adaptive Logo Design
                <br/>for Your Brand
            </h1>
            <div className="flex items-center justify-center mt-5 md:mt-15">
                <motion.div 
                whileHover={{scale:1.1,backgroundColor:"orange"}}
                className="bg-[#ff9142] flex items-center justify-between py-3 px-6 rounded-full
                font-bold text-[#ffffff] cursor-pointer">
                    <button className="mr-3 ">EXPLORE WORKS</button>
                    <span className="text-2xl font-bold">&#8594;</span>
                </motion.div>
            </div>  
        </motion.div>
        <motion.div className="flex flex-col md:flex-row items-center justify-between md:my-30 gap-10">
        <div className="relative text-[#ffffff]">
                <div className="absolute w-72 h-72 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
                    -left-1/4 -top-1/4"></div>
                <motion.h2
                initial={{opacity:0,x:-50}} 
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.2}}
                className="text-3xl sm:text-4xl font-bold lg:text-6xl xl:text-7xl tracking-wide leading-tighter">
                    Lets get know about me close
                </motion.h2>
                <motion.p 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.4}}
                className="text-base md:text-lg lg:text-xl tracking-wider leading-tight my-8">
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
                    className="bg-[#ff9142] py-3 px-6 rounded-full text-sm md:text-base">
                        DISCOVER MORE ABOUT ME
                    </motion.button>
                </motion.div>
            </div>
            <div className="relative w-full flex justify-center items-center">
            
            <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="relative w-full max-w-[900px] mx-auto overflow-visible"  // ✅ allow borders to extend outside
            >
            
                <Image
                src="/images/about.png"
                alt="about"
                width={800}
                height={500}
                className="relative w-full h-auto object-cover rounded-lg"
                priority
                />
            </motion.div>
            <div
                className="hidden
                    lg:block absolute bottom-1 left-0 
                    -translate-x-[45%] -translate-y-1/2
                    pointer-events-none z-auto">
                <motion.div
                    className="border border-amber-500 rounded-full md:py-16 md:px-3 lg:py-18 lg:px-6 bg-transparent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                </div>
                <div
                className="hidden
                    lg:block absolute top-0 right-1 
                    -translate-x-1/2 -translate-y-1/2
                    pointer-events-none">
                <motion.div
                    className="border border-amber-500 rounded-full md:py-2 md:px-16 lg:py-6 lg:px-16 bg-transparent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                />
                </div>
        </div>
        </motion.div>
        <div className="my-30">
            <div className="relative text-[#ffffff] ">

                <div className="absolute w-48 md:w-72 h-36 md:h-56 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
                    left-1/2 -translate-y-1/2"></div>
                    <motion.h2 
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.6,delay:0.2}}
                    className="text-center text-xl sm:text-4xl md:text-6xl xl:text-7xl font-bold my-10">
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
                         onClick={()=>router.push("/HomePage/myprojects")} >
                            EXPLORE MORE
                        </motion.button>
                        <span className="ml-4 text-2xl">&#8594;</span>
                    </motion.div>
                </div>
                <motion.div

                className="grid md:grid-cols-2 my-15 gap-10">
                    <motion.div
                    initial={{opacity:0,x:-50}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:0.6}}
                    >
                        <Image 
                        src="/images/hp1.png"
                        alt="p1"
                        width={500}
                        height={300}
                        className="w-full h-auto"/>
                        <div className="mt-10 md:my-10">
                            <h2 className="text-xl md:text-3xl font-bold mb-5">
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
                        width={500}
                        height={300}
                        className="w-full h-auto"/>
                        <div className="mt-10 md:my-10">
                            <h2 className="text-xl md:text-3xl font-bold mb-5">
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
                        width={500}
                        height={300}
                        className="w-full h-auto"/>
                        <div className="mt-10 md:my-10">
                            <h2 className="text-xl md:text-3xl font-bold mb-5">
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
                        width={500}
                        height={300}
                        className="w-full h-auto"/>
                        <div className="mt-10 md:my-10">
                            <h2 className="text-xl md:text-3xl font-bold mb-5">
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
        <div className="text-[#ffffff] flex flex-col md:flex-row items-start justify-between mb-10">
            <div className="relative">
                <div className="absolute w-72 h-72 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
                    -left-1/6 -translate-y-1/3">
                </div>
                <motion.h1 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6}}
                className="text-4xl md:text-6xl font-bold mb-10 tracking-wide">
                    Testimonial
                </motion.h1>
                <motion.p 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.6,delay:0.2}}
                className="text-sm md:text-lg text-[#6c727f] mb-10 md:w-[88%] leading-relaxed tracking-wide"> 
                    “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. 
                    I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. 
                    Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. 
                    I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”
                </motion.p>
                <motion.h2 
                 initial={{opacity:0,x:-50}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:0.6,delay:0.4}}
                 className="text-lg md:text-xl font-bold tracking-wide">
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
                className="hidden md:block"/>
            </motion.div>
                
        </div>
    </div>
  );
}

export default HomePage