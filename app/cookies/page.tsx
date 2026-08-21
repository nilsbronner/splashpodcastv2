import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Politique de cookies" };

export default function Cookies() {
  return (
    <LegalPage title="Politique de cookies" updated="16 août 2026">
      <p>
        Cette page décrit l&apos;usage des cookies et traceurs sur le site SPLASH. Elle sera
        complétée au fur et à mesure de la mise en place des outils techniques du site, en
        fonction de :
      </p>
      <ul>
        <li>la liste des cookies strictement nécessaires au fonctionnement du site ;</li>
        <li>les outils de mesure d&apos;audience utilisés ;</li>
        <li>la liste réelle des cookies et traceurs déposés, ainsi que leur finalité et leur durée de conservation ;</li>
        <li>les services et outils tiers intégrés au site : hébergement, YouTube, plateformes de podcast, outils d&apos;analyse, etc.</li>
      </ul>

      <h2>Le bandeau de gestion du consentement</h2>
      <p>
        Un bandeau de gestion du consentement à la récolte des cookies sera mis en place afin de
        vous permettre d&apos;accepter, de refuser ou de personnaliser les cookies non essentiels
        avant tout dépôt sur votre appareil.
      </p>

      <h2>Gérer vos préférences</h2>
      <p>
        Vous pouvez à tout moment modifier vos préférences ou vous opposer au dépôt de cookies
        depuis le bandeau de consentement ou les paramètres de votre navigateur.
      </p>

      <h2>En savoir plus</h2>
      <p>
        Pour toute question relative aux cookies et traceurs utilisés sur le site, consultez notre{" "}
        <a href="/confidentialite" className="underline hover:text-ink">
          politique de confidentialité
        </a>{" "}
        ou contactez-nous via le formulaire « Nous contacter ».
      </p>
    </LegalPage>
  );
}
