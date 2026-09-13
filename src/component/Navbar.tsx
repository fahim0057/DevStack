import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between py-4">

        {/* Mobile menu + Logo */}
        <div className="flex items-center gap-4">
          <button className="text-2xl md:hidden">
            ☰
          </button>

          <img
            src={Logo}
            alt="Dev Stack logo"
            className="w-[100px] md:w-[136px]"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <a href="#" className="text-[#DB2777]">
              Home
            </a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Authentication */}
        <div className="flex items-center gap-3">
<button className="rounded-full px-4 py-2 text-black transition-colors duration-200 hover:bg-pink-50 hover:text-[#D91B7E]">
  Sign In
</button>

<button
  className="rounded-full px-5 py-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-md"
  style={{ background: "var(--brand-gradient)" }}
>
  Sign Up
</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;