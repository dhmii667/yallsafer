"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "next/navigation";

import {
  CalendarDays,
  Hotel,
  BadgeDollarSign,
} from "lucide-react";

import Journey from "@/components/Journey";
import DailyProgram from "@/components/DailyProgram";
import Features from "@/components/Features";
import PageTransition from "@/components/PageTransition";

export default function PackageDetails() {

  const params = useParams();

  const [pkg, setPkg] = useState<any>(null);

  useEffect(() => {

    fetch(`http://127.0.0.1:8000/packages/${params.id}`)

      .then((res) => res.json())

      .then((data) => {

        setPkg(data);

      });

  }, [params.id]);

  if (!pkg) {

    return (

      <div className="h-screen flex items-center justify-center bg-[#030712] text-white text-3xl">

        Loading...

      </div>

    );
  }

  return (

    <PageTransition>

      <main className="bg-[#030712] min-h-screen text-white overflow-hidden">

        {/* HERO */}

        <section className="relative px-4 md:px-6 pt-28 md:pt-32 pb-12 md:pb-16">

          <div className="max-w-7xl mx-auto">

            <div className="relative rounded-[35px] md:rounded-[45px] overflow-hidden border border-white/10">

              {/* IMAGE */}

              <img
                src={pkg.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-black/60" />

              {/* CONTENT */}

              <div className="relative z-10 p-6 md:p-20 min-h-[650px] md:min-h-[700px] flex flex-col justify-between">

                {/* TOP */}

                <div className="max-w-2xl">

                  <p className="text-yellow-400 tracking-[0.25em] uppercase mb-4 text-sm md:text-base">

                    Luxury Journey

                  </p>

                  <h1 className="text-4xl sm:text-5xl md:text-8xl font-black luxury-font mb-6 md:mb-8 leading-tight">

                    {pkg.title}

                  </h1>

                  <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-loose">

                    {pkg.description}

                  </p>

                </div>

                {/* INFO CARD */}

                <div className="bg-black/30 border border-white/10 backdrop-blur-2xl rounded-[28px] md:rounded-[35px] p-6 md:p-8 mt-12">

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center">

                    {/* DAYS */}

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center shrink-0">

                        <CalendarDays className="text-black" />

                      </div>

                      <div>

                        <p className="text-gray-400 text-sm">

                          المدة

                        </p>

                        <h3 className="font-black text-lg md:text-xl">

                          {pkg.days}

                        </h3>

                      </div>

                    </div>

                    {/* HOTEL */}

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center shrink-0">

                        <Hotel className="text-black" />

                      </div>

                      <div>

                        <p className="text-gray-400 text-sm">

                          الفندق

                        </p>

                        <h3 className="font-black text-lg md:text-xl">

                          {pkg.hotel}

                        </h3>

                      </div>

                    </div>

                    {/* PRICE */}

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center shrink-0">

                        <BadgeDollarSign className="text-black" />

                      </div>

                      <div>

                        <p className="text-gray-400 text-sm">

                          السعر

                        </p>

                        <h3 className="font-black text-lg md:text-xl text-yellow-400">

                          {pkg.price} SAR

                        </h3>

                      </div>

                    </div>

                    {/* BUTTON */}

                    <a
                      href="https://wa.me/966500000000"
                      target="_blank"
                      className="bg-yellow-400 text-black rounded-full py-4 md:py-5 px-6 md:px-10 text-center font-black text-base md:text-lg hover:scale-105 transition duration-300"
                    >

                      احجز الآن

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* JOURNEY */}

        <Journey />

        {/* DAILY */}

        <DailyProgram
          program={JSON.parse(pkg.program)}
        />

        {/* FEATURES */}

        <Features />

      </main>

    </PageTransition>

  );
}