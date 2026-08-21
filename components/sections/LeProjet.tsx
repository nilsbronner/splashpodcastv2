import { Compass, Ear, ShieldCheck, Lightbulb, DoorOpen, FileDown } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const adn = [
  {
    icon: Compass,
    title: "L'ancrage réel",
    description: "Chaque épisode part d'une situation concrète liée au jeu vidéo.",
  },
  {
    icon: Ear,
    title: "La circulation de la parole",
    description: "Aucune voix ne domine. Le dialogue est organisé, équilibré, médiatisé.",
  },
  {
    icon: ShieldCheck,
    title: "Une information de qualité",
    description: "Les experts sont des cautions d'une information vérifiée.",
  },
  {
    icon: Lightbulb,
    title: "La mise en compréhension",
    description: "On ne cherche pas l'opinion, mais la compréhension.",
  },
  {
    icon: DoorOpen,
    title: "L'ouverture",
    description: "Chaque épisode se termine par une perspective, pas une conclusion fermée.",
  },
];

const triptyque = [
  {
    title: "Une joueuse ou un joueur",
    description: "Une situation réelle racontée.",
  },
  {
    title: "Un regard expert",
    description: "Éclairage professionnel spécifique à la thématique.",
  },
  {
    title: "Une médiation psychologique",
    description:
      "Alexandre, un repère, garant du cadre, aidant à clarifier, reformuler, relier.",
  },
];

const methode = [
  {
    title: "Partir du vécu",
    description: "L'expérience. Pas de théorie, ni de polémique.",
  },
  {
    title: "Structurer le dialogue",
    description:
      "Les prises de parole sont guidées. Les relances visent la compréhension. Les désaccords sont explorés, pas exploités.",
  },
  {
    title: "Transformer l'échange en ressource",
    description: "Chaque épisode doit permettre :",
    items: ["d'identifier des mécanismes", "de nuancer des idées reçues", "d'ouvrir des pistes d'équilibre"],
  },
];

const thematiques = [
  "Santé physique et mentale",
  "Vie sociale et amoureuse",
  "Violence & jeu vidéo",
  "« relation » avec l'IA",
  "Mixité homme/femme",
  "Handicap, inclusion",
  "Responsabilité citoyenne et écologique",
  "Vie professionnelle",
  "Les métiers du numérique",
  "Les arts et la culture",
  "L'écologie numérique",
];

export default function LeProjet() {
  return (
    <>
      <Section id="le-projet" theme="dark" eyebrow="Splash-podcasts" title="L'onde de soin dans le jeu vidéo">
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-white/70">
          <p>
            SPLASH s&apos;adresse aux communautés du jeu vidéo, mais aussi, aux jeunes générations
            en général et à la société dans son ensemble.
          </p>
          <p>
            Les podcasts sont fondés sur une exigence pédagogique et sécurisée, un sérieux
            éditorial, un cadre de dialogue structuré.
          </p>
        </div>
      </Section>

      <Section
        theme="light"
        eyebrow="L'ADN de Splash"
        title="Un format de dialogue structuré"
        description="SPLASH est un format de dialogue structuré ancré dans l'univers du jeu vidéo / esport. Son identité repose sur des piliers :"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adn.map((p) => (
            <div key={p.title} className="rounded-xl2 border border-ink/8 bg-white p-7 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-splash-gradient text-white">
                <p.icon size={18} />
              </span>
              <p className="mt-5 font-display text-base font-semibold">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        theme="dark"
        eyebrow="Le triptyque SPLASH"
        title="Chaque épisode repose sur un triptyque"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {triptyque.map((t, i) => (
            <div key={t.title} className="rounded-xl2 border border-white/10 bg-white/[0.03] p-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                {i + 1}
              </span>
              <p className="mt-5 font-display text-base font-semibold">{t.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{t.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-white/50">
          Ce triptyque est constant. Il constitue la signature du format.
        </p>
      </Section>

      <Section
        theme="light"
        eyebrow="La méthode SPLASH"
        title="Trois principes opérationnels"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {methode.map((m, i) => (
            <div key={m.title} className="rounded-xl2 border border-ink/8 bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-600">
                {i + 1}. {m.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{m.description}</p>
              {m.items && (
                <ul className="mt-3 space-y-1.5 text-sm text-ink/60">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section
        theme="dark"
        eyebrow="Les thématiques Splash"
        title="Ce que les épisodes explorent"
        description="Au terme de chaque épisode, un dossier documenté est téléchargeable."
      >
        <div className="flex flex-wrap gap-2.5">
          {thematiques.map((t) => (
            <Badge key={t} tone="violet" className="!text-sm !font-medium">
              {t}
            </Badge>
          ))}
        </div>
      </Section>

      <Section theme="light" align="center">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl uppercase leading-tight tracking-tight text-ink md:text-4xl">
            SPLASH est un espace de dialogue visant à rendre l&apos;univers du jeu vidéo mieux
            compris et mieux vivable pour la communauté et au-delà, pour la société.
          </p>
          <Button href="/ressources" size="lg" className="mt-8">
            <FileDown size={18} /> Voir les Docs
          </Button>
        </div>
      </Section>
    </>
  );
}
