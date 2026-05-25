"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

interface Props {

  packages: any[];

}

export default function Packages({
  packages,
}: Props) {

  return (

    <>

      {/* TOP CURVE */}

      <div className="relative -mt-1">

        <svg
          viewBox="0 0 1440 180"
          className="w-full h-auto fill-[#030712]"
        >

          <path d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,101.3C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>

        </svg>

      </div>

      {/* SECTION */}

      <section
        id="packages"
        className="py-24 px-4 md:px-6 bg-[#030712]"
      >

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}

          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            viewport={{
              once: true,
            }}

            className="text-center mb-16"
          >

            <p className="text-yellow-400 tracking-[0.3em] uppercase mb-4">

              Luxury Packages

            </p>

            <h2 className="text-4xl md:text-6xl font-black">

              البكجات السياحية

            </h2>

          </motion.div>

          {/* GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            {packages.map((pkg, index) => (

              <motion.div

                key={pkg.id}

                initial={{
                  opacity: 0,
                  y: 60,
                  filter: "blur(10px)",
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}

                viewport={{
                  once: true,
                }}

                className="bg-white/5 border border-white/10 rounded-[35px] overflow-hidden backdrop-blur-xl hover:scale-[1.02] hover:-translate-y-2 transition duration-500"
              >

                {/* IMAGE */}

                <div className="relative h-[320px] overflow-hidden">

                  <img
                    src={pkg.image}
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                </div>

                {/* CONTENT */}

                <div className="p-8">

                  <h3 className="text-3xl font-black mb-4">

                    {pkg.title}

                  </h3>

                  <p className="text-gray-300 leading-loose mb-6">

                    {pkg.description}

                  </p>

                  <div className="flex items-center justify-between mb-8">

                    <span className="text-yellow-400 text-3xl font-black">

                      {pkg.price} SAR

                    </span>

                    <span className="text-gray-400">

                      {pkg.duration}

                    </span>

                  </div>

                  <Link
                    href={`/packages/${pkg.id}`}
                    className="block text-center bg-yellow-400 text-black py-4 rounded-full font-black hover:scale-105 transition duration-300"
                  >

                    تفاصيل الرحلة

                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}