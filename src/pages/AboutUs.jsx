import React from "react";
import aboutImage from "../assets/hero.jpg";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-24 px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <h2 className="text-2xl uppercase tracking-widest mb-6">
            About 4K Holding
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            The 4K group of companies is a family-owned holding,
            spanning the GCC and Lebanon, offering first-grade
            European and mainly German-sourced products and
            services for woodworking, architectural, and
            general construction finishing materials.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={aboutImage}
            alt="About 4K"
            className="w-full h-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
