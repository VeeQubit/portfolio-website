import { motion } from "framer-motion";
import aboutData from "../../data/aboutData";

function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Decorative Circle */}

      <div
        className="
        absolute
        -left-44
        top-0
        w-[400px]
        h-[400px]
        rounded-full
        border
        border-[var(--accent)]
        opacity-10
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="
        w-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        "
      >

        <p
          className="
          uppercase
          tracking-[5px]
          text-[var(--primary)]
          text-sm
          "
        >
          About Me
        </p>

        <h2
          className="
          mt-5
          text-4xl
          md:text-5xl
          font-bold
          leading-tight
          max-w-[700px]
          "
        >
          {aboutData.heading}
        </h2>

        <div
          className="
          w-24
          h-[2px]
          bg-[var(--accent)]
          my-8
          "
        />

        <p
          className="
          max-w-[760px]
          text-lg
          leading-10
          text-[var(--text)]
          "
        >
          {aboutData.description}
        </p>

        <div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
          mt-16
          w-full
          max-w-[900px]
          "
        >

          {aboutData.stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              className="
              glass
              hover-card
              rounded-[22px]
              p-6
              text-center
              "
            >

              <h3
                className="
                text-4xl
                font-bold
                text-[var(--primary)]
                "
              >
                {item.value}
              </h3>

              <p
                className="
                mt-2
                text-[var(--text)]
                "
              >
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default About;