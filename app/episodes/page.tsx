import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Episodes from "@/components/sections/Episodes";

export const metadata: Metadata = {
  title: "Les épisodes",
  description: "Saison 1. Un nouvel épisode SPLASH le premier mercredi de chaque mois.",
};

export default function EpisodesPage() {
  return (
    <>
      <PageHeader />
      <Episodes />
      <CtaBanner
        title="Une idée, une histoire, une personne, un sujet à proposer ?"
        description="Besoin de nous parler ?"
        primary={{ label: "Nous contacter", href: "/temoigner" }}
        secondary={{ label: "Rejoindre notre Discord", href: "https://discord.gg/K84WaeSFt", external: true }}
      />
    </>
  );
}
