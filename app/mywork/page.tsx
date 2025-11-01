"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"

const MotionImage=motion(Image)
const MyWork = () => {

  const router=useRouter();
  return (
    <div className="mx-10 my-10 md:mx-50 md:my-30">
      <div className="relative text-[#ffffff] pb-15 border-b-3">
        <div className="absolute w-72 h-56 opacity-70 rounded-full bg-[#ffffff]/30 blur-3xl
            -left-1/6 -translate-y-1/3 top-1"></div>
        <motion.h1
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}} 
         className="text-5xl md:text-7xl font-bold mb-3">
          My Works
        </motion.h1>
        <motion.h5 
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}} 
        className="text-[#d3d5da] text-sm md:text-base">
          Showcase About Works
        </motion.h5>
      </div>
      <div className="mt-15 ">
        <div className="grid grid-cols-3 gap-5">
          <motion.div
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,staggerChildren:0.4}}>
            <MotionImage 
            src="/images/work1.png"
            alt="work1"
            width={500}
            height={300}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
             whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1,ease: "easeInOut" }}/>
            <div className="my-10 text-center text-[#ffffff]">
              <h4 className="font-bold text-sm">BLUE</h4>
              <h2 className="font-bold text-lg">Orvillebury</h2>
            </div>
          </motion.div>
          <motion.div
           initial={{opacity:0,y:-100}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6,staggerChildren:0.4}}>
            <MotionImage 
            src="/images/work2.png"
            alt="work2"
            width={500}
            height={300}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1,delay:0.2, ease: "easeInOut" }}/>
            <div className="my-10 text-center text-[#ffffff]">
              <h4 className="font-bold text-sm">GREEN</h4>
              <h2 className="font-bold text-lg">West Lavada</h2>
            </div>
          </motion.div>
          <motion.div
          initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,staggerChildren:0.4}}>
            <MotionImage 
            src="/images/work3.png"
            alt="work3"
            width={500}
            height={300}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, delay:0.3,ease: "easeInOut" }}/>
            <div className="my-10 text-center text-[#ffffff]">
              <h4 className="font-bold text-sm">AQUA</h4>
              <h2 className="font-bold text-lg">Rempeishire</h2>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <motion.div
          initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,staggerChildren:0.4}} 
          className="text-center">
            <MotionImage 
            src="/images/work4.png"
            alt="work4"
            width={500}
            height={300}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, delay:0.4,ease: "easeInOut" }}/>
            <div className="my-10 text-center text-[#ffffff]">
              <h4 className="font-bold text-sm">LIME</h4>
              <h2 className="font-bold text-lg">Delfinaland</h2>
            </div> 
          </motion.div>
          <motion.div
           initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,staggerChildren:0.4}}>
            <MotionImage 
            src="/images/work5.png"
            alt="work5"
            width={500}
            height={300}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1,delay:0.5, ease: "easeInOut" }}/>
            <div className="my-10 text-center text-[#ffffff]">
               <h4 className="font-bold text-sm">FUCHSIA</h4>
              <h2>Backridgeburgh</h2>
            </div>
           
          </motion.div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <motion.div
           initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,staggerChildren:0.4}}>
            <MotionImage 
            src="/images/work1.png"
            alt="work1"
            width={500}
            height={300}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, delay:0.6,ease: "easeInOut" }}/>
            <div className="my-10 text-center text-[#ffffff]">
               <h4 className="font-bold text-sm">AQUA</h4>
              <h2 className="font-bold text-lg">Rempeishire</h2>
            </div>
          </motion.div>
          <motion.div
           initial={{opacity:0,y:-100}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6,staggerChildren:0.4}}>
            <MotionImage 
            src="/images/work2.png"
            alt="work2"
            width={500}
            height={300}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1,delay:0.7, ease: "easeInOut" }}/>
            <div className="my-10 text-center text-[#ffffff]">
              <h4 className="font-bold text-sm">MAROON</h4>
              <h2 className="font-bold text-lg">Lake Trevor</h2>
            </div> 
          </motion.div>
          <motion.div
           initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6,staggerChildren:0.4}}>
            <MotionImage 
            src="/images/work3.png"
            alt="work4"
            width={500}
            height={300}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, delay:0.8,ease: "easeInOut" }}/>
            <div className="my-10 text-center text-[#ffffff]">
              <h4 className="font-bold text-sm">LIME</h4>
              <h2 className="font-bold text-lg">Delfinaland</h2>
            </div>
          </motion.div>
        </div>
        <motion.div 
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="flex itema-center justify-center">
          <motion.button
            whileHover={{scale:1.1,backgroundColor:"white"}}
          onClick={()=>router.push("/mywork/myproject")} 
          className="bg-trasparent py-3 px-6 border border-amber-500 rounded-full
         text-amber-600 text-sm font-bold">
          LOAD MORE WORKS
        </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default MyWork