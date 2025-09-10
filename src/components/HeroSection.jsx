import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const carouselImages = [
  "/hero/carousel1.webp",
  "/hero/carousel2.webp",
  "/hero/carousel3.jpg",
];

// Feature Box Component
export function FeatureBox({ title, icon, img }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative flex-1 rounded-3xl md:rounded-none bg-[#c7102e] text-white flex flex-col items-center justify-center h-48 lg:h-68   group overflow-hidden transition-all duration-300 "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className=" flex flex-col gap-6 items-center">
        {icon}
        <span className="font-semibold md:text-xl text-center tracking-wider">
          {title}
        </span>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.img
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5 }}
            src={img}
            alt=""
            className={`absolute left-0 bottom-0 w-full h-full object-cover    
        `}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HeroSection({ features }) {
  return (
    <div className="relative lg:mb-44 lg:min-h-screen w-full flex flex-col justify-between ">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
      {/* Background Carousel */}
      <div className="absolute inset-0  w-full h-full z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1000}
          className="w-full h-full"
        >
          {carouselImages.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover scale-100 swiper-lazy hero-zoom-animation"
                  style={{
                    animation: "heroZoomFade 5s linear forwards",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Overlay for darken */}
        <div className="absolute inset-0 bg-black/[.35]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto w-full z-10 flex flex-col justify-center items-center md:items-start h-full pb-28 pt-40 text-center md:text-left lg:pt-0 lg:h-screen px-4 xl:px-0">
        <h1 className="text-white text-3xl font-bold  md:text-[4.2rem] drop-shadow-xl drop-shadow-black ">
          BE THE BEST
          <br />
          PILOT YOU CAN BE!
        </h1>
        <div className="mt-8 flex text-xs md:text-base gap-4">
          <button className="px-6 py-2.5 rounded-full border-2 border-white bg-white/10 text-white  font-medium cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#c7102e]">
            REGISTER NOW
          </button>
          <button className="px-6 py-2.5 rounded-full border-2 border-white bg-[#c7102e] text-white font-medium shadow-xl hover:bg-white hover:text-[#c7102e] cursor-pointer transition-all duration-300">
            WATCH NOW
          </button>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="hidden lg:absolute -bottom-42  left-1/2 transform -translate-x-1/2  z-10 w-full lg:flex max-w-7xl mx-auto ">
        {features.map((feature, idx) => (
          <FeatureBox key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}
