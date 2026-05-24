"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loader({
  loading,
}: {
  loading: boolean;
}) {

  return (

    <AnimatePresence>

      {loading && (

        <motion.div

          initial={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="fixed inset-0 z-[9999] bg-[#030712] flex items-center justify-center"
        >

          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}

            className="text-center"
          >

            <h1 className="text-7xl md:text-8xl font-black text-yellow-400 tracking-[0.2em] luxury-font mb-6">

              YALLSAFER

            </h1>

            <p className="text-gray-400 tracking-[0.4em] uppercase">

              Luxury Travel Experience

            </p>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}