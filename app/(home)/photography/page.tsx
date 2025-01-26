import Link from 'next/link';
import { Metadata, Viewport } from "next/types";

{/*
export const metadata: Metadata = {
    title: "About",
    description: META_DESCRIPTION_HOME,
    openGraph: getOGData({
      title: "About",
      description: "About",
      url: `\\about`,
    }),
  };

  */}
export default function Photography() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold">Photography Page - Under Construction</h1>
      <p>Here's for all those pictures I've been taking.</p>
    </div>
  );
}