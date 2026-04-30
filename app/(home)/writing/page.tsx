import { getAllPosts } from "@/lib/posts/api";
import WritingClient from "./WritingClient";

export default function Writing({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const allPosts = getAllPosts();
  const initialTag =
    typeof searchParams.tag === "string" ? searchParams.tag : undefined;

  return <WritingClient posts={allPosts} initialTag={initialTag} />;
}
