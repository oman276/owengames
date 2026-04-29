"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProjectPreview from "@/components/projects/ProjectPreview";
import { PATH_GAMES_IMAGES } from "@/lib/constants";
import { Project } from "@/lib/projects/types";

type Tab = "best" | "professional" | "personal";

const TABS: { key: Tab; label: string }[] = [
  { key: "best", label: "Best" },
  { key: "professional", label: "Professional" },
  { key: "personal", label: "Personal" },
];

export default function GameTabs({ games }: { games: Project[] }) {
  const [activeTab, setActiveTab] = useState<Tab>("best");

  const filteredGames = games.filter((game) =>
    game.tags.some((tag) => tag.toLowerCase() === activeTab),
  );

  return (
    <div className="flex flex-col w-[75vw] items-center max-w-2xl mx-auto gap-8 min-h-screen text-lg">
      <h1 className="text-6xl font-header tracking-wide mb-8 text-center">
        GAMES
      </h1>

      <div className="flex gap-4 mb-4">
        {TABS.map((tab) => (
          <Button
            key={tab.key}
            variant={activeTab === tab.key ? "default" : "outline"}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

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
