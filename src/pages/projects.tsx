import { useMemo, useState } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import layout from "@/styles/Main.module.css";
import styles from "@/styles/Projects.module.css";
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

const formatPublishedDate = (input?: string) => {
  if (!input) return null;

  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) return null;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsed);
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
            <Link href="/blog/categories">Categories →</Link>
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
          <div className={styles.projectGrid}>
            {filteredProjects.map((project) => {
              const href = `/blog/${project.slug}`;
              const primaryCategory = project.categories[0];
              const publishedLabel =
                formatPublishedDate(project.data.publishedAt || project.data.date) ??
                project.data.publishedAt ??
                project.data.date ??
                null;
              const publishedDateTime = (() => {
                const raw = project.data.publishedAt || project.data.date;
                const parsed = raw ? new Date(raw) : null;
                if (!parsed || Number.isNaN(parsed.getTime())) return undefined;
                return parsed.toISOString();
              })();

              return (
                <Link href={href} className={styles.projectCard} key={project.slug}>
                  <div className={styles.projectImageWrapper}>
                    {project.data.imageUrl ? (
                      <Image
                        src={project.data.imageUrl}
                        alt={project.data.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.projectImage}
                      />
                    ) : (
                      <div className={styles.projectImageFallback} aria-hidden="true" />
                    )}
                  </div>

                  <div className={styles.projectCardBody}>
                    {primaryCategory ? (
                      <p className={styles.projectCategory}>{primaryCategory}</p>
                    ) : null}
                    <h2 className={styles.projectTitle}>{project.data.title}</h2>
                    {publishedLabel ? (
                      <div className={styles.projectMeta}>
                        <time dateTime={publishedDateTime}>{publishedLabel}</time>
                      </div>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className={styles.emptyState}>No projects found for this category yet.</p>
        )}
      </main>
    </>
  );
};

export default ProjectsPage;
