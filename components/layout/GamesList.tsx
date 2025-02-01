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
};

export default function GamesList({ games }: { games: GamesListItem[] }) {
  return (
    <div className="flex flex-col items-left gap-4 text-left">
      {games.map((game, index) => (
        <div key={index}>
          <p className="mb-2">
            <span className="text-2xl font-bold">{game.title}</span>
            <span> </span>
            <span className="italic">{game.role}</span>
          </p>
          <p className="mb-2">
            <span className="italic">{game.date}</span>
            <span className="text-gray-400 italic"> with </span>
            <span className="italic">{game.collaborators}</span>
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
      ))}
    </div>
  );
}
