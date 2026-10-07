import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Moon,
  Sun,
  ArrowUpRight,
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        isHomePage
          ? "border-stone-300/70 bg-stone-100/95 dark:border-stone-700 dark:bg-stone-900/95"
          : "border-stone-200/70 bg-stone-50/95 dark:border-stone-800 dark:bg-stone-950/95"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="group"
          onClick={() => setMenuOpen(false)}
        >
          <div className="text-lg font-semibold tracking-[0.18em] text-stone-900 dark:text-white sm:text-xl sm:tracking-[0.2em]">
            LUMIÈRE
          </div>

          <div className="text-[9px] tracking-[0.4em] text-stone-500 dark:text-stone-400">
            INTERIORS
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative rounded-sm px-3 py-2 text-sm transition after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-amber-800 after:transition-transform after:duration-300 hover:after:scale-x-100 dark:after:bg-amber-300 ${
                  link.name === "Home"
                    ? `font-semibold text-amber-900 dark:text-amber-300 ${
                        isActive ? "after:scale-x-100" : ""
                      }`
                    : isActive
                      ? "font-medium text-amber-800 after:scale-x-100 dark:text-amber-300"
                      : "text-stone-500 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={darkMode}
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-stone-300 p-2.5 text-stone-700 transition hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <Link
            to="/contact"
            className="group flex items-center gap-2 bg-stone-900 px-5 py-3 text-sm text-white transition hover:bg-stone-700 dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200"
          >
            Book Consultation
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={darkMode}
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 dark:border-stone-700"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 dark:border-stone-700"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className={`border-t px-6 py-6 lg:hidden ${
            isHomePage
              ? "border-stone-300/70 bg-stone-100 dark:border-stone-700 dark:bg-stone-900"
              : "border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950"
          }`}
        >
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-11 w-full items-center border-b px-2 text-sm transition-colors ${
                    link.name === "Home"
                      ? `font-semibold text-amber-900 dark:text-amber-300 ${
                          isActive
                            ? "border-amber-800 dark:border-amber-300"
                            : "border-transparent"
                        }`
                      : isActive
                        ? "border-amber-800 font-medium text-amber-800 dark:border-amber-300 dark:text-amber-300"
                        : "border-transparent text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex min-h-11 w-fit items-center bg-stone-900 px-5 py-3 text-sm text-white dark:bg-white dark:text-stone-900"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;