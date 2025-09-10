import { Player } from "@lottiefiles/react-lottie-player";

const experts = [
  {
    img: "/expert1.webp",
    name: "KIRON HANUMAN",
    details:
      "Kiron Hanuman, A grade 2 flight instructor with a South African airline transport pilot license (ATPL), has over 11000 hours of flight time and has flown a variety of commercial aircraft including the Airbus 320/340, Boeing 737-3/4/800, Piper PA34 series.",
  },
  {
    img: "/expert2.webp",
    name: "SACHIN MEDA",
    details:
      "Sachin Meda, a South African airline transport pilot (ATPL), is a Grade 2 Flight Instructor with over 3500 hours of experience flying a wide range of aeroplanes, including the Cessna 182, Piper 28 Series, RV6, and Sling.",
  },
];

export default function Experts() {
  return (
    <section className="bg-white max-w-6xl w-full mx-auto px-4 xl:px-0 py-16">
      <h2 className="text-4xl text-center font-bold text-[#c40021]  mb-10 ">
        KNOW ABOUT OUR EXPERTS
      </h2>
      <div className="flex  flex-col md:flex-row justify-between items-center gap-10">
        {experts.map((e, i) => (
          <div
            key={i}
            className="relative max-w-[27rem]   overflow-hidden  group"
          >
            <img src={e.img} alt="" className="w-full h-full object-cover" />
            {e.name && (
              <div
                className="absolute left-0 bottom-0 w-full
                  px-6 py-10 pt-20 h-[80%] flex flex-col justify-end  text-white text-center
                  bg-gradient-to-t from-black/80   to-transparent
                  lg:opacity-0  group-hover:opacity-100 transition-all duration-500"
              >
                <div className="lg:translate-y-full group-hover:translate-y-0 transition-all duration-500">
                  <div className="text-3xl font-medium mb-4 ">{e.name}</div>
                  <div className="text-base leading-relaxed">{e.details}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative  mt-10 bg-white py-8">
        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between md:gap-10 relative">
          {/* Centered Heading */}
          <h2 className="w-full  text-2xl text-center font-bold text-[#c40021]  ">
            UNLOCK YOUR WINGS WITH VULCAN AVIATION AND TAKE OFF ON A JOURNEY
            <br />
            TOWARDS A SOARING CAREER IN AVIATION! READY FOR LIFTOFF
          </h2>
          {/* Lottie Airplane Animation (Right) */}
          <div className=" ">
            <Player
              src="/plane.json"
              autoplay
              loop
              style={{ height: "150px", width: "150px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
