import Image from "next/image";
import BackgroundImage from "../../../public/test3.webp";
import styles from "./WelcomeHeader.module.css";

const WelcomeHeader = () => {
  return (
    <section className={styles.hero}>
      {/* Banner theo tỉ lệ (decorative) */}
      <div className={styles.bgWrap} aria-hidden="true">
        <Image
          src={BackgroundImage}
          alt=""
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className={styles.bgImage}
        />
      </div>

      {/* Nội dung chào (text thuần) — canh mép đúng với banner */}
      <header className={styles.welcomeContainer}>
        <div className={styles.welcomeInner}>
       <h1>Hi, I’m <strong>Hung Nguyen</strong>.</h1>
<p>
  I’m an <strong>IT Production Intern</strong> at  {" "}
  <a
    href="https://www.hsbc.com.vn/en-vn/"
    target="_blank"
    rel="noopener noreferrer"
  > 
  
     HSBC Vietnam
  </a>,
  where I help maintain the stability of financial systems.
</p>
<p>
  I’ve always had an urge to understand things by building them—a philosophy summed up by the quote: <em>"What I cannot create, I do not understand."</em>
</p>
<p>
  This drive leads me to explore emerging technologies like <strong>Blockchain, Distributed System</strong> and <strong>NLP/ML</strong>. I don't just want to know how they work; I want to understand how to make them more reliable and secure. This portfolio is a record of that journey of learning and building.
</p>

        </div>
      </header>
    </section>
  );
};

export default WelcomeHeader;
