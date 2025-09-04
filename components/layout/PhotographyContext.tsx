"use client";

import { photos } from "@/app/(home)/photography/content";
import { useState, useEffect } from "react";
import InlineLink from "../common/InlineLink";
import MasonryLayout from "../common/photos/MasonryLayout";
import { LoadMethod } from "../common/photos/Photo";
import { MasonryImage } from "../photography/MasonryLayout";

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function PhotographyContent() {
  const [loadMethod, setLoadMethod] = useState<LoadMethod>("border");
  const [shuffledPhotos, setShuffledPhotos] = useState<MasonryImage[]>([]);

  useEffect(() => {
    setShuffledPhotos(shuffleArray<MasonryImage>(photos));
  }, []); 

  return (
    <>
      <div className="w-full max-w-[140ch] mx-auto pb-8">
        <MasonryLayout images={shuffledPhotos} loadMethod={loadMethod} />
      </div>
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
    </>
  );
}