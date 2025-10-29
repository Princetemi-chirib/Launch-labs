"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0B0D11" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6 py-10">
        {/* Logo */}
        <motion.div className="flex items-center gap-3" initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <Image
            src="/Copy of L.zip - 2 1.png"
            alt="Launch Labs"
            width={130}
            height={130}
            className="h-[130px] w-[130px] object-contain"
            style={{ opacity: 1 }}
          />
        </motion.div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <motion.a
            aria-label="Facebook"
            href="#"
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/30 text-white hover:bg-white/10"
            whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" fill="currentColor"/>
            </svg>
          </motion.a>
          <motion.a
            aria-label="X"
            href="#"
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/30 text-white hover:bg-white/10"
            whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h3.3l4.2 6 4.8-6H20l-6.6 8.2L20 20h-3.3l-4.7-6.7L6.8 20H4l7-8.9L4 4Z" fill="currentColor"/>
            </svg>
          </motion.a>
          <motion.a
            aria-label="Instagram"
            href="#"
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/30 text-white hover:bg-white/10"
            whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM18.3 6.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" fill="currentColor"/>
            </svg>
          </motion.a>
          <motion.a
            aria-label="LinkedIn"
            href="#"
            className="h-10 w-10 grid place-items-center rounded-xl border border-white/30 text-white hover:bg-white/10"
            whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM4 9h3v12H4V9Zm6 0h2.9v1.6h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V21H17v-6.1c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H10V9Z" fill="currentColor"/>
            </svg>
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/70">
          Launch Labs © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}


