"use client";

import Link from "next/link";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import {
  useState,
} from "react";

import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {

  const [hidden, setHidden] = useState(false);

  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {

    const previous = scrollY.getPrevious();

    if (previous) {

      if (latest > previous && latest > 120) {

        setHidden(true);

      } else {

        setHidden(false);

      }

    }

  });

  return (

    <motion.header

      initial={{
        y: -120,
      }}

      animate={{
        y: hidden ? -120 : 0,
      }}

      transition={{
        duration: 0.4,
      }}

      className="fixed top-0 left-0 w-full z-[999]"
    >

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-6">

        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-full px-5 md:px-8 py-4 flex items-center justify-between shadow-2xl">

          {/* LOGO */}

          <Link
            href="/"
            className="text-lg md:text-2xl font-black luxury-font tracking-[0.15em] text-yellow-400"
          >

            YALLSAFER

          </Link>

          {/* DESKTOP */}

          <nav className="hidden md:flex items-center gap-10 text-sm">

            <Link
              href="/"
              className="hover:text-yellow-400 transition"
            >

              الرئيسية

            </Link>

            <Link
              href="/"
              className="hover:text-yellow-400 transition"
            >

              الرحلات

            </Link>

            <Link
              href="/"
              className="hover:text-yellow-400 transition"
            >

              تواصل معنا

            </Link>

          </nav>

          {/* DESKTOP BUTTON */}

          <a
            href="https://wa.me/966500000000"
            target="_blank"
            className="hidden md:flex bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition duration-300"
          >

            احجز الآن

          </a>

          {/* MOBILE BUTTON */}

          <button

            onClick={() =>
              setOpen(!open)
            }

            className="md:hidden"
          >

            {open ? (

              <X />

            ) : (

              <Menu />

            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            className="md:hidden px-4 mt-4"
          >

            <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 flex flex-col gap-6">

              <Link
                href="/"
                onClick={() =>
                  setOpen(false)
                }
              >

                الرئيسية

              </Link>

              <Link
                href="/"
                onClick={() =>
                  setOpen(false)
                }
              >

                الرحلات

              </Link>

              <Link
                href="/"
                onClick={() =>
                  setOpen(false)
                }
              >

                تواصل معنا

              </Link>

              <a
                href="https://wa.me/966500000000"
                target="_blank"
                className="bg-yellow-400 text-black rounded-full py-4 text-center font-black"
              >

                احجز الآن

              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>

  );
}