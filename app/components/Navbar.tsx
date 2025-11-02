"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"

const Navbar = () => {
  const router=useRouter();
  return (
    <nav className="px-4 sm:px-8 md:px-16 py-4">
      <motion.div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{y:-50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.6,ease:"easeOut"}}
            className="flex justify-center md:justify-start">
            <Image 
          src="/images/logo.png" 
          alt="logo"
          width={250}
          height={100}
          className="w-28 sm:w-32 md:w-40 "/>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-between 
          text-[#6c727f] font-bold text-sm md:text-lg">
              <motion.ul 
              initial={{opacity:0,y:-50}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.2}}
              className="flex flex-col md:flex-row items gap-5 md:gap-10">
                  <motion.li
                    whileHover={{scale:1.1,color:"#fff"}}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    >
                    <Link href="/">HOME</Link>
                  </motion.li>
                  <motion.li
                    whileHover={{scale:1.1,color:"#fff"}}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Link href="/aboutme">ABOUT ME</Link>
                  </motion.li>
                  <motion.li
                    whileHover={{scale:1.1,color:"#fff"}}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    >
                    <Link href="/mywork">My Work</Link>
                  </motion.li>
                  
              </motion.ul>
              <motion.button 
              initial={{opacity:0,y:-30}}
              animate={{opacity:1,y:0}}
              whileHover={{scale:1,backgroundColor:"#6c727f",color:"#000"}}
              transition={{ type: "spring", stiffness: 300 ,delay:0.9}}
              onClick={()=>router.push("/contact")}
              className="flex items-center mt-3 md:mt-0 px-5 py-2
              border-4 border-[#6c727f] rounded-full bg-black text-[#ffffff] hover:bg-[#6c727f] hover:text-black">
                  CONTACT
              </motion.button>
          </div>
      </motion.div>
    </nav>
  )
}

export default Navbar