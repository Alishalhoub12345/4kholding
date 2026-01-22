import React, { useState } from "react";

// images
import img1 from "../assets/journey1.jfif";
import img2 from "../assets/journey5.jfif";
import img3 from "../assets/journey3.jfif";
import img4 from "../assets/journey4.jfif";
import img5 from "../assets/journey5.jfif";
import img6 from "../assets/journey6.jfif";
import img7 from "../assets/journey7.jfif";
import img8 from "../assets/journey8.jfif";
import img9 from "../assets/journey5.jfif";
import img10 from "../assets/journey8.jfif";
import img11 from "../assets/journey8.jfif";
import img12 from "../assets/journey8.jfif";
import img13 from "../assets/journey8.jfif";
import img14 from "../assets/journey8.jfif";

const items = [
  { id: 1, image: img1, title: "Step One" },
  { id: 2, image: img2, title: "Step Two" },
  { id: 3, image: img3, title: "Step Three" },
  { id: 4, image: img4, title: "Step Four" },
  { id: 5, image: img5, title: "Step Five" },
  { id: 6, image: img6, title: "Step Six" },
  { id: 7, image: img7, title: "Step Seven" },
  { id: 8, image: img8, title: "Step Eight" },
  { id: 9, image: img9, title: "Step Nine" },
  { id: 10, image: img10, title: "Step Ten" },
  { id: 11, image: img11, title: "Step Eleven" },
  { id: 12, image: img12, title: "Step Twelve" },
  { id: 13, image: img13, title: "Step Thirteen" },
  { id: 14, image: img14, title: "Step Fourteen" },
];

const ITEMS_PER_PAGE = 7;

const TheJourney = () => {
  const [active, setActive] = useState(1);
  const [page, setPage] = useState(0); 

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const currentItems = items.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section id="journey" className="bg-[#ffffff]">
            <div className="bg-[#ffffff] max-w-7xl mx-auto px-6 py-7 ">
        <h2 className="text-2xl tracking-widest uppercase">
          The Journey
        </h2>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="bg-[#F6F6F6] hidden md:block max-h-[55vh] ">
        <div className="h-[55vh] min-h-[380px]  flex">
          {currentItems.map((item) => {
            const isActive = item.id === active;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`relative h-full transition-all duration-500 ease-out
                  ${isActive ? "flex-[6]" : "flex-[1.2]"}`}
                style={{ minWidth: isActive ? "0px" : "40px" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className={`absolute inset-0 transition-opacity duration-500
                    ${isActive ? "bg-black/25" : "bg-black/65"}`}
                />

                <div className="absolute bottom-8 left-8 flex items-end gap-4">
                  <span
                    className={`font-light tracking-wide
                      ${isActive ? "text-white text-6xl" : "text-white/35 text-5xl"}`}
                  >
                    {String(item.id).padStart(2, "0")}.
                  </span>

                  <span
                    className={`text-white/90 text-2xl transition-all duration-500
                      ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    {item.title}
                  </span>
                </div>

                <div className="absolute top-0 right-0 h-full w-px bg-white/50" />
              </button>
            );
          })}
        </div>

        {/* ===== PAGINATION LINE (DESKTOP ONLY) ===== */}
        <div className="flex justify-center mt-6">
          <div className="relative w-[220px] h-[2px] bg-black/20 z-19">
            <div
              className="absolute top-0 h-[2px] bg-black transition-all duration-500"
              style={{
                width: `${100 / totalPages}%`,
                left: `${(100 / totalPages) * page}%`,
              }}
            />
            <div className="absolute inset-0 flex">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className="flex-1"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE (UNCHANGED) ================= */}
      <div className="md:hidden">
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src={items[active - 1].image}
            alt={items[active - 1].title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <span className="text-white text-5xl font-light">
              {String(items[active - 1].id).padStart(2, "0")}.
            </span>

            <h3 className="text-white text-2xl mt-2">
              {items[active - 1].title}
            </h3>

            <div className="flex gap-3 mt-6 flex-wrap">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`w-3 h-3 rounded-full transition
                    ${item.id === active ? "bg-white" : "bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TheJourney;
