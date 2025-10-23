import styles from "./Education.module.css";

export default function Education() {
  return (
    <section className={styles.section} aria-labelledby="edu-title">
      <h2 id="edu-title" className={styles.title}>Educations</h2>

      <ul className={styles.list}>
        <li>
          <div className={styles.row}>
            <span className={styles.when}>2022 – present</span>
            <span className={styles.where}>
              Faculty of Information Technology,{" "}
              <a
                href="https://hcmus.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.schoolLink}
                aria-label="University of Science (opens in a new tab)"
              >
                University of Science, VNU-HCM
              </a>{" "}
              — High Quality Program
            </span>
          </div>
          <ul className={styles.sublist}>
            <li>
              B.S. in Knowledge Engineering{" "}
              <span className={styles.muted}>(expected 2026)</span>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
