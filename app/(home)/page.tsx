import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 my-auto justify items-center justify-center text-center">
      <p className="text-balance">Owen Gallagher&apos;s Game Website</p>
      <Button variant="outline" asChild>
        <Link href="https://oman276.itch.io/">Games</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="https://github.com/oman276">GitHub</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="https://www.linkedin.com/in/owen-gallagher-40b1721b4/">
          LinkedIn
        </Link>
      </Button>
    </div>
  );
}
