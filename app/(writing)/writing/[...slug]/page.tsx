import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import PostBody from "@/components/writing/PostBody";
import PostFooter from "@/components/writing/PostFooter";
import PostHeader from "@/components/writing/PostHeader";
import { AUTHOR, BASE_URL, PATH_WRITING } from "@/lib/constants";
import { getAllPosts, getPostBySlugSafely } from "@/lib/posts/api";
import markdownToHtml from "@/lib/posts/markdownToHtml";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";

type Params = {
  params: {
    slug: string[];
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return (
      <div className="w-full">
        <p className="mb-6">Post not found.</p>
        <PostFooter />
      </div>
    );
  }

  const content = await markdownToHtml(post.content);

  const posts = getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined;

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto mgap-4 min-h-screen">
      <article className="">
        <Navigation />
        <PostHeader
          title={post.title}
          subtitle={post.subtitle}
          coverImage={post.coverImage}
          date={post.date}
        />
        <PostBody content={content} />
        <PostFooter nextPost={nextPost} />
        <Footer />
      </article>
    </div>
  );
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlugSafely(params.slug[0]);

  if (!post) {
    return {
      title: "Post 404",
      description: "Post not found",
      openGraph: getOGData({
        title: "Post 404",
        description: "Post not found",
        url: `${BASE_URL}${PATH_WRITING}/${params.slug[0]}`,
      }),
    };
  }

  const title = `${post.title}`;

  return {
    title,
    description: post.preview,
    keywords: post.tags,
    alternates: {
      canonical: `${PATH_WRITING}/${post.slug}`,
    },
    authors: AUTHOR,
    creator: "Owen Gallagher",
    openGraph: getOGData({
      type: "article",
      title,
      description: post.preview,
      url: `${BASE_URL}${PATH_WRITING}/${post.slug}`,
      ...(post.ogImage && {
        previewImage: {
          url: post.ogImage,
          alt: post.subtitle ?? "Post display image",
        },
      }),
    }),
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
}
