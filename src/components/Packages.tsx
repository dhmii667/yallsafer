"use client";

import Link from "next/link";

interface Props {

  packages: any[];

}

export default function Packages({
  packages,
}: Props) {

  return (

    <section
      id="packages"
      className="py-24 px-4 md:px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}

        <div className="text-center mb-16">

          <p className="text-yellow-400 tracking-[0.3em] uppercase mb-4">

            Luxury Packages

          </p>

          <h2 className="text-4xl md:text-6xl font-black">

            البكجات السياحية

          </h2>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {packages.map((pkg) => (

            <div

              key={pkg.id}

              className="bg-white/5 border border-white/10 rounded-[35px] overflow-hidden backdrop-blur-xl hover:scale-[1.02] transition duration-500"
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

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}