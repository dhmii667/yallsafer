"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  useEffect,
} from "react";

export default function CursorGlow() {

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    damping: 25,
    stiffness: 120,
  });

  const smoothY = useSpring(mouseY, {
    damping: 25,
    stiffness: 120,
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {

      mouseX.set(e.clientX - 150);

      mouseY.set(e.clientY - 150);

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

      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-yellow-400/10 blur-3xl pointer-events-none z-[1]"
    />

  );
}