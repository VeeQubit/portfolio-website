import { motion } from "framer-motion";
import Container from "./Container";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer
      className="
      py-16
      relative
      overflow-hidden
      mt-20
      "
    >

      <Container>

        <motion.div

          initial={{opacity:0}}

          whileInView={{opacity:1}}

          transition={{duration:.8}}

          viewport={{once:true}}

          className="
          glass
          rounded-[40px]
          p-12
          "

        >

          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT */}

            <div>

              <h2
                className="
                text-4xl
                font-bold
                text-[var(--primary)]
                "
              >

                Varnaja

              </h2>

              <p
                className="
                mt-5
                leading-8
                text-[var(--text)]
                "
              >

                Final Year Computer Engineering Undergraduate
                passionate about Software Engineering,
                Artificial Intelligence,
                Cyber Security
                and Full Stack Development.

              </p>

            </div>

            {/* CENTER */}

            <div>

              <h3 className="text-2xl font-semibold">

                Quick Links

              </h3>

              <div className="flex flex-col gap-4 mt-6">

                <a href="#home">Home</a>

                <a href="#about">About</a>

                <a href="#skills">Skills</a>

                <a href="#projects">Projects</a>

                <a href="#contact">Contact</a>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <h3 className="text-2xl font-semibold">

                Connect

              </h3>

              <div className="flex gap-5 mt-6 text-2xl">

                <a href="#">

                  <FaGithub/>

                </a>

                <a href="#">

                  <FaLinkedin/>

                </a>

                <a href="#">

                  <FaEnvelope/>

                </a>

              </div>

            </div>

          </div>

          <div
            className="
            mt-12
            pt-8
            border-t
            border-[var(--primary)]/20
            flex
            flex-col
            lg:flex-row
            justify-between
            items-center
            gap-4
            "
          >

            <p
              className="
              text-[var(--text)]
              "
            >

              © {year} Varnaja Uthayaraj.
              All Rights Reserved.

            </p>

            <motion.a

              whileHover={{

                y:-4

              }}

              href="#home"

              className="
              glass
              rounded-full
              w-14
              h-14
              flex
              items-center
              justify-center
              "

            >

              <FaArrowUp/>

            </motion.a>

          </div>

        </motion.div>

      </Container>

    </footer>

  );

}

export default Footer;