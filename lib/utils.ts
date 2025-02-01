import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BASE_URL } from "./constants";
import { Data } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isProd(): boolean {
  return process.env.NODE_ENV === "production";
}

export function getOGData({
  type,
  url,
  title,
  description,
  previewImage,
}: Data) {
  return {
    type: type || "website",
    siteName: "OWENGAMES",
    title:
      title !== "META_TITLE_HOME" ? `${title} | ${"META_TITLE_HOME"}` : title,
    description,
    url,
    images: [
      previewImage || {
        url: `${BASE_URL}/icons/favicon32.png`,
        width: 32,
        height: 32,
        alt: "J logo",
      },
    ],
  };
}
