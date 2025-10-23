import fs from "fs";
import path from "path";
import fg from "fast-glob";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src", "pages", "blog");

export type PostMeta = {
  slug: string;
  title: string | null;
  date: string | null;        // luôn null hoặc ISO string
  excerpt: string | null;
  categories: string[];       // luôn là mảng
};

function readAllMdxPaths(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fg.sync(["**/*.md", "**/*.mdx"], {
    cwd: BLOG_DIR,
    absolute: true,
  });
}

function toArray(x: any): string[] {
  if (!x) return [];
  if (Array.isArray(x)) return x.map(String);
  return [String(x)];
}

function safeISO(input: any): string | null {
  const v = input ?? null;
  if (!v) return null;
  const d = new Date(v);
  return isNaN(d.getTime()) ? null : d.toISOString();
}

export function getAllPosts(): PostMeta[] {
  return readAllMdxPaths().map((abs) => {
    const raw = fs.readFileSync(abs, "utf8");
    const { data } = matter(raw);
    const file = path.basename(abs);
    const slug = file.replace(/\.(md|mdx)$/, "");

    // Ưu tiên publishedAt, fallback date, luôn trả về ISO hoặc null
    const date = safeISO(data?.publishedAt ?? data?.date);

    return {
      slug,
      title: data?.title ?? null,
      date,
      excerpt: data?.excerpt ?? null,
      categories: toArray(data?.categories),
    };
  });
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  getAllPosts().forEach((p) => p.categories.forEach((c) => set.add(c)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function getPostsByCategory(cat: string): PostMeta[] {
  const norm = (s: string) => s.toLowerCase();
  return getAllPosts()
    .filter((p) => p.categories.map(norm).includes(norm(cat)))
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}
