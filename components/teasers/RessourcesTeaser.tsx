import { BookMarked, FlaskConical, HeartHandshake, Wrench, Library, FileDown } from "lucide-react";
import Teaser from "@/components/ui/Teaser";
import Badge from "@/components/ui/Badge";

const types = [
  { icon: FileDown, label: "PDF Épisode" },
  { icon: FlaskConical, label: "Références scientifiques" },
  { icon: HeartHandshake, label: "Associations citées" },
  { icon: Library, label: "Dispositifs d'aide" },
  { icon: Wrench, label: "Outils mentionnés" },
  { icon: BookMarked, label: "Lectures pour aller plus loin" },
];

export default function RessourcesTeaser() {
  return (
    <Teaser
      theme="light"
      eyebrow="Les docs"
      title="Les dossiers documentés"
      description="Chaque épisode donne naissance à une fiche ressource complète. L'ambition : la plus grande base de ressources francophone sur la santé, l'inclusion et le jeu vidéo."
      href="/ressources"
      ctaLabel="Découvrir les docs"
      reverse
      visual={
        <div>
          <Badge tone="orange" className="mb-3">
            Disponible dès la V1
          </Badge>
          <div className="grid grid-cols-2 gap-3">
            {types.map((t) => (
              <div key={t.label} className="flex items-start gap-2 rounded-xl2 border border-ink/8 bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-700">
                  <t.icon size={15} />
                </span>
                <p className="text-xs font-medium leading-snug text-ink/80">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
