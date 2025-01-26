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
export default function Writing() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold">Writing - Under Construction</h1>
      <p>This is my own writing which will appear on the website. Mostly mathNEWS, plus some other original work from school I'm proud of.</p>
    </div>
  );
}