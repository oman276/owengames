import { PATH_PROJECTS } from "@/lib/constants";
import { Post } from "@/lib/posts/types";
import { Project } from "@/lib/projects/types";
import Link from "next/link";

export default function ProjectPreview({ project }: { project: Project }) {
  const date = new Date(project.date).toLocaleDateString("en-CA", {
    month: "short",
    day: "2-digit",
  });

  return (
    <div className="flex flex-col gap-4 max-h-40">
      <Link href={`${PATH_PROJECTS}/${project.slug}`} passHref>
        <div className="flex justify-between group hover:underline hover:cursor-pointer py-4 -my-4">
          <h1 className="text-2xl font-semibold group-hover:underline decoration-muted-foreground">
            {project.title}
          </h1>
        </div>
      </Link>

      <p className="text-muted-foreground text-left">{project.preview}</p>
      <p className="text-sm text-muted-foreground text-left">{project.displayedDate ?? project.date}</p>
    </div>
  );
}
