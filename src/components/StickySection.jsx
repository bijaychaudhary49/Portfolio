import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickySection({ children, id, className = "", style = {} }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      style={{
        ...style,
        scaleX,
        transformOrigin: "top center",
        willChange: "transform",
      }}
    >
      {children}
    </motion.section>
  );
}
