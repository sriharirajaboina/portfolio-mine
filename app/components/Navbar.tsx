"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-6 md:px-16 py-4 bg-black text-white overflow-x-hidden relative">
      {/* Navbar main container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={100}
            className="w-32 md:w-40"
          />
        </motion.div>

        {/* Desktop Nav Links */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-10 text-[#6c727f] font-bold text-lg"
        >
          <motion.li whileHover={{ scale: 1.1, color: "#fff" }}>
            <Link href="/">HOME</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#fff" }}>
            <Link href="/aboutme">ABOUT ME</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#fff" }}>
            <Link href="/mywork">MY WORK</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <button
              onClick={() => router.push("/contact")}
              className="px-6 py-2 border-4 border-[#6c727f] rounded-full bg-black text-white hover:bg-[#6c727f] hover:text-black transition"
            >
              CONTACT
            </button>
          </motion.li>
        </motion.ul>

        {/* Mobile Menu Icon */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3Icon className="h-8 w-8 text-[#6c727f]" />
        </motion.div>
      </motion.div>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50"
          >
            {/* Close Icon */}
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.4 }}
              className="absolute top-6 right-6 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <XMarkIcon className="h-10 w-10 text-[#6c727f]" />
            </motion.div>

            {/* Mobile Menu Items */}
            <motion.ul
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-10 text-3xl font-bold text-[#6c727f]"
            >
              <motion.li
                whileHover={{ scale: 1.2, color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/">HOME</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/aboutme">ABOUT ME</Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#fff" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/mywork">MY WORK</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push("/contact");
                  }}
                  className="px-8 py-3 border-4 border-[#6c727f] rounded-full bg-black text-white hover:bg-[#6c727f] hover:text-black transition"
                >
                  CONTACT
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;