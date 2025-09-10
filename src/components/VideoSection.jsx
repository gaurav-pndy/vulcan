export default function VideoSection() {
  return (
    <section className="w-full bg-white py-14 px-4 xl:px-0 max-w-6xl mx-auto">
      <h2 className="text-[2rem] text-center font-medium text-[#c40021]  mb-6 ">
        SKYWARD BOUND: IGNITE YOUR PILOT DREAM WITH VULCAN AVIATION
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video   overflow-hidden ">
          <iframe
            src="https://www.youtube.com/embed/UnHtfW5A9dA"
            title="Vulcan Aviation"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
