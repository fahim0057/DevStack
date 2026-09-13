import Bannerimg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex items-center justify-between py-10 ">

        {/* Left side */}
        <div>
          <h4 className="font-extrabold text-[60px]">
            Build Your Ideal
          </h4>

          <h4 className="font-extrabold text-[60px] text-[#D91B7E]">
            Development Stack
          </h4>

          <p className="mt-4 text-gray-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

           <div className="flex items-center gap-3">
            
                <button className="rounded-full bg-[#EC4899] px-5 py-2 text-white">
                 Explore Technologies
                </button>
                <button className="rounded-full bg-white px-5 py-2 text-black ">
                         Learn More
                </button>

        </div>
        </div>

        {/* Right side */}
        <div>
          <img
            src={Bannerimg}
            alt="Banner"
            className="w-[490px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;