"use client"
import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"

const MotionImage=motion(Image)

const MyProject = () => {
  return (
    <div className="mx-10 my-10 md:mx-50 md:my-30 text-[#ffffff]">
      <div className="relative pb-15 border-b-3">
        <div className="absolute w-72 h-48 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
            -left-1/6 -translate-y-1/2"></div>
        <motion.h1
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}  
        className="text-5xl md:text-7xl font-bold mb-3">
          Project Detail
        </motion.h1>
        <motion.h5 
           initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
          className="text-[#d3d5da] text-sm md:text-base">
          Details About The Project
        </motion.h5>
      </div>
      <div className="md:my-10">
        <div className="flex flex-col items-start justify-evenly">
          <MotionImage 
          src="/images/pg1.png"
          alt="pg1"
          width={500}
          height={300}
          className="w-full my-15"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1,ease: "easeInOut" }}/>
          <motion.div 
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
          className="my-5 md:mx-50 md:my-10">
            <h3 className="text-3xl font-bold mb-5">
              Project Story
            </h3>
            <p className="text-[#d3d5da] text-sm mb-5 tracking-wide leading-normal">
              The fact that photography has different meanings to different people is one of the many components of its appeal. 
              Photography is such an important part of our life that it is now very difficult to imagine the world without it.
            </p>
            <p className="text-[#d3d5da] tracking-tight leading-normal">
              We cannot imagine a wedding without the opportunity to capture it on film, 
              we would not be able to remember the growing up of children or the holidays if we did not have pictures.
            </p>
          </motion.div>
          
        </div>
        <div className="my-5 md:my-15">
          <div className="grid grid-cols-2 gap-5 ">
            <MotionImage
             src="/images/pg2.png"
              alt="pg2"
              width={500}
              height={300}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1,ease: "easeInOut" }}/>
            <MotionImage
             src="/images/pg3.png"
              alt="pg3"
              width={500}
              height={300}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1,delay:0.3,ease: "easeInOut" }}/>
          </div>
          <div>
            <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}} 
            className="md:mx-50 my-10">
              <h3 className="text-3xl font-bold mb-5">
                Day one
              </h3>
              <p className="text-[#d3d5da] text-sm mb-8 tracking-wide leading-normal">
                Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. 
              </p>
              <p className="text-[#d3d5da] tracking-tight leading-normal">
                And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination 
                of thought imagination, visual design, technical skills and organizational skills
              </p>
            </motion.div>
            
          </div>
          <div className="flex items-center justify-between my-15">
            <motion.button 
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="text-base uppercase font-bold">
              <span className="mr-3">&#8592;</span>
              Previous work
              </motion.button>
            <motion.button 
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="text-base uppercase font-bold">
              Next work
              <span className="ml-3">&#8594;</span>
              </motion.button>
          </div>
        </div>
      </div>
      <div className="md:my-20">
        <motion.h1 
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="my-10 md:my-15 uppercase text-4xl text-center
        font-bold">
          other Projects
        </motion.h1>
        <motion.div 
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        className="grid grid-cols-3 gap-4">
          <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1,ease: "easeInOut" }}>
            <Image src="/images/pl1.png"
              alt="pl1"
              width={500}
              height={300}/>
              <div className="my-10">
                <h3 className="font-bold">
                  Logo Project 1
                </h3>
                <h6 className="text-[#d3d5da]">
                  Branding
                </h6>
              </div>
          </motion.div>
          <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1,delay:0.2,ease: "easeInOut" }}>
              <Image src="/images/pl2.png"
              alt="pl2"
              width={500}
              height={300}/>
               <div className="my-10">
                <h3 className="font-bold">
                  Logo Project 2
                </h3>
                <h6 className="text-[#d3d5da]">
                  Branding
                </h6>
              </div>
          </motion.div>
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1,delay:0.4,ease: "easeInOut" }}>
              <Image src="/images/pl3.png"
              alt="pl3"
              width={500}
              height={300}/>
               <div className="my-10">
                <h3 className="font-bold">
                  Logo Project 3
                </h3>
                <h6 className="text-[#d3d5da]">
                  Branding
                </h6>
              </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )

}

export default MyProject