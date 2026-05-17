import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { GENERIC_TAGS } from "./constants";
import { Post } from "./types";

const postsDirectory = join(process.cwd(), "writing");

export function filterSlugs(slugs: string[]): string[] {
  return slugs.filter((slug) => {
    return !slug.toUpperCase().startsWith("DRAFT-");
  });
}

export function getPostSlugs() {
  const allSlugs: string[] = fs.readdirSync(postsDirectory);

  return filterSlugs(allSlugs);
}

/**
 * Throws if the slug is not valid; otherwise, returns the post object.
 *
 * @param slug URL slug of the post to find
 * @returns Post object corresponding to the given slug
 */
export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");

  if (filterSlugs([realSlug]).length < 1) {
    throw new Error(`No post corresponds to the given slug: ${slug}.`);
  }

  const fullPath = join(postsDirectory, `${realSlug}.md`);

  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch {
    throw new Error(`No post corresponds to the given slug: ${slug}.`);
  }

  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as Post;
}

export function getPostBySlugSafely(slug: string): Post | null {
  try {
    return getPostBySlug(slug);
  } catch {
    return null;
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) =>
      new Date(post1.date).getTime() > new Date(post2.date).getTime() ? -1 : 1,
    );
  return posts;
}

/**
 * Returns posts related to the current one by shared (non-generic) tags,
 * ordered by overlap count then by date. If fewer than `count` posts share
 * any meaningful tag, fills the remainder with the most recent other posts.
 */
export function getRelatedPosts(
  currentPost: Post,
  allPosts: Post[],
  count = 3,
): Post[] {
  const others = allPosts.filter((p) => p.slug !== currentPost.slug);
  const genericLower = GENERIC_TAGS.map((t) => t.toLowerCase());
  const meaningfulTags = currentPost.tags
    .map((t) => t.toLowerCase())
    .filter((t) => !genericLower.includes(t));

  const scored = others
    .map((p) => ({
      post: p,
      overlap: p.tags.filter((t) => meaningfulTags.includes(t.toLowerCase()))
        .length,
    }))
    .filter((s) => s.overlap > 0)
    .sort((a, b) => {
      if (b.overlap !== a.overlap) return b.overlap - a.overlap;
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    });

  const related = scored.slice(0, count).map((s) => s.post);

  if (related.length < count) {
    const fillers = others
      .filter((p) => !related.some((r) => r.slug === p.slug))
      .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      )
      .slice(0, count - related.length);
    related.push(...fillers);
  }

  return related;
}
