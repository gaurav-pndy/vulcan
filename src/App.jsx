import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import HeroSection, { FeatureBox } from "./components/HeroSection";
import About from "./components/About";
import { FaAward, FaUser } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";
import Courses from "./components/Courses";
import VideoSection from "./components/VideoSection";
import Testimonials from "./components/Testimonials";
import Experts from "./components/Experts";
import Contact from "./components/Contact";

function App() {
  const features = [
    {
      title: "SACAA CERTIFIED",
      icon: <FaAward className="text-4xl md:text-5xl" />,
      img: "/hero/box1.webp",
    },
    {
      title: "FULL FLIGHT SIMULATOR",
      icon: <HiOutlineRocketLaunch className="text-4xl md:text-5xl" />,
      img: "/hero/box2.webp",
    },
    {
      title: "DGCA COMPLIANT",
      icon: <IoMdCheckmark className="text-4xl md:text-5xl" />,
      img: "/hero/box3.webp",
    },
    {
      title: "EXPERIENCED PILOTS",
      icon: <FaUser className="text-4xl md:text-5xl" />,
      img: "/hero/box4.webp",
    },
  ];
  return (
    <div>
      <Header />
      <HeroSection features={features} />
      <div className="lg:hidden mw-full grid grid-cols-2 gap-4 p-4 max-w-7xl mx-auto ">
        {features.map((feature, idx) => (
          <FeatureBox key={feature.title} {...feature} />
        ))}
      </div>
      <About />
      <Courses />
      <VideoSection />
      <Testimonials />
      <Experts />
      <Contact />
      <footer className="bg-[#c7102e] w-full py-4">
        <div className="max-w-7xl mx-auto px-2 flex justify-center ">
          <span className="text-white text-base text-center">
            Copyright © 2025 Vulcan Aviation | Designed By InsideOut
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
