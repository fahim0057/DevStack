import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src={Logo}
              alt="Dev Stack logo"
              className="w-[136px]"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
                Curated tools, technologies, and resources for developers building
                modern software.
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="GitHub">
                GitHub
              </a>

              <a href="#" aria-label="Twitter">
                Twitter
              </a>

              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;