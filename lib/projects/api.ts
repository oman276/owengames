import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { filterSlugs } from "../posts/api";
import { Project } from "./types";

const projectDirectory = join(process.cwd(), "projects");

export function getProjectSlugs() {
  const allSlugs: string[] = fs.readdirSync(projectDirectory);

  return filterSlugs(allSlugs);
}

export function getProjectBySlug(slug: string): Project {
  const realSlug = slug.replace(/\.md$/, "");

  if (filterSlugs([realSlug]).length < 1) {
    throw new Error(`No project corresponds to the given slug: ${slug}.`);
  }

  const fullPath = join(projectDirectory, `${realSlug}.md`);

  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch {
    throw new Error(`No project corresponds to the given slug: ${slug}.`);
  }

  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as Project;
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((project1, project2) =>
      new Date(project1.date).getTime() > new Date(project2.date).getTime() ? -1 : 1,
    );
    return projects;
}

export function getAllGames(): Project[] {
  return getAllProjects().filter((project) => project.type.toLowerCase() === "game");
}

export function getAllNonGameProjects(): Project[] {
  return getAllProjects().filter((project) => project.type.toLowerCase() !== "game");
}