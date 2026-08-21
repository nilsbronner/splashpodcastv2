import { FileText } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CharteHome() {
  return (
    <Section id="charte" theme="light" className="relative overflow-hidden">
      <div className="rounded-xl3 bg-ink p-10 text-white md:p-14">
        <p className="mb-5 text-lg font-semibold uppercase tracking-widest text-orange-300">
          Charte
        </p>
        <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-5xl">
          #PlayGG pour un esport mixte et responsable
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
          Des centaines de millions de personnes dans le monde, dont près de 12 millions en
          France, partagent la passion de l&apos;esport.
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/65">
          C&apos;est cette culture esport que nous voulons partager.
        </p>
        <Button
          href="/charte"
          variant="dark"
          size="lg"
          className="mt-8 w-full !bg-white !text-ink hover:!bg-white/90 sm:w-auto"
        >
          <FileText size={18} /> Lire la Charte
        </Button>
      </div>
    </Section>
  );
}
