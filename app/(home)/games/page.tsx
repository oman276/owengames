import { getAllGames } from "@/lib/projects/api";
import GamesClient from "./GamesClient";

export default function Games() {
  const allGames = getAllGames();
  return <GamesClient games={allGames} />;
}
