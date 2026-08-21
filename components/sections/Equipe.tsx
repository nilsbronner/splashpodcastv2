import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import { team } from "@/lib/data";

const orgTone: Record<string, string> = {
  Skillcamp: "bg-orange-50 text-orange-700",
  Bemotion: "bg-violet-50 text-violet-700",
  Reset: "bg-ink/5 text-ink/60",
};

export default function Equipe() {
  return (
    <Section
      id="equipe"
      theme="light"
      eyebrow="L'équipe"
      title="Qui fait SPLASH"
      description="Les personnes qui conçoivent, produisent, portent et font vivre SPLASH."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => {
          const external = member.href?.startsWith("http");
          return (
          <a
            key={member.name}
            href={member.href ?? "#"}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="focus-ring group flex flex-col gap-4 rounded-xl3 border border-ink/8 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-400/40"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-splash-gradient text-lg font-semibold text-white">
              {member.name.slice(0, 2).toUpperCase()}
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-ink">{member.name}</p>
              <span
                className={`mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${orgTone[member.org]}`}
              >
                {member.org}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{member.role}</p>
            </div>
            <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-ink/40 transition-colors group-hover:text-orange-600">
              En savoir plus <ArrowUpRight size={14} />
            </span>
          </a>
          );
        })}
      </div>
    </Section>
  );
}
