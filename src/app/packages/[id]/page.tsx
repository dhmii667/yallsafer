"use client";

import {
  useParams,
  useRouter,
} from "next/navigation";

import { packages } from "@/data/packages";

export default function PackagePage() {

  const params = useParams();

  const router = useRouter();

  const pkg = packages.find(
    (item) => item.id === Number(params.id)
  );

  if (!pkg) {

    router.push("/");

    return null;
  }

  return (

    <main className="bg-[#030712] text-white min-h-screen overflow-hidden">

      {/* HERO */}

      <section className="relative h-[70vh] overflow-hidden">

        <img
          src={pkg.image}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

          <div>

            <a
              href="/"
              className="inline-block mb-8 bg-white/10 border border-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition"
            >

              ← العودة للرئيسية

            </a>

            <p className="text-yellow-400 tracking-[0.3em] uppercase mb-4">

              Luxury Travel

            </p>

            <h1 className="text-5xl md:text-8xl font-black mb-6">

              {pkg.title}

            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-loose">

              {pkg.description}

            </p>

          </div>

        </div>

      </section>

      {/* CURVE */}

      <div className="relative -mt-1">

        <svg
          viewBox="0 0 1440 180"
          className="w-full h-auto fill-[#030712]"
        >

          <path d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,101.3C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>

        </svg>

      </div>

      {/* DETAILS */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-10">

          {/* INFO */}

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl">

            <h2 className="text-4xl font-black mb-8">

              تفاصيل الرحلة

            </h2>

            <div className="space-y-6 text-xl">

              <div className="flex justify-between">

                <span>المدة</span>

                <span className="text-yellow-400">

                  {pkg.duration}

                </span>

              </div>

              <div className="flex justify-between">

                <span>السعر</span>

                <span className="text-yellow-400">

                  {pkg.price} SAR

                </span>

              </div>

            </div>

          </div>

          {/* TIMELINE */}

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl">

            <h2 className="text-4xl font-black mb-10">

              الجدول السياحي

            </h2>

            <div className="relative">

              <div className="absolute right-5 top-0 w-[2px] h-full bg-yellow-400/30" />

              <div className="space-y-10">

                {pkg.program.map((day, index) => (

                  <div
                    key={index}
                    className="relative flex items-start gap-6"
                  >

                    <div className="relative z-10 min-w-[44px] h-[44px] rounded-full bg-yellow-400 text-black flex items-center justify-center font-black shadow-[0_0_25px_rgba(250,204,21,0.5)]">

                      {index + 1}

                    </div>

                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[24px] px-6 py-5 w-full hover:bg-white/10 transition duration-300">

                      <p className="text-lg text-gray-300 leading-loose">

                        {day}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}