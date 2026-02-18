import { IBM_Plex_Sans } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import markdownStyles from "./markdown-styles.module.css";
import { cn } from "@/lib/utils";

const fontPosts = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-posts",
});

export default function ProjectBody({ content }: { content: string }) {
  return (
    <div className={cn("w-full max-w-4xl mx-auto px-4", fontPosts.className)}>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
