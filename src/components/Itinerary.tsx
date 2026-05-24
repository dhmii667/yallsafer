"use client";

import { useState } from "react";

import {
  ChevronDown,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const days = [

  {
    day: "اليوم الأول",
    title: "الوصول والاستقبال",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

    details:
      "الوصول إلى الوجهة والاستقبال الخاص ثم التوصيل للفندق واستلام الغرف والاسترخاء.",
  },

  {
    day: "اليوم الثاني",
    title: "الجولات البحرية",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",

    details:
      "رحلة بحرية خاصة وزيارات لأفضل الشواطئ والمطاعم الفاخرة.",
  },

  {
    day: "اليوم الثالث",
    title: "الأنشطة السياحية",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60",

    details:
      "أنشطة وتجارب سياحية وزيارات لأشهر الأماكن والمعالم.",
  },

];

export default function Itinerary() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (

    <section className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

          <p className="text-yellow-400 tracking-[0.4em] uppercase mb-4">

            Day By Day

          </p>

          <h2 className="text-6xl font-black">

            البرنامج اليومي

          </h2>

        </div>

        {/* DAYS */}

        <div className="space-y-8">

          {days.map((item, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl"
              >

                {/* HEADER */}

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }

                  className="w-full flex items-center justify-between p-8 text-right"
                >

                  <div>

                    <p className="text-yellow-400 mb-3">

                      {item.day}

                    </p>

                    <h3 className="text-3xl font-bold">

                      {item.title}

                    </h3>

                  </div>

                  <ChevronDown
                    className={`transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {/* CONTENT */}

                <AnimatePresence>

                  {isOpen && (

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

                      <div className="p-8 pt-0">

                        <img
                          src={item.image}
                          className="w-full h-[350px] object-cover rounded-3xl mb-8"
                        />

                        <p className="text-xl text-gray-300 leading-loose">

                          {item.details}

                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}