import React, { useEffect, useRef, useState } from "react";

// Icons
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoHeartFill } from "react-icons/go";

// Data
import DATA from "./data/Data";

// Components
import Reveal from "./components/Reveal";
import AvatarMark from "./components/AvatarMark";
import ProjectTile from "./components/ProjectTile";
import JitterWord from "./components/JitterWord";
import IdBadge from "./components/IdBage";
import Magnetic from "./components/Magnetic";
import Cursor from "./components/Cursor";
import StickySection from "./components/StickySection";
import TextReveal from "./components/TextReveal";
import CountUp from "./components/CountUp";
import StaggeredTags from "./components/StaggeredTags";
import ParallaxShapes from "./components/ParallaxShapes";
import DrawLine from "./components/DrawLine";

import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useTransform,
} from "framer-motion";

// Images
import Profile from "./assets/heroImage.png";
import logo from "./assets/logo.png";

/* ---------------------------------------------------------------------- */
/* Main component                                                           */
/* ---------------------------------------------------------------------- */

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroY = useTransform(scrollY, [0, 1000], [0, -150]);
  const heroScale = useTransform(scrollY, [0, 1000], [1, 0.9]);
  // const heroOpacity = useTransform(scrollY, [0, 1000], [1, 0.2]);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
      setTimeout(() => setShowLoader(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#intro", label: "About", icon: <FaRegUser /> },
    { href: "#info", label: "Info", icon: <RiInformation2Line /> },
    { href: "#work", label: "Work", icon: <MdOutlineWorkOutline /> },
    { href: "#contact", label: "Contact", icon: <RiContactsLine /> },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
      // Use offsetTop to get the true layout position, not the sticky-rendered position
      let target = el;
      let y = 0;
      while (target && target !== document.body) {
        y += target.offsetTop;
        target = target.offsetParent;
      }
      y = Math.max(0, y - 96);
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className="bkc-portfolio overflow-x-clip relative"
      style={{ backgroundColor: "#F6EFE2", color: "#1A1A1A" }}
    >
      {/* Page Loader */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center`}
            style={{ backgroundColor: "#F6EFE2" }}
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48 animate-pulse">
              <img
                src={Profile}
                alt="Loading..."
                className="w-full h-full object-contain drop-shadow-xl drop-shadow-[#4BB8FA]/50"
              />
            </div>
            <p
              className="mt-4 font-display text-xs uppercase tracking-widest animate-pulse"
              style={{ color: "#1A1A1A" }}
            >
              Loading...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Cursor />

      {/* Nav */}
      <header
        className={`fixed left-0 w-full z-[100] max-md:px-2 transition-all ease-in duration-200 ${scrolled ? "top-5" : "top-0"}`}
      >
        <div
          className="max-w-7xl mx-auto px-2 h-16 flex items-center justify-between rounded-full"
          style={{
            backgroundColor: "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",

            borderBottom: scrolled
              ? "2px solid #1A1A1A"
              : "2px solid transparent",
            borderTop: scrolled ? "2px solid #1A1A1A" : "2px solid transparent",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, "top")}
            className="relative w-12 h-12 font-display text-lg font-bold cursor-pointer"
            style={{ color: "#1A1A1A" }}
          >
            <div
              className="overflow-hidden group"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #4BB8FA 0%, #D9CBA6 100%)",
                borderRadius: "46% 54% 62% 38% / 48% 42% 58% 52%",
                border: "3px solid #1A1A1A",
                boxShadow: "10px 10px 0 rgba(26,26,26,0.10)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={logo}
                  alt="logo"
                  className="group-hover:scale-110 transition ease-in-out duration-300"
                />
              </div>
            </div>
          </a>
          <nav className="flex items-center gap-5">
            <div className="hidden md:flex gap-5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => scrollToSection(e, l.href)}
                  className="nav-link font-display text-xs uppercase tracking-widest whitespace-nowrap cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <Magnetic>
              <a
                href={`mailto:${DATA.email}`}
                className="btn-primary font-display border-2 border-[#1A1A1A] text-xs uppercase tracking-widest px-7 py-3 rounded-full whitespace-nowrap"
              >
                Hire Me
              </a>
            </Magnetic>
          </nav>
        </div>
      </header>

      {/* Mobile view */}
      <nav className="md:hidden fixed bottom-1 w-full left-1/2 -translate-x-1/2 border-b-2 max-w-96 border-t-2 border-t-white/60 flex justify-between z-50 px-4 py-3 bg-[#F6EFE2]/20 backdrop-blur-sm border-[#1A1A1A] rounded-full">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => scrollToSection(e, l.href)}
            className="flex flex-col items-center gap-1 nav-link font-display text-[10px] uppercase font-bold tracking-widest whitespace-nowrap cursor-pointer"
            style={{ transition: "all 0.3s ease" }}
          >
            <p className="text-xl">{l.icon}</p>
            <p> {l.label}</p>
          </a>
        ))}
        <AnimatePresence>
          {scrolled && (
            <motion.a
              href="#top"
              onClick={(e) => scrollToSection(e, "top")}
              className="flex flex-col items-center justify-center nav-link font-display uppercase font-bold tracking-widest whitespace-nowrap cursor-pointer overflow-hidden"
              style={{ color: "#4BB8FA" }}
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{ opacity: 1, width: 40, marginLeft: 8 }}
              exit={{ opacity: 0, width: 0, marginLeft: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="relative flex items-center justify-center"
                style={{ width: 40, height: 40 }}
              >
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="rgba(26,26,26,0.1)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <motion.circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#4BB8FA"
                    strokeWidth="2"
                    fill="none"
                    style={{ pathLength: scaleX }}
                    strokeDasharray="113"
                  />
                </svg>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1A1A1A] text-[#F6EFE2]">
                  <FaArrowUp size={12} />
                </div>
              </div>
            </motion.a>
          )}
        </AnimatePresence>
      </nav>

      {/* Cover / Hero */}
      <section
        id="top"
        className="relative md:fixed md:inset-0 z-0 px-6 sm:px-10 pt-32 pb-16 max-w-5xl mx-auto min-h-screen text-center"
      >
        <motion.div
          style={{
            y: heroY,
            scale: heroScale,
            willChange: "transform, opacity",
          }}
          className="w-full h-full"
        >
          <div className="relative inline-block mb-2">
            <span
              className="font-display absolute -top-2 -right-10 sm:-right-14 px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "#4BB8FA",
                color: "#1A1A1A",
                border: "2px solid #1A1A1A",
                transform: "rotate(10deg)",
              }}
            >
              '49
            </span>
            <h1
              className="font-display font-bold leading-[0.8] max-md:hidden"
              style={{
                fontSize: "clamp(4rem,14vw,8rem)",
                letterSpacing: "0.01em",
              }}
            >
              <JitterWord
                text="PORTFOLIO"
                jitter={[
                  { r: -8, y: 8 }, // P
                  { r: 6, y: 24 }, // O
                  { r: -15, y: -8 }, // R
                  { r: 2, y: -20 }, // T
                  { r: -10, y: -8 }, // F
                  { r: 8, y: 18 }, // O
                  { r: -4, y: 6 }, // L
                  { r: 6, y: -12 }, // I
                  { r: -8, y: 12 }, // O
                ]}
                accentIndex={5}
                accentColor="#4BB8FA"
              />
            </h1>

            <h1
              className="font-display font-bold leading-[0.8] md:hidden"
              style={{
                fontSize: "clamp(6.5rem,15vw,13rem)",
                letterSpacing: "-0.02em",
              }}
            >
              <JitterWord
                text="PORT"
                jitter={[
                  { r: -6, y: 0 },
                  { r: 5, y: -10 },
                  { r: -4, y: 6 },
                  { r: 7, y: -4 },
                ]}
              />
            </h1>
            <h1
              className="font-display font-bold leading-[0.8] md:hidden"
              style={{
                fontSize: "clamp(6.5rem,15vw,13rem)",
                letterSpacing: "-0.02em",
              }}
            >
              <JitterWord
                text="FOLIO"
                jitter={[
                  { r: 5, y: -6 },
                  { r: -7, y: 8 },
                  { r: 3, y: -4 },
                  { r: -5, y: 5 },
                  { r: 6, y: -8 },
                ]}
                accentIndex={1}
                accentColor="#4BB8FA"
              />
            </h1>
          </div>

          <AvatarMark />
          <p
            className="font-display text-sm sm:text-2xl z-10 uppercase tracking-widest  pt-2"
            style={{ color: "#4BB8FA" }}
          >
            {DATA.name}
          </p>
          <p
            className="font-display text-xs uppercase tracking-widest pb-16"
            style={{ color: "rgba(26,26,26,0.6)" }}
          >
            {DATA.role}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href="#work"
                onClick={(e) => scrollToSection(e, "work")}
                className="btn-primary font-display border-2 border-[#1A1A1A] text-xs uppercase tracking-widest px-6 py-3.5 rounded-full cursor-pointer"
              >
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="btn-outline font-display text-xs uppercase tracking-widest px-6 py-3.5 rounded-full cursor-pointer"
              >
                Say Hello
              </a>
            </Magnetic>
          </div>

          <div className="flex items-center justify-center gap-2 pt-7 md:mt-10 scroll-cue">
            <span
              className="font-display text-xs uppercase tracking-widest"
              style={{ color: "rgba(26,26,26,0.5)" }}
            >
              Scroll
            </span>
            <FaArrowDown size={12} style={{ color: "rgba(26,26,26,0.5)" }} />
          </div>
        </motion.div>
      </section>

      <div className="hidden md:block h-screen"></div>

      {/* Intro */}
      <StickySection
        id="intro"
        className=" flex justify-center z-10 scroll-mt-24 relative overflow-hidden"
        style={{
          backgroundColor: "#D9CBA6",
          boxShadow: "0 -10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <ParallaxShapes />
        <IdBadge />
        <div className="max-w-3xl py-26 px-6 sm:px-10 text-center relative z-10">
          <Reveal variant="scale">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-5">
              Hi, I'm <span style={{ color: "#4BB8FA" }}>Bijay</span>
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "rgba(26,26,26,0.78)" }}
            >
              I'm a frontend developer who happens to love design. I build
              interfaces that work because I can't stand it when they don't -
              one foot in Figma, the other in production React code. Over the
              past year I've shipped five-plus client applications, translating
              wireframes into pixel-correct, cross-browser interfaces. Before
              that, I spent two years teaching CS fundamentals to
              lower-secondary students.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                ["1+ Yr", "Professional experience"],
                ["5+", "Client projects shipped"],
                ["2 Yrs", "Teaching CS"],
              ].map(([big, small]) => (
                <div key={small}>
                  <div
                    className="font-display text-3xl sm:text-4xl font-bold"
                    style={{ color: "#1A1A1A" }}
                  >
                    {big.includes("+") ? (
                      <CountUp to={parseInt(big)} suffix="+" duration={0.5} />
                    ) : big.includes("Yrs") ? (
                      <CountUp to={parseInt(big)} suffix=" Yrs" duration={0.5} />
                    ) : (
                      big
                    )}
                  </div>
                  <div
                    className="text-xs mt-1 leading-snug"
                    style={{ color: "rgba(26,26,26,0.6)" }}
                  >
                    {small}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </StickySection>

      {/* Experience / Leadership / Contact / Softwares */}
      <StickySection id="info" className=" relative py-20 sm:py-28 z-20 scroll-mt-24 overflow-hidden" style={{ backgroundColor: "#F6EFE2", boxShadow: "0 -10px 30px rgba(0,0,0,0.05)" }}>
        <ParallaxShapes />
        <div className="max-w-6xl mx-auto px-6 sm:px-10 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
            <Reveal variant="left">
              <div>
                <TextReveal
                  text="Experience"
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-6 pb-3"
                  style={{ borderBottom: "2px solid #1A1A1A" }}
                />
                <div className="space-y-6">
                  {DATA.experience.map((job) => (
                    <div key={job.role}>
                      <p className="font-display text-base font-semibold">
                        {job.role}
                      </p>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "rgba(26,26,26,0.65)" }}
                      >
                        {job.org}
                      </p>
                      <p
                        className="font-display text-xs mt-1"
                        style={{ color: "#4BB8FA" }}
                      >
                        {job.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.1}>
              <div>
                <TextReveal
                  text="Leadership"
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-6 pb-3"
                  style={{ borderBottom: "2px solid #1A1A1A" }}
                />
                <div className="space-y-6">
                  {DATA.leadership.map((job) => (
                    <div key={job.role}>
                      <p className="font-display text-base font-semibold">
                        {job.role}
                      </p>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "rgba(26,26,26,0.65)" }}
                      >
                        {job.org}
                      </p>
                      <p
                        className="font-display text-xs mt-1"
                        style={{ color: "#4BB8FA" }}
                      >
                        {job.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={0.2}>
              <div>
                <TextReveal
                  text="Contact"
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-6 pb-3"
                  style={{ borderBottom: "2px solid #1A1A1A" }}
                />
                <div className="space-y-3 mb-10">
                  {[
                    {
                      Icon: FaEnvelope,
                      label: DATA.email,
                      href: `mailto:${DATA.email}`,
                    },

                    { Icon: FaGithub, label: "GitHub", href: DATA.github },
                    {
                      Icon: FaLinkedin,
                      label: "LinkedIn",
                      href: DATA.linkedin,
                    },
                  ].map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 text-sm group"
                    >
                      <span
                        className="flex items-center justify-center rounded-full"
                        style={{
                          width: 28,
                          height: 28,
                          backgroundColor: "#1A1A1A",
                          color: "#F6EFE2",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={13} />
                      </span>
                      <span style={{ color: "rgba(26,26,26,0.78)" }}>
                        {label}
                      </span>
                    </a>
                  ))}
                </div>

                <TextReveal
                  text="Softwares"
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-5 pb-3"
                  style={{ borderBottom: "2px solid #1A1A1A" }}
                />
                <StaggeredTags className="flex flex-wrap gap-2.5">
                  {DATA.software.map(({ Icon, label }) => (
                    <span
                      key={label}
                      title={label}
                      className="soft-chip flex items-center justify-center rounded-lg"
                      style={{
                        width: 36,
                        height: 36,
                        backgroundColor: "#D9CBA6",
                        color: "#1A1A1A",
                      }}
                    >
                      <Icon size={16} />
                    </span>
                  ))}
                </StaggeredTags>
                <p
                  className="font-display text-xs mt-3"
                  style={{ color: "rgba(26,26,26,0.45)" }}
                >
                  + Adobe Photoshop &amp; Illustrator
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </StickySection>

      {/* Content header */}
      <StickySection
        className=" relative py-12 sm:py-16 overflow-hidden text-center select-none z-30 scroll-mt-24"
        style={{
          backgroundColor: "#D9CBA6",
          boxShadow: "0 -10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {["01", "02", "03", "04", "05"].map((num, i) => (
          <span
            key={num}
            className="font-display absolute font-bold"
            style={{
              top: i % 2 === 0 ? "8%" : "52%",
              left: `${8 + i * 18}%`,
              fontSize: "clamp(1.8rem,5.5vw,3.5rem)",
              color: "rgba(246,239,226,0.7)",
              zIndex: 0,
            }}
          >
            {num}
          </span>
        ))}
        <h2
          className="font-display relative font-bold"
          style={{
            fontSize: "clamp(2.6rem,12vw,7rem)",
            color: "transparent",
            WebkitTextStroke: "2px #1A1A1A",
            letterSpacing: "-0.02em",
            zIndex: 1,
          }}
        >
          CONTENT
        </h2>
      </StickySection>

      {/* Projects */}
      <StickySection
        id="work"
        className="pt-20 sm:py-24 z-40 scroll-mt-24"
        style={{
          backgroundColor: "#F6EFE2",
          boxShadow: "0 -10px 30px rgba(0,0,0,0.05)",
        }}
      >
        {/* <DrawLine className="absolute top-0 opacity-10" /> */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.projects.map((project, i) => (
              <ProjectTile key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </StickySection>

      {/* Education */}
      <StickySection
        className=" pt-20 sm:pt-24 z-50 scroll-mt-24 overflow-hidden relative"
        style={{
          backgroundColor: "#D9CBA6",
          boxShadow: "0 -10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <ParallaxShapes />
        {/* <DrawLine className="absolute top-0 opacity-10" /> */}
        <div className="max-w-4xl pb-20 md:pb-24 mx-auto px-6 sm:px-10 relative">
          <Reveal variant="scale">
            <TextReveal
              text="Education"
              className="font-display text-3xl sm:text-4xl font-semibold mb-10 justify-center"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DATA.education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.06}>
                <div
                  className="rounded-2xl p-5 h-full"
                  style={{
                    backgroundColor: "#F6EFE2",
                    border: "2px solid #1A1A1A",
                  }}
                >
                  <p className="font-display text-base font-semibold mb-1">
                    {ed.degree}
                  </p>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "rgba(26,26,26,0.65)" }}
                  >
                    {ed.org}
                  </p>
                  <p
                    className="font-display text-xs"
                    style={{ color: "#4BB8FA" }}
                  >
                    {ed.period}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Contact / Footer */}
        <footer
          id="contact"
          className=" pt-16 sm:pt-16 z-70 scroll-mt-24 relative"
          style={{
            backgroundColor: "#1A1A1A",
            color: "#F6EFE2",
            boxShadow: "0 -10px 30px rgba(0,0,0,0.1)",
          }}
        >
          {/* <DrawLine color="#F6EFE2" className="absolute top-0 opacity-10" /> */}
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center relative z-10">
            <Reveal variant="up">
              <p
                className="font-display text-xs uppercase tracking-widest mb-5"
                style={{ color: "#4BB8FA" }}
              >
                Get in touch
              </p>
              <TextReveal
                text="Let's build something."
                className="font-display text-4xl sm:text-6xl font-bold leading-tight mb-12 justify-center"
              />
            </Reveal>
            <Reveal variant="blur" delay={0.1}>
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                  {
                    Icon: FaEnvelope,
                    label: DATA.email,
                    href: `mailto:${DATA.email}`,
                  },
                  {
                    Icon: FaGithub,
                    label: "GitHub",
                    href: DATA.github,
                  },
                  {
                    Icon: FaLinkedin,
                    label: "LinkedIn",
                    href: DATA.linkedin,
                  },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                  flex items-center gap-2
                  px-5 py-3
                  rounded-full
                  text-sm
                  border-2 border-[rgba(246,239,226,0.3)]
                  hover:border-[rgba(246,239,226,0.8)]                  
                  hover:-translate-y-0.5
                  transition-all duration-300 ease-in-out
                "
                    style={{ color: "#F6EFE2" }}
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
            <div
              className="flex flex-col sm:flex-row justify-between gap-2 pt-8 pb-16 font-display text-xs"
              style={{
                borderTop: "1px solid rgba(246,239,226,0.15)",
                color: "rgba(246,239,226)",
              }}
            >
              <span className="pointer-events-none select-none">
                &copy; 2026 Bijay Kumar Chaudhary
              </span>

              <span className="pointer-events-none select-none flex items-center gap-2">
                Built with  <GoHeartFill className="text-[18px]" />
              </span>
            </div>
          </div>
        </footer>
      </StickySection>
      {/* Floating Scroll To Top + Progress */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-[1000] hidden md:block"
          >
            <Magnetic>
              <div
                onClick={(e) => scrollToSection(e, "top")}
                className="flex items-center justify-center cursor-pointer group"
                style={{ width: 50, height: 50 }}
              >
                {/* SVG Ring */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="25"
                    cy="25"
                    r="22"
                    stroke="rgba(26,26,26,0.1)"
                    strokeWidth="3"
                    fill="none"
                  />
                  <motion.circle
                    cx="25"
                    cy="25"
                    r="22"
                    stroke="#4BB8FA"
                    strokeWidth="3"
                    fill="none"
                    style={{ pathLength: scaleX }}
                    strokeDasharray="138"
                  />
                </svg>
                {/* Inner Button */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:-translate-y-1"
                  style={{ backgroundColor: "#1A1A1A", color: "#F6EFE2" }}
                >
                  <FaArrowDown size={14} className="transform rotate-180" />
                </div>
              </div>
            </Magnetic>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
