// src/components/Header.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50  flex  justify-between items-center px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full">
        {/* Left: Logo & Tagline */}
        <div>
          <img src="./logo.png" alt="Vulcan Logo" className="h-16 md:h-28" />
        </div>

        {/* Right: WhatsApp Button */}
        <a
          href="https://wa.me/+919582396060"
          target="_blank"
          rel="noopener noreferrer"
          className="flex md:flex-col items-center bg-white rounded-[2rem] px-6 py-2 shadow-lg"
          style={{
            boxShadow: "0 4px 20px rgba(255,0,43,0.13)",
          }}
        >
          <IoLogoWhatsapp className="text-[#ff002a] text-2xl  mr-2 vibrate" />
          <span className="text-lg font-semibold text-red-600">
            WHATSAPP US
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
