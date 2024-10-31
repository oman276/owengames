import { Author } from "./types";
import { isProd } from "./utils";

export const BASE_URL = isProd()
  ? "https://owengames.com"
  : "http://localhost:3000";

export const PATH_HOME = "/";

export const AUTHOR: Author = {
  name: "Owen Gallagher",
  url: "https://owengames.com",
};

export const COPYRIGHT_STRING = `Copyright ${new Date().getFullYear()} © Owen Gallagher`;
