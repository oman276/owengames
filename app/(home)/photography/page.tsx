import PhotographyContent from "@/components/layout/PhotographyContext";
import { BASE_URL, PATH_PHOTOGRAPHY } from "@/lib/constants";
import { getOGData } from "@/lib/utils";
import { Metadata } from "next/types";

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
// export default function Photography() {
//   return (
//     <div className="flex flex-col items-center gap-4 text-center">
//       <h1 className="text-2xl font-bold">
//         Photography Page - Under Construction
//       </h1>
//       <p>Here&apos;s for all those pictures I&apos;ve been taking.</p>
//     </div>
//   );
// }

export default async function Photography() {
  return (
    <div className="flex flex-col gap-4">
      <PhotographyContent />
    </div>
  );
}