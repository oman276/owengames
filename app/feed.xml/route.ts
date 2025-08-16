// app/feed.xml/route.ts

import { AUTHOR, BASE_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts/api";
import markdownToHtml from "@/lib/posts/markdownToHtml";
import RSS from "rss";

export async function GET() {
  const feedOptions = {
    title: "OWENGAMES | WRITING",
    description: "Thoughts and opinions from Owen Gallagher.",
    site_url: BASE_URL,
    feed_url: `${BASE_URL}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${AUTHOR.name}`,
  };

  const feed = new RSS(feedOptions);

  // Get all posts, assuming they are sorted from newest to oldest by getAllPosts
  const posts = getAllPosts();

  // Asynchronously process each post to generate its HTML content
  await Promise.all(
    posts.map(async (post) => {
      // The full URL to the post
      const postUrl = `${BASE_URL}/writing/${post.slug}`;

      // Convert Markdown to HTML for the feed's description
      const content = await markdownToHtml(post.content || "");

      feed.item({
        title: post.title,
        description: content, // Use the full HTML content of the post
        url: postUrl, // Link to the post
        guid: postUrl, // A unique identifier for the item is required
        date: post.date, // The publication date
        author: AUTHOR.name,
      });
    })
  );

  // Return the generated XML as a response
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
