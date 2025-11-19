"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

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

export default function FilterButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag") || "All";

  const handleFilter = (category: string) => {
    if (category === "All") {
      router.push("/writing");
    } else {
      router.push(`/writing?tag=${category.toLowerCase()}`);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={
            currentTag.toLowerCase() === category.toLowerCase()
              ? "default"
              : "outline"
          }
          onClick={() => handleFilter(category)}
          className="capitalize"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
