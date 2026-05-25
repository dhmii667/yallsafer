"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  MessageCircle,
  X,
} from "lucide-react";

export default function WhatsAppPopup() {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {

      setOpen(true);

    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <AnimatePresence>

      {open && (

        <motion.div

          initial={{
            opacity: 0,
            y: 100,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            y: 100,
          }}

          transition={{
            duration: 0.5,
          }}

          className="fixed bottom-28 left-6 z-[99999]"
        >

          <div className="relative w-[340px] bg-[#0b1220]/95 backdrop-blur-2xl border border-white/10 rounded-[30px] p-6 shadow-[0_0_60px_rgba(0,0,0,0.45)] overflow-hidden">

            {/* GLOW */}

            <div className="absolute inset-0 bg-yellow-400/5 blur-[100px]" />

            {/* CLOSE */}

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 left-4 text-gray-400 hover:text-white"
            >

              <X size={20} />

            </button>

            {/* ICON */}

            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(34,197,94,0.5)]">

              <MessageCircle
                size={32}
                className="text-white"
              />

            </div>

            {/* TITLE */}

            <h3 className="text-2xl font-black mb-3">

              احجز رحلتك الآن ✈️

            </h3>

            {/* TEXT */}

            <p className="text-gray-400 leading-loose mb-6">

              فريق YALLSAFER جاهز لمساعدتك
              في اختيار رحلتك الفاخرة القادمة.

            </p>

            {/* BUTTON */}

            <a
              href="https://wa.me/966551268610"
              target="_blank"
              className="block text-center bg-yellow-400 text-black py-4 rounded-full font-black hover:scale-105 transition duration-300"
            >

              تواصل واتساب

            </a>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}