import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className="bg-black ">
        <div className="md:mx-50">
            <div className="text-center">
                <h5 className="text-[#cc9966] font-bold my-5 pt-20">
                    Get in Touch With Us
                </h5>
                <h1 className="text-[#ffffff] text-6xl font-bold
                tracking-wide mb-30 border-b-5 inline-block pb-1">
                    info@aaronn.com
                </h1>

            </div>
            <div className="flex items-center justify-between
            text-[#ffffff]">
                <Image 
                src="/images/logo.png"
                alt="footer-logo"
                width={100} 
                height={100}
                className="w-30 h-10"/>
                <div className="font-bold w-[18%]">
                    <p className="leading-loose tracking-widest">Street Avenue 21, CA 0-8-00-888-000</p>
                </div>
                <div className="flex flex-col font-bold">
                    <p className="mb-4 tracking-wider text-xl">+90283353</p>
                    <div className="flex items-center gap-3">
                        <Image 
                        src="/images/fb.png"
                        alt="fb"
                        width={50}
                        height={50}
                        className="w-5 h-5"/>
                        <Image src="/images/tweeter.png"
                        alt="tweeter"
                        width={50}
                        height={50}
                        className="w-5 h-5"/>
                        <Image src="/images/insta.png"
                        alt="insta"
                        width={50}
                        height={50}
                        className="w-5 h-5"/>
                    </div>
                </div>
            </div>
            <div className="text-[#ffffff] text-center mt-15 text-2xl font-bold
            border-t-2 py-20">
                © 2023. Ideapeel. All rights reserved. 
            </div>
        </div>
    </div>
  )
}

export default Footer