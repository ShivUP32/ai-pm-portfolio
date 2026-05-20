import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface WorkMeta {
  slug: string;
  title: string;
  role: string;
  company: string;
  year: string;
  team: string;
  headline_metric: string;
  tags: string[];
  featured: boolean;
  order: number;
}

export interface WorkItem extends WorkMeta {
  content: string;
}

export function getAllWork(): WorkItem[] {
  const dir = path.join(contentDir, "work");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  const items = files.map((file) => {
    const fullPath = path.join(dir, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");
    return { slug, ...data, content } as WorkItem;
  });

  return items.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getWorkBySlug(slug: string): WorkItem | null {
  const all = getAllWork();
  return all.find((w) => w.slug === slug) ?? null;
}
