"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function ScrollProgress() {

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (

    <motion.div

      className="fixed top-0 left-0 right-0 h-[4px] bg-yellow-400 z-[99999] origin-left shadow-[0_0_20px_rgba(250,204,21,0.6)]"

      style={{
        scaleX,
      }}
    />

  );
}