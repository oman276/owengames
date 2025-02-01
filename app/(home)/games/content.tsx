import { GamesListItem } from "@/components/layout/GamesList";
import { SimpleGamesListItem } from "@/components/layout/SimpleGamesList";

export const professionalGames: GamesListItem[] = [
  {
    title: "Fairgame$",
    date: "Jan - April 2025",
    collaborators: "Haven Interactive Studios, PlayStation Studios",
    role: "Gameplay Programmer Intern",
    links: [
      {
        name: "Reveal Trailer",
        url: "https://www.youtube.com/watch?v=l1Jp4K02L1I",
      },
    ],
    desc: "Gameplay Programmer on an upcoming first-party PlayStation heist PvP game. Worked in Unreal Engine 5 and C++ on various systems, including item interaction.",
  },

  {
    title: "Warframe",
    date: "May - Aug 2024",
    collaborators: "Digital Extremes",
    role: "Gameplay Programmer Intern",
    links: [
      {
        name: "Warframe: 1999 Trailer",
        url: "https://www.youtube.com/watch?v=dtLfIYvbhew",
      },
      { name: "Official Website", url: "https://www.warframe.com/" },
      {
        name: "Steam Page",
        url: "https://store.steampowered.com/app/230410/Warframe/",
      },
    ],
    desc: "Gameplay Programmer on an online action MMO with 80 million players. I worked in on abilities for the headlining boss enemies in Warframe: 1999, as well as bugfixes for abilities, weapons, physics, and more. Used C++ and Lua.",
  },

  {
    title: "Keyword 2: Nightfall",
    date: "Sept - Dec 2024",
    collaborators: "City from Naught, Inc.",
    role: "Unity Programmer Intern",
    links: [
      {
        name: "Steam Page",
        url: "https://store.steampowered.com/app/2015470/Keyword_2_Nightfall/",
      },
      {
        name: "Official Website",
        url: "https://www.cityfromnaught.com/keyword2",
      },
    ],
    desc: "Gameplay Programmer on an upcoming 3D detective game, primarily working on UI, optimization, and character movement. Used Unity and C#.",
  },
];

export const personalGames: GamesListItem[] = [
  {
    title: "First Snow",
    date: "October 6, 2024",
    collaborators: "Nicole Planeta",
    role: "Design, Writing, Programming",
    links: [
      { name: "Play Online", url: "https://oman276.itch.io/first-snow" },
      { name: "View Code", url: "https://github.com/oman276/winter" },
    ],
    desc: "A short narrative game about a father looking for his daughter who has just returned from war. My first time using Ink to create a branching story, with the gameplay being in Godot. I wanted to expand this story, but it proved trickier to pin down than I hoped.",
  },

  {
    title: "BURNT OUT",
    date: "June 6, 2024",
    collaborators: "Maria Melnyk, Misha Melnyk, Nicole Planeta",
    role: "Design, Programming",
    links: [
      { name: "Play Online", url: "https://oman276.itch.io/burnt-out" },
      {
        name: "View Code",
        url: "https://github.com/kertox662/GDC-GameJam-S24",
      },
    ],
    desc: "An 'anti-cozy' game, where you experience the feeling of gamified burnout, spreading yourself too thin over too many tasks, based on my own experiences as a student. My first full game using Godot.",
  },

  {
    title: "Turtle Golf",
    date: "May 6th, 2024",
    collaborators: "Ella Goodridge, Nicole Planeta",
    role: "Design, Programming, Project Planning",
    links: [
      { name: "Play Online", url: "https://eternalon03.itch.io/turtle-golf" },
      { name: "View Code", url: "https://github.com/oman276/TurtleV3" },
    ],
    desc: "My first long term, non-game jam project. Helped lead a team in designing and iterating on a drag-and-shoot adventure game starring a very slippery turtle. Uses Unity and C#.",
  },

  {
    title: "./charonet",
    date: "July 26, 2023",
    collaborators: "Liam McArthur, Sophie Thomas-Salvosa, Tanishi Naik",
    role: "Design, Programming",
    links: [{ name: "Play Online", url: "https://oman276.itch.io/charonet" }],
    desc: "A narrative game created for a school assignment in Summer 2023. Some excerpts from itch.io comments: \"i have cried no less than three times from this game now... razor sharp writing. thank you.\" Made in Twine. (A hint: if you haven't seen the credits, the game's not over.)",
  },

  {
    title: "Uprooting For You",
    date: "February 27, 2023",
    collaborators: "Nicole Planeta",
    role: "Design, Programming",
    links: [
      { name: "Play Online", url: "https://oman276.itch.io/uprooting-for-you" },
      { name: "View Code", url: "https://github.com/oman276/GI-Jam-W23" },
    ],
    desc: "A competitive local multiplayer game about winning the love of a beautiful tractor. Made in Unity and C#.",
  },

  {
    title: "Dating Is Hell",
    date: "October 2, 2022",
    collaborators: "Daegeon Kang",
    role: "Design, Programming, Writing",
    links: [
      { name: "Play Online", url: "https://oman276.itch.io/dating-is-hell" },
    ],
    desc: "A unique dating sim where you need to rekindle the spark with an old flame to exit dating hell.",
  },

  {
    title: "Washing Machine Of Doom",
    date: "August 14, 2022",
    collaborators: "",
    role: "Design, Programming, Writing",
    links: [
      {
        name: "Play Online",
        url: "https://oman276.itch.io/washing-machine-of-doom",
      },
    ],
    desc: "A puzzle-platformer where you play as a washing machine with a grudge against the human race.",
  },

  {
    title: "Orientation Day",
    date: "April 25, 2021",
    collaborators: "",
    role: "Design, Programming, Writing",
    links: [
      { name: "Play Online", url: "https://oman276.itch.io/orientation-day" },
      { name: "View Code", url: "https://github.com/oman276/orientation-day" },
    ],
    desc: "An adventure through a dark, abandoned laboratory. Can you find the secret of Manifest Corportation and escape with your life?",
  },
];

export const otherGames: SimpleGamesListItem[] = [
  {
    title: "worldbuilder.",
    date: "March 1, 2021",
    link: { name: "Play Online", url: "https://oman276.itch.io/worldbuilder" },
    tech: "Unity, C#",
  },

  {
    title: "MOO-NSHOT",
    date: "November 29, 2020",
    link: { name: "Play Online", url: "https://oman276.itch.io/moo-nshot" },
    tech: "Unity, C#",
  },

  {
    title: "ULTIMATE FPS",
    date: "September 12, 2020",
    link: { name: "Play Online", url: "https://oman276.itch.io/moo-nshot" },
    tech: "Unity, C#",
  },

  {
    title: "Main Street VCR Repair",
    date: "August 8, 2020",
    link: {
      name: "Play Online",
      url: "https://oman276.itch.io/main-street-vcr-repair",
    },
    tech: "Unity, C#",
  },

  {
    title: "You Have Two Seconds",
    date: "June 28, 2020",
    link: {
      name: "Play Online",
      url: "https://oman276.itch.io/you-have-two-seconds",
    },
    tech: "Unity, C#",
  },
];
