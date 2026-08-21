import { CalendarDays } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { actualites, episodes } from "@/lib/data";

export default function Actualites() {
  return (
    <section id="actualites" className="relative py-24 md:py-32 bg-ink text-cream">
      <Container>
        <div className="mb-14 md:mb-20">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-1.5 text-sm font-medium tracking-wide text-orange-300">
            Actualités
          </p>
          <h2 className="font-display text-2xl uppercase leading-[0.95] tracking-tight md:text-4xl">
            Les dernières nouvelles de SPLASH
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
            Retrouvez ici les enregistrements publics, les sorties d&apos;épisodes, les temps forts
            et les prochains rendez-vous de SPLASH.
          </p>
        </div>

        <div className="space-y-6">
          {actualites.map((actu) => (
            <article
              key={actu.id}
              className="rounded-xl3 border border-white/10 bg-white/[0.03] p-8 md:p-10"
            >
              <p className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-1.5 text-xs font-medium text-white/60">
                <CalendarDays size={14} /> {actu.date}
              </p>
              <h3 className="mt-5 font-display text-xl uppercase leading-[0.95] tracking-tight md:text-3xl">
                {actu.title}
              </h3>
              <div className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-white/65 md:text-base">
                {actu.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="font-semibold text-white">{actu.question}</p>
                <p>{actu.pageClosing}</p>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button
                  href={actu.primaryCta.href}
                  target={actu.primaryCta.external ? "_blank" : undefined}
                  rel={actu.primaryCta.external ? "noopener noreferrer" : undefined}
                  size="md"
                >
                  {actu.primaryCta.label}
                </Button>
                <Button
                  href={actu.secondaryCta.href}
                  target={actu.secondaryCta.external ? "_blank" : undefined}
                  rel={actu.secondaryCta.external ? "noopener noreferrer" : undefined}
                  variant="outlineLight"
                  size="md"
                >
                  {actu.secondaryCta.label}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-xl3 border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <h3 className="font-display text-xl uppercase leading-[0.95] tracking-tight md:text-2xl">
            Calendrier des sorties
          </h3>
          <p className="mt-2 text-sm text-white/50">Un nouvel épisode le premier mercredi de chaque mois.</p>
          <ul className="mt-6 divide-y divide-white/10">
            {episodes.map((ep) => (
              <li key={ep.id} className="flex items-center justify-between gap-4 py-3 text-sm">
                <span className="font-medium text-white/85">Épisode {ep.number}</span>
                <span className="text-white/50">{ep.releaseDate}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
