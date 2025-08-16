import { BASE_URL, PATH_WRITING } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts/api";

// Rebuild feed at most once per hour (Incremental Static Regeneration)
export const revalidate = 3600;
export const dynamic = "force-static"; // ensure a static response unless revalidated

function xmlEscape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function GET() {
  const posts = getAllPosts(); // already sorted & filtered (non-draft) per your existing helper

  const items = posts
    .map((p) => {
      const url = `${BASE_URL}${PATH_WRITING}/${p.slug}`;
      return `<item>
  <title>${xmlEscape(p.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <description>${xmlEscape(p.preview)}</description>
  <pubDate>${new Date(p.date).toUTCString()}</pubDate>
</item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
 <channel>
  <title>OWENGAMES Writing</title>
  <link>${BASE_URL}${PATH_WRITING}</link>
  <description>Latest writing from OWENGAMES</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${items}
 </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
    },
  });
}
