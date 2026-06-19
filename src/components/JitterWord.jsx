/* ---------------------------------------------------------------------- */
/* JitterWord — sticker-pile chunky title letters                         */
/* ---------------------------------------------------------------------- */

import { motion } from "framer-motion";

export default function JitterWord({ text, jitter, accentIndex, accentColor, style }) {
  return (
    <motion.span
      style={{ display: "inline-flex", ...style }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
      }}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40, rotate: -30 },
            visible: {
              opacity: 1,
              y: jitter[i] ? jitter[i].y : 0,
              rotate: jitter[i] ? jitter[i].r : 0
            }
          }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          style={{
            display: "inline-block",
            marginRight: i === text.length - 1 ? 0 : "-0.05em",
            color: i === accentIndex ? accentColor : "inherit",
          }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
}
