import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Container from "./Container";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);

      navItems.forEach((item) => {
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

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "backdrop-blur-2xl bg-white/70 shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <Container>

        <div className="h-[88px] flex items-center justify-between">

          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col"
          >
            <span className="text-3xl font-bold tracking-wide text-[var(--primary)]">
              Varnaja
            </span>

            <span className="text-xs tracking-[4px] uppercase text-[var(--text)]">
              Software Engineer
            </span>
          </motion.a>

          <ul className="hidden lg:flex items-center gap-10">

            {navItems.map((item) => (

              <li key={item.id}>

                <a
                  href={`#${item.id}`}
                  className={`relative pb-2 transition-all duration-300 font-medium

                  ${
                    active === item.id
                      ? "text-[var(--primary)]"
                      : "text-[var(--heading)]"
                  }

                  hover:text-[var(--primary)]
                  `}
                >
                  {item.name}

                  {active === item.id && (
                    <motion.div
                      layoutId="line"
                      className="absolute left-0 bottom-0 h-[3px] rounded-full w-full bg-gradient-to-r from-yellow-400 to-orange-400"
                    />
                  )}

                </a>

              </li>

            ))}

          </ul>

          <motion.a
            whileHover={{
              y: -2,
              scale: 1.05,
            }}
            whileTap={{
              scale: .95,
            }}
            href="#contact"
            className="
            hidden
            lg:flex
            px-7
            py-3
            rounded-full
            bg-gradient-to-r
            from-[#8A5C37]
            to-[#B98C65]
            text-white
            shadow-xl
            "
          >
            Contact Me
          </motion.a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl text-[var(--primary)]"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

      </Container>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: .3,
            }}
            className="
            lg:hidden
            backdrop-blur-2xl
            bg-white/90
            border-t
            "
          >
            <Container>

              <div className="py-8 flex flex-col gap-6">

                {navItems.map((item) => (

                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium hover:text-[var(--primary)]"
                  >
                    {item.name}
                  </a>

                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="
                  w-fit
                  mt-3
                  px-6
                  py-3
                  rounded-full
                  bg-[var(--primary)]
                  text-white
                  "
                >
                  Contact Me
                </a>

              </div>

            </Container>
          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;