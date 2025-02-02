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
export default function Writing() {
  const posts = getAllPosts();

  // TODO: Add a filtering option ("Main posts", "Quick posts"), and only show main posts by default.

  let currentYear = new Date().getFullYear() + 1;

  return (
    // 1) Added gap-4 to space out items vertically
    // 2) Ensured everything is centered with items-center in a flex-col
    // 3) Made the container auto-center on the page with max-w and mx-auto
    <div className="flex flex-col items-center max-w-2xl mx-auto gap-4 min-h-screen">
      <h1 className="text-3xl font-bold mt-8 mb-8 text-center">WRITING</h1>
      {posts.map((post) => {
        const postYear = new Date(post.date).getFullYear();
        const showYear = postYear !== currentYear;
        currentYear = postYear;
        return (
          // 4) Use gap for spacing columns, justify-center for centering
          // 5) Removed custom widths, replaced with flex-basis classes 
          //    or you can keep w-[16%]/w-[84%] if you prefer
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
