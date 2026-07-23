import styles from "./DecorativeLines.module.css";

/**
 * Purely decorative background accents: a thin flowing line, a flattened
 * loop that sits behind the group photo, and a couple of tiny outline
 * shapes (triangle / circle) scattered around it — matching the reference
 * design. All strokes, no fills, so they stay light and don't compete
 * with the photo.
 *
 * aria-hidden because it carries no content.
 */
export default function DecorativeLines() {
  return (
    <svg
      className={styles.decor}
      viewBox="0 0 1200 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* long flowing line that runs across the whole hero */}
      <path
        d="M-40 300
           C 120 250, 220 350, 340 320
           C 460 292, 520 230, 620 250
           C 760 276, 840 210, 980 235
           C 1080 252, 1150 210, 1240 230"
        stroke="#7FA85C"
        strokeWidth="1.5"
        opacity="0.55"
      />

      {/* flattened loop that wraps behind the people */}
      <ellipse
        cx="600"
        cy="360"
        rx="330"
        ry="70"
        stroke="#7FA85C"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* small triangle outline, upper-left */}
      <path
        d="M170 210 L182 232 L158 232 Z"
        stroke="#B85C4A"
        strokeWidth="1.4"
        opacity="0.6"
        strokeLinejoin="round"
      />

      {/* small circle outline, mid-left */}
      <circle
        cx="150"
        cy="318"
        r="9"
        stroke="#B85C4A"
        strokeWidth="1.4"
        opacity="0.6"
      />

      {/* tiny solid triangle accent, lower-right */}
      <path d="M1000 355 L1008 370 L992 370 Z" fill="#7FA85C" opacity="0.7" />
    </svg>
  );
}
