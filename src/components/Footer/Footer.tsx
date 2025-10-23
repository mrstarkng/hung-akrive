import globalStyles from "@/styles/Main.module.css";
import styles from "./Footer.module.css";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <div className={globalStyles.container}>
      <footer className={styles.footer}>
        <p>© {new Date().getUTCFullYear()} by Andrew Nguyen. All rights reserved.</p>

        <div className={globalStyles.hideDesktop}>
          <ul className={styles.mobileSocialLinks} aria-label="Social media links">
            <li>
              <a
                href="https://www.linkedin.com/in/little-dinosaur/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="bold" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nmlhng__/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramLogo size={20} weight="bold" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/NguynLHng15"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <TwitterLogo size={20} weight="bold" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mrstarkng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubLogo size={20} weight="bold" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
