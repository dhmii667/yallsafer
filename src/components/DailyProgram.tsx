"use client";

import {
  useState,
} from "react";

import {
  ChevronDown,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

interface ProgramItem {

  day: string;

  title: string;

  desc: string;

}

interface Props {

  program: ProgramItem[];

}

export default function DailyProgram({
  program,
}: Props) {

  const [open, setOpen] =
    useState<number | null>(0);

  return (

    <section className="py-24 md:py-32 px-4 md:px-6">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-16 md:mb-20">

          <p className="text-yellow-400 tracking-[0.35em] uppercase mb-4 text-sm">

            Daily Program

          </p>

          <h2 className="text-4xl md:text-6xl font-black luxury-font">

            البرنامج اليومي

          </h2>

        </div>

        {/* ITEMS */}

        <div className="space-y-5">

          {program.map((item, index) => (

            <div

              key={index}

              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[25px] md:rounded-[30px] overflow-hidden"
            >

              {/* BUTTON */}

              <button

                onClick={() =>
                  setOpen(
                    open === index
                      ? null
                      : index
                  )
                }

                className="w-full p-5 md:p-7 flex items-center justify-between text-right"
              >

                <div>

                  <p className="text-yellow-400 mb-2 text-sm md:text-base">

                    {item.day}

                  </p>

                  <h3 className="text-xl md:text-2xl font-black">

                    {item.title}

                  </h3>

                </div>

                <motion.div

                  animate={{
                    rotate:
                      open === index
                        ? 180
                        : 0,
                  }}
                >

                  <ChevronDown />

                </motion.div>

              </button>

              {/* CONTENT */}

              <AnimatePresence>

                {open === index && (

                  <motion.div

                    initial={{
                      height: 0,
                      opacity: 0,
                    }}

                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}

                    exit={{
                      height: 0,
                      opacity: 0,
                    }}

                    transition={{
                      duration: 0.4,
                    }}

                    className="overflow-hidden"
                  >

                    <div className="px-5 md:px-7 pb-7 text-gray-300 leading-loose text-base md:text-lg">

                      {item.desc}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}