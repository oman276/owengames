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
import {
  PATH_HOME,
  PATH_GAMES,
  PATH_PHOTOGRAPHY,
  PATH_WRITING,
  PATH_CONTACT,
} from "@/lib/constants";

export default async function Home() {
  return (
    <div className="flex flex-col items-center gap-4 text-lg text-center">
      <span className="font-header text-[5rem] bg-clip-text tracking-wide leading-none">
        OWENGAMES
      </span>
      <p className="font-sans">I'm Owen Gallagher. I spend most of my time these days being a student at the University of Waterloo and a game developer. The rest of my time is is spent writing and taking pretty pictures.</p>
      <p className="font-sans">I've made 16 personal games (and counting) mostly using Godot and Unity/C#. I've also worked a year's worth of gameplay programmer internships, including at Haven Studios (PlayStation Studios) on Fairgame$ and Digital Extremes on Warframe in C++ and/or Unreal Engine 5.</p>
      <p className="font-sans">Here's some of my work that I'm proudest of right now:</p>


      <Button variant="outline" asChild>
        <Link href="https://oman276.itch.io/horse-hearse">Game: Horse Hearse</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href= {PATH_WRITING + "/arc"}>Writing: Getting Dumped by my Web Browser</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="https://eternalon03.itch.io/wrath-of-daedalus">
          Game: Wrath of Daedelus
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href={PATH_WRITING + "/the-new-god"}>
          Writing: The New God
        </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="https://oman276.itch.io/charonet">
          Game: ./charonet
        </Link>
      </Button>    
    </div>
  );
}
