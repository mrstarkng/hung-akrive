import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <h2 id="experience-title" className={styles.title}>
        Experience
      </h2>

      <ul className={styles.list}>
        <li>
          <div className={styles.roleRow}>
            <span className={styles.when}>Jul 2025 – Present</span>
            <span className={styles.where}>
              <span className={styles.highlight}>
                IT Production Services Intern
              </span>{" "}
              – HSBC Vietnam
            </span>
          </div>
          <ul className={styles.bullets}>
            <li>
              Analyzed and resolved critical business process disruptions within an
              ITIL-based environment, bridging the gap between business users and
              technical teams to ensure adherence to SLAs and maintain data
              integrity for core banking applications.
            </li>
            <li>
              Designed and delivered a Business Intelligence dashboard using Power
              BI and Excel to analyze incident trends, transforming operational data
              into actionable insights that supported data-driven risk management
              during weekly service review meetings.
            </li>
            <li>
              Presented Root Cause Analysis (RCA) findings for major incidents to
              stakeholders, providing strategic recommendations to enhance system
              stability and support regulatory compliance objectives.
            </li>
          </ul>
        </li>

        <li>
          <div className={styles.roleRow}>
            <span className={styles.when}>Jun 2024 – Sep 2024</span>
            <span className={styles.where}>
              <span className={styles.highlight}>Research Intern</span>{" "}
              – DPNM Laboratory, POSTECH
            </span>
          </div>
          <ul className={styles.bullets}>
            <li>
              Led study on high-performance crypto back-testing platform built
              with React, Node.js, and PostgreSQL.
            </li>
            <li>
              Delivered 20-page whitepaper and live demo to faculty and
              co-authored ACM ICBC 2025 submission (under review).
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
