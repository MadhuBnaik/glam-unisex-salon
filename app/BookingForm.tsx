"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const services = {
  Women: [
    "French / Bangs - ₹150",
    "Front Feather Cut - ₹300",
    "Kids (Below 10 Years) - ₹350",
    "Hair Wash & Dry - ₹350",
    "Basic Straight Cut & U-Cut - ₹400",
    "Hair Wash Deep Conditioner - ₹500",
    "Kids Change of Style - ₹600",
    "Layer Trim - ₹800",
    "Hair Wash, Below Dry — Large - ₹800",
    "Hair Wash, Below Dry — Medium - ₹700",
    "Hair Wash, Below Dry — Short - ₹600",
    "Advance Cut - ₹1,000",
    "Creative Cut - ₹1,300",
    "Root Touch-Up - ₹1,300",
    "Ammonia Free Root Touch-Up - ₹1,400",
    "Partial Highlight - ₹2,200",
    "Full Highlight - ₹5,000",
    "Global Colour - Base Colour — Short - ₹2,500",
    "Global Colour - Base Colour — Medium - ₹2,800",
    "Global Colour - Base Colour — Large - ₹3,500",
    "Global Ammonia Free — Short - ₹3,400",
    "Global Ammonia Free — Medium - ₹3,800",
    "Global Ammonia Free — Large - ₹4,200",
    "Global Ammonia Free — X-Large - ₹6,000",
    "Add On: Bond Strengthener with Hair Treatment - ₹4,000",
    "Global Fashion Colours Technique Highlight - ₹5,500",
    "Balayage with Global - ₹7,500",
    "Add On: Bond Strengthener with smoothing / Keratin Services - ₹1,500",
    "Smoothening — Medium - ₹7,000",
    "Smoothening — Long - ₹8,000",
    "Keratin — Medium - ₹8,500",
    "Keratin — Long - ₹9,000",
    "Botox — Medium - ₹9,000",
    "Botox — Long - ₹11,000",
    "Ironing - ₹1,200",
    "Tongs - ₹1,400",
    "Head Massage - ₹550",
    "Moistening Hair Spa - ₹2,000",
    "Colour Save - ₹2,000",
    "Frizz Ease - ₹2,200",
    "Repairs & Rejuvenate - ₹2,200",
    "Anti Hair Fall Treatment - ₹2,200",
    "Dandruff Control for best treatment to be taken in 4-6 Sitting. - ₹2,200",
    "Hydrate hair spa — dry control - ₹3,800",
    "Repairs hair spa — straightening hair & unruly hair treatment - ₹3,800",
    "Repairs hair spa for damage control - ₹3,800",
    "Luxe oil keratin treatment — use for all types of hair - ₹4,000",
    "Clear scalp treatment for dandruff hair - ₹4,000",
    "Balance scalp treatment for anti-hair fall control - ₹4,000",
    "Fruit Clean up - ₹700",
    "Acne Clean up - ₹800",
    "Deadsi Clean up - ₹1,000",
    "Mini Facial Fruits - ₹1,200",
    "Golden Glow - ₹1,500",
    "TAN Clear Facial - ₹1,700",
    "Natural Brightening's Facial - ₹2,000",
    "Glow Vivi Vitamin & Facial - ₹2,200",
    "SENSI Glow Facial - ₹2,200",
    "Luminoso & Radiant Facial - ₹2,400",
    "Lipacid Acne & open pores Treatment - ₹2,800",
    "Deadsi Facial - ₹2,800",
    "Skin Whitening - ₹3,500",
    "Ivory White Facial (Vitamin C - C Shine 7 steps) - ₹3,600",
    "Bridal Facial - ₹3,800",
    "O3 + Facial - ₹3,800",
    "Bridal Glow Facial (10 Step) - ₹5,500",
    "Korean Glass Skin Facial - ₹6,500",
    "Rejuvenate - ₹700",
    "Bright - ₹800",
    "Underarm (Brightening) - ₹700",
    "Neck/Elbow (Brightening) - ₹1,000",
    "Under Eye - ₹1,000",
    "Upper Lip - ₹30",
    "Lower Lip - ₹30",
    "Eyebrow - ₹50",
    "Chin - ₹50",
    "Forehead - ₹50",
    "Sides - ₹60",
    "Full Face - ₹200",
    "Full Arms - ₹700",
    "Mid Riff - ₹750",
    "Back - ₹750",
    "Full Leg - ₹1,000",
    "Full Body - ₹3,200",
    "Neck & Shoulder (20 Min) - ₹500",
    "Hands (20 Min) - ₹500",
    "Feet (20 Min) - ₹500",
    "Classic - Mani/Padi - ₹450/550",
    "SPA - ₹550/700",
    "Dead Sea - ₹650/800",
    "Organic - ₹650/850",
    "Crystal - ₹800/1000",
    "Ice Cream - ₹1000/1800",
    "Bambini - ₹1600/2000",
    "Heel Peel Treatment - ₹2,000",
    "Change of Nail Colour - ₹100",
    "Cut, File & Polish (Finger Toes) - ₹300",
    "Feet Wax - ₹200",
    "Underarm Wax - ₹200",
    "Bikini Line - ₹350",
    "Full Arms / Half Arms - ₹400/300",
    "Full Back - ₹600",
    "Front - ₹600",
    "Bum Wax - ₹650",
    "Full Legs / Half Legs - ₹720/500",
    "Full Arms / Legs / Under arms - ₹1,000",
    "Bikini Wax - ₹1,800",
    "Upper Lip Wax - ₹70",
    "Lower Lip Wax - ₹70",
    "Forehead Wax - ₹100",
    "Chin Wax - ₹120",
    "Sides Wax - ₹200",
    "Face Wax - ₹500",
  ],

  Men: [
    "Shave - ₹100",
    "Beard Trim - ₹120",
    "Kids Cutting (Below 10) - ₹150",
    "Beard Stylish - ₹180",
    "Men Hair Cut - ₹200",
    "Stylish Hair Cut - ₹250",
    "Smoothening - ₹2,500",
    "Keratin - ₹3,500",
    "Mustache - ₹180",
    "Per Streak - ₹200",
    "Beard Colour - ₹300",
    "Crown Part - ₹800",
    "Basic Colours - ₹800",
    "Ammonia Free Colours - ₹1,000",
    "Global Highlights - ₹1,800",
    "Head Massage - ₹400",
    "Moisturizing Hair Spa - ₹800",
    "Colour Save - ₹800",
    "Frizz Ease - ₹900",
    "Repair & Rejuvenate - ₹900",
    "Anti Hair Fall Treatment - ₹1,200",
    "Dandruff Control - ₹1,200",
    "Hydrate Hair spa for dry control - ₹1,200",
    "Repair hair spa for damage control - ₹1,200",
    "Smoothen hair spa - ₹1,200",
    "Luxe Oil / Keratin treatment - ₹1,200",
    "Clear Scalp Treatment - ₹1,500",
    "Balance Scalp for Anti Hair Fall - ₹1,500",
    "Feet D-Tan - ₹200",
    "Underarms D-Tan - ₹200",
    "Face & Neck - ₹500",
    "Stomach - ₹530",
    "Back - ₹550",
    "Full Arms D-Tan - ₹650",
    "Full Leg D-Tan - ₹800",
    "Face & Neck (Blouse Line) - ₹700",
    "Full Body D-Tan - ₹3,200",
  ],

  Bridal: [
    "Men Hair Style - ₹200",
    "Non-Bride Saree Draping - ₹500",
    "Non-Bride Hair Style - ₹1,500",
    "Bridal Saree Draping - ₹1,500",
    "Bridal Hair Style (Depending on Hair Styles) - ₹2,000",
    "Groom Makeup - ₹3,500",
    "Simple Makeup - ₹3,500",
    "MAC Product Maekup - ₹4,000",
    "Non-Bride Makeup - ₹6,000",
    "Natural Gorgeous Maekup - ₹8,000",
    "Bridal HD Makeup (Per Sitting) - ₹15,000",
  ],

    PMU: [
    "Microblading - ₹12000",
    "Combination Brows - ₹12000",
    "Nano Brows - ₹15000",
    "Lip Blush - ₹4000",
    "Lip Liner - ₹4000",
    "Lip Correction - ₹4000",
  ],
};

type Category = keyof typeof services;

export default function BookingForm() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const loadBookingSelection = () => {
      const category = sessionStorage.getItem("glamBookingCategory");
      const service = sessionStorage.getItem("glamBookingService");

      if (
  category === "Women" ||
  category === "Men" ||
  category === "Bridal" ||
  category === "PMU"
) {
        setSelectedCategory(category);
      }

      if (service) {
        setSelectedService(service);
      }
    };

    loadBookingSelection();

    const handleBookingSelection = (event: Event) => {
      const customEvent = event as CustomEvent<{
        category: string;
        service: string;
      }>;

      const { category, service } = customEvent.detail;

      if (
        category === "Women" ||
        category === "Men" ||
        category === "Bridal" ||
        category === "PMU"
      ) {
        setSelectedCategory(category);
        setSelectedService(service);
      }
    };

    window.addEventListener(
      "glam-booking-selected",
      handleBookingSelection
    );

    return () => {
      window.removeEventListener(
        "glam-booking-selected",
        handleBookingSelection
      );
    };
  }, []);

  const currentServices = useMemo(() => {
    if (!selectedCategory) return [];
    return services[selectedCategory];
  }, [selectedCategory]);

  /*
   * If Services section sends a service that has a slightly
   * different name, keep it in the dropdown so it can still
   * be automatically selected.
   */
  const bookingServices = useMemo(() => {
    if (
      selectedService &&
      !currentServices.includes(selectedService)
    ) {
      return [selectedService, ...currentServices];
    }

    return currentServices;
  }, [currentServices, selectedService]);

  function handleCategoryChange(value: Category) {
    setSelectedCategory(value);
    setSelectedService("");

    sessionStorage.removeItem("glamBookingService");
  }

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

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
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
      "https://wa.me/917760363109?text=" +
      encodeURIComponent(whatsappMessage);

    const whatsappWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (!whatsappWindow) {
      window.location.assign(whatsappUrl);
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form
  id="booking-form"
  onSubmit={handleSubmit}
  className="scroll-mt-28 space-y-6"
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
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Enter 10-digit phone number"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/30"
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
            onChange={(e) =>
              handleCategoryChange(e.target.value as Category)
            }
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/30"
          >
            <option value="" disabled>
              Select category
            </option>

            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Bridal">Bridal</option>
            <option value="PMU">PMU</option>
          </select>
        </div>

        {/* SERVICE */}
        <div>
          <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
            Service
          </label>

          <select
            required
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            disabled={!selectedCategory}
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/30 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" disabled>
              {selectedCategory
                ? "Select service"
                : "Select category first"}
            </option>

            {bookingServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
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
            min={today}
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

            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
            <option value="7:00 PM">7:00 PM</option>
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
            className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 focus:border-white/30"
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
        Your appointment request will open WhatsApp with your booking details.
      </p>
    </form>
  );
}