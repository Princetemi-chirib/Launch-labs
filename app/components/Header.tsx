"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header 
      className="relative z-30 flex items-center justify-between w-full max-w-full"
      style={{
        width: '100%',
        height: '95px',
        borderRadius: '40px',
        paddingLeft: '25px',
        paddingRight: '25px',
        backgroundColor: '#EFF7F7',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/Copy of L.zip - 2 1.png"
          alt="Launch Labs Logo"
          width={130}
          height={130}
          className="w-[130px] h-[130px] object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Home
        </Link>
        <Link href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          About Us
        </Link>
        <Link href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Our Service
        </Link>
        <Link href="#how-it-works" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          How It Works
        </Link>
      </nav>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        <button 
          className="hidden lg:flex text-white font-bold whitespace-nowrap items-center justify-center"
          style={{
            width: '133px',
            height: '50px',
            borderRadius: '40px',
            paddingTop: '8px',
            paddingRight: '20px',
            paddingBottom: '8px',
            paddingLeft: '20px',
            gap: '8px',
            background: 'linear-gradient(180deg, #38B6FF 0%, #7354E0 100%)',
          }}
        >
          Get started
        </button>
        {/* Hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-black/5"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <motion.aside className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 flex flex-col gap-6"
            initial={{ x: 320 }} animate={{ x: 0 }} exit={{ x: 320 }} transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-gray-900">Menu</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-black/5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link href="#home" onClick={() => setOpen(false)} className="text-gray-800 hover:text-gray-900">Home</Link>
              <Link href="#about" onClick={() => setOpen(false)} className="text-gray-800 hover:text-gray-900">About Us</Link>
              <Link href="#services" onClick={() => setOpen(false)} className="text-gray-800 hover:text-gray-900">Our Service</Link>
              <Link href="#how-it-works" onClick={() => setOpen(false)} className="text-gray-800 hover:text-gray-900">How It Works</Link>
              <button 
                className="mt-4 text-white font-semibold rounded-full"
                style={{
                  height: '48px',
                  borderRadius: '40px',
                  background: 'linear-gradient(180deg, #38B6FF 0%, #7354E0 100%)',
                }}
              >
                Get started
              </button>
            </nav>
          </motion.aside>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
}

