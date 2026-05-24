"use client";

import {
  ShieldCheck,
  Crown,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [

  {
    icon: ShieldCheck,
    title: "حجز آمن وسريع",
    desc: "تأكيد فوري لحجز رحلتك",
  },

  {
    icon: Crown,
    title: "خدمة VIP",
    desc: "اهتمام كامل بتفاصيل رحلتك",
  },

  {
    icon: BadgeCheck,
    title: "أفضل الأسعار",
    desc: "أسعار منافسة مقابل جودة عالية",
  },

  {
    icon: Headphones,
    title: "دعم 24/7",
    desc: "خدمة عملاء طوال الوقت",
  },

];

export default function Features() {

  return (

    <section className="pb-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div

                key={index}

                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 text-center hover:-translate-y-2 transition duration-500"
              >

                <div className="w-20 h-20 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-6">

                  <Icon className="text-yellow-400 w-10 h-10" />

                </div>

                <h3 className="text-2xl font-black mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-loose">

                  {item.desc}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}