import Head from "next/head";
import styles from "@/styles/Main.module.css";
import WelcomeHeader from "@/components/WelcomeHeader";
import LatestPosts from "@/components/LatestPosts";
import Education from "@/components/Education";
import { BlogPost, getPosts } from "@/utils/helpers";

type Props = { posts: BlogPost[] };

export const getStaticProps = () => {
  const all = getPosts();
  const posts = all.sort((a, b) => {
    const ad = Number(new Date(a.data?.publishedAt || a.data?.date || 0));
    const bd = Number(new Date(b.data?.publishedAt || b.data?.date || 0));
    return bd - ad;
  });

  return { props: { posts } };
};

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Hung Nguyen — Home</title>
        <meta
          name="description"
          content="Hung Nguyen's portfolio and blog (IT Production Support, NLP/ML, auditing)."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.container}>
        <WelcomeHeader />
        <Education />
        <LatestPosts posts={posts} />
      </main>
    </>
  );
}
