"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const MotionImage = motion(Image)

const Footer = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <div className="px-6 sm:px-10 md:px-20 lg:px-40">
        <div className="text-center">
          <motion.h5
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#cc9966] font-bold my-5 pt-10 sm:pt-20 text-base sm:text-lg"
          >
            Get in Touch With Us
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-2xl sm:text-4xl md:text-6xl font-bold tracking-wide mb-8 border-b-2 sm:border-b-4 inline-block pb-1"
          >
            info@aaronn.com
          </motion.h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-white gap-6 sm:gap-10 mt-8">
          <MotionImage
            src="/images/logo.png"
            alt="footer-logo"
            width={500}
            height={300}
            className="w-28 sm:w-32 md:w-40 h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-bold text-center md:text-left md:w-[30%] text-sm sm:text-base"
          >
            <p className="leading-relaxed tracking-wide">
              Street Avenue 21, CA 0-8-00-888-000
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center md:items-end font-bold text-sm sm:text-base"
          >
            <p className="mb-4 tracking-wider text-lg sm:text-xl">
              +90283353
            </p>
            <div className="flex items-center gap-3">
              <MotionImage
                src="/images/fb.png"
                alt="fb"
                width={24}
                height={24}
                className="w-5 h-5"
                transition={{ delay: 0.8 }}
              />
              <MotionImage
                src="/images/tweeter.png"
                alt="tweeter"
                width={24}
                height={24}
                className="w-5 h-5"
                transition={{ delay: 1 }}
              />
              <MotionImage
                src="/images/insta.png"
                alt="insta"
                width={24}
                height={24}
                className="w-5 h-5"
                transition={{ delay: 1.2 }}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white text-center mt-10 sm:mt-16 text-sm sm:text-base md:text-xl font-bold border-t border-gray-600 py-6 sm:py-10"
        >
          © 2023. Ideapeel. All rights reserved.
        </motion.div>
      </div>
    </div>
  )
}

export default Footer