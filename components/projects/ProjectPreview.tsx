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
    <Link href={`${PATH_PROJECTS}/${project.slug}`} passHref>
      <div className="flex justify-between group hover:underline hover:cursor-pointer py-4 -my-4">
        <h1 className="tracking-tight font-semibold text-balance w-full">
          {project.title}
        </h1>
        <p className="w-[9ch] font-semibold dark:font-bold text-muted-foreground text-right group-hover:underline decoration-muted-foreground">
          {date}
        </p>
      </div>
    </Link>
  );
}
