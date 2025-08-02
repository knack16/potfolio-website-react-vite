import { Link, NavLink } from "react-router-dom";
import Image from '../asset';

function Header() {
  console.log(Image.logoImage)
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo - centered on mobile */}
          <Link to="/" className="flex justify-center mb-2 lg:mb-0 lg:justify-start">
            <img
              src={Image.logoImage}
              className="h-12"
              alt="Logo"
            />
          </Link>

          {/* Navigation Menu - centered on mobile, horizontal on desktop */}
          <div className="flex justify-center w-full lg:w-auto order-1">
            <ul className="flex flex-row items-center gap-2 font-medium lg:flex-row lg:space-x-8 lg:gap-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-900"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-900"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-900"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 hover:text-orange-700 ${
                      isActive ? "text-orange-700" : "text-gray-900"
                    }`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Desktop-only Buttons */}
          <div className="hidden lg:flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
