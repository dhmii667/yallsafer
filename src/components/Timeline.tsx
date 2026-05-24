"use client";

import {
  Plane,
  PlaneLanding,
  Bus,
  Hotel,
  Map
} from "lucide-react";

import { motion } from "framer-motion";

const timeline = [

  {
    title: "رحلة الطيران",
    icon: Plane,
  },

  {
    title: "الاستقبال بالمطار",
    icon: PlaneLanding,
  },

  {
    title: "التوصيل للفندق",
    icon: Bus,
  },

  {
    title: "تسجيل الدخول للفندق",
    icon: Hotel,
  },

  {
    title: "الأنشطة والجولات",
    icon: Map,
  },

];

export default function Timeline() {

  return (

    <div className="py-24 px-6">

      <h2 className="text-5xl font-bold text-center text-yellow-400 mb-20">

        تفاصيل الرحلة

      </h2>

      <div className="max-w-4xl mx-auto relative">

        {timeline.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                x: -100,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}

              className="relative flex items-center gap-8 mb-16"
            >

              {/* LINE */}

              {index !== timeline.length - 1 && (

                <div className="absolute left-7 top-16 w-1 h-24 bg-yellow-400/40 rounded-full" />

              )}

              {/* ICON */}

              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.7)] z-10">

                <Icon className="text-black w-8 h-8" />

              </div>

              {/* CONTENT */}

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex-1 hover:scale-[1.02] transition duration-300">

                <h3 className="text-2xl font-bold text-white">

                  {item.title}

                </h3>

              </div>

            </motion.div>

          );

        })}

      </div>

    </div>

  );
}