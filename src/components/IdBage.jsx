import { motion } from "framer-motion";
import { useState } from "react";
import Profile from "../assets/heroImage.png";

export default function IdBadge() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div
      className="hidden xl:block relative"
      style={{
        transform: "rotate(-7deg)",
        filter: "drop-shadow(6px 6px 0px rgba(26,26,26,0.15))", // Smoother shadow over rotated child elements
      }}
    >
      {/* The Lanyard/Strap */}
      <div
        style={{
          width: 16,
          height: 100,
          background: "#4BB8FA",
          margin: "0 auto",
          borderRadius: "4px 4px 0 0",
          border: "2.5px solid #1A1A1A",
          borderBottom: "none",
        }}
      />

      {/* The ID Card Frame */}
      <motion.div
        className="bkc-sway cursor-pointer"
        onClick={() => setClickCount(c => c + 1)}
        animate={{
          rotate: [0, -15, 15, -10, 10, 0],
          y: clickCount > 0 ? [0, -20, 0] : 0
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 10
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 220,
          margin: "0 auto",
          background: "#F6EFE2",
          border: "2.5px solid #1A1A1A",
          borderRadius: 16,
          padding: "16px 12px 12px 12px",
          position: "relative",
          transformOrigin: "top center"
        }}
      >
        {/* The Punch Hole / Clip Slot */}
        <div
          style={{
            width: 24,
            height: 8,
            background: "#1A1A1A", // Dark cut-out look
            borderRadius: 99,
            margin: "-4px auto 16px", // Pulled up slightly closer to the top border
            border: "1.5px solid #1A1A1A",
          }}
        />

        {/* Profile Photo Area */}
        <div
          style={{
            width: "100%",
            height: 200,
            borderRadius: 8,
            background: "linear-gradient(135deg, #4BB8FA, #D9CBA6)",
            border: "2.5px solid #1A1A1A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 4px 0 rgba(255,255,255,0.2)",
          }}
        >
          {/* hello */}
          <img src={Profile} alt="" className="h-50" />
        </div>

        {/* ID Text / Details */}
        <div className="text-center mt-3">
          <p
            className="font-display font-bold uppercase"
            style={{ fontSize: 11, letterSpacing: "0.05em", color: "#1A1A1A" }}
          >
            BIJAY
          </p>
          <p
            className="font-display mt-0.5 opacity-70"
            style={{ fontSize: 9, letterSpacing: "0.08em", color: "#1A1A1A" }}
          >
            FRONTEND DEV
          </p>
        </div>

        {/* Mini Barcode Graphic for Realism */}
        <div
          className="flex justify-center gap-0.5 mt-3 h-3 opacity-40 mixing-blend-multiply"
          aria-hidden="true"
        >
          {[2, 4, 1, 3, 1, 4, 2, 3, 1, 2, 4, 1].map((w, i) => (
            <div
              key={i}
              style={{ width: w, height: "100%", background: "#1A1A1A" }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}