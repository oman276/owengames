import InlineLink from "@/components/common/InlineLink";
import PhotographyContent from "@/components/layout/PhotographyContext";

export default async function Photography() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-6xl font-header tracking-wide mb-8 text-center">PHOTOGRAPHY</h1>
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