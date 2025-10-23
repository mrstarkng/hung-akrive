// src/pages/blog/index.tsx
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Main.module.css";
import BlogPosts from "@/components/BlogPosts";
import { BlogPost, getPosts } from "@/utils/helpers";

const SITE_TITLE = "Your Name — Blog";
const SITE_DESC = "Personal blog posts by Your Name about engineering, ops, and research.";
const CANONICAL = "https://your-domain.com/blog"; // <- đổi domain của bạn

export const getStaticProps = () => {
  const all = getPosts();

  // 1) Ẩn bài draft trong production (vẫn thấy khi dev)
  const isProd = process.env.NODE_ENV === "production";
  const posts = all
    .filter((p) => !(isProd && p.data?.draft))
    .sort((a, b) => {
      const ad = Number(new Date(a.data?.publishedAt || a.data?.date || 0));
      const bd = Number(new Date(b.data?.publishedAt || b.data?.date || 0));
      return bd - ad;
    });

  return { props: { posts } };
};

type Props = { posts: BlogPost[] };

const Blog = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESC} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO */}
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESC} />
        <meta property="og:url" content={CANONICAL} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.container}>
        <header style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
          <h1 className={styles.mainTitle}>Blog</h1>
          {/* Link nhanh tới trang Categories (nếu đã tạo) */}
          <nav aria-label="Secondary">
            <Link href="/blog/categories">Categories →</Link>
          </nav>
        </header>

        <BlogPosts posts={posts} />
      </main>
    </>
  );
};

export default Blog;
