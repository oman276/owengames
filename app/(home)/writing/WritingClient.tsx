"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import WritingList from "@/components/writing/WritingList";
import { Post } from "@/lib/posts/types";
import Link from "next/dist/client/link";
import { PATH_RSS, URL_MY_SUBSTACK } from "@/lib/constants";
import SubstackSubscribe from "@/components/writing/SubstackSubscribe";

const CATEGORIES = [
  "All",
  "Best",
  "Games",
  "Game Dev",
  "Tech",
  "Art",
  "Humor",
  "Misc",
];

export default function WritingClient({
  posts,
  initialTag,
}: {
  posts: Post[];
  initialTag?: string;
}) {
  const normalizedInitial = initialTag
    ? initialTag.charAt(0).toUpperCase() +
      initialTag.slice(1).toLowerCase()
    : "All";

  const [activeTag, setActiveTag] = useState<string>(normalizedInitial);

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto gap-4 min-h-screen text-lg">
      <h1 className="text-6xl font-header tracking-wide mb-8 text-center">
        WRITING
      </h1>
      <div className="flex gap-2 -mt-6 mb-2">
        <Button asChild>
          <Link href={PATH_RSS}>Subscribe via RSS</Link>
        </Button>
        <Button asChild>
          <Link href={URL_MY_SUBSTACK} target="_blank" rel="noopener noreferrer">Follow on Substack</Link>
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={
              activeTag.toLowerCase() === category.toLowerCase()
                ? "default"
                : "outline"
            }
            onClick={() => setActiveTag(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>
      <WritingList
        posts={posts}
        activeTag={activeTag === "All" ? undefined : activeTag}
      />
      <SubstackSubscribe className="w-full max-w-md mt-8" />
    </div>
  );
}
