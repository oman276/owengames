import { Author } from "./types";
import { isProd } from "./utils";

export const BASE_URL = isProd()
  ? "https://owengames.com"
  : "http://localhost:3000";

export const PATH_HOME = "/";
export const PATH_WRITING = "/writing";
export const PATH_PROJECTS = "/projects";
export const PATH_GAMES = "/games";
export const PATH_PHOTOGRAPHY = "/photography";
export const PATH_PHOTOGRAPHY_IMAGES = "/images/photography";
export const PATH_GAMES_IMAGES = "/images/games";
export const PATH_CONTACT = "/contact";
export const PATH_RSS = "/feed.xml";

export const AUTHOR: Author = {
  name: "Owen Gallagher",
  url: "https://owengames.com",
};

export const URL_MY_GITHUB = "https://github.com/oman276";
export const URL_MY_LINKEDIN =
  "https://www.linkedin.com/in/owen-gallagher-40b1721b4/";
export const URL_MY_ITCH = "https://oman276.itch.io/";
export const URL_MY_PHOTOGRAPHY_INSTAGRAM =
  "https://www.instagram.com/oweng.pics/";

export const COPYRIGHT_STRING = `Copyright ${new Date().getFullYear()} © Owen Gallagher`;
