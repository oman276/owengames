import { BASE_URL } from "@/lib/constants";
import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Anton } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { AUTHOR } from "@/lib/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

const fontSans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

const headlines = Anton({
  subsets: ["latin"], // which characters to include
  weight: "400", // which font weight(s) to preload
});

// OPG compliant metadata (https://ogp.me/)
export const metadata: Metadata = {
  title: {
    template: "%s | OWENGAMES",
    default: "OWENGAMES",
  },
  description:
    "The official website of Owen Gallagher.",
  generator: "Next.js",
  keywords: [
    "University of Waterloo",
    "Game Development",
    "Professional",
    "Software",
  ],
  authors: AUTHOR,
  creator: "Owen Gallagher",
  referrer: "strict-origin-when-cross-origin", // Default
  // icons: [{ url: `${BASE_URL}/icons/favicon48x48.png`, sizes: "48x48" }],
  metadataBase: new URL(BASE_URL),
  // verification: {
  //   google: process.env.COMMON_VERIFICATION_GOOGLE /* ?? "uuid" */,
  //   yahoo: process.env.COMMON_VERIFICATION_YAHOO,
  //   yandex: process.env.COMMON_VERIFICATION_YANDEX,
  //   me: process.env.COMMON_VERIFICATION_ME,
  // },
  formatDetection: {
    telephone: false,
    date: false,
    email: true,
    url: true,
    address: false,
  },
  // archives: URL_TO_OLD_SITE,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "OWENGAMES",
    title: "OWENGAMES",
    description: "The official website of Owen Gallagher.",
    // images: [
    //   {
    //     url: `${BASE_URL}/icons/favicon48x48.png`,
    //     alt: "OG Logo",
    //   },
    // ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fontSans.variable)} suppressHydrationWarning>
      <body className="flex flex-col h-screen overflow-x-hidden scrollbar bg-background font-sans antialiased transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <strong> OWENGAMES </strong>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/*
              <NavigationMenuItem>
                <Link href="/play" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    PLAY NOW
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              */}

              <NavigationMenuItem>
                <Link href="/games" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    MY GAMES
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/writing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    WRITING
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/photography" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    PHOTOS
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/*
              <NavigationMenuItem>
                <Link href="/etcetera" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ETC.
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              */}

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    CONTACT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
