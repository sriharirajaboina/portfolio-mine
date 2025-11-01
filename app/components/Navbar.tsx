"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"

const Navbar = () => {
  const router=useRouter();
  return (
    <motion.div className="flex items-center justify-between mt-10 md:mx-50">
        <motion.div
          initial={{y:-50,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.6,ease:"easeOut"}}>
          <Image 
        src="/images/logo.png" 
        alt="logo"
        width={250}
        height={100}/>
        </motion.div>
        <div className="flex items-center justify-between text-[#6c727f] font-bold">
            <motion.ul 
            initial={{opacity:0,y:-50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.2}}
            className="flex items gap-10 text-lg ">
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
            className="flex items-center ml-10 px-6 py-3
            border-4 border-[#6c727f] rounded-full bg-black text-[#ffffff]">
                CONTACT
            </motion.button>
        </div>
    </motion.div>
  )
}

export default Navbar