import styles from './LatestPosts.module.css';
import Link from "next/link";
import BlogPosts from "@/components/BlogPosts";
import {BlogPost} from "@/utils/helpers";

const LatestPosts = ({ posts }: { posts: BlogPost[] }) => {
    return (
        <section className={styles.latestPosts}>
            <div className={styles.latestPostsTop}>
                <h2>Latest posts</h2>
                <Link href="/blog" className={styles.viewAllBtn}>View all</Link>
            </div>
            <BlogPosts posts={posts.slice(0, 6)} />
        </section>
    );
};

export default LatestPosts;
