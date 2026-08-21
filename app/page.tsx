import Hero from "@/components/sections/Hero";
import PourquoiSplash from "@/components/sections/PourquoiSplash";
import ActualiteHome from "@/components/sections/ActualiteHome";
import RessourcesTeaser from "@/components/teasers/RessourcesTeaser";
import Communaute from "@/components/sections/Communaute";
import CharteHome from "@/components/sections/CharteHome";

export default function Home() {
  return (
    <>
      <Hero />
      <PourquoiSplash />
      <ActualiteHome />
      <RessourcesTeaser />
      <Communaute />
      <CharteHome />
    </>
  );
}
