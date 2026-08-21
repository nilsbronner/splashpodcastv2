import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Equipe from "@/components/sections/Equipe";

export const metadata: Metadata = {
  title: "L'équipe",
  description:
    "Les personnes qui conçoivent, produisent, portent et font vivre SPLASH : Skillcamp, Bemotion et Reset.",
};

export default function EquipePage() {
  return (
    <>
      <PageHeader />
      <Equipe />
      <CtaBanner
        title="Une question pour l'équipe ?"
        description="Presse, partenariat, proposition de sujet : contactez-nous directement."
        primary={{ label: "Nous contacter", href: "/temoigner" }}
        secondary={{ label: "Rejoindre la communauté", href: "https://discord.gg/K84WaeSFt", external: true }}
      />
    </>
  );
}
