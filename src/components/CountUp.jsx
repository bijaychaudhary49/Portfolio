import { useEffect, useState } from "react";
import { motion, useSpring, useInView, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CountUp({ to, duration = 1, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      springValue.set(to);
      setHasAnimated(true);
    } else if (!inView && hasAnimated) {
      // Optional: reset when out of view
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [inView, springValue, to, hasAnimated]);

  const displayValue = useTransform(springValue, (current) => Math.floor(current));

  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
