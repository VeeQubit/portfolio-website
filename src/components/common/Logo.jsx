import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.a
      href="#home"
      whileHover={{ scale: 1.05 }}
      className="
      text-3xl
      font-extrabold
      tracking-wide
      bg-gradient-to-r
      from-pink-400
      via-fuchsia-400
      to-violet-400
      bg-clip-text
      text-transparent
      "
    >
      ✿ Varnaja
    </motion.a>
  );
}

export default Logo;