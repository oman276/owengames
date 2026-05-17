import { PATH_WRITING } from "@/lib/constants";
import { Post } from "@/lib/posts/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import NavButton from "../NavButton";
import { Separator } from "../ui/separator";
import PostPreview from "./PostPreview";
import SubstackSubscribe from "./SubstackSubscribe";
import WritingList from "./WritingList";

export default function PostFooter({
  nextPost,
  relatedPosts,
}: {
  nextPost?: Post;
  relatedPosts?: Post[];
}) {
  return (
    <div className="flex flex-col items-center w-full gap-8 mt-8">
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="w-full flex flex-col gap-2">
          {/* <h2 className="font-semibold tracking-tight">Recommended posts</h2> */}
          {/* <div className="flex flex-col">
            {relatedPosts.map((post) => (
              <div key={post.slug} className="border-t pt-4">
                <PostPreview post={post} />
              </div>
            ))}
          </div> */}
          <WritingList posts={relatedPosts} />
        </div>
      )}
      <SubstackSubscribe className="w-full max-w-md mb-2" />
    </div>
  );
}
