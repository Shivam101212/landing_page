import Image from "next/image";
import styles from "./CareerPathsSection.module.css";
import DecorativeLines from "./DecorativeLines";

type PathCard = {
  title: string;
  image: string;
  alt: string;
};

const CAREER_PATHS: PathCard[] = [
  {
    title: "Clinical & Diagnostic",
    image: "/customer-support.png",
    alt: "Lab technician working with diagnostic samples",
  },
  {
    title: "Corporate Career",
    image: "/customer-support.png",
    alt: "Corporate team collaborating in a meeting",
  },
  {
    title: "Internship",
    image: "/customer-support.png",
    alt: "Group of interns smiling together",
  },
  {
    title: "Customer Support",
    image: "/customer-support.png",
    alt: "Customer support representative with a headset",
  },
];

export default function CareerPathsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <DecorativeLines />

        <div className={styles.copy}>
          <h2 className={styles.heading}>
            <strong>MediBridge Diagnostic</strong> is
            <br />
            Driving the next wave of Diagnostic innovation in India.
          </h2>
          <p className={styles.subtext}>
            We offer tailored career paths for early professionals, students,
            and experienced hires across multiple business areas.
          </p>
        </div>

        <div className={styles.peopleWrap}>
          <Image
            src="./team-group.svg"
            alt="MediBridge Diagnostic team members"
            width={760}
            height={420}
            className={styles.peopleImg}
            priority
          />
        </div>
      </div>

      <div className={styles.pathsCard}>
        <h3 className={styles.pathsHeading}>
          Which career path at <strong>MediBridge Diagnostic</strong> is right
          for you?
        </h3>

        <ul className={styles.pathsGrid}>
          {CAREER_PATHS.map((path) => (
            <li key={path.title} className={styles.pathCard}>
              <button type="button" className={styles.pathButton}>
                <span className={styles.pathTitle}>{path.title}</span>
                <span className={styles.pathImgWrap}>
                  <Image
                    src={path.image}
                    alt={path.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
                    className={styles.pathImg}
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
