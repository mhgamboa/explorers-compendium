import React from "react";
import Features from "@/components/index/Features";
import Hero from "@/components/index/Hero";
import Testimonials from "@/components/index/Testimonials";
import FAQ from "@/components/index/FAQ";
import CTA from "@/components/index/CTA";
import Footer from "@/components/ui/Footer";
import Nav from "@/components/nav/Nav";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
