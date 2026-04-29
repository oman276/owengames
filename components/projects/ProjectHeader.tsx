import Image from "next/image";
import { GameProject, Project } from "@/lib/projects/types";
import { PATH_GAMES_IMAGES } from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/dist/client/link";
import {
  GitHubLogoIcon,
  MagnifyingGlassIcon,
  PlayIcon
} from "@radix-ui/react-icons";

export default function ProjectHeader(project : GameProject) {
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
        <h1 className="text-5xl font-header uppercase font-bold">{project.title}</h1>
        <p className="text-muted-foreground">{project.preview}</p>

        <p className="text-sm text-muted-foreground">{project.displayedDate ?? project.date}</p>
        <div className="flex flex-col md:flex-row">
            {project.actionURL && (
            <Button variant="outline" asChild>
                <Link href={project.actionURL}><MagnifyingGlassIcon className="w-4 h-4 mr-2" />{project.actionText}</Link>
            </Button>
            )}
            {project.playURL && (
            <Button variant="outline" asChild>
                <Link href={project.playURL}><PlayIcon className="w-4 h-4 mr-2" />Play Game</Link>
            </Button>
            )}
            {project.sourceURL && (
            <Button variant="outline" asChild>
                <Link href={project.sourceURL}><GitHubLogoIcon className="w-4 h-4 mr-2" />View Code</Link>
            </Button>
            )}
        </div>
      </div>
    </div>
  );
}
