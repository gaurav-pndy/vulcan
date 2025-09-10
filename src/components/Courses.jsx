export default function Courses() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-10  mb-20">
          {/* Courses */}
          <div className="lg:w-1/2">
            <h2 className="text-[2rem] font-medium text-[#c40021] mb-2">
              EXPLORE OUR COURSES
            </h2>
            <p className="mb-8 text-black">
              At Vulcan Aviation, we offer a comprehensive range of SACAA
              approved courses to fuel your aviation aspirations:
            </p>
            <div className=" flex flex-col md:flex-row gap-2 md:gap-8">
              <ul className="list-disc list-inside text-black space-y-2 text-base">
                <li>Private Pilot Licence</li>
                <li>Night Rating</li>
                <li>Instrument Rating</li>
                <li>Commercial Pilot Licence</li>
              </ul>
              <ul className="list-disc list-inside text-black space-y-2 text-base">
                <li>DGCA Commercial Pilot</li>
                <li>Multi-Engine Rating</li>
                <li>ATPL</li>
                <li>Instructor Rating</li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src="/courses.webp"
              alt=""
              className="md:h-96 w-full lg:h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-10 mb-20">
          <div className="lg:w-1/2">
            <img
              src="/who-its-for.webp"
              alt=""
              className="md:h-96 w-full lg:h-full object-cover rounded-xl "
            />
          </div>
          <div className="flex flex-col gap-6  lg:w-1/2">
            <div className="flex-1">
              <h2 className="text-[2rem] font-medium text-[#c40021] mb-2">
                WHO IS IT FOR?
              </h2>
              <ul className="list-disc list-inside text-black text-base space-y-2">
                <li>
                  Students and individuals who have completed their 12th and
                  aspire to become pilots.
                </li>
                <li>
                  Individuals who want insights about career prospects for a
                  pilot.
                </li>
                <li>
                  People who are looking to become a pilot and are interested in
                  knowing about the process and various other requirements to
                  become one.
                </li>
              </ul>
            </div>
            {/* Services */}
            <div className="flex-1">
              <h2 className="text-[2rem] font-medium text-[#c40021] mb-2">
                SERVICES
              </h2>
              <div className="flex flex-col md:flex-row gap-2">
                <ul className="list-disc list-inside text-black text-base space-y-2  md:w-1/2">
                  <li>Visa</li>
                  <li>Airline Return ticket booking</li>
                  <li>Medicals</li>
                  <li>Computer number</li>
                  <li>License Conversion</li>
                </ul>
                <ul className="list-disc list-inside text-black text-base space-y-2 md:w-1/2">
                  <li>Aviation English and General English coaching</li>
                  <li>
                    Aviation subjects: NAVIGATION, METEOROLOGY, REGULATIONS,
                    RTR, TECHNICAL GENERAL
                  </li>
                  <li>Complete airline preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-[2rem] font-medium text-[#c40021] mb-2">
              STUDENT HOUSING SOLUTIONS
            </h2>
            <p className="text-black mb-3">
              Vulcan Aviation offers convenient housing options in the upscale
              Fourways/Lonehill area, just a stroll away from shopping and
              entertainment hubs
            </p>
            <p className="text-black mb-3">All apartments include:</p>
            <ul className="list-disc list-inside text-black space-y-1 text-base">
              <li>Cleaning Service</li>
              <li>TV</li>
              <li>WiFi</li>
              <li>Access to Swimming Pool and Clubhouse</li>
            </ul>
            <p className="text-black mt-3">
              Plus, enjoy the convenience of a daily shuttle service to and from
              Lanseria Airport (where applicable) included in the quote.
            </p>
            <p className="text-black mt-2">
              Prepare for a smooth landing with Vulcan Aviation – where your
              comfort is our first class priority!
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/housing.webp"
              alt=""
              className="md:h-96 w-full lg:h-full object-cover rounded-xl flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
