import styles from "@/components/BlogPosts/BlogPosts.module.css";
import Link from "next/link";
import { BlogPost } from "@/utils/helpers";
import Image from "next/image";

const BlogPosts = ({ posts }: { posts: BlogPost[] }) => {
  const convertImage = (w: number, h: number) => `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id="g">
                    <stop stop-color="#333" offset="20%" />
                    <stop stop-color="#222" offset="50%" />
                    <stop stop-color="#333" offset="70%" />
                </linearGradient>
            </defs>
            <rect width="${w}" height="${h}" fill="#333" />
            <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
            <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
        </svg>
    `;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div className={styles.blogPostsGrid}>
      {posts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          className={styles.blogPost}
          key={post.slug}
        >
          <div className={styles.blogPostInfo}>
            <p>{post.data.publishedAt}</p>
            <p>{post.readingTime} min. read</p>
          </div>
          <h3>{post.data.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default BlogPosts;
