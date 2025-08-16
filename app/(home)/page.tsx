import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center min-h-screen text-center">
      <span className="font-header bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] tracking-wide mt-[2px] leading-none text-transparent">
        OWENGAMES
      </span>
      <p>The official website of Owen Gallagher.</p>

      <Button variant="outline" asChild>
        <Link href="https://oman276.itch.io/">itch.io</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="https://github.com/oman276">GitHub</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="https://www.linkedin.com/in/owen-gallagher-40b1721b4/">
          LinkedIn
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="https://owengames.com/feed.xml">RSS</Link>
      </Button>
    </div>
  );
}
