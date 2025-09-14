import { PATH_GAMES_IMAGES } from "@/lib/constants";

export type ListLink = {
  name: string;
  url: string;
};

export type GamesListItem = {
  title: string;
  date: string;
  collaborators: string;
  role: string;
  links: ListLink[];
  desc: string;
  tags?: string[];
  imageUrl?: string;
};

export default function GamesList({ games }: { games: GamesListItem[] }) {
  return (
    <div className="flex flex-col gap-8 text-left">
      {games.map((game, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-6 items-start"
        >
          <div className="w-full md:w-1/3 flex-shrink-0 h-48 md:h-64">
            {game.imageUrl && (
              <img
                src={`${PATH_GAMES_IMAGES}/${game.imageUrl}`}
                alt={game.title}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            )}
          </div>

          <div className="w-full md:w-2/3 flex-grow">
            <p className="mb-2 max-w-xl mx-auto">
              <span className="text-3xl font-header uppercase">
                {game.title}
              </span>
            </p>
            <p className="mb-2 max-w-xl mx-auto">
              <span className="italic">{game.role}</span>
              <span> · </span>
              <span className="italic">{game.date}</span>
              {game.collaborators != "" && (
                <span className="italic"> with {game.collaborators}</span>
              )}
            </p>
            <p className="mb-2 max-w-xl mx-auto">{game.desc}</p>

            <p className="mb-2">
              {game.links.map((link, index) => (
                <span key={index}>
                  <a
                    href={link.url}
                    className="underline text-blue-500 hover:text-blue-400"
                  >
                    {link.name}
                  </a>
                  {index < game.links.length - 1 && (
                    <span className="mx-2">·</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
