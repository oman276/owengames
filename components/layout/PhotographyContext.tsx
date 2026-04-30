"use client";

import { photos } from "@/app/(home)/photography/content";
import MasonryLayout from "../common/photos/MasonryLayout";

export default function PhotographyContent() {
  return (
    <>
      <div className="w-full max-w-[140ch] mx-auto pb-8">
        <MasonryLayout images={photos} loadMethod={"border"} loadedItems={18} shuffleItems={true} />
      </div>
    </>
  );
}