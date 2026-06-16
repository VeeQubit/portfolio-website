import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import Container from "./Container";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

function Navbar() {

  const [open, setOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  const [active, setActive] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      setScroll(window.scrollY > 20);

      navItems.forEach((item) => {

        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop - 120;

        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {

          setActive(item.id);

        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <motion.nav

      initial={{ y: -100 }}

      animate={{ y: 0 }}

      transition={{ duration: .7 }}

      className={`

      fixed

      top-5

      left-1/2

      -translate-x-1/2

      w-[95%]

      max-w-[1400px]

      z-50

      rounded-full

      duration-500

      ${
        scroll
          ? "glass shadow-2xl border border-white/40"
          : "bg-white/40 backdrop-blur-xl border border-white/20"
      }

      `}

    >

      <div className="corner-top"></div>

      <div className="corner-bottom"></div>

      <Container>

        <div

          className="

          h-[78px]

          px-5

          flex

          items-center

          justify-between

          "

        >

          <motion.a

            href="#home"

            whileHover={{
              scale: 1.03,
            }}

            className="flex flex-col"

          >

            <span

              className="

              text-[30px]

              font-bold

              tracking-tight

              text-[var(--primary)]

              "

            >

              Varnaja

            </span>

            <span

              className="

              text-[10px]

              uppercase

              tracking-[5px]

              text-[var(--secondary)]

              "

            >

              Software Engineer

            </span>

          </motion.a>

          {/* Desktop Menu */}

          <ul

            className="

            hidden

            lg:flex

            items-center

            gap-8

            "

          >

            {navItems.map((item) => (

              <li key={item.id}>

                <a

                  href={`#${item.id}`}

                  className={`

                  link-premium

                  relative

                  pb-2

                  duration-300

                  font-medium

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

                      layoutId="nav"

                      className="

                      absolute

                      left-0

                      bottom-0

                      h-[2px]

                      w-full

                      rounded-full

                      bg-gradient-to-r

                      from-[var(--gold)]

                      via-[var(--accent)]

                      to-[var(--gold)]

                      "

                    />

                  )}

                </a>

              </li>

            ))}

          </ul>

          <motion.a

            whileHover={{

              y:-2,

              scale:1.03

            }}

            whileTap={{

              scale:.95

            }}

            href="#contact"

            className="

            hidden

            lg:flex

            items-center

            px-7

            py-3

            rounded-2xl

            bg-gradient-to-r

            from-[var(--primary)]

            to-[var(--secondary)]

            text-white

            shadow-2xl

            "

          >

            Contact Me

          </motion.a>

          <button

            onClick={() => setOpen(!open)}

            className="

            lg:hidden

            text-3xl

            text-[var(--primary)]

            "

          >

            {open
              ? <HiOutlineX/>
              : <HiOutlineMenuAlt3/>}

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
              duration: .35,
            }}

            className="
            lg:hidden
            glass
            rounded-b-[30px]
            border-t
            border-white/20
            overflow-hidden
            "

          >

            <Container>

              <div

                className="
                py-8
                flex
                flex-col
                gap-6
                "

              >

                {navItems.map((item) => (

                  <motion.a

                    key={item.id}

                    whileHover={{
                      x: 6,
                    }}

                    href={`#${item.id}`}

                    onClick={() => setOpen(false)}

                    className={`
                    text-lg
                    font-medium
                    duration-300

                    ${
                      active === item.id
                        ? "text-[var(--primary)]"
                        : "text-[var(--heading)]"
                    }

                    hover:text-[var(--primary)]
                    `}

                  >

                    {item.name}

                  </motion.a>

                ))}

                <motion.a

                  whileHover={{
                    scale: 1.03,
                  }}

                  whileTap={{
                    scale: .95,
                  }}

                  href="#contact"

                  onClick={() => setOpen(false)}

                  className="
                  mt-4
                  w-fit
                  px-7
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-[var(--primary)]
                  to-[var(--secondary)]
                  text-white
                  shadow-xl
                  "

                >

                  Contact Me

                </motion.a>

              </div>

            </Container>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>

  );

}

export default Navbar;