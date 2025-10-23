import Head from "next/head";
import globalStyles from "@/styles/Main.module.css";
import styles from "./AboutPage.module.css";
import Image from "next/image";
import MyImage from "../../../public/test2.webp"; // Renamed for clarity
import Link from "next/link";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

export default function About() {
  return (
    <>
      <Head>
        <title>Andrew Nguyen - About</title>
        <meta name="description" content="Andrew Nguyen - About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={globalStyles.container}>
        <h1 className={globalStyles.mainTitle}>About</h1>
        <section className={styles.aboutMeSection}>
          <header className={styles.imageContainer}>
            <Image
              src={MyImage}
              placeholder="blur"
              alt="Andrew Nguyen"
              className={styles.image}
            />
            <div>
              <p>Hi, I’m Andrew Nguyen! 👋</p>
              <p>
                I am a proactive and analytical Knowledge Engineering student passionate
                about bridging the gap between complex business operations and
                technology. My goal is to leverage technology to drive
                efficiency and build a long-term career in technology consulting.
              </p>
              <p>
                Currently, I am an <strong>IT Production Services Intern at HSBC
                Vietnam</strong>. In this role, I work within an ITIL-based
                environment to analyze and resolve critical business process
                disruptions. I connect business users with technical teams
                to maintain core banking applications and have also designed
                a BI dashboard using Power BI to transform incident data into
                actionable insights for stakeholders.
              </p>
              <p>
                Before HSBC, I was a <strong>Research Intern at DPNM Laboratory, Pohang University of Science and Technology, South Korea</strong>, where I
                led a study on a high-performance crypto back-testing platform
                using React, Node.js, and PostgreSQL.
              </p>
              <p>
                My academic background at VNUHCM University of Science and
                hands-on projects in NLP and data visualization
                have equipped me with a strong foundation in both software
                engineering and data analysis.
              </p>
              <p>
                I am always eager to solve challenging problems. If you&apos;d
                like to know more about my professional background:
              </p>
              <Link
                href="/cv" // Assumes this is your CV file name
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Check out my CV
              </Link>
            </div>
          </header>
        </section>
        <Education />
        <Experience />
      </main>
    </>
  );
}