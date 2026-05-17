import { BASE_URL } from "../constants";
import { Author } from "./types";

const AUTHOR: Author = {
  name: "Owen Gallagher",
  url: BASE_URL,
};

/** Tags ignored when computing related posts (meta-tags, not topics). */
const GENERIC_TAGS = ["quick", "writing", "best"];

export { AUTHOR, GENERIC_TAGS };
