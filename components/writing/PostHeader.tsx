import { PATH_WRITING } from "@/lib/constants";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import NavButton from "../NavButton";

export default function PostHeader({
  title,
  subtitle,
  coverImage,
  date,
}: {
  title: string;
  subtitle?: string;
  coverImage?: string;
  date: string;
}) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="pt-6">
        <h1 className="text-5xl font-header tracking-wide mt-[2px] text-balance uppercase text-center">
          {title}
        </h1>
      </div>
      {subtitle && (
        <p className="text-lg font-thin text-muted-foreground text-center">
          {subtitle}
        </p>
      )}
      {/*
      <div className="flex justify-between items-center pt-6 pb-4 border-b">
        <p>{date}</p>
        <NavButton href={PATH_WRITING} className="pr-0">
          <ArrowLeftIcon /> Home
        </NavButton>
      </div>
      */}
      {coverImage && (
        <div className="relative w-full mt-4" style={{ height: "400px" }}>
          <Image src={coverImage} alt={title} fill className="object-cover" />
        </div>
      )}
    </div>
  );
}
