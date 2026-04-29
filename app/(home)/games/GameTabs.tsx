"use client";

import Image from "next/image";
import ProjectPreview from "@/components/projects/ProjectPreview";
import { PATH_GAMES_IMAGES } from "@/lib/constants";
import { Project } from "@/lib/projects/types";

type Tab = "all" | "best" | "professional" | "personal";

export default function GameTabs({
  games,
  activeTab = "all",
  numToShow = 6,
}: {
  games: Project[];
  activeTab?: Tab;
  numToShow?: number;
}) {
  const filteredGames = games
    .filter((game) =>
      activeTab === "all"
        ? true
        : game.tags.some((tag) => tag.toLowerCase() === activeTab),
    )
    .slice(0, numToShow);

  return (
    <div className="flex flex-col w-[75vw] items-center max-w-2xl mx-auto gap-8 min-h-screen text-lg">
      <div className="flex flex-col gap-8 w-full">
        {filteredGames.map((post) => (
          <div
            className="flex flex-col md:flex-row gap-8 items-center w-full"
            key={post.slug}
          >
            {post.coverImage && (
              <div className="w-full md:w-1/2 flex items-center">
                <Image
                  src={`${PATH_GAMES_IMAGES}/${post.coverImage}`}
                  alt={post.title}
                  width={0}
                  height={0}
                  sizes="20vw"
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="flex-1">
              <ProjectPreview project={post} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
