"use client";

import {
  Plane,
  Hotel,
  Bus,
  MapPinned,
  Palmtree,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

const steps = [

  {
    icon: Plane,
    number: "01",
    title: "رحلة الطيران",
    desc: "رحلة مريحة عبر أفضل الخطوط الجوية.",
  },

  {
    icon: MapPinned,
    number: "02",
    title: "الاستقبال بالمطار",
    desc: "استقبال VIP ونقل خاص.",
  },

  {
    icon: Bus,
    number: "03",
    title: "التوصيل للفندق",
    desc: "سيارة خاصة إلى الفندق.",
  },

  {
    icon: Hotel,
    number: "04",
    title: "تسجيل الدخول",
    desc: "دخول سريع لأفخم الغرف.",
  },

  {
    icon: Palmtree,
    number: "05",
    title: "الأنشطة والجولات",
    desc: "رحلات وأنشطة ممتعة طوال الرحلة.",
  },

];

export default function Journey() {

  return (

    <section className="relative py-32 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-24">

          <p className="text-yellow-400 tracking-[0.4em] uppercase mb-4">

            Journey Timeline

          </p>

          <h2 className="text-5xl md:text-6xl font-black luxury-font">

            رحلة تفصيلية

          </h2>

        </div>

        {/* TIMELINE */}

        <div className="relative">

          {/* SVG LINE */}

          <svg
            className="absolute top-16 left-0 w-full hidden lg:block"
            height="120"
            viewBox="0 0 1200 120"
            fill="none"
          >

            <path
              d="
                M 0 60
                C 120 0, 180 120, 300 60
                S 480 0, 600 60
                S 780 120, 900 60
                S 1080 0, 1200 60
              "
              stroke="rgba(250,204,21,0.5)"
              strokeWidth="2"
              strokeDasharray="8 10"
            />

          </svg>

          {/* ITEMS */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <motion.div

                  key={index}

                  initial={{
                    opacity: 0,
                    y: 60,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                  }}

                  className="text-center"
                >

                  {/* ICON */}

                  <div className="relative w-28 h-28 mx-auto mb-8">

                    <div className="absolute inset-0 rounded-full border border-yellow-400/30 bg-yellow-400/5 backdrop-blur-xl" />

                    <div className="absolute inset-3 rounded-full border border-yellow-400/20" />

                    <div className="absolute inset-0 flex items-center justify-center">

                      <Icon className="w-12 h-12 text-yellow-400" />

                    </div>

                    {/* GLOW */}

                    <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl rounded-full" />

                  </div>

                  {/* NUMBER */}

                  <p className="text-yellow-400 text-xl font-black mb-4">

                    {step.number}

                  </p>

                  {/* TITLE */}

                  <h3 className="text-2xl font-black mb-4">

                    {step.title}

                  </h3>

                  {/* DESC */}

                  <p className="text-gray-400 leading-loose">

                    {step.desc}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>

  );
}