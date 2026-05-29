"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";


import { packages } from "@/data/packages";

export default function Home() {

  return (

    <main className="bg-[#030712] text-white overflow-hidden">

      <ScrollProgress />

    

      <MouseGlow />

      <Navbar />

      <Hero />

      <Packages packages={packages} />


      <WhatsAppButton />

      <WhatsAppPopup />

      <Footer />

    </main>
  );
}