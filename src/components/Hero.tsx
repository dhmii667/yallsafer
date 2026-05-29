"use client";

import {
  motion,
} from "framer-motion";

import Parallax from "@/components/Parallax";

export default function Hero() {

  return (

    <section className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >

        <source
          src="/videos/travel.mp4"
          type="video/mp4"
        />

      </video>

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/60" /> 

      {/* GRADIENT */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-black/20 to-black/50" /> 

      {/* CONTENT */}

      <Parallax>

        <motion.div

          initial={{
            opacity: 0,
            y: 80,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1.2,
          }}

          className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto"
        >

          {/* TOP TEXT */}

          <p className="text-yellow-400 tracking-[0.25em] md:tracking-[0.4em] uppercase mb-5 md:mb-6 text-xs sm:text-sm md:text-base">

            Luxury Travel Experience

          </p>

          {/* TITLE */}

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-tight mb-6 md:mb-8">

            رحلات فاخرة <br />

            إلى أجمل وجهات العالم

          </h1>

          {/* DESCRIPTION */}

          <p className="text-gray-300 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto mb-10 md:mb-12 leading-loose">

            تجارب سياحية مصممة بعناية
            لعشاق الفخامة والاسترخاء
            بأفضل الوجهات العالمية.

          </p>

          {/* STATS */}

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl px-8 py-5">

              <h3 className="text-4xl font-black text-yellow-400 mb-2">

                +850

              </h3>

              <p className="text-gray-300">

                عميل سعيد

              </p>

            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl px-8 py-5">

              <h3 className="text-4xl font-black text-yellow-400 mb-2">

                +120

              </h3>

              <p className="text-gray-300">

                رحلة فاخرة

              </p>

            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl px-8 py-5">

              <h3 className="text-4xl font-black text-yellow-400 mb-2">

                5★

              </h3>

              <p className="text-gray-300">

                تقييم العملاء

              </p>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">

            {/* EXPLORE */}

            <a
              href="#packages"
              onClick={(e) => {

                e.preventDefault();

                document
                  .getElementById("packages")
                  ?.scrollIntoView({

                    behavior: "smooth",

                  });

              }}
              className="w-full sm:w-auto bg-yellow-400 text-black px-7 md:px-10 py-4 md:py-5 rounded-full text-base md:text-xl font-black hover:scale-105 transition duration-300 text-center shadow-[0_0_30px_rgba(250,204,21,0.35)]"
            >

              استكشف الرحلات

            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/966500000000"
              target="_blank"
              className="w-full sm:w-auto border border-white/20 backdrop-blur-xl px-7 md:px-10 py-4 md:py-5 rounded-full text-base md:text-xl hover:bg-white/10 transition duration-300 text-center"
            >

              تواصل واتساب

            </a>

          </div>

        </motion.div>

      </Parallax>

    </section>
  );
}