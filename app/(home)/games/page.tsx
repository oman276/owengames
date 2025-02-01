import GamesList from "@/components/layout/GamesList";
import { personalGames, professionalGames, otherGames } from "./content";
import { SimpleGamesList } from "@/components/layout/SimpleGamesList";

export default function Games() {
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen text-center">
      <h1 className="text-3xl font-bold mt-16">PROFESSIONAL GAMES</h1>
      <GamesList games={professionalGames} />
      <h1 className="text-3xl font-bold">PERSONAL GAMES</h1>
      <GamesList games={personalGames} />
      <h2 className="text-2xl font-bold">OTHER GAMES</h2>
      <SimpleGamesList games={otherGames} />
    </div>
  );
}
