import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { getAllCategories, getPostsByCategory, PostMeta } from "@/lib/posts";
import layout from "@/styles/Main.module.css";
import styles from "../Category.module.css";

type Props = { slug: string; posts: PostMeta[] };

export const getStaticPaths: GetStaticPaths = async () => {
  const cats = getAllCategories();
  return { paths: cats.map((c) => ({ params: { slug: c } })), fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug || "");
  const posts = getPostsByCategory(slug).map((p) => ({
    slug: p.slug,
    title: p.title ?? p.slug,
    date: p.date ?? null,
    excerpt: p.excerpt ?? null,
    categories: Array.isArray(p.categories) ? p.categories : [],
  }));
  return { props: { slug, posts } };
};

export default function CategoryList({ slug, posts }: Props) {
  return (
    <main className={layout.container}>
      <h1 className={layout.mainTitle}>Category: {slug}</h1>

      {posts.length === 0 && <p>No posts yet.</p>}

      <ul className={styles.postList}>
        {posts.map((p) => (
          <li key={p.slug} className={styles.postItem}>
            <Link href={`/blog/${p.slug}`} className={styles.postTitle}>
              {p.title}
            </Link>
            {p.date ? (
              <small className={styles.postDate}>
                — {new Date(p.date).toLocaleDateString()}
              </small>
            ) : null}

            {p.categories?.length ? (
              <span className={styles.chipRow}>
                {p.categories.map((c, i) => (
                  <Link
                    key={c + i}
                    href={`/blog/category/${encodeURIComponent(c)}`}
                    className={styles.chip}
                  >
                    {c}
                  </Link>
                ))}
              </span>
            ) : null}
          </li>
        ))}
      </ul>

      <p className={styles.backLink}>
        <Link href="/blog/categories">← All categories</Link>
      </p>
    </main>
  );
}
