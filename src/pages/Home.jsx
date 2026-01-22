import React from "react";
import heroImage from "../assets/hero.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-[80vh] w-full"
    >
      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-[80vh] object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex items-center px-[15%] py-[28%]">
        <div className="bg-black/60 backdrop-blur-md p-8 max-w-xl">
          <h1 className="text-white text-3xl uppercase tracking-widest mb-4">
            Shaping Modern Living
          </h1>
          <p className="text-white/80 text-sm leading-relaxed">
            Premium European solutions for architecture,
            interior design, and finishing materials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
