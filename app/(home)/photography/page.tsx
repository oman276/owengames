import InlineLink from "@/components/common/InlineLink";
import PhotographyContent from "@/components/layout/PhotographyContext";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import {
  InstagramLogoIcon
} from "@radix-ui/react-icons";

export default async function Photography() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-6xl font-header tracking-wide text-center">PHOTOGRAPHY</h1>
      <div className="flex justify-center">
        <Button asChild>
          <Link href="https://www.instagram.com/oweng.pics/"><InstagramLogoIcon className="w-4 h-4 mr-2" /> Follow on Instagram for more</Link>
        </Button>
      </div>
      <PhotographyContent />
      <div className="w-full max-w-[72ch] mx-auto">
        <p>
          A nice custom masonry layout, built by <InlineLink href="https://plett.dev/">
            Josiah Plett
          </InlineLink>
          , stolen shamelessly by me. {" "}
          <InlineLink href="https://github.com/plettj/plett.dev">
            Code
          </InlineLink>
          .
        </p>
      </div>
    </div>
  );
}