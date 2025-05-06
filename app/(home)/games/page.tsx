import GamesList from "@/components/layout/GamesList";
import { personalGames, professionalGames, otherGames } from "./content";
import { SimpleGamesList } from "@/components/layout/SimpleGamesList";

export default function Games() {
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen text-center">
      <h1 className="text-6xl font-header tracking-wide mt-16">PROFESSIONAL GAMES</h1>
      <GamesList games={professionalGames} />
      <h1 className="text-6xl font-header tracking-wide mt-8">PERSONAL GAMES</h1>
      <GamesList games={personalGames} />
      <h2 className="text-6xl font-header tracking-wide mt-8">OTHER GAMES</h2>
      <SimpleGamesList games={otherGames} />
    </div>
  );
}
