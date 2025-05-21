import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-4 text-lg text-center">
      <span className="font-header bg-gradient-to-b text-[5rem] from-foreground to-transparent bg-clip-text tracking-wide leading-none text-transparent">
        OWENGAMES
      </span>
      <p className="font-sans">The official website of Owen Gallagher.</p>

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
    </div>
  );
}
