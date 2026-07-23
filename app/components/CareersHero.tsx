import Image from "next/image";
import styles from "./CareersHero.module.css";

/**
 * CareersHero
 * Top-of-page banner for the Careers listing page.
 * - "Careers" headline on the left (Poppins).
 * - "Making Healthcare Better" badge/logo on the right (SVG).
 * - Soft gradient background with a cream blob hinting at the section below.
 *
 * Make sure Poppins is loaded once, globally (see next/font setup in the
 * README notes below the component), and the SVG lives at
 * /public/images/making-healthcare-better.svg.
 */
export default function CareersHero() {
  return (
    <section className={styles.hero} aria-label="Careers">
      {/* Decorative background blobs - purely visual, hidden from AT */}
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgBlob} aria-hidden="true" />

      <div className={styles.inner}>
        <h1 className={styles.heading}>Careers</h1>

        <div className={styles.badge}>
          <Image
            src="./making-healthcare-better.svg"
            alt="Making Healthcare Better"
            width={446}
            height={211}
            className={styles.badgeImg}
            priority
          />
        </div>
      </div>
    </section>
  );
}
