"use client";

import { useParams } from "next/navigation";

const packages = [
  {
    id: 1,
    title: "الصين",
    description: "رحلة فاخرة إلى الصين",
  },

  {
    id: 2,
    title: "ماليزيا & سنغافورة",
    description: "رحلة آسيوية فاخرة",
  },

  {
    id: 3,
    title: "تايلند",
    description: "استرخاء وجزر فاخرة",
  },

  {
    id: 4,
    title: "تركيا",
    description: "طبيعة وتجارب راقية",
  },

  {
    id: 5,
    title: "البرازيل",
    description: "تجربة لاتينية فاخرة",
  },
];

export default function PackagePage() {

  const params = useParams();

  const pkg = packages.find(
    (item) => item.id === Number(params.id)
  );

  if (!pkg) {

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">

        الرحلة غير موجودة

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-[#030712] text-white p-10">

      <h1 className="text-5xl font-black mb-6">

        {pkg.title}

      </h1>

      <p className="text-2xl text-gray-300">

        {pkg.description}

      </p>

    </div>
  );
}