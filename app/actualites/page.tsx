import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Actualites from "@/components/sections/Actualites";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Ce qui se passe autour de SPLASH : enregistrements publics, sorties d'épisodes et prochains rendez-vous.",
};

export default function ActualitesPage() {
  return (
    <>
      <PageHeader />
      <Actualites />
      <CtaBanner
        title="Ne manquez aucun rendez-vous SPLASH"
        description="Rejoignez la communauté pour être informé·e des prochains enregistrements en public et des sorties d'épisodes."
        primary={{ label: "Rejoindre la communauté", href: "https://discord.gg/K84WaeSFt", external: true }}
        secondary={{ label: "Voir les épisodes", href: "/episodes" }}
      />
    </>
  );
}
