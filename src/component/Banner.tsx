import Bannerimg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section >
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 py-10 md:flex-row">

        {/* Left side */}
        <div className="w-full md:w-1/2">

          <h1 className="text-4xl font-extrabold md:text-[60px]">
            Build Your Ideal{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Development Stack
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-gray-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">

            <button
              className="rounded-full px-5 py-2 text-white"
              style={{ background: "var(--brand-gradient)" }}
            >
              Explore Technologies
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-black">
              Learn More
            </button>

          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2">
          <img
            src={Bannerimg}
            alt="Development stack illustration"
            className="w-full max-w-[490px] md:ml-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;