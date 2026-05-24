"use client";

import { motion } from "framer-motion";

const images = [

  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

  "https://images.unsplash.com/photo-1493558103817-58b2924bce98",

  "https://images.unsplash.com/photo-1527631746610-bca00a040d60",

  "https://images.unsplash.com/photo-1519046904884-53103b34b206",

  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

];

export default function Gallery() {

  return (

    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-20">

          <p className="text-yellow-400 tracking-[0.4em] uppercase mb-4">

            Luxury Moments

          </p>

          <h2 className="text-6xl font-black">

            معرض الرحلة

          </h2>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

          {images.map((image, index) => (

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
                duration: 0.7,
                delay: index * 0.1,
              }}

              className={`group relative overflow-hidden rounded-[35px]
              
              ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }
              
              ${
                index === 3
                  ? "md:col-span-2"
                  : ""
              }
              
              `}
            >

              <img
                src={image}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}