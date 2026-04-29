import Image from "next/image";
import { Project } from "@/lib/projects/types";
import { PATH_GAMES_IMAGES } from "@/lib/constants";

type Props = {
  project: Project;
};

export default function ProjectGallery({ project }: Props) {
  if (!project.galleryImages || project.galleryImages.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className="flex items-center w-[75vw] gap-2">
        {project.galleryImages.map((url, index) => (
          <div key={index} className="relative flex-1 min-w-0">
            <img
              src={`${PATH_GAMES_IMAGES}/${url}`}
              alt={`${project.title} gallery image ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
