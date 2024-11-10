import { BASE_URL } from "@/lib/constants";
import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { AUTHOR } from "@/lib/constants";

const fontSans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

// OPG compliant metadata (https://ogp.me/)
export const metadata: Metadata = {
  title: {
    template: "%s | Owen's Games",
    default: "Owen's Games",
  },
  description:
    "Owen Gallagher's public game portfolio, housing some of the many video games I've made over the years.",
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
    siteName: "Owen's Games",
    title: "Owen Gallagher's Games",
    description: "A portfolio website for my games.",
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
      <body className="flex flex-col h-screen items-center overflow-x-hidden scrollbar bg-background font-sans antialiased transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
