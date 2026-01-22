import React, { useState } from "react";
import logo from "../assets/4klogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black/40 backdrop-blur-md border-b border-white/10">
<div className="h-[13vh] flex items-center px-6 justify-between lg:justify-evenly">

          <div className="flex items-center">
            <img src={logo} alt="4K Logo" className="h-[10vh]" />
          </div>

          <nav className="hidden lg:flex items-center gap-12">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Our Branches", href: "#branches" },
              { label: "The Journey", href: "#journey" },
              { label: "Contact Us", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  relative text-white text-xs uppercase tracking-widest
                  after:absolute after:-bottom-1 after:left-0
                  after:w-full after:h-[1px] after:bg-white
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

        </div>

      </div>
    </header>
  );
};

export default Navbar;
