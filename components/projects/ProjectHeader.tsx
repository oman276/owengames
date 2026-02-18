import Image from "next/image";
import { Project } from "@/lib/projects/types";
import { PATH_GAMES_IMAGES } from "@/lib/constants";

export default function ProjectHeader(project : Project) {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Image side */}
      {project.coverImage && (
        <div className="w-full md:w-1/2 flex items-center">
          <Image
            src={`${PATH_GAMES_IMAGES}/${project.coverImage}`}
            alt={project.title}
            width={0}
            height={0}
            sizes="37.5vw"
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Text side */}
      <div className="flex flex-col justify-center gap-4 p-8 w-full md:w-1/2">
        {/* <p className="text-sm uppercase tracking-widest text-muted-foreground">
          {project.type}
        </p> */}
        <h1 className="text-5xl font-header uppercase font-bold">{project.title}</h1>
        <p className="text-muted-foreground">{project.preview}</p>

        {/* <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div> */}

        <p className="text-sm text-muted-foreground">{project.date}</p>

        {project.actionURL && (
          <a
            href={project.actionURL}
            className="mt-2 self-start px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium"
          >
            {project.actionText ?? "View Project"}
          </a>
        )}
      </div>
    </div>
  );
}
