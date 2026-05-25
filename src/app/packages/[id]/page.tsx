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
      "الوصول إلى شنغهاي والاستقبال VIP",
      "جولة برج شنغهاي والأسواق الفاخرة",
      "زيارة ديزني لاند شنغهاي",
      "جولة نهرية ومطاعم فاخرة",
      "السفر إلى هانزو",
      "بحيرة ويست ليك والطبيعة",
      "العودة إلى شنغهاي",
      "الانتقال إلى بكين",
      "زيارة سور الصين العظيم",
      "القصر المحرم",
      "الأسواق الشعبية والتسوق",
      "يوم حر وتجارب فاخرة",
      "العودة إلى أرض الوطن",
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
      "الوصول إلى كوالالمبور",
      "برجي التوأم والأسواق",
      "جولة جنتنق",
      "منتجعات لنكاوي",
      "الأنشطة البحرية",
      "يوم استرخاء فاخر",
      "العودة إلى كوالالمبور",
      "السفر إلى سنغافورة",
      "مارينا باي",
      "يونيفرسال ستوديو",
      "حدائق الخليج",
      "التسوق الفاخر",
      "يوم حر",
      "العودة",
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
      "الوصول إلى بوكيت",
      "جولة بحرية خاصة",
      "جزيرة في في",
      "أنشطة بحرية",
      "منتجع فاخر",
      "الانتقال إلى كرابي",
      "جزر هونغ",
      "استجمام وشواطئ",
      "جولة ليلية",
      "يوم حر",
      "تسوق ومطاعم",
      "العودة",
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
      "الوصول إلى إسطنبول",
      "البوسفور والأسواق",
      "سبانجا والمعشوقية",
      "جولة السلطان أحمد",
      "السفر إلى طرابزون",
      "أوزنجول",
      "مرتفعات حيدر نبي",
      "يوم حر وتسوق",
      "العودة",
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
      "الوصول إلى ريو",
      "شاطئ كوباكابانا",
      "تمثال المسيح",
      "جولة جبل السكر",
      "رحلات بحرية",
      "مطاعم وتجارب فاخرة",
      "أنشطة شاطئية",
      "يوم حر",
      "التسوق",
      "منتجعات فاخرة",
      "جولات ليلية",
      "استجمام",
      "جولة خاصة",
      "يوم مفتوح",
      "العودة",
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

              {/* LINE */}

              <div className="absolute right-5 top-0 w-[2px] h-full bg-yellow-400/30" />

              <div className="space-y-10">

                {pkg.program.map((day, index) => (

                  <div
                    key={index}
                    className="relative flex items-start gap-6"
                  >

                    {/* NUMBER */}

                    <div className="relative z-10 min-w-[44px] h-[44px] rounded-full bg-yellow-400 text-black flex items-center justify-center font-black shadow-[0_0_25px_rgba(250,204,21,0.5)]">

                      {index + 1}

                    </div>

                    {/* CONTENT */}

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