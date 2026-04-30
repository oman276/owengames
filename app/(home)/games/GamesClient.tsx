"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import GameTabs from "./GameTabs";
import { Project } from "@/lib/projects/types";

type Tab = "all" | "best" | "professional" | "personal";

const TABS: { key: Tab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "best", label: "Best" },
  { key: "professional", label: "Professional" },
  { key: "personal", label: "Personal" },
];

export default function GamesClient({ games }: { games: Project[] }) {
  const [activeTab, setActiveTab] = useState<Tab>("best");

  return (
    <div className="flex flex-col items-center gap-4 text-lg text-center">
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
      <GameTabs games={games} activeTab={activeTab} numToShow={100} />
    </div>
  );
}
