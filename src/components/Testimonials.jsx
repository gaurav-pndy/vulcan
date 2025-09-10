import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "It's been 2.5 months at Vulcan so far and what I have realized is it's a far better place to do your training than any other schools in SA. The instructors are highly experienced and supportive. Management is always there for you and the fleets are highly maintained.",
    author: "Faizan",
    location: "Gujarat",
    image: "/testimonials/1.webp",
  },
  {
    text: "I am a student at Vulcan Aviation. I have been here for past few months and it's been a great journey. The most admirable thing about the school, in my perspective is one on one interaction with the instructors and the learning curve. Also, there is very friendly and family like environment that allows each student to grow into their best versions. Will always be grateful for the experience.",
    author: "Haritima Maurya",
    location: "Maharashtra",
    image: "/testimonials/2.webp",
  },
  {
    text: "I have just finished my night rating here. I got my absolute value for money out of this school and found no hidden costs in my contract. I find the instructors to be highly experienced,patient and enthusiastic.The school's fleet of aircraft are also exceptionally well looked after as well.",
    author: "Thomas Roberts",
    location: "South Africa",
    image: "/testimonials/3.webp",
  },
  {
    text: "By far Vulcan has provided the most affordable training I’ve experienced. It has a close proximity to General Flying Area and world class night flying facilities for night rating and Instrument Rating training. They have a variety of experienced and knowledgeable instructors. Vulcan has provided a engaging learning environment with lots of areas for growth. All the aircrafts are always well maintained and aircraft problems are rectified almost instantly.",
    author: "Tijil",
    location: "South Africa",
    image: "/testimonials/4.webp",
  },
  {
    text: "As a student at Vulcan Aviation, the experience of flying has been truly exhilarating. The instructors are knowledgeable and patient, providing a solid foundation in aviation skills. The hands-on training and exposure to various aircraft have been invaluable in shaping my confidence and competence as a pilot-in-training. ",
    author: "Joel",
    location: "Kerala / Saudi Arabia",
    image: "/testimonials/5.webp",
  },
  {
    text: "It's been more than 6 months for me here at Vulcan Aviation and I'm glad I chose this school for its affordable prices and quality of training. They have experienced instructors with whom every flight is a new learning and experience. All the aircraft are regularly maintained. I have already completed my PPL and busy with CPL training. The school provides a better training environment among other schools in South Africa",
    author: "Aayush",
    location: "Haryana",
    image: "/testimonials/6.webp",
  },
  {
    text: "Hi, I am Bhumika from India and a student at Vulcan Aviation, where I recently joined the CPL course. My journey with Vulcan Aviation began with a seamless enrollment process. They provided clear guidance on the required documentation, course details. Upon joining, I quickly realized that Vulcan Aviation is a community dedicated to fostering growth and success. I am proud to be a part of the Vulcan Aviation community, and I wholeheartedly recommend it to anyone aspiring to pursue an aviation career. Thank you, Vulcan Aviation, for providing an exceptional learning experience and helping me turn my dreams into reality",
    author: "Bhumika",
    location: "Bengal",
    image: "/testimonials/7.webp",
  },
  {
    text: "I am thrilled with my experience at Vulcan Aviation! The expert instructors, state-of-the-art facilities, and hands-on flight training provided me with the knowledge and confidence needed to pursue my dream of becoming a pilot. The personalized attention and supportive learning environment truly set this academy apart. I highly recommend Vulcan Aviation to anyone passionate about aviation.",
    author: "Rahul",
    location: "Telangana",
    image: "/testimonials/8.webp",
  },
  {
    text: "I have just finished my PPL with Vulcan Aviation. With all the ups and downs that aviation is prone to and the inevitable bad weather days, the school still managed to provide quality training with a wonderful team of instructors and a well-maintained fleet of aircraft on board. Being situated in an international airport, I believe at Vulcan Aviation we have better exposure. I am grateful for the experience I’ve had here at Vulcan Aviation.",
    author: "Laya",
    location: "Karnataka",
    image: "/testimonials/9.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white px-4 xl:px-0">
      <h2 className="text-[2rem] text-center font-medium  mb-6  text-gray-800">
        TESTIMONIALS
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-7xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={15}
            navigation
            autoplay={{
              delay: 3000, // 3 seconds
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
            }}
            className=""
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col lg:flex-row gap-4 h-full justify-between items-center rounded-3xl bg-[#c7102e] min-h-[34rem] p-6 md:p-8 text-white hover:shadow-xl transition-shadow duration-300">
                  <div className="lg:w-1/2 ">
                    <p className="mb-6  leading-relaxed">{t.text}</p>
                    <div className="font-bold text-lg mt-8">{t.author}</div>
                    <div className="text-sm">{t.location}</div>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src={t.image}
                      alt=""
                      className=" w-full   object-cover mx-auto"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
