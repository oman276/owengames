"use client";

import {
  PATH_HOME,
  PATH_GAMES,
  PATH_PHOTOGRAPHY,
  PATH_WRITING,
  PATH_CONTACT,
} from "@/lib/constants";
import { usePathname } from "next/navigation";
import NavButton from "../common/NavButton";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex font-header tracking-wide gap-2 -mx-2 my-10">
      <NavButton
        href={PATH_HOME}
        active={pathname === PATH_HOME}
        aria-label="Home"
      >
        OWENGAMES
      </NavButton>
      
      <NavButton
        href={PATH_GAMES}
        active={pathname === PATH_GAMES}
        aria-label="Games"
      >
        GAMES
      </NavButton>
      
    <NavButton
        href={PATH_WRITING}
        active={pathname.includes(PATH_WRITING)}
        aria-label="Writing"
    >
        WRITING
      </NavButton>

    <NavButton
        href={PATH_PHOTOGRAPHY}
        active={pathname === PATH_PHOTOGRAPHY}
        aria-label="Photography"
      >
        PHOTOGRAPHY
      </NavButton>

    {/* <div className="flex-1" />
    <NavButton
        href={PATH_CONTACT}
        active={pathname === PATH_CONTACT}
        aria-label="Contact"
        >
        CONTACT
        </NavButton> */}
    </nav>
  );
}