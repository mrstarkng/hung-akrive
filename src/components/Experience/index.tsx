import styles from "./Experience.module.css";

const experiences = [
  {
    when: "Jul 2025 – Present",
    role: "IT Production Services Intern",
    company: "HSBC Vietnam",
    highlights: [
      "Bridged business users and engineers in an ITIL environment to keep core banking SLAs on track.",
      "Built Power BI and Excel dashboards and led RCA readouts to turn incident trends into action.",
    ],
  },
  {
    when: "Jun 2024 – Sep 2024",
    role: "Research Intern",
    company: "DPNM Laboratory, POSTECH",
    highlights: [
      "Explored high-performance crypto back-testing with a React, Node.js, and PostgreSQL stack.",
      "Delivered a whitepaper, live demo, and ACM ICBC 2025 submission under faculty supervision.",
    ],
  },
] as const;

export default function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <h2 id="experience-title" className={styles.title}>
        Experience
      </h2>

      <ul className={styles.list}>
        {experiences.map((experience) => (
          <li key={`${experience.company}-${experience.when}`} className={styles.item}>
            <div className={styles.roleRow}>
              <span className={styles.when}>{experience.when}</span>
              <div className={styles.roleBlock}>
                <span className={styles.role}>{experience.role}</span>
                <span className={styles.company}>{experience.company}</span>
              </div>
            </div>

            <ul className={styles.points}>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
