import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Container from "../../components/layout/Container";
import heroData from "../../data/heroData";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background Blur */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="
        absolute
        -left-32
        -top-32
        w-[520px]
        h-[520px]
        rounded-full
        bg-yellow-200/20
        blur-[150px]
        "
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        className="
        absolute
        -right-32
        -bottom-32
        w-[500px]
        h-[500px]
        rounded-full
        bg-orange-200/20
        blur-[150px]
        "
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative z-10"
          >

            <p
              className="
              text-xl
              font-medium
              text-[var(--primary)]
              mb-4
              "
            >
              {heroData.greeting}
            </p>

            <h1
              className="
              text-5xl
              sm:text-6xl
              lg:text-7xl
              xl:text-8xl
              font-bold
              leading-tight
              "
            >
              {heroData.firstName}

              <br />

              {heroData.lastName}
            </h1>

            <div
              className="
              mt-6
              text-xl
              sm:text-2xl
              font-medium
              text-[var(--text)]
              "
            >
              <TypeAnimation
                sequence={[
                  heroData.roles[0],
                  2000,

                  heroData.roles[1],
                  2000,

                  heroData.roles[2],
                  2000,

                  heroData.roles[3],
                  2000,
                ]}
                repeat={Infinity}
                speed={40}
              />
            </div>

            <p
              className="
              mt-8
              text-lg
              leading-9
              max-w-2xl
              text-[var(--text)]
              "
            >
              {heroData.description}
            </p>

            <div
              className="
              flex
              flex-wrap
              gap-5
              mt-10
              "
            >

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href={heroData.buttons[0].href}
                className="
                px-8
                py-4
                rounded-full
                bg-[var(--primary)]
                text-white
                shadow-xl
                font-medium
                "
              >
                {heroData.buttons[0].text}
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href={heroData.buttons[1].href}
                className="
                px-8
                py-4
                rounded-full
                border
                border-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-white
                duration-300
                font-medium
                "
              >
                {heroData.buttons[1].text}
              </motion.a>

            </div>

            {/* Stats */}

            <div
              className="
              grid
              grid-cols-3
              gap-5
              mt-14
              max-w-xl
              "
            >
              {heroData.stats.map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-3xl p-5 text-center"
                >
                  <h2 className="text-3xl font-bold text-[var(--primary)]">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm text-[var(--text)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>
                    {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -18, 0],
            }}
            transition={{
              duration: 0.8,
              y: {
                repeat: Infinity,
                duration: 5,
              },
            }}
            className="
            relative
            z-10
            flex
            justify-center
            "
          >
            <div
              className="
              relative
              glass
              rounded-[40px]
              p-5
              shadow-2xl
              hover:scale-[1.02]
              transition-all
              duration-500
              "
            >

              <img
                src={heroData.profileImage}
                alt={heroData.profileAlt}
                loading="lazy"
                className="
                w-full
                max-w-[430px]
                rounded-[30px]
                object-cover
                shadow-2xl
                hover:scale-[1.02]
                transition-all
                duration-500
                "
              />

              <div
                className="
                absolute
                top-[-20px]
                right-[-20px]
                w-16
                h-16
                rounded-full
                bg-yellow-300/50
                blur-xl
                "
              />

              <div
                className="
                absolute
                bottom-[-20px]
                left-[-20px]
                w-14
                h-14
                rounded-full
                bg-orange-300/50
                blur-xl
                "
              />

              <div
                className="
                absolute
                top-10
                left-[-25px]
                glass
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                "
              >
                {heroData.badges[0]}
              </div>

              <div
                className="
                absolute
                bottom-10
                right-[-25px]
                glass
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                "
              >
                {heroData.badges[1]}
              </div>

            </div>

          </motion.div>

        </div>

      </Container>

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        "
      >

        <span
          className="
          text-xs
          tracking-[3px]
          uppercase
          text-[var(--text)]
          mb-2
          "
        >
          Scroll
        </span>

        <a
          href="#about"
          className="
          text-4xl
          text-[var(--primary)]
          "
        >
          ↓
        </a>

      </motion.div>

    </section>
  );
}

export default Hero;