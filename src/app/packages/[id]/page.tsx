"use client";

import {
  useParams,
  useRouter,
} from "next/navigation";

const packages = [

  {
    id: 1,
    title: "الصين",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2070",
    duration: "13 يوم",
    price: "14500",
    description:
      "رحلة فاخرة تجمع بين الحداثة الصينية والمعالم التاريخية.",
    program: [
      "شنغهاي",
      "ديزني لاند",
      "سور الصين",
      "القصر المحرم",
      "تجارب فاخرة",
    ],
  },

  {
    id: 2,
    title: "ماليزيا & سنغافورة",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2070",
    duration: "14 يوم",
    price: "16800",
    description:
      "مزيج بين الطبيعة الآسيوية والفخامة العصرية.",
    program: [
      "كوالالمبور",
      "جنتنق",
      "لنكاوي",
      "مارينا باي",
      "يونيفرسال",
    ],
  },

  {
    id: 3,
    title: "تايلند",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070",
    duration: "12 يوم",
    price: "9800",
    description:
      "استجمام فاخر بين الجزر والشواطئ التايلندية.",
    program: [
      "بوكيت",
      "كرابي",
      "في في",
      "رحلات بحرية",
      "منتجعات فاخرة",
    ],
  },

  {
    id: 4,
    title: "تركيا",
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2070",
    duration: "9 أيام",
    price: "8900",
    description:
      "تجربة تركية تجمع الطبيعة والمعالم الراقية.",
    program: [
      "إسطنبول",
      "البوسفور",
      "سبانجا",
      "طرابزون",
      "أوزنجول",
    ],
  },

  {
    id: 5,
    title: "البرازيل",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070",
    duration: "15 يوم",
    price: "21900",
    description:
      "رحلة لاتينية فاخرة مليئة بالشواطئ والتجارب.",
    program: [
      "ريو دي جانيرو",
      "كوباكابانا",
      "جبل السكر",
      "مطاعم فاخرة",
      "استجمام",
    ],
  },

];

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

    <main className="bg-[#030712] text-white min-h-screen">

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

      {/* DETAILS */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

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

          {/* PROGRAM */}

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

            <h2 className="text-4xl font-black mb-8">

              الجدول السياحي

            </h2>

            <div className="space-y-5">

              {pkg.program.map((day, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-white/10 pb-4"
                >

                  <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center font-black">

                    {index + 1}

                  </div>

                  <p className="text-lg text-gray-300">

                    {day}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}