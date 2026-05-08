import Link from "next/link";
import { Metadata, Viewport } from "next/types";
import GameTabs from "../games/GameTabs";
import { getAllNonGameProjects } from "@/lib/projects/api";

export default function Etc() {
  const nonGameProjects = getAllNonGameProjects();
  return (
    <div className="flex flex-col items-center gap-4 text-lg text-center">
      <h1 className="text-6xl font-header tracking-wide mb-8 text-center">
          OTHER PROJECTS
      </h1>
      <GameTabs games={nonGameProjects}></GameTabs>
    </div>
  );
}
