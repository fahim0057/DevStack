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
          <button className="px-2 py-2 text-black md:px-4">
            Sign In
          </button>

          <button className="rounded-full bg-[#D91B7E] px-3 py-2 text-white md:px-5">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;