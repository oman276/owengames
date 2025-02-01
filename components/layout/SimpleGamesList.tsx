import { ListLink } from "./GamesList";

export type SimpleGamesListItem = {
  title: string;
  date: string;
  link: ListLink;
  tech: string;
};

export function SimpleGamesList({ games }: { games: SimpleGamesListItem[] }) {
  return (
    <div className="flex flex-col items-left gap-4 text-left">
      {games.map((game, index) => (
        <div key={index}>
          <p className="mb-2">
            <span className="font-bold">{game.title}</span>
            <span> · </span>
            <span className="italic">{game.date}</span>
            <span> · </span>
            <span className="italic">using {game.tech}</span>
            <span> · </span>
            <span>
              <a
                href={game.link.url}
                className="underline text-blue-500 hover:text-blue-400"
              >
                {game.link.name}
              </a>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
