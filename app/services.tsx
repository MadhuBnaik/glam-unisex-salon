"use client";

import Image from "next/image";

const womenServices = [
  {
    name: "Women’s Package",
    details:
      "Eyebrow, Upperlip, Fullarm, Underarm, Full Leg, Gold Facial",
    price: "₹2,000",
  },
  {
    name: "Threading + Moisturizing Hair Spa",
    details:
      "Threading (Eyebrow, Upperlip, Chin, Fullarm, Underarm) + Moisturizing Hair Spa (U-cut, Straight Cut, V-cut)",
    price: "₹1,799",
  },
  {
    name: "Threading + Lotus Cleanup + D-Tan",
    details:
      "Threading (Eyebrow, Upperlip, Chin, Fullarm, Underarm) + Lotus Cleanup + Face & Neck D-Tan",
    price: "₹1,499",
  },
  {
    name: "Gold Facial & Pedicure Package",
    details:
      "Gold Facial, Classic Pedicure, Gray Coverage, Eyes, Upperlip, Fullarm, Underarms",
    price: "₹1,499",
  },
  {
    name: "Advance Skin & Beauty Package",
    details:
      "Advance Skin Whitening Facial Spa, Pedicure + Manicure, Waxing (Fullarm, Full Leg, Underarms), Hair Wash, Blast Dry",
    price: "₹3,999",
  },
  {
    name: "Eyebrow + Cleanup Package",
    details:
      "Eyebrow, Upperlip, Forehead, Lotus Cleanup + Fullarms / Underarms",
    price: "₹3,999",
  },
];

const menServices = [
  {
    name: "Hair Cut + Beard + Hair Wash",
    details: "Hair Cut, Beard / Shave, Hair Wash",
    price: "₹280",
  },
  {
    name: "Hair Cut + Beard + D-Tan",
    details:
      "Hair Cut, Beard / Shave, Hair Wash, D-Tan Face & Neck",
    price: "₹630",
  },
  {
    name: "Hair Cut + Head Massage",
    details:
      "Hair Cut, Beard / Shave, Head Massage, Classic Clean Up",
    price: "₹770",
  },
  {
    name: "Hair Colour + Gold Facial",
    details:
      "Hair Cut, Beard / Shave, Hair Colour, Gold Facial",
    price: "₹1,960",
  },
  {
    name: "Hair Spa + Spa Pedicure",
    details:
      "Hair Cut, Beard / Shave, Hair Spa, Spa Pedicure",
    price: "₹1,155",
  },
];

const pmuServices = [
  {
    name: "Microblading",
    details: "Professional PMU eyebrow service",
    price: "Contact Us",
  },
  {
    name: "Combination Brows",
    details: "Combination eyebrow PMU service",
    price: "Contact Us",
  },
  {
    name: "Omer Nano Brows",
    details: "Nano brows PMU service",
    price: "Contact Us",
  },
  {
    name: "Lip Blush",
    details: "Professional lip blush PMU service",
    price: "Contact Us",
  },
  {
    name: "Lip Liner",
    details: "Professional lip liner PMU service",
    price: "Contact Us",
  },
  {
    name: "Lip Correction",
    details: "Professional lip correction PMU service",
    price: "Contact Us",
  },
];

function ServiceCard({
  service,
  index,
  category,
}: {
  service: {
    name: string;
    details: string;
    price: string;
  };
  index: number;
  category: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex gap-4">
        <span className="pt-1 text-xs text-white/30">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-lg font-medium text-white">
              {service.name}
            </h3>

            <span className="whitespace-nowrap text-lg font-semibold text-white">
              {service.price}
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-white/50">
            {service.details}
          </p>

{/* BOOK BUTTON */}
<a
  href="#booking"
  onClick={() => {
    const serviceValue =
      service.price === "Contact Us"
        ? service.name
        : `${service.name} - ${service.price}`;

    sessionStorage.setItem("glamBookingCategory", category);
    sessionStorage.setItem("glamBookingService", serviceValue);
  }}
  className="mt-5 inline-flex items-center rounded-lg border border-white/20 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/90 active:scale-95"
>
  Book →
</a>
        </div>
      </div>
    </div>
  );
}

function CategorySection({
  title,
  subtitle,
  image,
  services,
  category,
}: {
  title: string;
  subtitle: string;
  image: string;
  category: string;
  services: {
    name: string;
    details: string;
    price: string;
  }[];
}) {
  return (
    <div className="mt-16">
      {/* CATEGORY IMAGE */}
      <div className="relative h-[280px] overflow-hidden rounded-3xl sm:h-[360px] lg:h-[420px]">
        <Image
          src={image}
          alt={`${title} services at GLAM Unisex Salon & Spa`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />

        {/* DARK OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-black/55" />

        {/* CATEGORY TITLE */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            GLAM UNISEX SALON & SPA
          </p>

          <h3 className="mt-3 text-4xl font-light tracking-wide text-white sm:text-6xl">
            {title}
          </h3>

          <p className="mt-4 max-w-xl text-sm text-white/70 sm:text-base">
            {subtitle}
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard
            key={service.name}
            service={service}
            index={index}
            category={category}
          />
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 bg-[#0b0b0b] px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* MAIN HEADING */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Explore Services
          </p>

          <h2 className="mt-3 text-4xl font-light text-white sm:text-5xl">
            Our <span className="font-semibold">Services</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
            Discover our premium beauty, grooming, spa and permanent
            makeup services, carefully designed to bring out your best.
          </p>
        </div>

        {/* ================= WOMEN ================= */}
        <CategorySection
          title="Women"
          subtitle="Premium beauty, skincare, haircare and grooming services."
          image="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=85"
          services={womenServices}
          category="Women"
        />

        {/* ================= MEN ================= */}
        <CategorySection
          title="Men"
          subtitle="Premium grooming, haircare, beard and relaxation services."
          image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=85"
          services={menServices}
          category="Men"
        />

        {/* ================= PMU ================= */}
        <CategorySection
          title="PMU"
          subtitle="Precision permanent makeup services for brows and lips."
          image="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=85"
          services={pmuServices}
          category="PMU"
        />
      </div>
    </section>
  );
}