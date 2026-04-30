"use client";

import { useEffect, useMemo, useState } from "react";
import { useMeasure } from "react-use";
import Photo, { LoadMethod } from "./Photo";
import { MasonryImage } from "@/components/photography/MasonryLayout";
import { photos } from "@/app/(home)/photography/content";

// export type MasonryImage = {
//   src: string;
//   alt: string;
//   location: string;
//   year: string;
//   /** Image's original size in pixels. [width, height] */
//   size: [number, number];
//   /** See `[root]/scripts/generateBlurData/README.md` for more information. */
//   blurDataURL?: string;
// };

type MasonryLayoutProps = {
  images: MasonryImage[];
  loadMethod?: LoadMethod;
  loadedItems?: number;
  shuffleItems?: boolean;
};

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Josiah's custom dynamic, animated Masonry layout component.
 * Not mine! This is blatantly stolen from Josiah's code (with permission).
 */
export default function MasonryLayout({
  images,
  loadMethod = "border",
  loadedItems = 20,
  shuffleItems = false,
}: MasonryLayoutProps) {
  // const [loadMethod, setLoadMethod] = useState<LoadMethod>("border");
  const [shuffledPhotos, setShuffledPhotos] = useState<MasonryImage[]>([]);

  useEffect(() => {
    const processed = shuffleItems
      ? shuffleArray<MasonryImage>(images)
      : [...images];
    setShuffledPhotos(processed.slice(0, loadedItems));
  }, [images, loadedItems, shuffleItems]);

  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const w = width ? width : 608;
  const columns = w > 600 ? 3 : w > 320 ? 2 : 1;

  const columnImages = useMemo(() => {
    const cols = Array(columns)
      .fill(0)
      .map(() => [] as MasonryImage[]);
    const columnHeights: number[] = Array(columns)
      .fill(0)
      .map((_, index) => {
        return Math.abs(index * 2 + 1 - columns) * 0.75;
      });

    shuffledPhotos.forEach((image) => {
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      cols[shortestColumn].push(image);
      columnHeights[shortestColumn] += image.size[1] / image.size[0];
    });

    return cols;
  }, [shuffledPhotos, columns]);

  return (
    <div ref={ref} className="w-full flex gap-3 sm:gap-4">
      {columnImages.map((column, i) => {
        return (
          <div key={i} className="flex flex-col gap-3 sm:gap-4 w-full">
            {column.map((image, j) => {
              return (
                <Photo
                  key={image.src}
                  image={image}
                  priority={j === 0}
                  loadMethod={loadMethod}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}