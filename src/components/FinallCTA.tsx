"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {

  return (

    <section className="relative py-40 overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-black/50 to-black/60" />

      </div>

      {/* CONTENT */}

      <motion.div

        initial={{
          opacity: 0,
          y: 80,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        className="relative z-10 max-w-5xl mx-auto text-center px-6"
      >

        <p className="text-yellow-400 tracking-[0.4em] uppercase mb-6">

          Luxury Experience

        </p>

        <h2 className="text-6xl md:text-7xl font-black leading-tight mb-10">

          ابدأ رحلتك الفاخرة الآن

        </h2>

        <p className="text-2xl text-gray-300 leading-loose mb-14">

          استمتع بتجربة سياحية استثنائية مع أفضل الفنادق والجولات والخدمات المصممة خصيصًا لك.

        </p>

        {/* BUTTON */}

        <a
          href="https://wa.me/966500000000"
          target="_blank"
          className="inline-flex items-center gap-4 bg-yellow-400 text-black px-12 py-6 rounded-full text-2xl font-black hover:scale-105 transition duration-300 shadow-[0_0_60px_rgba(250,204,21,0.4)]"
        >

          احجز عبر واتساب

        </a>

      </motion.div>

    </section>

  );
}