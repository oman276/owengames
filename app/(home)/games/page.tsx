import Link from 'next/link';
import { Metadata, Viewport } from "next/types";
import AboutList from "@/components/layout/AboutList";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import InlineLink from '@/components/InlineLink';
import GamesList from '@/components/layout/GamesList';
import { personalGames, professionalGames } from './content';

  export default function Games() {
    return (<div className="flex flex-col items-center gap-4 min-h-screen text-center">
      <h1 className="text-3xl font-bold mt-16">PROFESSIONAL GAMES</h1>
      <GamesList games={professionalGames} />

      <h1 className="text-3xl font-bold">PERSONAL GAMES</h1>
      <GamesList games={personalGames} />
    </div>
    );
  }
