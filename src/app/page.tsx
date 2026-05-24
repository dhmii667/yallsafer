"use client";

import {
  useEffect,
  useState,
} from "react";

import Loader from "@/components/Loader";

import Hero from "@/components/Hero";

import Packages from "@/components/Packages";

import Navbar from "@/components/Navbar";

import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {

  const [loading, setLoading] =
    useState(true);

  const [packages, setPackages] =
    useState<any[]>([]);

  useEffect(() => {

    fetch(
      "https://yallsafer-production.up.railway.app/packages"
    )

      .then((res) => res.json())

      .then((data) => {

        setPackages(data);

        setTimeout(() => {

          setLoading(false);

        }, 2000);

      });

  }, []);

  if (loading) {

    return <Loader/>;

  }

  return (

    <main className="bg-[#030712] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Packages packages={packages} />

      <WhatsAppButton />

    </main>

  );

}