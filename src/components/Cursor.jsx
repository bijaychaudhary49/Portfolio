import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heart from "../assets/heart.png";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-6); // Keep last 6 positions
      });
    };

    const handleMouseOver = (e) => {
      const isClickable = ['A', 'BUTTON'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button');
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Trail */}
      {trail.map((pt, i) => {
        const size = 16 - (trail.length - i) * 2; // Shrink as it gets older
        const opacity = 0.5 - (trail.length - i) * 0.08;
        return (
          <motion.div
            key={pt.id}
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
            initial={{ x: pt.x - size / 2, y: pt.y - size / 2, width: size, height: size, opacity }}
            animate={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Heart} alt="trail" className="w-full h-full object-contain" />
          </motion.div>
        );
      })}

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] hidden md:flex items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering ? 24 : 16),
          width: isHovering ? 32 : 24,
          height: isHovering ? 32 : 24,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <motion.img
          src={Heart}
          alt="cursor"
          className="w-full h-full object-contain"
          animate={{
            scale: isHovering ? 1.1 : 1,
            rotate: isHovering ? 15 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
    </>
  );
}
