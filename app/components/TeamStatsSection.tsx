import Image from "next/image";
import styles from "./TeamStatsSection.module.css";

type Stat = {
  icon: string;
  alt: string;
  value: string;
  label: string;
};

const STATS: Stat[] = [
  {
    icon: "/icon-women.png",
    alt: "Woman raising hand icon",
    value: "40%",
    label: "Team is Women",
  },
  {
    icon: "/icon-strength.png",
    alt: "Flexed bicep icon",
    value: "150",
    label: "Team strength",
  },
  {
    icon: "/icon-growth.png",
    alt: "Rocket icon",
    value: "30%",
    label: "MOM growth",
  },
];

export default function TeamStatsSection() {
  return (
    <section className={styles.section}>
      <p className={styles.quote}>
        We combine the latest consumer tech experience with the veracity of
        high-quality healthcare, giving consumers a mind-blowing experience 🤯,
        where they say &apos;its easier than ordering a pizza 🍕&apos;
      </p>

      <div className={styles.card}>
        <h2 className={styles.heading}>
          Diverse. Inclusive. Seamlessly Connected.
        </h2>
        <p className={styles.subtext}>
          Our entire team is driven by a simple belief—build care as if
          it&apos;s for your own family.
        </p>

        <ul className={styles.statsGrid}>
          {STATS.map((stat) => (
            <li key={stat.label} className={styles.statCard}>
              <Image
                src={stat.icon}
                alt={stat.alt}
                width={40}
                height={40}
                className={styles.statIcon}
              />
              <span className={styles.statText}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
