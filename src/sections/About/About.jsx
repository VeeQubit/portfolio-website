import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import aboutData from "../../data/aboutData";

function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="
          absolute
          left-[-200px]
          top-20
          w-[400px]
          h-[400px]
          rounded-full
          border
          border-yellow-300/20
        "
      />

      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="relative glass rounded-[35px] p-5">

              <img
                src={aboutData.profileImage}
                alt="about"
                className="rounded-[25px] w-full max-w-[380px]"
              />

              <div className="absolute -left-4 -top-4 glass rounded-full px-5 py-2 text-sm">
                {aboutData.topBadge}
              </div>

              <div className="absolute -bottom-4 -right-4 glass rounded-full px-5 py-2 text-sm">
                {aboutData.bottomBadge}
              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-[var(--primary)] text-lg mb-3">
              {aboutData.sectionTitle}
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              {aboutData.heading}
            </h2>

            <p className="mt-8 leading-9 text-lg text-[var(--text)] whitespace-pre-line">
              {aboutData.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              {aboutData.stats.map((item, index) => (

                <div
                  key={index}
                  className="glass hover-card rounded-3xl p-6"
                >
                  <h3 className="text-4xl font-bold text-[var(--primary)]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-[var(--text)]">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

            <div className="flex flex-wrap gap-5 mt-12">

              <motion.a
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href={aboutData.buttons.resume.href}
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
                {aboutData.buttons.resume.text}
              </motion.a>

              <motion.a
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                href={aboutData.buttons.projects.href}
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-[var(--primary)]
                  hover:bg-[var(--primary)]
                  hover:text-white
                  duration-300
                "
              >
                {aboutData.buttons.projects.text}
              </motion.a>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default About;