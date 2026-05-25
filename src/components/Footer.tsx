"use client";

import {
  Send,
  MessageCircle,
  Camera,
} from "lucide-react";

export default function Footer() {

  return (

    <footer className="relative border-t border-white/10 bg-black/30 backdrop-blur-2xl overflow-hidden">

      {/* GLOW */}

      <div className="absolute inset-0 bg-yellow-400/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}

          <div>

            <h2 className="text-4xl font-black text-yellow-400 mb-6">

              YALLSAFER

            </h2>

            <p className="text-gray-400 leading-loose">

              رحلات سياحية فاخرة وتجارب VIP
              إلى أجمل الوجهات العالمية
              بأسلوب عصري واستثنائي.

            </p>

          </div>

          {/* LINKS */}

          <div>

            <h3 className="text-2xl font-black mb-6">

              روابط سريعة

            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
                href="/"
                className="hover:text-yellow-400 transition"
              >

                الرئيسية

              </a>

              <a
                href="#packages"
                className="hover:text-yellow-400 transition"
              >

                الرحلات

              </a>

              <a
                href="https://wa.me/966500000000"
                target="_blank"
                className="hover:text-yellow-400 transition"
              >

                واتساب

              </a>

            </div>

          </div>

          {/* SOCIAL */}

          <div>

            <h3 className="text-2xl font-black mb-6">

              تابعنا

            </h3>

            <div className="flex items-center gap-5">

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition duration-300"
              >

                <Camera />

              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition duration-300"
              >

                <Send />

              </a>

              <a
                href="https://wa.me/966551268610"
                target="_blank"
                className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition duration-300"
              >

                <MessageCircle />

              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">

          © 2026 YALLSAFER. جميع الحقوق محفوظة.

        </div>

      </div>

    </footer>
  );
}