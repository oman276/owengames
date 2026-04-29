import { getAllGames } from "@/lib/projects/api";
import GameTabs from "./GameTabs";

export default function Games() {
  const allGames = getAllGames();
  return <GameTabs games={allGames} />;
}
