import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Charte from "@/components/sections/Charte";

export const metadata: Metadata = {
  title: "La Charte #PlayGG",
  description:
    "Charte pour un esport mixte et responsable : les engagements de SPLASH sur ses pratiques éditoriales et les valeurs qui guident le projet.",
};

export default function ChartePage() {
  return (
    <>
      <PageHeader />
      <Charte />
    </>
  );
}
