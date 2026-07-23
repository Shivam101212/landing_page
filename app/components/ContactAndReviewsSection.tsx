import Image from "next/image";
import styles from "./ContactAndReviewsSection.module.css";

/**
 * ContactAndReviewsSection
 * Left column: contact info, "How do we do this?" copy, and a floating
 * Google reviews card. Right column: a photo on a soft rounded panel.
 *
 * Built entirely with div/p/h-tags — no <ul>/<li> anywhere, since none of
 * this content is actually a list.
 */
export default function ContactAndReviewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.block}>
              <h4 className={styles.contactTitle}>Contact info:</h4>
              <p className={styles.address}>
                <svg
                  className={styles.pinIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M4 21h15M4 21H2M20 21h2M14 4h5a1 1 0 0 1 1 1v16M8 8h2M8 12h2M8 16h2M11 21v-3h2v3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                NH-20, Pillar No: 66, Bihar sharif, Nalanda
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.heading}>How do we do this?</h3>
              <p className={styles.body}>
                We offer free home sample collection across 500+ tests,
                delivering fast and reliable results you can trust.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.reviewsHeading}>Happy Patient Reviews</h3>

              <div className={styles.googleCard}>
                <p className={styles.googleLogo}>
                  <span className={styles.gBlue}>G</span>
                  <span className={styles.gRed}>o</span>
                  <span className={styles.gYellow}>o</span>
                  <span className={styles.gBlue}>g</span>
                  <span className={styles.gGreen}>l</span>
                  <span className={styles.gRed}>e</span>
                </p>

                <div className={styles.googleText}>
                  <p className={styles.ratingRow}>
                    <span className={styles.stars} aria-hidden="true">
                      ★★★★★
                    </span>
                    <span className={styles.ratingCount}>Over 4000+</span>
                  </p>
                  <p className={styles.ratingCaption}>
                    Among the highest rated diagnostic companies in India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/home-sample-collection.png"
              alt="Doctor collecting a home blood sample from an elderly patient"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
