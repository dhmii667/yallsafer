"use client";

import {
  motion,
} from "framer-motion";

export default function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 80,
        filter: "blur(12px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 1,
      }}

    >

      {children}

    </motion.div>

  );
}