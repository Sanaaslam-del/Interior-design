import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="text-2xl font-light tracking-[0.2em] text-stone-900 dark:text-white"
            >
              LUMIÈRE
            </Link>

            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-stone-500">
              Interiors
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-stone-500 dark:text-stone-400">
              Thoughtful interiors designed around the way you live.
              We create timeless spaces with warmth, character and
              refined details.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-stone-300 text-sm font-semibold text-stone-700 transition hover:bg-stone-900 hover:text-white dark:border-stone-700 dark:text-stone-300 dark:hover:bg-white dark:hover:text-stone-900"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-stone-300 text-xs font-semibold text-stone-700 transition hover:bg-stone-900 hover:text-white dark:border-stone-700 dark:text-stone-300 dark:hover:bg-white dark:hover:text-stone-900"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-stone-300 text-xs font-semibold text-stone-700 transition hover:bg-stone-900 hover:text-white dark:border-stone-700 dark:text-stone-300 dark:hover:bg-white dark:hover:text-stone-900"
              >
                in
              </a>

            </div>
          </div>


          {/* Explore */}
          <div>

            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-stone-900 dark:text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-stone-500 dark:text-stone-400">

              <li>
                <Link
                  to="/"
                  className="transition hover:text-stone-900 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="transition hover:text-stone-900 dark:hover:text-white"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition hover:text-stone-900 dark:hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-stone-900 dark:hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-stone-900 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>


          {/* Contact */}
          <div>

            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-stone-900 dark:text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-sm text-stone-500 dark:text-stone-400">

              <p>
                Bahawalpur,
                <br />
                Punjab, Pakistan
              </p>

              <a
                href="mailto:hello@lumiereinteriors.com"
                className="block break-words transition hover:text-stone-900 dark:hover:text-white"
              >
                hello@lumiereinteriors.com
              </a>

              <a
                href="tel:+923001234567"
                className="block transition hover:text-stone-900 dark:hover:text-white"
              >
                +92 300 1234567
              </a>

            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-900 dark:text-white"
            >
              Book a consultation
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-stone-200 pt-6 text-xs text-stone-500 dark:border-stone-800 dark:text-stone-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Lumière Interiors. All rights reserved.
          </p>

          <p>
            Designed with intention.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;