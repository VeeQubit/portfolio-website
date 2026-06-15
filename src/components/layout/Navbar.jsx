import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Container from "./Container";

const links = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Projects", id: "projects" },
  { title: "Experience", id: "experience" },
  { title: "Education", id: "education" },
  { title: "Contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);

      links.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop - 140;
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scroll
          ? "backdrop-blur-xl bg-white/70 shadow-xl border-b border-white/40"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center h-20">

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#home"
            className="text-3xl font-bold tracking-wide"
          >
            <span className="text-[var(--primary)]">
              Varnaja
            </span>
            <span className="text-[var(--accent)]">.</span>
          </motion.a>

          <ul className="hidden lg:flex gap-10">

            {links.map((item) => (

              <li key={item.id}>

                <a
                  href={`#${item.id}`}
                  className={`relative pb-2 transition-all duration-300

                  ${
                    active === item.id
                      ? "text-[var(--primary)]"
                      : "text-[var(--heading)]"
                  }

                  hover:text-[var(--primary)]
                  `}
                >
                  {item.title}

                  {active === item.id && (
                    <motion.div
                      layoutId="line"
                      className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-[var(--accent)]"
                    />
                  )}

                </a>

              </li>

            ))}

          </ul>

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            href="#contact"
            className="
            hidden
            lg:flex
            px-6
            py-3
            rounded-full
            bg-[var(--primary)]
            text-white
            shadow-lg
            "
          >
            Hire Me
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
              duration: 0.3,
            }}
            className="
            lg:hidden
            backdrop-blur-xl
            bg-white/90
            border-t
            "
          >
            <Container>

              <div className="py-8 flex flex-col gap-6">

                {links.map((item) => (

                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="text-lg text-[var(--heading)] hover:text-[var(--primary)]"
                  >
                    {item.title}
                  </a>

                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="
                  mt-3
                  w-fit
                  rounded-full
                  bg-[var(--primary)]
                  text-white
                  px-6
                  py-3
                  "
                >
                  Hire Me
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