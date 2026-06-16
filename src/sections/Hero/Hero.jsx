import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Container from "../../components/layout/Container";
import heroData from "../../data/heroData";

function Hero() {

  return (

    <section

      id="home"

      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      pt-28
      "

    >

      {/* Background Glow */}

      <div

        className="
        hero-glow
        absolute
        top-[-120px]
        left-[-120px]
        "

      />

      <div

        className="
        hero-glow
        absolute
        bottom-[-120px]
        right-[-120px]
        "

      />

      <Container>

        <div

          className="
          grid
          lg:grid-cols-[1.25fr_.75fr]
          gap-16
          items-center
          "

        >

          {/* LEFT */}

          <motion.div

            initial={{
              opacity: 0,
              x: -40
            }}

            animate={{
              opacity: 1,
              x: 0
            }}

            transition={{
              duration: .8
            }}

          >

            <p

              className="
              section-subtitle
              "

            >

              {heroData.greeting}

            </p>

            <h1

              className="
              elegant-title
              mt-4
              max-w-[640px]
              "

            >

              {heroData.firstName}

              <br />

              {heroData.lastName}

            </h1>

            <div

              className="
              mt-5
              text-2xl
              font-semibold
              text-[var(--secondary)]
              "

            >

              <TypeAnimation

                sequence={[

                  heroData.roles[0],

                  1800,

                  heroData.roles[1],

                  1800,

                  heroData.roles[2],

                  1800,

                  heroData.roles[3],

                  1800,

                ]}

                repeat={Infinity}

                speed={45}

              />

            </div>

            <div

              className="
              gold-divider
              mx-0
              mt-6
              mb-6
              "

            />

            <p

              className="
              elegant-text
              max-w-[570px]
              "

            >

              {heroData.description}

            </p>
            </motion.div>
            {/* RIGHT SIDE */}

            <motion.div

              initial={{
                opacity: 0,
                x: 40
              }}

              animate={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: .8
              }}

              className="
              flex
              flex-col
              items-center
              justify-center
              "

            >

              {/* Profile Image */}

              <div

                className="
                image-frame
                shadow-premium
                "

              >

                <div

                  className="
                  image-hover
                  overflow-hidden
                  rounded-[30px]
                  "

                >

                  <img

                    src={heroData.profileImage}

                    alt={heroData.profileAlt}

                    loading="lazy"

                    className="
                    w-full
                    max-w-[220px]
                    lg:max-w-[250px]
                    object-cover
                    rounded-[24px]
                    "

                  />

                </div>

              </div>

              {/* Buttons Under Photo */}

              <div

                className="
                flex
                flex-col
                gap-4
                mt-8
                w-full
                max-w-[230px]
                "

              >

                <motion.a

                  whileHover={{
                    y: -2,
                    scale: 1.02
                  }}

                  whileTap={{
                    scale: .96
                  }}

                  href={heroData.buttons[0].href}

                  className="btn-primary justify-center"

                >

                  {heroData.buttons[0].text}

                </motion.a>

                <motion.a

                  whileHover={{
                    y: -2,
                    scale: 1.02
                  }}

                  whileTap={{
                    scale: .96
                  }}

                  href={heroData.buttons[1].href}

                  className="btn-outline justify-center"

                >

                  {heroData.buttons[1].text}

                </motion.a>

              </div>

              {/* Statistics */}

              <div

                className="
                grid
                grid-cols-3
                gap-3
                mt-8
                w-full
                max-w-[330px]
                "

              >

                {heroData.stats.map((item) => (

                  <div

                    key={item.label}

                    className="
                    paper-card
                    hover-card
                    text-center
                    py-4
                    px-2
                    "

                  >

                    <h3

                      className="
                      text-xl
                      font-bold
                      text-[var(--primary)]
                      "

                    >

                      {item.value}

                    </h3>

                    <p

                      className="
                      text-[11px]
                      mt-1
                      leading-4
                      "

                    >

                      {item.label}

                    </p>

                  </div>

                ))}

              </div>

            </motion.div>

          

        </div>
        {/* Scroll Indicator */}

        <motion.div

          animate={{
            y: [0, 10, 0]
          }}

          transition={{
            repeat: Infinity,
            duration: 2
          }}

          className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        z-20
        "

        >

          <span

            className="
          text-[11px]
          uppercase
          tracking-[5px]
          text-[var(--secondary)]
          mb-2
          "

          >

            Scroll

          </span>

          <motion.a

            whileHover={{
              scale: 1.1
            }}

            href="#about"

            className="
          w-11
          h-11
          rounded-full
          glass
          flex
          items-center
          justify-center
          text-[var(--primary)]
          text-xl
          shadow-lg
          "

          >

            ↓

          </motion.a>

        </motion.div>

        {/* Decorative Glow */}

        <div

          className="
        absolute
        left-[8%]
        bottom-[8%]
        w-44
        h-44
        rounded-full
        bg-[var(--leaf)]
        opacity-10
        blur-[120px]
        pointer-events-none
        "

        />

        <div

          className="
        absolute
        right-[8%]
        top-[15%]
        w-52
        h-52
        rounded-full
        bg-[var(--gold)]
        opacity-10
        blur-[130px]
        pointer-events-none
        "

        />

        {/* Bottom Divider */}

        <div

          className="
        absolute
        bottom-0
        left-0
        w-full
        flex
        justify-center
        "

        >

          <div

            className="
          botanical-divider
          "

          />

        </div>
      </Container>
      </section>
      );

}

      export default Hero;
