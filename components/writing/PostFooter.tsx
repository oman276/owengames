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
          <h2 className="font-bold tracking-tight text-center">Recommended posts</h2>
          <WritingList posts={relatedPosts} />
        </div>
      )}
      <SubstackSubscribe className="w-full max-w-md mb-2" />
    </div>
  );
}
