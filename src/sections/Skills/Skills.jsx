import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import skillsData from "../../data/skillsData";

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden"
    >
      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >

          <p className="text-[var(--primary)] text-lg">
            {skillsData.sectionTitle}
          </p>

          <h2
            className="
            text-5xl
            font-bold
            mt-3
            "
          >
            {skillsData.heading}
          </h2>

          <p
            className="
            max-w-2xl
            mx-auto
            mt-6
            leading-8
            text-[var(--text)]
            "
          >
            {skillsData.description}
          </p>

          <div
            className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-20
            "
          >

            {skillsData.skills.map((skill, index) => {

              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                  glass
                  hover-card
                  rounded-[30px]
                  p-8
                  text-center
                  shadow-lg
                  transition-all
                  duration-300
                  cursor-pointer
                  group
                  "
                >
                                  <div
                    className={`
                    text-6xl
                    flex
                    justify-center
                    mb-6
                    ${skill.color}
                    group-hover:scale-110
                    transition-all
                    duration-300
                    `}
                  >
                    <Icon />
                  </div>

                  <h3
                    className="
                    text-2xl
                    font-semibold
                    "
                  >
                    {skill.title}
                  </h3>

                  <p
                    className="
                    mt-3
                    text-sm
                    text-[var(--text)]
                    "
                  >
                    Modern Development
                  </p>

                </motion.div>
              );

            })}

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default Skills;