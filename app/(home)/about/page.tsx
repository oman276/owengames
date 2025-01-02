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
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold">Contact Page</h1>
      <p>Feel free to reach out!</p>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}