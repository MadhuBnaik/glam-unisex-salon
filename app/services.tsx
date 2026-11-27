"use client";

import { useState } from "react";

// GLAM price list — transcribed from the client's 16-page PDF.
type Service = {
  name: string;
  regular?: string;
  member?: string;
  price?: string;
};

type Category = {
  name: string;
  services: Service[];
  note?: string;
};

const womenCategories: Category[] = [
  {
    name: "Women Hair Styles",
    services: [
      { name: "French / Bangs", regular: "150", member: "120" },
      { name: "Front Feather Cut", regular: "300", member: "250" },
      { name: "Kids (Below 10 Years)", regular: "350", member: "300" },
      { name: "Hair Wash & Dry", regular: "350", member: "300" },
      { name: "Basic Straight Cut & U-Cut", regular: "400", member: "350" },
      { name: "Hair Wash Deep Conditioner", regular: "500", member: "450" },
      { name: "Kids Change of Style", regular: "600", member: "500" },
      { name: "Layer Trim", regular: "800", member: "700" },
      { name: "Hair Wash, Below Dry — Large", regular: "800", member: "" },
      { name: "Hair Wash, Below Dry — Medium", regular: "700", member: "" },
      { name: "Hair Wash, Below Dry — Short", regular: "600", member: "" },
      { name: "Advance Cut", regular: "1000", member: "900" },
      { name: "Creative Cut", regular: "1300", member: "1100" },
    ],
  },
  {
    name: "World of Colours — Colouring & Highlights",
    services: [
      { name: "Root Touch-Up", regular: "1300", member: "1100" },
      { name: "Ammonia Free Root Touch-Up", regular: "1400", member: "1300" },
      { name: "Partial Highlight", regular: "2200", member: "2000" },
      { name: "Full Highlight", regular: "5000", member: "4500" },
      { name: "Global Colour - Base Colour — Short", regular: "2500", member: "2300" },
      { name: "Global Colour - Base Colour — Medium", regular: "2800", member: "2500" },
      { name: "Global Colour - Base Colour — Large", regular: "3500", member: "3300" },
      { name: "Global Ammonia Free — Short", regular: "3400", member: "3200" },
      { name: "Global Ammonia Free — Medium", regular: "3800", member: "3500" },
      { name: "Global Ammonia Free — Large", regular: "4200", member: "3800" },
      { name: "Global Ammonia Free — X-Large", regular: "6000", member: "5000" },
      {
        name: "Add On: Bond Strengthener with Hair Treatment",
        regular: "4000",
        member: "3500",
      },
      {
        name: "Global Fashion Colours Technique Highlight",
        regular: "5500",
        member: "5200",
      },
      { name: "Balayage with Global", regular: "7500", member: "7000" },
      {
        name: "Add On: Bond Strengthener with smoothing / Keratin Services",
        regular: "1500",
        member: "1500",
      },
      { name: "Smoothening — Medium", regular: "7000", member: "NA" },
      { name: "Smoothening — Long", regular: "8000", member: "NA" },
      { name: "Keratin — Medium", regular: "8500", member: "NA" },
      { name: "Keratin — Long", regular: "9000", member: "NA" },
      { name: "Botox — Medium", regular: "9000", member: "NA" },
      { name: "Botox — Long", regular: "11000", member: "NA" },
      { name: "Ironing", regular: "1200", member: "NA" },
      { name: "Tongs", regular: "1400", member: "NA" },
    ],
  },
  {
    name: "Head Treatment (L'Oreal)",
    services: [
      { name: "Head Massage", regular: "550", member: "500" },
      { name: "Hair Spa Treatment", regular: "", member: "" },
      { name: "Moistening Hair Spa", regular: "2000", member: "1800" },
      { name: "Colour Save", regular: "2000", member: "1800" },
      { name: "Frizz Ease", regular: "2200", member: "2000" },
      { name: "Repairs & Rejuvenate", regular: "2200", member: "2000" },
      { name: "Scalp Treatment", regular: "", member: "" },
      { name: "Anti Hair Fall Treatment", regular: "2200", member: "2000" },
      {
        name: "Dandruff Control for best treatment to be taken in 4-6 Sitting.",
        regular: "2200",
        member: "2000",
      },
    ],
  },
  {
    name: "Hair Treatment (Wella SP)",
    services: [
      {
        name: "Hydrate hair spa — dry control",
        regular: "3800",
        member: "3500",
      },
      {
        name: "Repairs hair spa — straightening hair & unruly hair treatment",
        regular: "3800",
        member: "3500",
      },
      {
        name: "Repairs hair spa for damage control",
        regular: "3800",
        member: "3500",
      },
      { name: "Colour Save", regular: "3800", member: "3500" },
      {
        name: "Luxe oil keratin treatment — use for all types of hair",
        regular: "4000",
        member: "3800",
      },
      {
        name: "Clear scalp treatment for dandruff hair",
        regular: "4000",
        member: "3800",
      },
      {
        name: "Balance scalp treatment for anti-hair fall control",
        regular: "4000",
        member: "3800",
      },
    ],
  },
  {
    name: "Skin Care (Insta Fresh)",
    services: [
      { name: "Fruit Clean up", regular: "700", member: "500" },
      { name: "Acne Clean up", regular: "800", member: "600" },
      { name: "Deadsi Clean up", regular: "1000", member: "900" },
      { name: "Mini Facial Fruits", regular: "1200", member: "1000" },
      { name: "Golden Glow", regular: "1500", member: "1300" },
      { name: "TAN Clear Facial", regular: "1700", member: "1500" },
      {
        name: "Natural Brightening's Facial",
        regular: "2000",
        member: "1800",
      },
      {
        name: "Glow Vivi Vitamin & Facial",
        regular: "2200",
        member: "2000",
      },
      { name: "SENSI Glow Facial", regular: "2200", member: "2000" },
    ],
  },
  {
    name: "Luxury Facial",
    services: [
      {
        name: "Luminoso & Radiant Facial",
        regular: "2400",
        member: "2000",
      },
      {
        name: "Lipacid Acne & open pores Treatment",
        regular: "2800",
        member: "2000",
      },
      { name: "Deadsi Facial", regular: "2800", member: "2600" },
      { name: "Skin Whitening", regular: "3500", member: "3300" },
      {
        name: "Ivory White Facial (Vitamin C - C Shine 7 steps)",
        regular: "3600",
        member: "3400",
      },
      { name: "Bridal Facial", regular: "3800", member: "3500" },
      { name: "O3 + Facial", regular: "3800", member: "3500" },
      {
        name: "Bridal Glow Facial (10 Step)",
        regular: "5500",
        member: "5000",
      },
      {
        name: "Korean Glass Skin Facial",
        regular: "6500",
        member: "6000",
      },
    ],
  },
  {
    name: "Add On Mask",
    services: [
      { name: "Rejuvenate", regular: "700", member: "700" },
      { name: "Bright", regular: "800", member: "800" },
    ],
  },
  {
    name: "Add On Skin Care",
    services: [
      {
        name: "Underarm (Brightening)",
        regular: "700",
        member: "NA",
      },
      {
        name: "Neck/Elbow (Brightening)",
        regular: "1000",
        member: "800",
      },
      { name: "Under Eye", regular: "1000", member: "800" },
    ],
  },
  {
    name: "Threading",
    services: [
      { name: "Upper Lip", regular: "30", member: "30" },
      { name: "Lower Lip", regular: "30", member: "30" },
      { name: "Eyebrow", regular: "60", member: "60" },
      { name: "Chin", regular: "50", member: "50" },
      { name: "Forehead", regular: "50", member: "50" },
      { name: "Sides", regular: "60", member: "60" },
      { name: "Full Face", regular: "200", member: "200" },
    ],
  },
  {
    name: "Body Care",
    services: [
      { name: "Full Arms", regular: "700", member: "650" },
      { name: "Mid Riff", regular: "750", member: "700" },
      { name: "Back", regular: "750", member: "700" },
      { name: "Full Leg", regular: "1000", member: "800" },
      { name: "Full Body", regular: "3200", member: "3000" },
    ],
  },
  {
    name: "Reflexology",
    services: [
      { name: "Neck & Shoulder (20 Min)", regular: "500", member: "NA" },
      { name: "Hands (20 Min)", regular: "500", member: "NA" },
      { name: "Feet (20 Min)", regular: "500", member: "NA" },
    ],
  },
  {
    name: "Manicure / Pedicure",
    services: [
      {
        name: "Classic - Mani/Padi",
        regular: "450/550",
        member: "400/500",
      },
      { name: "SPA", regular: "550/700", member: "500/650" },
      { name: "Dead Sea", regular: "650/800", member: "600/700" },
      { name: "Organic", regular: "650/850", member: "600/800" },
      { name: "Crystal", regular: "800/1000", member: "700/900" },
      { name: "Ice Cream", regular: "1000/1800", member: "900/1600" },
      { name: "Bambini", regular: "1600/2000", member: "1600/1800" },
      {
        name: "Heel Peel Treatment",
        regular: "2000",
        member: "1800",
      },
      {
        name: "Change of Nail Colour",
        regular: "100",
        member: "100",
      },
      {
        name: "Cut, File & Polish (Finger Toes)",
        regular: "300",
        member: "300",
      },
    ],
  },
  {
    name: "Rice Flavoured Wax — Body",
    services: [
      { name: "Feet Wax", regular: "200", member: "150" },
      { name: "Underarm Wax", regular: "200", member: "150" },
      { name: "Bikini Line", regular: "350", member: "300" },
      {
        name: "Full Arms / Half Arms",
        regular: "400/300",
        member: "350/250",
      },
      { name: "Full Back", regular: "600", member: "550" },
      { name: "Front", regular: "600", member: "550" },
      { name: "Bum Wax", regular: "650", member: "600" },
      {
        name: "Full Legs / Half Legs",
        regular: "720/500",
        member: "650/400",
      },
      {
        name: "Full Arms / Legs / Under arms",
        regular: "1000",
        member: "1000",
      },
      { name: "Bikini Wax", regular: "1800", member: "1500" },
    ],
  },
  {
    name: "Rice Flavoured Wax — Face",
    services: [
      { name: "Upper Lip", regular: "70", member: "60" },
      { name: "Lower Lip", regular: "70", member: "60" },
      { name: "Forehead", regular: "100", member: "80" },
      { name: "Chin", regular: "120", member: "100" },
      { name: "Sides", regular: "200", member: "150" },
      { name: "Face Wax", regular: "500", member: "450" },
    ],
  },
  {
    name: "D-Tan",
    services: [
      { name: "Feet D-Tan", regular: "200", member: "180" },
      { name: "Underarms D-Tan", regular: "200", member: "180" },
      { name: "Face & Neck", regular: "500", member: "450" },
      { name: "Stomach", regular: "530", member: "500" },
      { name: "Back", regular: "550", member: "500" },
      { name: "Full Arms D-Tan", regular: "650", member: "600" },
      { name: "Full Leg D-Tan", regular: "800", member: "700" },
      {
        name: "Face & Neck (Blouse Line)",
        regular: "700",
        member: "600",
      },
      { name: "Full Body D-Tan", regular: "3200", member: "3000" },
    ],
  },
];

const menCategories: Category[] = [
  {
    name: "Men Hair Style",
    services: [
      { name: "Shave", regular: "100", member: "100" },
      { name: "Beard Trim", regular: "120", member: "100" },
      {
        name: "Kids Cutting (Below 10)",
        regular: "150",
        member: "130",
      },
      { name: "Beard Stylish", regular: "180", member: "150" },
      { name: "Men Hair Cut", regular: "200", member: "150" },
      { name: "Stylish Hair Cut", regular: "250", member: "200" },
      { name: "Smoothening", regular: "2500", member: "2500" },
      { name: "Keratin", regular: "3500", member: "3500" },
    ],
  },
  {
    name: "World of Colours",
    services: [
      { name: "Mustache", regular: "180", member: "150" },
      { name: "Per Streak", regular: "200", member: "150" },
      { name: "Beard Colour", regular: "300", member: "250" },
      { name: "Crown Part", regular: "800", member: "800" },
      { name: "Basic Colours", regular: "800", member: "700" },
      {
        name: "Ammonia Free Colours",
        regular: "1000",
        member: "900",
      },
      {
        name: "Global Highlights",
        regular: "1800",
        member: "1500",
      },
    ],
  },
  {
    name: "Hair - Spa (L'Oreal)",
    services: [
      { name: "Head Massage", regular: "400", member: "350" },
      { name: "Hair-Spa Treatment", regular: "", member: "" },
      {
        name: "Moisturizing Hair Spa",
        regular: "800",
        member: "700",
      },
      { name: "Colour Save", regular: "800", member: "700" },
      { name: "Frizz Ease", regular: "900", member: "800" },
      {
        name: "Repair & Rejuvenate",
        regular: "900",
        member: "800",
      },
      { name: "Scalp Treatment", regular: "", member: "" },
      {
        name: "Anti Hair Fall Treatment",
        regular: "1200",
        member: "1000",
      },
      {
        name: "Dandruff Control",
        regular: "1200",
        member: "1000",
      },
    ],
  },
  {
    name: "Hair - Spa (Wella)",
    services: [
      {
        name: "Hydrate Hair spa for dry control",
        regular: "1200",
        member: "1000",
      },
      {
        name: "Repair hair spa for damage control",
        regular: "1200",
        member: "1000",
      },
      {
        name: "Smoothen hair spa",
        regular: "1200",
        member: "1000",
      },
      {
        name: "Luxe Oil / Keratin treatment",
        regular: "1200",
        member: "1000",
      },
      { name: "Colour Save", regular: "1200", member: "1000" },
      {
        name: "Clear Scalp Treatment",
        regular: "1500",
        member: "1200",
      },
      {
        name: "Balance Scalp for Anti Hair Fall",
        regular: "1500",
        member: "1200",
      },
    ],
  },
  {
    name: "D-Tan",
    services: [
      { name: "Feet D-Tan", regular: "200", member: "180" },
      { name: "Underarms D-Tan", regular: "200", member: "180" },
      { name: "Face & Neck", regular: "500", member: "450" },
      { name: "Stomach", regular: "530", member: "500" },
      { name: "Back", regular: "550", member: "500" },
      { name: "Full Arms D-Tan", regular: "650", member: "600" },
      { name: "Full Leg D-Tan", regular: "800", member: "700" },
      {
        name: "Face & Neck (Blouse Line)",
        regular: "700",
        member: "600",
      },
      { name: "Full Body D-Tan", regular: "3200", member: "3000" },
    ],
  },
];

const bridalCategories: Category[] = [
  {
    name: "Bridal Makeup (MAC Product)",
    services: [
      { name: "Men Hair Style", price: "200" },
      { name: "Non-Bride Saree Draping", price: "600" },
      { name: "Non-Bride Hair Style", price: "1500" },
      { name: "Bridal Saree Draping", price: "1500" },
      {
        name: "Bridal Hair Style (Depending on Hair Styles)",
        price: "2000",
      },
      { name: "Groom Makeup", price: "3500" },
      { name: "Simple Makeup", price: "3500" },
      { name: "MAC Product Maekup", price: "4000" },
      { name: "Non-Bride Makeup", price: "6000" },
      { name: "Natural Gorgeous Maekup", price: "8000" },
      {
        name: "Bridal HD Makeup (Per Sitting)",
        price: "15000",
      },
    ],
  },
];

const pmuCategories: Category[] = [
  {
    name: "PMU Services",
    services: [
      { name: "Microblading", price: "12000" },
      { name: "Combination Brows", price: "12000" },
      { name: "Nano Brows", price: "15000" },
      { name: "Lip Blush", price: "4000" },
      { name: "Lip Liner", price: "4000" },
      { name: "Lip Correction", price: "4000" },
    ],
  },
];

/* =========================================================
   BOOK SERVICE
   ========================================================= */

function bookService(category: string, service: Service) {
  const price = service.price || service.regular || "";

  const value =
    price && price !== "NA"
      ? `${service.name} - ₹${price}`
      : service.name;

  // Save selected service
  sessionStorage.setItem("glamBookingCategory", category);
  sessionStorage.setItem("glamBookingService", value);

  // Tell BookingForm to automatically select the service
  window.dispatchEvent(
    new CustomEvent("glam-booking-selected", {
      detail: {
        category,
        service: value,
      },
    })
  );

  // Premium smooth scroll directly to the booking form
  setTimeout(() => {
    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {
      bookingForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 150);
}

/* =========================================================
   PRICE TABLE
   ========================================================= */

function PriceTable({
  category,
  services,
}: {
  category: string;
  services: Service[];
}) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-[#7b2aa8]/40 bg-[#111111]">
      {/* HEADER */}
      <div className="grid grid-cols-[1fr_90px_90px_70px] bg-[#6f238f] px-4 py-4 text-xs font-semibold uppercase tracking-widest sm:grid-cols-[1fr_130px_130px_90px]">
        <span>Particulars</span>
        <span className="text-center">Regular</span>
        <span className="text-center">Member</span>
        <span />
      </div>

      {/* SERVICES */}
      {services.map((service, index) => {
        const isSinglePrice = Boolean(service.price);

        const hasPrice =
          Boolean(service.price) ||
          Boolean(service.regular) ||
          Boolean(service.member);

        return (
          <div
            key={`${service.name}-${index}`}
            className="grid grid-cols-[1fr_90px_90px_70px] items-center gap-1 border-t border-white/10 px-4 py-4 sm:grid-cols-[1fr_130px_130px_90px]"
          >
            {/* SERVICE NAME */}
            <div className="pr-2 text-sm leading-5 text-white/85 sm:text-base">
              <span className="mr-2 text-white/30">
                {index + 1})
              </span>

              {service.name}
            </div>

            {/* REGULAR */}
            <span className="text-center text-sm font-semibold text-white">
              {isSinglePrice
                ? `₹${service.price}`
                : service.regular
                  ? `₹${service.regular}`
                  : ""}
            </span>

            {/* MEMBER */}
            <span className="text-center text-sm font-semibold text-white/70">
              {isSinglePrice
                ? ""
                : service.member
                  ? service.member === "NA"
                    ? "NA"
                    : `₹${service.member}`
                  : ""}
            </span>

            {/* BOOK */}
            {hasPrice ? (
              <button
                type="button"
                onClick={() => bookService(category, service)}
                className="rounded-full border border-[#9a42c9] px-2 py-2 text-[9px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#7b2aa8] active:scale-95 sm:px-3"
              >
                Book
              </button>
            ) : (
              <span />
            )}
          </div>
        );
      })}

      {/* GST */}
      <div className="border-t border-white/10 bg-[#191919] px-4 py-4 text-center text-xs font-semibold uppercase tracking-widest text-white/70">
        18% GST Applicable On All Prices
      </div>
    </div>
  );
}

/* =========================================================
   CATEGORY BUTTON
   ========================================================= */

function CategoryButton({
  category,
  active,
  onClick,
}: {
  category: Category;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border px-5 py-4 text-left transition duration-200 ${
        active
          ? "border-[#9a42c9] bg-[#6f238f] text-white shadow-lg shadow-purple-950/30"
          : "border-white/10 bg-white/[0.03] text-white/70 hover:border-[#7b2aa8]/60 hover:bg-[#6f238f]/20 hover:text-white"
      }`}
    >
      <span className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium sm:text-base">
          {category.name}
        </span>

        <span className="text-lg">
          {active ? "−" : "+"}
        </span>
      </span>
    </button>
  );
}

/* =========================================================
   CATEGORY PANEL
   ========================================================= */

function CategoryPanel({
  category,
  bookingCategory,
}: {
  category: Category;
  bookingCategory: string;
}) {
  return (
    <div className="mt-5 animate-[fadeIn_0.2s_ease-out]">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#b86be0]">
            GLAM UNISEX SALON
          </p>

          <h3 className="mt-2 text-2xl font-light text-white sm:text-3xl">
            {category.name}
          </h3>
        </div>

        <span className="hidden rounded-full border border-[#7b2aa8]/50 px-3 py-1 text-[10px] uppercase tracking-widest text-white/50 sm:block">
          Price List
        </span>
      </div>

      <PriceTable
        category={bookingCategory}
        services={category.services}
      />
    </div>
  );
}

/* =========================================================
   SERVICE GROUP
   ========================================================= */

function ServiceGroup({
  title,
  categories,
  bookingCategory,
}: {
  title: string;
  categories: Category[];
  bookingCategory: string;
}) {
  const [active, setActive] = useState(-1);

  return (
    <div className="mt-12">
      {/* TITLE */}
      <div className="mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-[#7b2aa8] to-transparent" />

        <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
          {title}
        </h3>

        <div className="h-px flex-1 bg-gradient-to-l from-[#7b2aa8] to-transparent" />
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryButton
            key={category.name}
            category={category}
            active={active === index}
            onClick={() =>
              setActive(active === index ? -1 : index)
            }
          />
        ))}
      </div>

      {/* ACTIVE CATEGORY */}
      {active >= 0 && categories[active] && (
        <CategoryPanel
          category={categories[active]}
          bookingCategory={bookingCategory}
        />
      )}
    </div>
  );
}

/* =========================================================
   TAB VISUALS
   ========================================================= */

const tabVisuals = {
  Women: {
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "WOMEN'S BEAUTY",
    title: "Hair, Skin & Beauty",
    text: "Discover our complete women’s beauty and salon services.",
  },

  Men: {
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "MEN'S GROOMING",
    title: "Sharp. Clean. Confident.",
    text: "Professional grooming, hair, colour and spa services for men.",
  },

  Bridal: {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "BRIDAL BEAUTY",
    title: "Your Big Day, Your GLAM",
    text: "Bridal makeup, hair styling and saree draping for your special day.",
  },

    PMU: {
    image:
      "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "PERMANENT MAKEUP",
    title: "Effortless Beauty, Every Day",
    text: "Premium permanent makeup services designed to enhance your natural features.",
  },
} as const;

/* =========================================================
   MAIN SERVICES COMPONENT
   ========================================================= */

export default function Services() {
const [mainTab, setMainTab] =
  useState<"Women" | "Men" | "Bridal" | "PMU">("Women");
  return (
    <section
      id="services"
      className="relative z-10 bg-[#0b0b0b] px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b86be0]">
            GLAM Price List
          </p>

          <h2 className="mt-3 text-4xl font-light text-white sm:text-5xl">
            Our{" "}
            <span className="font-semibold">
              Services
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
            Explore our complete service menu. Select a section below
            to view Regular and Member pricing.
          </p>
        </div>

        {/* MAIN TABS */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-4 rounded-2xl border border-[#7b2aa8]/50 bg-[#111111] p-1.5">
          {(["Women", "Men", "Bridal", "PMU"] as const).map(
            (tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setMainTab(tab)}
                className={`rounded-xl px-3 py-3 text-xs font-semibold uppercase tracking-widest transition sm:text-sm ${
                  mainTab === tab
                    ? "bg-[#6f238f] text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* VISUAL BANNER */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
          <img
            src={tabVisuals[mainTab].image}
            alt={`${mainTab} services at GLAM Unisex Salon & Spa`}
            className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[430px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d18af0] sm:text-xs">
              {tabVisuals[mainTab].eyebrow}
            </p>

            <h3 className="mt-2 max-w-2xl text-3xl font-light text-white sm:text-5xl">
              {tabVisuals[mainTab].title}
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              {tabVisuals[mainTab].text}
            </p>
          </div>
        </div>

        {/* WOMEN */}
        {mainTab === "Women" && (
          <ServiceGroup
            title="Women Services"
            categories={womenCategories}
            bookingCategory="Women"
          />
        )}

        {/* MEN */}
        {mainTab === "Men" && (
          <ServiceGroup
            title="Men Services"
            categories={menCategories}
            bookingCategory="Men"
          />
        )}

        {/* BRIDAL */}
        {mainTab === "Bridal" && (
          <ServiceGroup
            title="Bridal Makeup"
            categories={bridalCategories}
            bookingCategory="Bridal"
          />
        )}

        {mainTab === "PMU" && (
  <ServiceGroup
    title="PMU Services"
    categories={pmuCategories}
    bookingCategory="PMU"
  />
)}

        {/* GST */}
        <p className="mt-10 text-center text-xs uppercase tracking-[0.25em] text-white/40">
          18% GST Applicable On All Prices
        </p>
      </div>
    </section>
  );
}