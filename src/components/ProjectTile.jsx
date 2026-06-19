/* ---------------------------------------------------------------------- */
/* ProjectTile — bold color block with 3D tilt on hover                     */
/* ---------------------------------------------------------------------- */
import { FaExternalLinkAlt } from "react-icons/fa";
import DATA from "../data/Data"
import Reveal from "./Reveal";
import StaggeredTags from "./StaggeredTags";
import { useRef, useState } from "react";

function ProjectTile({ project, index }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
  );
  const [lift, setLift] = useState(false);

  function handleMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * 10;
    const ry = (px - 0.5) * 12;
    setTransform(
      `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(16px)`,
    );
    setLift(true);
  }

  function handleLeave() {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    );
    setLift(false);
  }

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="rounded-2xl p-6 h-full flex flex-col justify-between min-h-96"
        style={{
          backgroundColor: project.bg,
          color: project.text,
          border: "2.5px solid #1A1A1A",
          transform,
          boxShadow: lift
            ? "14px 18px 0 rgba(26,26,26,0.18)"
            : "6px 6px 0 rgba(26,26,26,0.12)",
          transition:
            "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
          transformStyle: "preserve-3d",
        }}
      >
        <div>
          <div className="flex items-start justify-between gap-3 mb-6">
            <span className="font-display text-4xl font-bold opacity-90">
              {project.n}
            </span>
            <a href={project.link} target="_blank">
              <FaExternalLinkAlt
                className="hover:-translate-y-0.5 hover:translate-x-0.5 hover:scale-110 transition ease-in"
                style={{ opacity: 0.8 }}
              />
            </a>
          </div>
          <div
            className="rounded-xl p-3 mb-6"
            style={{
              backgroundColor: "rgba(0,0,0,0.08)",
              border: `1.5px solid ${project.text}33`,
            }}
          >
            <div className="flex items-center gap-1.5 mb-3">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: project.text,
                  opacity: 0.6,
                }}
              />
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: project.text,
                  opacity: 0.6,
                }}
              />
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: project.text,
                  opacity: 0.6,
                }}
              />
            </div>
            <div
              style={{
                height: 7,
                width: "70%",
                backgroundColor: project.text,
                opacity: 0.25,
                borderRadius: 4,
                marginBottom: 6,
              }}
            />
            <div
              style={{
                height: 7,
                width: "45%",
                backgroundColor: project.text,
                opacity: 0.25,
                borderRadius: 4,
              }}
            />
          </div>
        </div>
        <div>
          <span className="font-display text-xs uppercase tracking-widest opacity-75">
            {project.tag}
          </span>
          <h3 className="font-display text-xl font-bold mt-1 mb-2">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed mb-4 opacity-90">
            {project.desc}
          </p>
          <StaggeredTags className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-display text-xs px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              >
                {s}
              </span>
            ))}
          </StaggeredTags>
        </div>
      </div>
    </Reveal>
  );
}

export default ProjectTile