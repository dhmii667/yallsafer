"use client";

import {
  MessageCircle,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

export default function WhatsAppButton() {

  return (

    <motion.a

      href="https://wa.me/966551268610"

      target="_blank"

      initial={{
        scale: 0,
      }}

      animate={{
        scale: 1,
      }}

      transition={{
        duration: 0.5,
      }}

      whileHover={{
        scale: 1.08,
      }}

      whileTap={{
        scale: 0.95,
      }}

      className="fixed bottom-6 left-6 z-[9999]"
    >

      <div className="relative">

        {/* GLOW */}

        <div className="absolute inset-0 rounded-full bg-green-500 blur-2xl opacity-50 animate-pulse" />

        {/* BUTTON */}

        <div className="relative w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_35px_rgba(34,197,94,0.6)]">

          <MessageCircle
            size={30}
            className="text-white"
          />

        </div>

      </div>

    </motion.a>
  );
}