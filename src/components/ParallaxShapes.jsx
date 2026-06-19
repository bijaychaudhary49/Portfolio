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

  const shiftColors = ["rgba(75,184,250,0.15)", "rgba(224,135,107,0.15)", "rgba(75,250,150,0.15)", "rgba(75,184,250,0.15)"];

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circle outline */}
      <motion.div
        animate={{ borderColor: shiftColors }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          y: y1,
          x: "10vw",
          top: "20%",
          width: 120,
          height: 120,
          borderRadius: "50%",
          borderWidth: 2,
          borderStyle: "solid",
          position: "absolute"
        }}
      />
      
      {/* Solid small circle */}
      <motion.div
        animate={{ backgroundColor: shiftColors }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{
          y: y2,
          x: "85vw",
          top: "40%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          position: "absolute"
        }}
      />

   
      {/* Square */}
      <motion.div
        animate={{ borderColor: shiftColors }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
          y: y1,
          rotate: r2,
          x: "15vw",
          top: "80%",
          width: 60,
          height: 60,
          borderWidth: 2,
          borderStyle: "solid",
          position: "absolute"
        }}
      />
    </div>
  );
}
