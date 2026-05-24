"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import Reveal from "@/components/Reveal";

interface Package {

  id: number;

  title: string;

  image: string;

  price: number;

  days: string;

}

export default function Packages() {

  const [packagesData, setPackagesData] = useState<Package[]>([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/packages")

      .then((res) => res.json())

      .then((data) => {

        setPackagesData(data);

      });

  }, []);

  return (

    <Reveal>

      <section className="relative py-32 px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}

          <div className="text-center mb-20">

            <p className="text-yellow-400 tracking-[0.4em] uppercase mb-4">

              Luxury Packages

            </p>

            <h2 className="text-5xl md:text-6xl font-black luxury-font">

              أفضل الرحلات السياحية

            </h2>

          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {packagesData.map((item, index) => (

              <motion.div

                key={item.id}

                initial={{
                  opacity: 0,
                  y: 80,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}

                whileHover={{
                  y: -12,
                }}

                className="group relative overflow-hidden rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-xl"
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden h-[420px]">

                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-black/10 to-transparent" />

                </div>

                {/* CONTENT */}

                <div className="absolute bottom-0 left-0 w-full p-8">

                  <p className="text-yellow-400 mb-3">

                    {item.days}

                  </p>

                  <h3 className="text-3xl font-black mb-4 luxury-font">

                    {item.title}

                  </h3>

                  <div className="flex items-center justify-between">

                    <span className="text-2xl font-black">

                      {item.price} SAR

                    </span>

                    <Link
                      href={`/packages/${item.id}`}
                      className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition duration-300"
                    >

                      التفاصيل

                    </Link>

                  </div>

                </div>

                {/* GLOW */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">

                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-400/20 blur-3xl rounded-full" />

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </Reveal>

  );
}