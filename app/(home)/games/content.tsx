import { AboutListItem } from "@/components/layout/AboutList";
import InlineLink from "@/components/InlineLink";
import { GamesListItem } from "@/components/layout/GamesList";
import { ListLink } from "@/components/layout/GamesList";



export const professionalGames : GamesListItem[] = [
  {
    title: "Fairgame$",
    date: "Jan - April 2025",
    collaborators: "Haven Interactive Studios, PlayStation Studios",
    role: "Gameplay Programmer Intern",
    links: [
      { name: "Reveal Trailer", url: "https://www.youtube.com/watch?v=l1Jp4K02L1I" }
    ],
    desc: "Gameplay Programmer on an upcoming first-party PlayStation heist PvP game. Worked in Unreal Engine 5 and C++ on various systems, including item interaction."
  },

  {
    title: "Warframe",
    date: "May - Aug 2024",
    collaborators: "Digital Extremes",
    role: "Gameplay Programmer Intern",
    links: [
      { name: "Warframe: 1999 Trailer", url: "https://www.youtube.com/watch?v=dtLfIYvbhew" },
      { name: "Official Website", url: "https://www.warframe.com/" },
      { name: "Steam Page", url: "https://store.steampowered.com/app/230410/Warframe/" }
    ],
    desc: "Gameplay Programmer on an online action MMO with 80 million players. I worked in on abilities for the headlining boss enemies in Warframe: 1999, as well as bugfixes for abilities, weapons, physics, and more. Used C++ and Lua."
  },

  {
    title: "Keyword 2: Nightfall",
    date: "Sept - Dec 2024",
    collaborators: "City from Naught, Inc.",
    role: "Unity Programmer Intern",
    links: [
      { name: "Steam Page", url: "https://store.steampowered.com/app/2015470/Keyword_2_Nightfall/" },
      { name: "Official Website", url: "https://www.cityfromnaught.com/keyword2" }
    ],
    desc: "Gameplay Programmer on an upcoming 3D detective game, primarily working on UI, optimization, and character movement. Used Unity and C#."
  },
];


export const personalGames : GamesListItem[] = [
  {
    title: "First Snow",
    date: "October 6, 2024",
    collaborators: "Nicole Planeta",
    role: "Design, Writing, Programming",
    links: [
      { name: "Play Online", url: "https://oman276.itch.io/first-snow" },
      { name: "View Code", url: "https://github.com/oman276/winter" },
    ],
    desc: "A short narrative game about a father looking for his daughter who has just returned from war. My first time using Ink to create a branching story, with the gameplay being in Godot. I wanted to expand this story, but it proved trickier to pin down than I hoped."
  },
];
