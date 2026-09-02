"use client";

import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Services from "./Services";
import Approach from "./Approach";
import About from "./About";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import ContactBar from "./ContactBar";
import Footer from "./Footer";
import StickyWhatsApp from "./StickyWhatsApp";

export default function HomeClient() {
  const handleNavigate = (target: string) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-paper text-ink">
      <header className="fixed top-0 inset-x-0 z-50">
        <TopBar />
        <Navbar onNavigate={handleNavigate} />
      </header>
      <Hero onNavigate={handleNavigate} />
      <Benefits />
      <Services />
      <Approach />
      <About />
      <Testimonials />
      <FAQ />
      <ContactBar />
      <Footer onNavigate={handleNavigate} />
      <StickyWhatsApp />
    </div>
  );
}
