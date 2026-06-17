import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaArrowDown,
} from "react-icons/fa";
import DATA from './data/Data'
import Reveal from "./components/Reveal";
import ProjectTile from "./components/ProjectTile"
import Profile from "./assets/heroImage.png";
import Heart from "./assets/heart.png";
import logo from "./assets/logo.png";

/* ---------------------------------------------------------------------- */
/* Data — pulled directly from the resume                                  */
/* ---------------------------------------------------------------------- */





/* ---------------------------------------------------------------------- */
/* JitterWord — sticker-pile chunky title letters                          */
/* ---------------------------------------------------------------------- */

function JitterWord({ text, jitter, accentIndex, accentColor, style }) {
  return (
    <span style={{ display: "inline-flex", ...style }}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            transform: `rotate(${jitter[i] ? jitter[i].r : 0}deg) translateY(${jitter[i] ? jitter[i].y : 0}px)`,
            marginRight: i === text.length - 1 ? 0 : "-0.05em",
            color: i === accentIndex ? accentColor : "inherit",
          }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

/* ---------------------------------------------------------------------- */
/* AvatarMark — abstract monogram blob, replaces a custom illustration      */
/* ---------------------------------------------------------------------- */

function AvatarMark() {
  return (
    <div className="relative h-75">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto w-xl h-100">
        <img
          src={Profile}
          alt="Profile"
          className="drop-shadow-2xl drop-shadow-[#4BB8FA]/50 "
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // Change to "cover" if you don't want empty spaces around the image
            objectPosition: "center",
            display: "block",
            cursor: `url(${Heart}) 16 16, auto`,
          }}
        />

        <div
          className="bkc-float-1"
          style={{
            position: "absolute",
            top: -50,
            right: 40,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#4BB8FA",
            border: "2.5px solid #1A1A1A",
          }}
        />

        <div
          className="bkc-float-2"
          style={{
            position: "absolute",
            bottom: -8,
            left: 100,
            width: 28,
            height: 28,
            borderRadius: 9,
            background: "#E0876B",
            border: "2.5px solid #1A1A1A",
            transform: "rotate(12deg)",
          }}
        />

        <div
          className="bkc-float-3 font-display"
          style={{
            position: "absolute",
            top: "42%",
            left: 0,
            fontSize: 26,
            fontWeight: 700,
            color: "#1A1A1A",
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* IdBadge — flat lanyard prop with abstract monogram instead of a photo    */
/* ---------------------------------------------------------------------- */

function IdBadge() {
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
      <div
        className="bkc-sway"
        style={{
          width: 220,
          margin: "0 auto",
          background: "#F6EFE2",
          border: "2.5px solid #1A1A1A",
          borderRadius: 16,
          padding: "16px 12px 12px 12px",
          position: "relative",
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
      </div>
    </div>
  );
}



/* ---------------------------------------------------------------------- */
/* Main component                                                           */
/* ---------------------------------------------------------------------- */

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#intro", label: "About" },
    { href: "#info", label: "Info" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className="bkc-portfolio"
      style={{ backgroundColor: "#F6EFE2", color: "#1A1A1A" }}
    >
     

      {/* Nav */}
      <header
        className={`fixed left-0 w-full z-50 transition-all ease-in duration-200 ${scrolled ? "top-5" : "top-0"}`}
      >
        <div
          className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between"
          style={{
            backgroundColor: "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            borderRadius: "20px",
            borderBottom: scrolled
              ? "2px solid #1A1A1A"
              : "2px solid transparent",
            borderTop: scrolled ? "2px solid #1A1A1A" : "2px solid transparent",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          <a
            href="#top"
            className="relative w-12 h-12 font-display text-lg font-bold"
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
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link font-display text-xs uppercase tracking-widest whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${DATA.email}`}
              className="btn-primary font-display text-xs uppercase tracking-widest px-7 py-3 rounded-full whitespace-nowrap"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      {/* Cover / Hero */}
      <section
        id="top"
        className="relative px-6 sm:px-10 pt-32 pb-16 max-w-5xl mx-auto min-h-screen text-center"
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
            className="font-display font-bold leading-[0.8]"
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
            />
          </h1>

          {/* <h1
            className="font-display font-bold leading-[0.8] -mt-6"
            style={{
              fontSize: "clamp(4rem,14vw,8rem)",
              letterSpacing: "-0.08em",
            }}
          >
            <JitterWord
              text="FOLIO"
              jitter={[
                { r: -10, y: -8 }, // F
                { r: 8, y: 18 },   // O
                { r: -4, y: 6 },   // L
                { r: 6, y: -12 },  // I
                { r: -8, y: 12 },  // O
              ]}
            />
          </h1> */}
        </div>

        <AvatarMark />
        <p
          className="font-display text-sm sm:text-2xl z-10 uppercase tracking-widest pb-10 pt-2"
          style={{ color: "#4BB8FA", cursor: `url(${Heart}) 16 16, auto` }}
        >
          {DATA.name}
        </p>
        <p
          className="font-display text-xs uppercase tracking-widest mt-10 mb-8"
          style={{ color: "rgba(26,26,26,0.6)" }}
        >
          {DATA.role}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="btn-primary font-display text-xs uppercase tracking-widest px-6 py-3.5 rounded-full"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-outline font-display text-xs uppercase tracking-widest px-6 py-3.5 rounded-full"
          >
            Say Hello
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 mt-16 scroll-cue">
          <span
            className="font-display text-xs uppercase tracking-widest"
            style={{ color: "rgba(26,26,26,0.5)" }}
          >
            Scroll
          </span>
          <FaArrowDown size={12} style={{ color: "rgba(26,26,26,0.5)" }} />
        </div>
      </section>

      {/* Intro */}
      <section
        id="intro"
        className=" flex justify-center"
        style={{ backgroundColor: "#D9CBA6" }}
      >
        <IdBadge />
        <div className="max-w-3xl py-26 px-6 sm:px-10 text-center">
          <Reveal>
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
                    {big}
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
      </section>

      {/* Experience / Leadership / Contact / Softwares */}
      <section id="info" className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
            <Reveal>
              <div>
                <h3
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-6 pb-3"
                  style={{ borderBottom: "2px solid #1A1A1A" }}
                >
                  Experience
                </h3>
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

            <Reveal delay={0.06}>
              <div>
                <h3
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-6 pb-3"
                  style={{ borderBottom: "2px solid #1A1A1A" }}
                >
                  Leadership
                </h3>
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

            <Reveal delay={0.12}>
              <div>
                <h3
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-6 pb-3"
                  style={{ borderBottom: "2px solid #1A1A1A" }}
                >
                  Contact
                </h3>
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

                <h3
                  className="font-display text-sm font-semibold uppercase tracking-widest mb-5 pb-3"
                  style={{ borderBottom: "2px solid #1A1A1A" }}
                >
                  Softwares
                </h3>
                <div className="flex flex-wrap gap-2.5">
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
                </div>
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
      </section>

      {/* Content header */}
      <section
        className="relative py-12 sm:py-16 overflow-hidden text-center select-none"
        style={{ backgroundColor: "#D9CBA6" }}
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
      </section>

      {/* Projects */}
      <section id="work" className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.projects.map((project, i) => (
              <ProjectTile key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        className="py-20 sm:py-24"
        style={{ backgroundColor: "#D9CBA6" }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-10 text-center">
              Education
            </h2>
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
      </section>

      {/* Contact / Footer */}
      <footer
        id="contact"
        className="pt-16 sm:pt-16"
        style={{ backgroundColor: "#1A1A1A", color: "#F6EFE2" }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <Reveal>
            <p
              className="font-display text-xs uppercase tracking-widest mb-5"
              style={{ color: "#4BB8FA" }}
            >
              Get in touch
            </p>
            <h2 className="font-display text-4xl sm:text-6xl font-bold leading-tight mb-12">
              Let's build something.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
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
              // The browser automatically handles the hover asset swap this way:
              cursor: `url(${Heart}) 16 16, auto`,
            }}
          >
            <span className="pointer-events-none select-none">
              &copy; 2026 Bijay Kumar Chaudhary
            </span>

            <span className="pointer-events-none select-none">
              Built with 🤍
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
