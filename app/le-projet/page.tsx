import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import LeProjet from "@/components/sections/LeProjet";

export const metadata: Metadata = {
  title: "Le projet",
  description:
    "SPLASH est un format de dialogue structuré ancré dans l'univers du jeu vidéo et de l'esport : son ADN, son triptyque, sa méthode et ses thématiques.",
};

export default function LeProjetPage() {
  return (
    <>
      <PageHeader />
      <LeProjet />
    </>
  );
}
