"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import CursorGlow from "@/components/CursotGlow";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>

      <Loader loading={loading} />

      {!loading && (

        <main className="bg-[#030712] overflow-hidden min-h-screen">

          <CursorGlow />

          <Navbar />

          <Hero />

          <Packages />

          <WhatsAppButton />

        </main>

      )}

    </>
  );
}