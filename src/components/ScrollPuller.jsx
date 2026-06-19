import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";
import Profile from "../assets/heroImage.png";

export default function ScrollPuller() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // When scrolling down, velocity is positive.
  // We want the element to pop up (y: 0) when scrolling down fast, and hide (y: 150) when not scrolling down.
  const y = useTransform(smoothVelocity, [0, 500], [150, 0]);

  return (
    <motion.div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[9000] pointer-events-none"
      style={{ y }}
    >
      <div className="relative w-24 h-24 overflow-hidden rounded-t-full border-t-4 border-l-4 border-r-4 border-[#1A1A1A] bg-[#4BB8FA] shadow-[0_-10px_20px_rgba(0,0,0,0.15)] flex items-end justify-center">
        <img
          src={Profile}
          alt="Pulling"
          className="w-full h-full object-contain mb-[-10px]"
        />
        {/* Little hands grabbing the edge */}
        <div className="absolute top-0 left-2 w-4 h-6 bg-[#E0876B] rounded-full border-2 border-[#1A1A1A] -translate-y-1/2" />
        <div className="absolute top-0 right-2 w-4 h-6 bg-[#E0876B] rounded-full border-2 border-[#1A1A1A] -translate-y-1/2" />
      </div>
    </motion.div>
  );
}
