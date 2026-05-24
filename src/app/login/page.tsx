"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (
      username === "admin" &&
      password === "123456"
    ) {

      localStorage.setItem("admin", "true");

      router.push("/admin");

    } else {

      alert("بيانات الدخول غير صحيحة");

    }

  };

  return (

    <div className="min-h-screen bg-[#050b18] flex items-center justify-center px-6">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl text-white font-bold text-center mb-10">

          تسجيل دخول الأدمن

        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 text-white outline-none"
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 text-white outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-xl"
          >
            دخول
          </button>

        </div>

      </div>

    </div>

  );
}