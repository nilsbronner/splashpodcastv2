import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { actualites } from "@/lib/data";

export default function ActualiteHome() {
  const latest = actualites[0];

  return (
    <Section id="actualites" theme="dark" eyebrow="Actualités" title="Le prochain RDV">
      <div className="rounded-xl3 border border-white/10 bg-white/[0.03] p-8 md:p-12">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-1.5 text-xs font-medium text-white/60">
          <CalendarDays size={14} /> {latest.date}
        </p>
        <h3 className="mt-5 font-display text-2xl uppercase leading-[0.95] tracking-tight md:text-4xl">
          {latest.title}
        </h3>
        <div className="mt-5 max-w-2xl space-y-3 text-base leading-relaxed text-white/65">
          {latest.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="font-semibold text-white">{latest.question}</p>
          <p>{latest.homeClosing}</p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            href={latest.primaryCta.href}
            target={latest.primaryCta.external ? "_blank" : undefined}
            rel={latest.primaryCta.external ? "noopener noreferrer" : undefined}
            size="lg"
          >
            {latest.primaryCta.label}
          </Button>
          <Button
            href={latest.secondaryCta.href}
            target={latest.secondaryCta.external ? "_blank" : undefined}
            rel={latest.secondaryCta.external ? "noopener noreferrer" : undefined}
            variant="outlineLight"
            size="lg"
          >
            {latest.secondaryCta.label}
          </Button>
        </div>
      </div>

      <Link
        href="/actualites"
        className="focus-ring group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200"
      >
        Voir toutes les actualités
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </Section>
  );
}
