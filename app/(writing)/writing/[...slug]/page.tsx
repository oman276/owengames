import PostBody from "@/components/writing/PostBody";
import PostFooter from "@/components/writing/PostFooter";
import PostHeader from "@/components/writing/PostHeader";
import { AUTHOR, BASE_URL, PATH_WRITING } from "@/lib/constants";
import { getAllPosts, getPostBySlugSafely } from "@/lib/posts/api";
import markdownToHtml from "@/lib/posts/markdownToHtml";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";

type Params = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlugSafely(slug[0]);

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
    <div className="flex flex-col items-center max-w-2xl mx-auto gap-4 min-h-screen">
      <article className="w-full">
        <PostHeader
          title={post.title}
          subtitle={post.subtitle}
          coverImage={post.coverImage}
          date={post.date}
        />
        <PostBody content={content} />
        <PostFooter nextPost={nextPost} />
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlugSafely(slug[0]);

  if (!post) {
    return {
      title: "Post 404",
      description: "Post not found",
      openGraph: getOGData({
        title: "Post 404",
        description: "Post not found",
        url: `${BASE_URL}${PATH_WRITING}/${slug[0]}`,
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
    slug: [post.slug],
  }));
}
