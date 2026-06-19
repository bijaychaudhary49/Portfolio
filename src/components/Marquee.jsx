import { motion } from "framer-motion";

export default function Marquee({ text, className = "" }) {
  // Duplicate text to ensure smooth endless looping
  const repeatedText = new Array(10).fill(text).join("  ✦  ");

  return (
    <div className={`overflow-hidden whitespace-nowrap bg-[#1A1A1A] text-[#F6EFE2] py-4 ${className}`} style={{ borderTop: "2px solid #F6EFE2", borderBottom: "2px solid #F6EFE2" }}>
      <motion.div
        className="inline-block font-display text-xl sm:text-2xl font-medium uppercase tracking-widest"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 80
        }}
      >
        {repeatedText}  ✦  {repeatedText}
      </motion.div>
    </div>
  );
}
