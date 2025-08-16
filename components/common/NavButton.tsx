import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavButton({
  children,
  href,
  active = false,
  external = false,
  className,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  active?: boolean;
  external?: boolean;
  className?: string;
}>) {
  return (
    <Button
    asChild
    className={cn(
        "px-2 font-header tracking-wide gap-2",
        !active && "text-muted-foreground",
        className
    )}
    variant="link"
    role="navigation"
    >
      <Link
        href={href}
        {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      >
        {children}
      </Link>
    </Button>
  );
}