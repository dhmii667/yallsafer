"use client";

import {
  motion,
} from "framer-motion";

export default function Navbar() {

  return (

    <motion.nav

      initial={{
        y: -80,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.8,
      }}

      className="fixed top-0 left-0 w-full z-[9999]"
    >

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">

        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-full px-6 md:px-10 py-4 flex items-center justify-between shadow-[0_0_40px_rgba(255,255,255,0.03)]">

          {/* LOGO */}

          <a
            href="/"
            className="text-2xl md:text-3xl font-black tracking-wide text-yellow-400"
          >

            YALLSAFER

          </a>

          {/* LINKS */}

          <div className="hidden md:flex items-center gap-10 text-sm">

            <a
              href="/"
              className="hover:text-yellow-400 transition"
            >

              الرئيسية

            </a>

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
              className="hover:text-yellow-400 transition"
            >

              الرحلات

            </a>

            <a
              href="https://wa.me/966551268610"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >

              واتساب

            </a>

          </div>

          {/* MOBILE BUTTON */}

          <a
            href="https://wa.me/966551268610"
            target="_blank"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-black text-sm hover:scale-105 transition duration-300"
          >

            احجز الآن

          </a>

        </div>

      </div>

    </motion.nav>
  );
}