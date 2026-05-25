"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

export default function NotFound() {

  return (

    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-6 relative overflow-hidden">

      {/* GLOW */}

      <div className="absolute w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] rounded-full" />

      {/* CONTENT */}

      <motion.div

        initial={{
          opacity: 0,
          scale: 0.9,
        }}

        animate={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 0.8,
        }}

        className="relative text-center z-10"
      >

        {/* NUMBER */}

        <h1 className="text-[120px] md:text-[220px] font-black text-yellow-400 leading-none">

          404

        </h1>

        {/* TITLE */}

        <h2 className="text-3xl md:text-5xl font-black mb-6">

          الصفحة غير موجودة

        </h2>

        {/* TEXT */}

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-loose mb-10">

          يبدو أنك وصلت إلى مسار غير موجود
          أو تم نقل الصفحة إلى مكان آخر.

        </p>

        {/* BUTTON */}

        <Link
          href="/"
          className="inline-block bg-yellow-400 text-black px-10 py-5 rounded-full text-lg font-black hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(250,204,21,0.35)]"
        >

          العودة للرئيسية

        </Link>

      </motion.div>

    </div>
  );
}