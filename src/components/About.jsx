export default function About() {
  return (
    <section className="w-full bg-white py-16 px-4 xl:px-0">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between gap-10">
        {/* About Us */}
        <div className="md:w-1/2">
          <h2 className="text-[2rem] text-center md:text-left font-medium text-[#c7102e] mb-4 md:mb-8">
            ABOUT US
          </h2>
          <p className=" text-black mb-6">
            Vulcan Aviation is a world-class flight school that provides
            high-quality and extremely comprehensive pilot training at Lanseria,
            South Africa.
          </p>
          <p className=" text-black">
            With an aim to establish a versatile pilot training academy, we, at
            Vulcan Aviation, are committed to providing leading-edge and
            innovative training experiences.
          </p>
        </div>
        {/* Why Choose Us */}
        <div className="md:w-1/2">
          <h2 className="text-[2rem] font-medium text-center md:text-left text-[#c7102e] mb-4 md:mb-8">
            WHY CHOOSE US?
          </h2>
          <ul className="">
            <li className="flex items-start">
              <span className="text-[#c40021] mr-2">✔</span>World-Class
              Facilities
            </li>
            <li className="flex items-start">
              <span className="text-[#c40021] mr-2">✔</span>One-on-One Approach
            </li>
            <li className="flex items-start">
              <span className="text-[#c40021] mr-2">✔</span>Equipped with Latest
              Technology
            </li>
            <li className="flex items-start">
              <span className="text-[#c40021] mr-2">✔</span>Highly Experienced
              Instructors
            </li>
            <li className="flex items-start">
              <span className="text-[#c40021] mr-2">✔</span>Pilot training in
              South Africa
            </li>
            <li className="flex items-start">
              <span className="text-[#c40021] mr-2">✔</span>100% Placement
              Assistance
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
