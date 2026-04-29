import Link from "next/link";
import {
  PATH_GAMES,
  PATH_HOME_IMAGES,
  PATH_WRITING,
} from "@/lib/constants";
import Image from "next/image";
import InlineLink from "@/components/InlineLink";
import GameTabs from "./games/GameTabs";
import WritingList from "@/components/writing/WritingList";
import { getAllGames } from "@/lib/projects/api";
import { getAllPosts } from "@/lib/posts/api";

export default async function Home() {
  const allGames = getAllGames();
  const allPosts = getAllPosts();

  return (
    <div className="flex flex-col items-center gap-4 text-lg text-center">
      <div className="flex justify-between gap-8 max-h-40">
        <span className="font-header text-[4rem] bg-clip-text tracking-wide leading-none block flex items-center justify-center">
          OWEN<br/>GALLAGHER
        </span>
        <div className="aspect-square overflow-hidden rounded-xl flex items-center">
          <Image
            src={`${PATH_HOME_IMAGES}/${"falls-cropped.png"}`}
            alt={"Me!"}
            width={0}
            height={0}
            sizes="20vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 text-lg text-left">
        <p>Hi! I&apos;m Owen Gallagher, a gameplay programmer with over a year of AAA experience in Unreal Engine and C++, and <InlineLink href="https://oman276.itch.io/">indie experience</InlineLink> using Godot and Unity.</p>
        <p>I&apos;ve worked at:</p>
        <ul className="list-disc list-inside">
          <li><InlineLink href="https://www.epicgames.com/site/home">Epic Games</InlineLink> (<i>incoming</i>) on <InlineLink href="https://www.unrealengine.com/">Unreal Engine 5</InlineLink></li>
          <li><InlineLink href="https://havenstudios.com/en">Haven Studios</InlineLink> (PlayStation Studios) on <InlineLink href="https://havenstudios.com/en/blog/introducing-fairgames-a-competitive-heist-experience-coming-to-ps5-and-pc">Fairgames</InlineLink></li>
          <li><InlineLink href="https://www.digitalextremes.com/">Digital Extremes</InlineLink> on <InlineLink href="https://www.warframe.com/en">Warframe</InlineLink></li>
        </ul>
      </div>

      <GameTabs games={allGames} activeTab={"best"} numToShow={5} />
      <InlineLink href={PATH_GAMES}>See all games here.</InlineLink>

      <div className="flex flex-col gap-4 text-lg text-left w-full max-w-2xl">
        <p>In my spare time, I like to <InlineLink href={PATH_WRITING}>write on my blog</InlineLink>, take pretty pictures, play games, and work on personal projects using interesting technology.</p>
        <WritingList posts={allPosts} activeTag="best" numToShow={7} />
      </div>

      
      <InlineLink href={PATH_WRITING}>See all writing here.</InlineLink>
    </div>
  );
}
