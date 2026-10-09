import { readFileSync } from "node:fs"
import { join } from "node:path"

import type { BlogIndexItem, BlogPost } from "@/types/blog"

const blogDir = join(process.cwd(), "content", "blog")

function readJson<T>(filename: string): T {
  return JSON.parse(readFileSync(join(blogDir, filename), "utf8")) as T
}

export function getBlogIndex(): BlogIndexItem[] {
  return readJson<BlogIndexItem[]>("index.json")
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogIndex().map((item) => getBlogPost(item.slug))
}

export function getBlogPost(slug: string): BlogPost {
  return readJson<BlogPost>(`${slug}.json`)
}

export function getBlogSlugs(): string[] {
  return getBlogIndex().map((item) => item.slug)
}
