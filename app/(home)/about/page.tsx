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
export default function About() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>
        I couldn&apos;t think of anything good to put here. The work should
        speak for itself, I hope.
      </p>
    </div>
  );
}
