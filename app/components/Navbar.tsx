"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router=useRouter();
  return (
    <div className="flex items-center justify-between mt-10 md:mx-50">
        <Image 
        src="/images/logo.png" 
        alt=""
        width={250}
        height={100}/>
        <div className="flex items-center justify-between text-[#6c727f] font-bold">
            <ul className="flex items gap-10 text-lg ">
                <Link href="/">HOME</Link>
                <Link href="/aboutme">ABOUT ME</Link>
                <Link href="/mywork">My Work</Link>
            </ul>
            <button 
            onClick={()=>router.push("/contact")}
            className="flex items-center ml-10 px-6 py-3
            border-4 border-[#6c727f] rounded-full bg-black text-[#ffffff]">
                CONTACT
            </button>
        </div>
    </div>
  )
}

export default Navbar