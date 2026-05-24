"use client";

import {
  useState,
} from "react";

export default function AdminPage() {

  const [form, setForm] = useState({

    title: "",
    description: "",
    price: "",
    image: null as File | null,
    days: "",
    country: "",
    hotel: "",

  });

  async function handleSubmit(
    e: any
  ) {

    e.preventDefault();

    // رفع الصورة

    const imageData = new FormData();

    imageData.append(
      "file",
      form.image as File
    );

    const uploadRes = await fetch(
      "http://127.0.0.1:8000/upload",
      {

        method: "POST",

        body: imageData,

      }
    );

    const uploadJson =
      await uploadRes.json();

    // البرنامج اليومي

    const program = JSON.stringify([

      {
        day: "اليوم الأول",
        title: "الوصول",
        desc: "الاستقبال بالمطار",
      },

      {
        day: "اليوم الثاني",
        title: "جولة المدينة",
        desc: "زيارة المعالم والأسواق",
      },

    ]);

    // إضافة الرحلة

    await fetch(
      "http://127.0.0.1:8000/packages",
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({

          ...form,

          image:
            uploadJson.image_url,

          price:
            Number(form.price),

          program,

        }),

      }
    );

    alert("تمت إضافة الرحلة 😍🔥");

  }

  return (

    <main className="min-h-screen bg-[#030712] text-white p-10">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black mb-12 luxury-font">

          إضافة رحلة

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            placeholder="اسم الرحلة"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10"
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
          />

          <textarea
            placeholder="وصف الرحلة"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 h-40"
            onChange={(e) =>
              setForm({
                ...form,
                description:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="السعر"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10"
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
          />

          <input

            type="file"

            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10"

            onChange={(e: any) =>

              setForm({

                ...form,

                image: e.target.files[0],

              })

            }

          />

          <input
            placeholder="عدد الأيام"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10"
            onChange={(e) =>
              setForm({
                ...form,
                days: e.target.value,
              })
            }
          />

          <input
            placeholder="الدولة"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10"
            onChange={(e) =>
              setForm({
                ...form,
                country: e.target.value,
              })
            }
          />

          <input
            placeholder="الفندق"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10"
            onChange={(e) =>
              setForm({
                ...form,
                hotel: e.target.value,
              })
            }
          />

          <button
            className="bg-yellow-400 text-black px-10 py-5 rounded-full font-black text-xl"
          >

            إضافة الرحلة

          </button>

        </form>

      </div>

    </main>
  );
}