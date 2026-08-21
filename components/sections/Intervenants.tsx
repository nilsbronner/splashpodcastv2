import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import { intervenants } from "@/lib/data";

export default function Intervenants() {
  return (
    <Section
      id="intervenants"
      theme="dark"
      eyebrow="Les intervenants"
      title="Qui participe aux épisodes"
      description="Les personnes qui participent aux épisodes pour apporter leur vécu ou leur expertise."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {intervenants.map((person) => {
          const external = person.href?.startsWith("http");
          return (
          <a
            key={person.name}
            href={person.href ?? "#"}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="focus-ring group flex flex-col gap-4 rounded-xl3 border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-orange-400/40"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-splash-gradient text-lg font-semibold text-white">
              {person.name.slice(0, 2).toUpperCase()}
            </span>
            <div>
              <p className="font-display text-lg font-semibold">{person.name}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {person.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/8 px-2.5 py-1 text-[11px] font-medium text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 space-y-1 text-sm leading-relaxed text-white/55">
                {person.bio.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-white/40 transition-colors group-hover:text-orange-300">
              En savoir plus <ArrowUpRight size={14} />
            </span>
          </a>
          );
        })}
      </div>
    </Section>
  );
}
