import { MetadataRoute } from "next";

// Docs for this file: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest#generate-a-manifest-file
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Owen Gallagher's Games",
    short_name: "Owen Games",
    description: "A portfolio website for Owen Gallagher's games.",
    categories: ["personal", "games", "software", "productivity", "social"], // https://github.com/w3c/manifest/wiki/Categories
    start_url: "/",
    display: "browser", // The default.
    background_color: "#FFFFFF",
    theme_color: "#1C1917",
    lang: "en",
    // icons: [
    //   {
    //     src: "/icons/favicon48x48.png",
    //     sizes: "48x48",
    //     type: "image/png",
    //   },
    // ],
  };
}
