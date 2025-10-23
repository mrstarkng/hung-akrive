import globalStyles from "@/styles/Main.module.css";
import styles from "@/components/Navigation/Navigation.module.css";
import DawidAbramLogo from "../../../public/logo.svg";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import ThemeToggler from "@/components/Navigation/ThemeToggler";
import { GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo } from "phosphor-react";

const Navigation = () => {
  const { pathname } = useRouter();

  // Active helpers
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isBlogRoot = pathname === "/blog";
  const isBlogNested = pathname.startsWith("/blog/"); // /blog/[slug], /blog/category/*, /blog/categories
  const isBlog = isBlogRoot || isBlogNested;
  const isCategories =
    pathname === "/blog/categories" || pathname.startsWith("/blog/category/");

  return (
    <div className={clsx(globalStyles.container, styles.navigationContainer)}>
      {/* Logo + theme toggle */}
      <div className={styles.logoContainer}>
        <Link href="/" aria-label="Go to Home">
          <DawidAbramLogo className={styles.logo} />
        </Link>
        <ThemeToggler />
      </div>

      {/* Nav */}
      <nav className={styles.navigation} aria-label="Primary">
        {/* Left: site links */}
        <ul>
          <li>
            <Link
              href="/"
              className={clsx(isHome && styles.activeLink)}
              aria-current={isHome ? "page" : undefined}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={clsx(isAbout && styles.activeLink)}
              aria-current={isAbout ? "page" : undefined}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className={clsx(isBlog && styles.activeLink)}
              aria-current={isBlog ? "page" : undefined}
            >
              Blog
            </Link>
          </li>

          {/* (Tùy chọn) Hiện link Categories nếu bạn đã tạo trang */}
          <li>
            <Link
              href="/blog/categories"
              className={clsx(isCategories && styles.activeLink)}
              aria-current={isCategories ? "page" : undefined}
            >
              Categories
            </Link>
          </li>
        </ul>

        {/* Right: social links */}
        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://www.linkedin.com/in/little-dinosaur/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={globalStyles.hideDesktop}>
                <LinkedinLogo size={20} />
              </span>
              <span className={globalStyles.hideMobile}>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/nmlhng__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={globalStyles.hideDesktop}>
                <InstagramLogo size={20} />
              </span>
              <span className={globalStyles.hideMobile}>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/NguynLHng15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={globalStyles.hideDesktop}>
                <TwitterLogo size={20} />
              </span>
              <span className={globalStyles.hideMobile}>X</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mrstarkng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={globalStyles.hideDesktop}>
                <GithubLogo size={20} />
              </span>
              <span className={globalStyles.hideMobile}>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
