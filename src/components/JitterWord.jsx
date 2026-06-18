/* ---------------------------------------------------------------------- */
/* JitterWord — sticker-pile chunky title letters                          */
/* ---------------------------------------------------------------------- */

export default function JitterWord({ text, jitter, accentIndex, accentColor, style }) {
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
