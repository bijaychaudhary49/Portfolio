import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxShapes() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const r1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const r2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circle outline */}
      <motion.div
        style={{
          y: y1,
          x: "10vw",
          top: "20%",
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: "2px solid rgba(26,26,26,0.05)",
          position: "absolute"
        }}
      />
      
      {/* Solid small circle */}
      <motion.div
        style={{
          y: y2,
          x: "85vw",
          top: "40%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(75,184,250,0.1)",
          position: "absolute"
        }}
      />

      {/* Cross */}
      {/* <motion.div
        style={{
          y: y3,
          rotate: r1,
          x: "70vw",
          top: "70%",
          position: "absolute",
          opacity: 0.2
        }}
      >
        <div style={{ width: 30, height: 4, background: "#1A1A1A", position: "absolute", top: 13 }} />
        <div style={{ width: 4, height: 30, background: "#1A1A1A", position: "absolute", left: 13 }} />
      </motion.div> */}

      {/* Square */}
      <motion.div
        style={{
          y: y1,
          rotate: r2,
          x: "15vw",
          top: "80%",
          width: 60,
          height: 60,
          border: "2px solid rgba(224,135,107,0.15)",
          position: "absolute"
        }}
      />
    </div>
  );
}
