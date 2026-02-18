import GamesList from "@/components/layout/GamesList";
import { personalGames, professionalGames, otherGames } from "./content";
import { SimpleGamesList } from "@/components/layout/SimpleGamesList";

/*
export default function Games() {
  return (
    <div className="flex flex-col items-center gap-4 text-lg min-h-screen text-center">
      <h1 className="text-6xl font-header tracking-wide">PROFESSIONAL GAMES</h1>
      <GamesList games={professionalGames} />
      <h1 className="text-6xl font-header tracking-wide mt-8">PERSONAL GAMES</h1>
      <GamesList games={personalGames} />
      <h2 className="text-6xl font-header tracking-wide mt-8">OTHER GAMES</h2>
      <SimpleGamesList games={otherGames} />
    </div>
  );
}
*/

import FilterButtons from "@/components/writing/FilterButtons";
import PostPreview from "@/components/writing/PostPreview";
import ProjectPreview from "@/components/projects/ProjectPreview";
import { getAllPosts } from "@/lib/posts/api";
import { cn } from "@/lib/utils";
import { getAllGames } from "@/lib/projects/api";

export default function Games({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const allGames = getAllGames();
  const tag =
    typeof searchParams.tag === "string" ? searchParams.tag : undefined;

  const games = tag
    ? allGames.filter((post) =>
        post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
      )
    : allGames;

  let currentYear = new Date().getFullYear() + 1;

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto gap-4 min-h-screen text-lg">
      <h1 className="text-6xl font-header tracking-wide mb-8 text-center">
        GAMES
      </h1>
      {games.map((post) => {
        const gameYear = new Date(post.date).getFullYear();
        const showYear = gameYear !== currentYear;
        currentYear = gameYear;
        const printSlug = post.slug.replace(/-/g, " ").toUpperCase();
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
                  {printSlug}
                </h2>
              )}
            </div>

            {/* Post preview column */}
            <div className={cn("flex-1", !showYear && "border-t pt-4")}>
              <ProjectPreview project={post} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
