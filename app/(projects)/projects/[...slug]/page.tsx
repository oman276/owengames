import PostFooter from "@/components/writing/PostFooter";
import { AUTHOR, BASE_URL, PATH_PROJECTS } from "@/lib/constants";
import { getAllProjects, getProjectBySlug } from "@/lib/projects/api";
import markdownToHtml from "@/lib/posts/markdownToHtml";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectBody from "@/components/projects/ProjectBody";
import ProjectGallery from "@/components/projects/ProjectGallery";

type Params = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  let project;
  try {
    project = getProjectBySlug(slug[0]);
  } catch {
    return (
      <div className="w-full">
        <p className="mb-6">Project not found.</p>
        <PostFooter />
      </div>
    );
  }

  const content = await markdownToHtml(project.content);

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <article className="w-full">
        <ProjectHeader {...project} />
        <ProjectGallery project={project} />
        <ProjectBody content={content} />
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  let project;
  try {
    project = getProjectBySlug(slug[0]);
  } catch {
    return {
      title: "Project 404",
      description: "Project not found",
      openGraph: getOGData({
        title: "Project 404",
        description: "Project not found",
        url: `${BASE_URL}${PATH_PROJECTS}/${slug[0]}`,
      }),
    };
  }

  const title = `${project.title}`;

  return {
    title,
    description: project.preview,
    keywords: project.tags,
    alternates: {
      canonical: `${PATH_PROJECTS}/${project.slug}`,
    },
    authors: AUTHOR,
    creator: "Owen Gallagher",
    openGraph: getOGData({
      type: "article",
      title,
      description: project.preview,
      url: `${BASE_URL}${PATH_PROJECTS}/${project.slug}`,
      ...(project.coverImage && {
        previewImage: {
          url: project.coverImage,
          alt: "Project display image",
        },
      }),
    }),
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: [project.slug],
  }));
}
