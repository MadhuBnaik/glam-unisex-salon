"use client";

import { FormEvent, useEffect, useState } from "react";

export default function BookingForm() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const category = sessionStorage.getItem("glamBookingCategory");
    const service = sessionStorage.getItem("glamBookingService");

    if (category) setSelectedCategory(category);
    if (service) setSelectedService(service);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const category = String(data.get("category") || "").trim();
    const service = String(data.get("service") || "").trim();
    const date = String(data.get("date") || "").trim();
    const time = String(data.get("time") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !phone || !category || !service || !date || !time) {
      alert("Please fill in all required details.");
      return;
    }

    const whatsappMessage = `Hello GLAM Unisex Salon & Spa,

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Category: ${category}
Service: ${service}
Date: ${date}
Time: ${time}
Message: ${message || "None"}

Thank you!`;

    const whatsappUrl =
      "https://wa.me/916360599812?text=" +
      encodeURIComponent(whatsappMessage);

    window.location.href = whatsappUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">

        {/* NAME */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
            Full Name
          </label>

          <input
            required
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/30"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
            Phone Number
          </label>

          <input
            required
            name="phone"
            type="tel"
            inputMode="numeric"
            placeholder="Enter phone number"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
            Category
          </label>

          <select
            required
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
          >
            <option value="" disabled>
              Select category
            </option>

            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="PMU">PMU</option>
          </select>
        </div>

        {/* SERVICE */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
            Service / Package
          </label>

          <select
            required
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
          >
            <option value="" disabled>
              Select service
            </option>

            <optgroup label="Women">
              <option value="Women’s Package - ₹2,000">
                Women’s Package - ₹2,000
              </option>
              <option value="Threading + Moisturizing Hair Spa - ₹1,799">
                Threading + Moisturizing Hair Spa - ₹1,799
              </option>
              <option value="Threading + Lotus Cleanup + D-Tan - ₹1,499">
                Threading + Lotus Cleanup + D-Tan - ₹1,499
              </option>
              <option value="Gold Facial & Pedicure Package - ₹1,499">
                Gold Facial & Pedicure Package - ₹1,499
              </option>
              <option value="Advance Skin & Beauty Package - ₹3,999">
                Advance Skin & Beauty Package - ₹3,999
              </option>
              <option value="Eyebrow + Cleanup Package - ₹3,999">
                Eyebrow + Cleanup Package - ₹3,999
              </option>
            </optgroup>

            <optgroup label="Men">
              <option value="Hair Cut + Beard + Hair Wash - ₹280">
                Hair Cut + Beard + Hair Wash - ₹280
              </option>
              <option value="Hair Cut + Beard + D-Tan - ₹630">
                Hair Cut + Beard + D-Tan - ₹630
              </option>
              <option value="Hair Cut + Head Massage - ₹770">
                Hair Cut + Head Massage - ₹770
              </option>
              <option value="Hair Colour + Gold Facial - ₹1,960">
                Hair Colour + Gold Facial - ₹1,960
              </option>
              <option value="Hair Spa + Spa Pedicure - ₹1,155">
                Hair Spa + Spa Pedicure - ₹1,155
              </option>
            </optgroup>

            <optgroup label="PMU">
              <option value="Microblading">Microblading</option>
              <option value="Combination Brows">Combination Brows</option>
              <option value="Omer Nano Brows">Omer Nano Brows</option>
              <option value="Lip Blush">Lip Blush</option>
              <option value="Lip Liner">Lip Liner</option>
              <option value="Lip Correction">Lip Correction</option>
            </optgroup>
          </select>
        </div>

        {/* DATE */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
            Preferred Date
          </label>

          <input
            required
            name="date"
            type="date"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
          />
        </div>

        {/* TIME */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
            Preferred Time
          </label>

          <select
            required
            name="time"
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
          >
            <option value="" disabled>
              Select time
            </option>
            <option>10:00 AM</option>
            <option>11:00 AM</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
            <option>3:00 PM</option>
            <option>4:00 PM</option>
            <option>5:00 PM</option>
            <option>6:00 PM</option>
            <option>7:00 PM</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
            Additional Message
          </label>

          <textarea
            name="message"
            rows={4}
            placeholder="Anything you would like us to know?"
            className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20"
          />
        </div>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="mt-8 w-full rounded-xl bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90 active:scale-[0.99]"
      >
        Request Appointment →
      </button>

      <p className="mt-4 text-center text-xs text-white/30">
        Your appointment request will open WhatsApp with your details.
      </p>
    </form>
  );
}