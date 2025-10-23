import Link from "next/link";
import type { GetStaticProps } from "next";
import { getAllCategories } from "@/lib/posts";
import layout from "@/styles/Main.module.css";
import styles from "./Category.module.css";

type Props = { categories: string[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { categories: getAllCategories() } };
};

export default function CategoriesPage({ categories }: Props) {
  return (
    <main className={layout.container}>
      <h1 className={layout.mainTitle}>Categories</h1>
      {categories.length === 0 && <p>No categories yet.</p>}

      <div className={styles.categoriesGrid}>
        {categories.map((c) => (
          <Link
            key={c}
            href={`/blog/category/${encodeURIComponent(c)}`}
            className={styles.categoryCard}
          >
            {c}
          </Link>
        ))}
      </div>
    </main>
  );
}
