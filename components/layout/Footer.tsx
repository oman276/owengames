import {
  PATH_RSS,
  URL_MY_GITHUB,
  URL_MY_ITCH,
  URL_MY_LINKEDIN,
  URL_MY_PHOTOGRAPHY_INSTAGRAM,
  URL_MY_SUBSTACK,
} from "@/lib/constants";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import NavButton from "../common/NavButton";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full mt-12">
      <hr />
      <section className="flex flex-col sm:flex-row gap-2 justify-between items-center w-full my-10">
        <nav className="flex gap-1 -ml-2">
          <NavButton href={URL_MY_GITHUB} external>
            <GitHubLogoIcon />
            <span className="sr-only">GitHub</span>
          </NavButton>
          <NavButton href={URL_MY_LINKEDIN} external>
            <LinkedInLogoIcon />
            <span className="sr-only">LinkedIn</span>
          </NavButton>
          <NavButton href={URL_MY_PHOTOGRAPHY_INSTAGRAM} external>
            <InstagramLogoIcon />
            <span className="sr-only">Instagram</span>
          </NavButton>
          <NavButton href={URL_MY_ITCH} className="hidden sm:flex">
            ITCH.IO
          </NavButton>
          <NavButton href={PATH_RSS} className="hidden sm:flex">
            RSS
          </NavButton>
          <NavButton href={URL_MY_SUBSTACK} external className="hidden sm:flex">
            SUBSTACK
          </NavButton>
        </nav>
      </section>
    </footer>
  );
}
