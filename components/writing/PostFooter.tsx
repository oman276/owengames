import { PATH_WRITING } from "@/lib/constants";
import { Post } from "@/lib/posts/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import NavButton from "../NavButton";
import { Separator } from "../ui/separator";
import SubstackSubscribe from "./SubstackSubscribe";

export default function PostFooter({ nextPost }: { nextPost?: Post }) {
  return (
    <div className="flex justify-center items-center w-full">
      <SubstackSubscribe className="w-full max-w-md mb-2" />
    </div>
  );
}
