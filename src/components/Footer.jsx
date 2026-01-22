import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import in2info from "../assets/in2info-logo-white1.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f1a1c] to-[#1c2a2e] text-white">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">

        {/* COLUMN 1 — COMPANY */}
        <div>
          <h3 className="text-lg mb-6">Company</h3>

          <ul className="space-y-3 text-sm text-white/70">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#branches" className="hover:text-white transition">Our Branches</a></li>
            <li><a href="#journey" className="hover:text-white transition">The Journey</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            {/* <li><a href="#partners" className="hover:text-white transition">Partners</a></li> */}
          </ul>

          {/* Social icons */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.facebook.com/4kholding"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://www.instagram.com/4kholding/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

        {/* COLUMN 2 — BRANCHES */}
        <div>
          <h3 className="text-lg mb-6 text-center md:text-left">Our Branches</h3>

          <ul className="space-y-2 text-sm text-white/70  md:text-left">
            <li>UAE</li>
            <li>Qatar</li>
            <li>Oman</li>
            <li>Bahrain</li>
            <li>Dubai</li>
            <li>KSA</li>
            <li>Abu Dhabi</li>
          </ul>
        </div>

        {/* COLUMN 3 — MAP (FULL WIDTH ON MOBILE) */}
        <div className="relative col-span-2 md:col-span-1 h-[35vh] md:h-[30vh] overflow-hidden rounded">
          
          {/* MAP */}
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1HGmgK4MO1IwdsVytNDFxJ7dKcIGPAWA&ehbc=2E312F"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="4K Holding Locations"
          />

          {/* OVERLAY — hides Google account info */}
          <div className="absolute top-0 left-0 w-full h-[58px] bg-[#1A282C] z-[99] pointer-events-auto"></div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <span>© 2026 4kholding. All Rights reserved.</span>

          <span className="flex items-center gap-2">
            <span>SITE MANAGER V4.0 —</span>
            <a
              href="https://in2info.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src={in2info}
                className="w-[70px] h-auto object-contain"
                alt="In2Info logo"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
