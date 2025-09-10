import { Listbox } from "@headlessui/react";
import { useState } from "react";

const courses = [
  "Commercial Pilot Licence - Airline Ready (DSCA - Indian Nationals)",
  "Commercial Pilot License (With food package) - Airline Ready (DSCA - Indian Nationals) - AVIAKUL",
  "Commercial Pilot License (No food package) - Airline Ready (DSCA - Indian Nationals) - AVIAKUL",
];

export default function Contact() {
  const [selected, setSelected] = useState(courses[0]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send form data via backend to receiver email
    // using info@aviakul.com as sender, web@aviakul.com as recipient
    alert("Thank you! Your details have been submitted.");
  };

  return (
    <section className="bg-white pb-16 mb-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-start">
        {/* Form Area */}
        <form className="md:w-[57%] w-full" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-medium text-gray-800 mb-8">
            PLEASE FILL IN YOUR DETAILS BELOW
          </h2>
          <div className="mb-6">
            <label className="block text-[#c7102e] text-base font-semibold mb-2">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-[#E04562] rounded-lg px-4 py-3 bg-[#f7f7f7] text-gray-800 text-lg focus:outline-none focus:border-[#c40021]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#c7102e] text-base font-semibold mb-2">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-[#E04562] rounded-lg px-4 py-3 bg-[#f7f7f7] text-gray-800 text-lg focus:outline-none focus:border-[#c40021]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#c7102e] text-base font-semibold mb-2">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="Enter Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-[#E04562] rounded-lg px-4 py-3 bg-[#f7f7f7] text-gray-800 text-lg focus:outline-none focus:border-[#c40021]"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-[#c7102e] text-base font-semibold mb-2">
              Select Course <span className="text-red-600">*</span>
            </label>
            <div className="w-full relative">
              <Listbox value={selected} onChange={setSelected}>
                <Listbox.Button className="w-full border border-[#E04562] rounded-lg px-4 py-3.5 bg-[#f7f7f7] text-gray-800 text-left text-lg focus:outline-none focus:border-[#c40021]">
                  {selected}
                </Listbox.Button>
                <Listbox.Options className="w-fit absolute  mt-1 overflow-scroll rounded-md bg-white border border-gray-300 max-h-60 text-base shadow-lg focus:outline-none">
                  {courses.map((course, idx) => (
                    <Listbox.Option
                      key={idx}
                      value={course}
                      className={({ active }) =>
                        `cursor-pointer select-none relative p-4 whitespace-normal ${
                          active ? "bg-[#c40021] text-white" : "text-gray-900"
                        }`
                      }
                    >
                      {course}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </div>
          {/* Simple checkbox to mimic captcha (replace with actual Google reCAPTCHA for production) */}
          {/* <div className="mb-6 flex items-center">
            <input type="checkbox" required className="mr-2 w-5 h-5" />
            <span className="mr-4 text-gray-800">I'm not a robot</span>
            <span className="text-xs text-gray-500">reCAPTCHA</span>
          </div> */}
          <button
            type="submit"
            className="bg-[#c7102e] text-white font-medium px-8 py-3 rounded-md  hover:bg-[#a7001d] transition"
          >
            Send Message
          </button>
        </form>
        {/* Image Area */}
        <div className="md:w-[43%] w-full flex justify-center items-center">
          <img
            src="/contact.webp"
            alt="Vulcan Aviation team"
            className="w-full  h-auto  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
