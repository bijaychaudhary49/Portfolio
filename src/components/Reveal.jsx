import { motion } from "framer-motion";

function Reveal({ children, className = "", delay = 0, variant = "up" }) {
  const variants = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
      visible: { opacity: 1, filter: "blur(0px)", scale: 1 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const selectedVariant = variants[variant] || variants.up;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration: 0.8,
            delay: delay,
            type: "spring",
            stiffness: 100,
            damping: 20
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;