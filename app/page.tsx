"use client";

import { useState } from "react";
import Image from "next/image";
import BookingForm from "./BookingForm";
import Services from "./services";



const galleryImages = [
  "glam-1.jpg",
  "glam-2.jpg",
  "glam-4.jpeg",
  "glam-5.jpeg",
  "glam-6.jpeg",
  "glam-7.jpeg",
  "glam-8.jpg",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-white">

      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 right-0 top-0 z-[100] border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

          <a href="#home" className="block leading-none" aria-label="GLAM Unisex Salon & Spa">
            <img src="/images/glam-logo.png" alt="GLAM Unisex Salon" className="h-12 w-auto object-contain" />
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm text-white/80 hover:text-white">
              Home
            </a>

            <a href="#services" className="text-sm text-white/80 hover:text-white">
              Services
            </a>

            <a href="#gallery" className="text-sm text-white/80 hover:text-white">
              Gallery
            </a>

            <a href="#booking" className="text-sm text-white/80 hover:text-white">
              Booking
            </a>

            <a href="#contact" className="text-sm text-white/80 hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#booking"
            className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-semibold tracking-wide text-black md:block"
          >
            BOOK NOW
          </a>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
            className="z-[120] flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/20 bg-black/80 text-xl text-white md:hidden"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-[200] md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >

        {/* BACKDROP */}

        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className={`absolute inset-0 h-full w-full bg-black/70 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* SIDEBAR */}

        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-[#101010] p-6 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          <div className="flex items-center justify-between">

            <a href="#home" onClick={closeMenu} className="block" aria-label="GLAM Unisex Salon & Spa">
              <img src="/images/glam-logo.png" alt="GLAM Unisex Salon" className="h-14 w-auto object-contain" />
            </a>

            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border border-white/20 text-xl text-white"
            >
              ×
            </button>
          </div>

          <nav className="mt-12 flex flex-col">

            <a
              href="#home"
              onClick={closeMenu}
              className="py-5 text-sm uppercase tracking-widest text-white/80"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="py-5 text-sm uppercase tracking-widest text-white/80"
            >
              Services
            </a>

            <a
              href="#gallery"
              onClick={closeMenu}
              className="py-5 text-sm uppercase tracking-widest text-white/80"
            >
              Gallery
            </a>

            <a
              href="#booking"
              onClick={closeMenu}
              className="py-5 text-sm uppercase tracking-widest text-white/80"
            >
              Booking
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-5 text-sm uppercase tracking-widest text-white/80"
            >
              Contact
            </a>

          </nav>

          <a
            href="#booking"
            onClick={closeMenu}
            className="mt-10 block rounded-full bg-white px-6 py-4 text-center text-xs font-semibold uppercase tracking-widest text-black"
          >
            Book Appointment
          </a>
        </aside>
      </div>

      {/* ================= HERO ================= */}

<section
  id="home"
  className="relative flex min-h-[100svh] items-center overflow-hidden"
>
  {/* Hero Image */}
  <Image
    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=85"
    alt="GLAM Unisex Salon & Spa"
    fill
    priority
    sizes="100vw"
    className="pointer-events-none object-cover"
  />

  {/* Dark cinematic overlay */}
  <div className="pointer-events-none absolute inset-0 bg-black/55" />

  {/* Left cinematic gradient */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

  {/* Bottom fade */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25" />

  {/* Very subtle GLAM purple atmosphere */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,104,224,0.10),transparent_45%)]" />

  {/* Content */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-20 sm:px-8 lg:px-8">
    <div className="max-w-4xl">

      {/* Eyebrow */}
      <div className="mb-7 flex items-center gap-4 sm:mb-9">
        <div className="h-px w-12 bg-[#b868e0] sm:w-16" />

        <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#b868e0] sm:text-xs sm:tracking-[0.45em]">
          Premium Beauty • Grooming • Spa
        </p>
      </div>

      {/* GLAM */}
      <h1 className="glam-title glam-brand-text glam-glow text-[4.8rem] leading-[0.82] tracking-[-0.04em] sm:text-8xl lg:text-[9.5rem]">
        GLAM
      </h1>

      {/* Main tagline */}
      <h2 className="glam-heading mt-7 max-w-3xl text-3xl leading-tight tracking-[0.03em] text-[#f3eee5] sm:mt-9 sm:text-5xl lg:text-6xl">
        DEFINE YOUR BEAUTY.
      </h2>

      {/* Purple divider */}
      <div className="mt-7 h-px w-20 bg-[#b868e0] sm:mt-9 sm:w-28" />

      {/* Description */}
      <p className="mt-6 max-w-xl text-sm leading-7 text-[#d8d1d8] sm:mt-7 sm:text-lg sm:leading-8">
        Experience luxury. Embrace confidence.
      </p>

      {/* Location */}
      <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.28em] text-[#b868e0]/80 sm:text-xs sm:tracking-[0.42em]">
        UNISEX SALON & SPA • BENGALURU
      </p>

      {/* Buttons */}
      <div className="pointer-events-auto mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4">

        {/* Primary */}
        <a
          href="#booking"
          className="group rounded-full bg-[#b868e0] px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-[#c98be8] hover:shadow-[0_10px_40px_rgba(184,104,224,0.22)] sm:px-9"
        >
          Book Appointment

          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Secondary */}
        <a
          href="#services"
          className="rounded-full border border-[#b868e0]/45 bg-black/20 px-8 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#f3eee5] backdrop-blur-md transition-all duration-300 hover:border-[#b868e0] hover:bg-[#b868e0]/10 hover:text-[#b868e0] sm:px-9"
        >
          Explore Services
        </a>

      </div>

    </div>
  </div>

  {/* Bottom location */}
  <div className="pointer-events-none absolute bottom-8 left-5 z-10 hidden items-center gap-3 sm:flex lg:left-8">
    <span className="h-px w-8 bg-[#b868e0]/50" />

    <span className="text-[9px] uppercase tracking-[0.35em] text-white/35">
      Vijayanagar • Bengaluru
    </span>
  </div>

  {/* Scroll indicator */}
  <div className="pointer-events-none absolute bottom-7 right-6 z-10 hidden flex-col items-center gap-3 sm:flex lg:right-10">
    <span className="text-[8px] uppercase tracking-[0.3em] text-[#b868e0]/60 [writing-mode:vertical-rl]">
      Scroll
    </span>

    <span className="h-10 w-px bg-gradient-to-b from-[#b868e0]/70 to-transparent" />
  </div>
</section>

      {/* ================= INTRO ================= */}

      <section className="border-y border-white/10 bg-[#101010]">

        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-3 lg:px-8">

          <div>
            <p className="text-3xl font-light">01</p>
            <h3 className="mt-3 text-lg font-medium">Expert Stylists</h3>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Professional care and styling tailored to you.
            </p>
          </div>

          <div>
            <p className="text-3xl font-light">02</p>
            <h3 className="mt-3 text-lg font-medium">
              Premium Experience
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Relax in a clean, modern and comfortable environment.
            </p>
          </div>

          <div>
            <p className="text-3xl font-light">03</p>
            <h3 className="mt-3 text-lg font-medium">For Everyone</h3>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Professional salon and spa services for men and women.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <Services />

      {/* ================= GALLERY ================= */}

      <section
        id="gallery"
        className="bg-[#101010] px-5 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              Inside GLAM
            </p>

            <h2 className="mt-3 text-4xl font-light sm:text-5xl">
              Our <span className="font-semibold">Gallery</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
              Take a look inside GLAM Unisex Salon & Spa and experience our
              premium salon environment.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

            {galleryImages.map((image, index) => (

              <a
                key={image}
                href={`/images/${image}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl bg-[#181818]"
              >

                <Image
                  src={`/images/${image}`}
                  alt={`GLAM Gallery ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">

                  <span className="scale-75 rounded-full border border-white/40 bg-black/40 px-4 py-2 text-xs tracking-widest opacity-0 backdrop-blur-sm transition group-hover:scale-100 group-hover:opacity-100">
                    VIEW
                  </span>

                </div>

              </a>

            ))}

          </div>
        </div>
      </section>

      {/* ================= BOOKING ================= */}

      <section
      id="booking"
      className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24 lg:px-8"
      >

        <div className="rounded-3xl border border-white/10 bg-[#121212] px-6 py-14 text-center sm:px-12">

          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Your next look starts here
          </p>

          <h2 className="mt-4 text-4xl font-light sm:text-6xl">
            Ready to feel <span className="font-semibold">GLAM?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/50">
            Book your appointment and let our professionals take care of the
            rest.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="tel:7760363109"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black"
            >
              CALL NOW
            </a>

            <a
              href="https://wa.me/917760363109"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium"
            >
              WHATSAPP
            </a>

          </div>

          <div className="mt-10 text-left">
            <BookingForm />
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="border-t border-white/10 bg-[#101010]"
      >

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="grid gap-12 md:grid-cols-3">

            <div>

              <div className="text-xl font-semibold tracking-[0.25em]">
                GLAM
              </div>

              <p className="mt-2 text-xs tracking-[0.25em] text-white/40">
                UNISEX SALON & SPA
              </p>

              <p className="mt-6 max-w-xs text-sm leading-7 text-white/40">
                Premium beauty, grooming and spa services in Bengaluru.
                Book your appointment and experience GLAM.
              </p>

            </div>

            <div>

              <h3 className="text-sm font-semibold uppercase tracking-widest">
                Visit Us
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                No. 39/2, 1st Floor,
                <br />
                17th Cross, Maruthi Mandir Road,
                <br />
                Near Metro Station,
                <br />
                Vijayanagar, Bengaluru – 560040
              </p>

              <a
                href="https://maps.app.goo.gl/yB7dkFEgLbC27bce9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full border border-white/15 px-5 py-3 text-xs uppercase tracking-widest text-white/70"
              >
                📍 Get Directions
              </a>

            </div>

            <div>

              <h3 className="text-sm font-semibold uppercase tracking-widest">
                Contact
              </h3>

              <a
                href="tel:+917760363109"
                className="mt-4 block text-sm text-white/60"
              >
                📞 +91 7760363109
              </a>

              <a
                href="https://wa.me/917760363109"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-white/60"
              >
                💬 WhatsApp Us
              </a>

              <p className="mt-6 text-xs uppercase tracking-widest text-white/30">
                Appointments
              </p>

              <p className="mt-2 text-sm text-white/40">
                Open for appointments
              </p>

              <a
                href="#booking"
                className="mt-5 inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-black"
              >
                Book Appointment
              </a>

            </div>

          </div>

          <div className="mt-16 border-t border-white/10 pt-6 text-center">

            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} GLAM Unisex Salon & Spa.
              All rights reserved.
            </p>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-black">

        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <a href="#home" className="block" aria-label="GLAM Unisex Salon & Spa">
              <img src="/images/glam-logo.png" alt="GLAM Unisex Salon" className="h-14 w-auto object-contain" />
            </a>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/50">

              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#booking">Booking</a>
              <a href="#contact">Contact</a>

            </div>

            <a
              href="#booking"
              className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-black"
            >
              Book Appointment
            </a>

          </div>

          <div className="mt-8 border-t border-white/10 pt-6">

            <p className="text-center text-[11px] text-white/25">
              © {new Date().getFullYear()} GLAM Unisex Salon & Spa.
              All rights reserved.
            </p>

          </div>

        </div>
      </footer>

    </main>
  );
}