import { getAllPosts } from "@/lib/posts/api";
import WritingClient from "./WritingClient";

export default async function Writing({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const allPosts = getAllPosts();
  const { tag } = await searchParams;
  const initialTag = typeof tag === "string" ? tag : undefined;

  return <WritingClient posts={allPosts} initialTag={initialTag} />;
}
