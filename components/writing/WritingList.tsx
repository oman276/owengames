import PostPreview from "./PostPreview";
import { Post } from "@/lib/posts/types";
import { cn } from "@/lib/utils";

export default function WritingList({
  posts,
  activeTag,
  numToShow,
}: {
  posts: Post[];
  activeTag?: string;
  numToShow?: number;
}) {
  const filteredPosts = activeTag
    ? posts.filter((post) =>
        post.tags.some(
          (t) => t.toLowerCase() === activeTag.toLowerCase(),
        ),
      )
    : posts;

  const displayedPosts = numToShow
    ? filteredPosts.slice(0, numToShow)
    : filteredPosts;

  let currentYear = new Date().getFullYear() + 1;

  return (
    <div className="flex flex-col gap-4 w-full">
      {displayedPosts.map((post) => {
        const postYear = new Date(post.date).getFullYear();
        const showYear = postYear !== currentYear;
        currentYear = postYear;
        return (
          <div
            key={post.slug}
            className={cn(
              "flex w-full items-start gap-4",
              showYear && "border-t pt-4",
            )}
          >
            <div className="min-w-[60px] text-right">
              {showYear && (
                <h2 className="font-semibold text-muted-foreground">
                  {postYear}
                </h2>
              )}
            </div>
            <div className={cn("flex-1", !showYear && "border-t pt-4")}>
              <PostPreview post={post} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
