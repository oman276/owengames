import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import PostBody from "@/components/writing/PostBody";
import PostFooter from "@/components/writing/PostFooter";
import PostHeader from "@/components/writing/PostHeader";
import { AUTHOR, BASE_URL, PATH_PROJECTS } from "@/lib/constants";
import { getAllProjects, getProjectBySlug } from "@/lib/projects/api";
import markdownToHtml from "@/lib/posts/markdownToHtml";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";

type Params = {
  params: {
    slug: string[];
  };
};

export default async function ProjectPage({ params }: Params) {
  let project;
  try {
    project = getProjectBySlug(params.slug[0]);
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
    <div className="flex flex-col items-center max-w-2xl mx-auto mgap-4 min-h-screen">
      <article className="">
        <Navigation />
        <PostHeader
          title={project.title}
          coverImage={project.coverImage}
          date={project.date}
        />
        <PostBody content={content} />
        <PostFooter />
        <Footer />
      </article>
    </div>
  );
}

export function generateMetadata({ params }: Params): Metadata {
  let project;
  try {
    project = getProjectBySlug(params.slug[0]);
  } catch {
    return {
      title: "Project 404",
      description: "Project not found",
      openGraph: getOGData({
        title: "Project 404",
        description: "Project not found",
        url: `${BASE_URL}${PATH_PROJECTS}/${params.slug[0]}`,
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
