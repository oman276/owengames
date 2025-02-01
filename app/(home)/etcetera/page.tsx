import Link from "next/link";
import { Metadata, Viewport } from "next/types";

{
  /*
export const metadata: Metadata = {
    title: "About",
    description: META_DESCRIPTION_HOME,
    openGraph: getOGData({
      title: "About",
      description: "About",
      url: `\\about`,
    }),
  };

  */
}
export default function Etcetera() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold">Etc. Page - Under Construction</h1>
      <p>This is for everything else I might want to work on.</p>
    </div>
  );
}
