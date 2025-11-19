import FilterButtons from "@/components/writing/FilterButtons";
import PostPreview from "@/components/writing/PostPreview";
import { getAllPosts } from "@/lib/posts/api";
import { cn } from "@/lib/utils";

{
  /*
export const metadata: Metadata = {
    title: "About",
    description: META_DESCRIPTION_HOME,
    openGraph: getOGData({
      title: "About",
      description: "About",
      url: `\\about`,
    }),
  };

  */
}
export default function Writing({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const allPosts = getAllPosts();
  const tag =
    typeof searchParams.tag === "string" ? searchParams.tag : undefined;

  const posts = tag
    ? allPosts.filter((post) =>
        post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
      )
    : allPosts;

  let currentYear = new Date().getFullYear() + 1;

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto gap-4 min-h-screen text-lg">
      <h1 className="text-6xl font-header tracking-wide mb-8 text-center">
        WRITING
      </h1>
      <FilterButtons />
      {posts.map((post) => {
        const postYear = new Date(post.date).getFullYear();
        const showYear = postYear !== currentYear;
        currentYear = postYear;
        return (
          <div
            key={post.slug}
            className={cn(
              "flex w-full items-start gap-4",
              showYear && "border-t pt-4"
            )}
          >
            {/* Year column */}
            <div className="min-w-[60px] text-right">
              {showYear && (
                <h2 className="font-semibold text-muted-foreground">
                  {postYear}
                </h2>
              )}
            </div>

            {/* Post preview column */}
            <div className={cn("flex-1", !showYear && "border-t pt-4")}>
              <PostPreview post={post} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
