import Profile from "../assets/heroImage.png";
import Heart from "../assets/heart.png";

/* ---------------------------------------------------------------------- */
/* AvatarMark — abstract monogram blob, replaces a custom illustration      */
/* ---------------------------------------------------------------------- */

export default function AvatarMark() {
  return (
    <div className="relative h-75">
      <div className="absolute max-md:-top-6 md:bottom-0 left-1/2 -translate-x-1/2 mx-auto w-xl h-90 md:h-100">
        <img
          src={Profile}
          alt="Profile"
          className="drop-shadow-2xl h-full w-full max-md:h-80 drop-shadow-[#4BB8FA]/50 "
          style={{
            objectFit: "contain", // Change to "cover" if you don't want empty spaces around the image
            objectPosition: "center",
            display: "block",
          }}
        />

        <div
          className="bkc-float-1"
          style={{
            position: "absolute",
            top: -55,
            right: 25,
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
