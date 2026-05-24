"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
} from "react";

export default function Parallax({
  children,
}: {
  children: React.ReactNode;
}) {

  const x = useMotionValue(0);

  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    damping: 40,
    stiffness: 120,
  });

  const smoothY = useSpring(y, {
    damping: 40,
    stiffness: 120,
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {

      const centerX = window.innerWidth / 2;

      const centerY = window.innerHeight / 2;

      x.set((e.clientX - centerX) * 0.02);

      y.set((e.clientY - centerY) * 0.02);

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);

  }, []);

  return (

    <motion.div

      style={{
        x: smoothX,
        y: smoothY,
      }}

    >

      {children}

    </motion.div>

  );
}