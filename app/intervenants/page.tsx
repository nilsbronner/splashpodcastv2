import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Intervenants from "@/components/sections/Intervenants";

export const metadata: Metadata = {
  title: "Les intervenants",
  description:
    "Les personnes qui participent aux épisodes de SPLASH pour apporter leur vécu ou leur expertise.",
};

export default function IntervenantsPage() {
  return (
    <>
      <PageHeader />
      <Intervenants />
      <CtaBanner
        title="Envie de participer à un épisode ?"
        description="Vécu, expertise ou facilitation : proposez-vous comme futur·e intervenant·e."
        primary={{ label: "Candidater", href: "/temoigner" }}
        secondary={{ label: "Voir les épisodes", href: "/episodes" }}
      />
    </>
  );
}
