import { CalendarClock, Play, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import { episodes } from "@/lib/data";

export default function Episodes() {
  return (
    <Section
      id="episodes"
      theme="dark"
      eyebrow="Les épisodes"
      title="Saison 1"
      description="Un nouvel épisode le premier mercredi de chaque mois."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {episodes.map((ep) => (
          <article
            key={ep.id}
            className={
              ep.available
                ? "group flex flex-col overflow-hidden rounded-xl3 border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40"
                : "flex flex-col overflow-hidden rounded-xl3 border border-white/10 bg-white/[0.03] opacity-50"
            }
          >
            <div className="relative flex aspect-video items-center justify-center bg-splash-gradient">
              <span className="absolute left-4 top-4 rounded-full bg-ink/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                Épisode {ep.number}
              </span>
              {ep.available ? (
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-ink transition-transform group-hover:scale-105">
                  <Play size={22} className="ml-0.5" />
                </span>
              ) : (
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/40 text-white/70 backdrop-blur">
                  <CalendarClock size={22} />
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex flex-wrap items-center gap-1.5">
                {ep.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/8 px-2.5 py-1 text-[11px] font-medium text-white/60"
                  >
                    {tag}
                  </span>
                ))}
                {!ep.available && (
                  <span className="rounded-full bg-orange-500/15 px-2.5 py-1 text-[11px] font-medium text-orange-300">
                    Bientôt disponible
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug">{ep.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{ep.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/45">
                <span>{ep.guests}</span>
                <span className="flex items-center gap-1">
                  <Clock size={13} /> {ep.duration}
                </span>
              </div>
              <p className="mt-3 text-xs font-medium text-white/45">{ep.releaseDate}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
