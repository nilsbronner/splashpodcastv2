import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Temoigner from "@/components/sections/Temoigner";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Une idée, une histoire, une personne, un sujet à proposer ? Besoin de nous parler ? Contactez l'équipe SPLASH, de manière anonyme, privée ou publique.",
};

export default function TemoignerPage() {
  return (
    <>
      <PageHeader />
      <Temoigner />
    </>
  );
}
