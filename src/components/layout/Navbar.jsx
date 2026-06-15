import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../common/Logo";
import Container from "./Container";
import ThemeToggle from "../common/ThemeToggle";
import ResumeButton from "../common/ResumeButton";
import navLinks from "../../data/navLinks";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      navLinks.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed
      top-4
      left-1/2
      -translate-x-1/2
      w-[95%]
      max-w-7xl
      z-50
      transition-all
      duration-500
      rounded-full
      border
      border-white/20
      ${
        scrolled
          ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl shadow-xl"
          : "bg-white/40 dark:bg-neutral-900/40 backdrop-blur-lg"
      }
      `}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between px-8">

          <Logo />

          {/* Desktop */}

          <ul className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`
                  relative
                  text-[15px]
                  font-medium
                  transition-all
                  duration-300
                  hover:text-pink-500
                  hover:scale-105
                  ${
                    active === link.id
                      ? "text-pink-500"
                      : ""
                  }
                  `}
                >
                  {link.title}

                  <span
                    className={`
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    rounded-full
                    bg-pink-400
                    transition-all
                    duration-300
                    ${
                      active === link.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                    `}
                  />
                </a>
              </li>
            ))}

          </ul>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-4">

            <ThemeToggle />

            <ResumeButton />

          </div>

          {/* Mobile Button */}

          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>

        </nav>
      </Container>

      {/* Mobile Menu */}

      <div
        className={`
        lg:hidden
        overflow-hidden
        transition-all
        duration-500
        ${
          mobileMenu
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }
        `}
      >
        <div className="rounded-b-3xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-xl">

          <ul className="flex flex-col py-6">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenu(false)}
                className={`
                py-3
                transition-all
                duration-300
                hover:text-pink-500
                ${
                  active === link.id
                    ? "text-pink-500 font-semibold"
                    : ""
                }
                `}
              >
                {link.title}
              </a>
            ))}

            <div className="flex justify-center gap-4 mt-5">

              <ThemeToggle />

              <ResumeButton />

            </div>

          </ul>

        </div>

      </div>

    </header>
  );
}

export default Navbar;