import { useMemo, useState } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";

import layout from "@/styles/Main.module.css";
import styles from "@/styles/Projects.module.css";
import BlogPosts from "@/components/BlogPosts";
import { BlogPost, getPosts } from "@/utils/helpers";

const SITE_TITLE = "Your Name — Projects";
const SITE_DESC = "A curated list of highlighted projects with category filters.";
const CANONICAL = "https://your-domain.com/projects";

const PROJECT_CATEGORY_SLUGS = ["project", "projects"];

const normalize = (value: string) => value.toLowerCase();

const sortAlpha = (a: string, b: string) => a.localeCompare(b, undefined, { sensitivity: "base" });

type Props = {
  projects: BlogPost[];
  categories: string[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const allPosts = getPosts();

  const projects = allPosts
    .filter((post) =>
      post.categories.some((category) => PROJECT_CATEGORY_SLUGS.includes(normalize(category))),
    )
    .sort((a, b) => {
      const ad = Number(new Date(a.data?.publishedAt || 0));
      const bd = Number(new Date(b.data?.publishedAt || 0));
      return bd - ad;
    });

  const categories = Array.from(
    new Set(projects.flatMap((post) => post.categories)),
  ).sort(sortAlpha);

  return {
    props: {
      projects,
      categories,
    },
  };
};

const ProjectsPage = ({ projects, categories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const filterOptions = useMemo(() => ["All", ...categories], [categories]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;

    const target = normalize(selectedCategory);
    return projects.filter((post) =>
      post.categories.some((category) => normalize(category) === target),
    );
  }, [projects, selectedCategory]);

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESC} />
        <meta property="og:url" content={CANONICAL} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={layout.container}>
        <header className={styles.header}>
          <h1 className={layout.mainTitle}>Projects</h1>
          <nav aria-label="Secondary">
            <Link href="/blog/categories">Browse all categories →</Link>
          </nav>
        </header>

        <p className={styles.meta}>
          Explore highlighted projects sourced from MDX content. Use the category filters below to
          focus on the work that interests you the most.
        </p>

        <div className={styles.filters} role="toolbar" aria-label="Filter projects by category">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={clsx(styles.filterButton, {
                [styles.activeFilter]: selectedCategory === option,
              })}
              aria-pressed={selectedCategory === option}
              onClick={() => setSelectedCategory(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <BlogPosts posts={filteredProjects} />
        ) : (
          <p className={styles.emptyState}>No projects found for this category yet.</p>
        )}
      </main>
    </>
  );
};

export default ProjectsPage;
