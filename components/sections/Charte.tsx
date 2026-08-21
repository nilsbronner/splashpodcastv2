import { FileText } from "lucide-react";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

export default function Charte() {
  return (
    <Section id="charte" theme="dark">
      <div className="max-w-3xl">
        <p className="mb-4 text-lg font-semibold uppercase tracking-widest text-orange-300 sm:text-xl">
          Charte
        </p>
        <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
          #PlayGG pour un esport mixte et responsable
        </h2>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-white/70">
          <p>
            Des centaines de millions de personnes dans le monde, dont près de 12 millions en
            France, partagent la passion de l&apos;esport.
          </p>
          <p>
            L&apos;esport, c&apos;est le plaisir du jeu, de la compétition, du dépassement de soi
            et de l&apos;esprit collectif.
          </p>
          <p>
            Chacune et chacun doit pouvoir jouer, s&apos;exprimer et concourir sans humiliation,
            sans discrimination et sans violence.
          </p>
          <p>
            Chacune et chacun a droit au respect, quels que soient son niveau de jeu, son genre,
            ses origines, son poids, sa culture ou encore sa religion.
          </p>
          <p className="font-semibold text-white">
            C&apos;est cette culture esport que nous voulons partager.
          </p>
          <p>
            Nous signons cette charte pour un esport responsable fondé sur trois principes
            fondamentaux : le respect de l&apos;adversaire, l&apos;inclusion et la mixité et une
            pratique responsable.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-xl3 border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-300">
              <FileText size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white/90">Texte complet de la Charte</p>
              <p className="mt-1 text-xs leading-relaxed text-white/50">
                Les articles détaillés de la Charte #PlayGG sont en cours de finalisation.
              </p>
            </div>
          </div>
          <Badge tone="neutral">Bientôt disponible</Badge>
        </div>
      </div>
    </Section>
  );
}
