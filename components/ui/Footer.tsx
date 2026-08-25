import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { footerLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-white/10 bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-wordmark-white.png"
              alt="SPLASH"
              width={140}
              height={53}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Ça change la vie et le game ! L&apos;onde de soin dans le jeu vidéo.
            </p>
            <p className="mt-6 text-xs uppercase tracking-wide text-white/40">Un projet porté par</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/70">
              <a
                href="https://skillcamp.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded underline decoration-white/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
              >
                Skillcamp Strasbourg Esport
              </a>
              <span className="text-white/30">·</span>
              <a
                href="https://www.le-grub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded underline decoration-white/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
              >
                Grub Production
              </a>
              <span className="text-white/30">·</span>
              <span>
                Apport scientifique{" "}
                <a
                  href="https://reset-association.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded underline decoration-white/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
                >
                  Reset
                </a>
              </span>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-white/90">Informations légales</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {footerLinks.legal.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.href}>
                    {external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring rounded transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="focus-ring rounded transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-white/90">Suivre SPLASH</p>
            <ul className="space-y-2.5 text-sm text-white/60">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring rounded transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SPLASH — Tous droits réservés.</p>
          <p>
            <a
              href="https://skillcamp.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
            >
              Skillcamp
            </a>{" "}
            ×{" "}
            <a
              href="https://www.le-grub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
            >
              Grub Production
            </a>{" "}
            ×{" "}
            <a
              href="https://reset-association.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded underline decoration-white/20 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
            >
              Reset
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
