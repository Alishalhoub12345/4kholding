import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import iconOman from "../assets/Maps-OMN.png";
import iconDubai from "../assets/Maps-DUBAI.png";
import iconUAE from "../assets/Maps-UAE.png";
import iconAbuDhabi from "../assets/Maps-ABUDHABI.png";
import iconQatar from "../assets/Maps-QTR.png";
import iconKSA from "../assets/Maps-KSA.png";
import iconBahrain from "../assets/Maps-BAH.png";

const branches = [
  {
    country: "Oman",
    icon: iconOman,
    address:
      "Store 01, Plot 443,\nAl Wasit Industrial Estate,\nBarka State - Sultanate of Oman",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Dubai+Industrial+City+Phase+2",
    phone: "+97100000000",
  },
  {
    country: "Dubai",
    icon: iconDubai,
    address: "4K EM Wood Manufacturing L.L.C.\nDubai Industrial City\nPhase 2, Warehouse No D-7 & D-8\nUAE",
    mapLink:
      "https://www.google.com/maps/place/Four+K+Building+Materials+LLC/@24.844649,55.074904,14z/data=!4m15!1m8!3m7!1s0x3e5f0a45df7e5b9f:0x3e80d389715cc04!2sSaih+Shuaib+3+-+Dubai+-+United+Arab+Emirates!3b1!8m2!3d24.849161!4d55.0769045!16s%2Fg%2F11y07p5c5b!3m5!1s0x3e5f0bcefe98842b:0x6e165980bbd4482b!8m2!3d24.8457162!4d55.069332!16s%2Fg%2F1pzrkkstw?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D",
    phone: "+97140000000",
  },
  {
    country: "UAE",
    icon: iconUAE,
    address:
      "4K Building Materials L.L.C.\nDubai Industrial City\nPhase2, Showroom No A-1 UAE",
    mapLink:
      "https://www.google.com/maps/place/Four+K+Building+Materials+LLC/@24.83912,55.080128,13z/data=!4m6!3m5!1s0x3e5f0bcefe98842b:0x6e165980bbd4482b!8m2!3d24.8457162!4d55.069332!16s%2Fg%2F1pzrkkstw?hl=en&entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D",
    phone: "+97144302687",
  },
  {
    country: "Abu Dhabi",
    icon: iconAbuDhabi,
    address: "Four K Building Materials\nAbu Dhabi, UAE",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Four+K+Building+Materials+Abu+Dhabi",
    phone: "+97140000002",
  },
  {
    country: "Qatar",
    icon: iconQatar,
    address: "Four K Building Materials\nDoha, Qatar",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Four+K+Building+Materials+Qatar",
    phone: "+97440000000",
  },
  {
    country: "KSA",
    icon: iconKSA,
    address: "Four K Building Materials\nSaudi Arabia",
    mapLink:
      "https://www.google.com/maps/place/4K+Building+Materials+-+Riyadh/@24.6084571,46.8565961,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2fa7431575c3c5:0x2b6cb25cee9648e3!8m2!3d24.6084571!4d46.8565961!16s%2Fg%2F11wnf_1729?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D",
    phone: "+966500000000",
  },
  {
    country: "Bahrain",
    icon: iconBahrain,
    address: "Four K Building Materials\nBahrain",
    mapLink:
      "https://www.google.com/maps/@26.1292361,50.5022591,11.4z/data=!4m2!6m1!1s1HGmgK4MO1IwdsVytNDFxJ7dKcIGPAWA?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D",
    phone: "+97330000000",
  },
];

const Branches = () => {
  return (
    <section id="branches" className="bg-[#f6f6f6] py-20">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-2xl tracking-widest uppercase text-center">
          Our Branches
        </h2>
        <div className="mt-4 h-px mx-auto bg-gray-300 w-24" />
      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto relative px-4">
        <Swiper
          modules={[Navigation]}
          grabCursor
          loop={false}
          slidesPerView={7}
          navigation={{
            prevEl: ".branches-prev",
            nextEl: ".branches-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {branches.map((branch, index) => (
            <SwiperSlide key={index}>
              <div className="h-full border-r border-gray-300 last:border-r-0 bg-[#f6f6f6] py-10 px-2">

                {/* ICON */}
                <img
                  src={branch.icon}
                  alt={branch.country}
                  className="h-28 mb-6 opacity-70 mx-auto"
                />

                {/* COUNTRY */}
                <h3 className="text-lg mb-4 text-center font-medium">
                  {branch.country}
                </h3>

                {/* CONTENT */}
                <div className="text-[12px] text-gray-600 leading-relaxed text-center px-4 space-y-3">

                  {/* 📍 ADDRESS */}
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block whitespace-pre-line hover:text-black hover:underline transition cursor-pointer"
                  >
                    {branch.address}
                  </a>

                  {/* 📞 PHONE */}
                  <a
                    href={`tel:${branch.phone}`}
                    className="block font-medium text-gray-700 hover:text-black hover:underline transition cursor-pointer"
                  >
                    {branch.phone}
                  </a>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MOBILE NAVIGATION */}
        <div className="md:hidden">
          <button className="branches-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 w-9 h-9 rounded-full shadow flex items-center justify-center">
            ‹
          </button>
          <button className="branches-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 w-9 h-9 rounded-full shadow flex items-center justify-center">
            ›
          </button>
        </div>
      </div>

    </section>
  );
};

export default Branches;
