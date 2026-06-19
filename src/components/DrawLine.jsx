import { motion } from "framer-motion";

export default function DrawLine({ className = "", color = "#1A1A1A" }) {
  return (
    <div className={`w-full flex justify-center py-8 opacity-20 ${className}`}>
      <svg width="100%" height="2" viewBox="0 0 1000 2" preserveAspectRatio="none">
        <motion.line
          x1="0"
          y1="1"
          x2="1000"
          y2="1"
          stroke={color}
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
