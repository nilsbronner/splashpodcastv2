import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Conditions générales d'utilisation" };

export default function Cgu() {
  return (
    <LegalPage title="Conditions générales d'utilisation" updated="16 août 2026">
      <p>
        Les présentes conditions générales d&apos;utilisation (CGU) régissent l&apos;accès et
        l&apos;utilisation du site SPLASH, édité par Skillcamp Strasbourg Esport, ainsi que de ses
        contenus, fonctionnalités et espaces communautaires associés (Discord).
      </p>
      <p>L&apos;utilisation du site implique l&apos;acceptation des présentes CGU.</p>

      <h2>Accès au site</h2>
      <p>
        SPLASH s&apos;efforce d&apos;assurer l&apos;accès au site dans les meilleures conditions
        possibles. L&apos;accès peut toutefois être temporairement interrompu, notamment pour des
        opérations de maintenance, des mises à jour ou pour toute autre raison technique.
      </p>

      <h2>Contenus et témoignages</h2>
      <p>
        L&apos;utilisateur s&apos;engage à ne pas transmettre de contenu illicite, diffamatoire,
        injurieux, discriminatoire, haineux ou portant atteinte aux droits, à la vie privée ou à la
        réputation d&apos;un tiers.
      </p>
      <p>
        SPLASH se réserve le droit de ne pas donner suite à un témoignage, une contribution ou une
        demande de contact.
      </p>
      <p>
        L&apos;envoi d&apos;un témoignage ne garantit ni sa publication ni son utilisation dans un
        épisode de SPLASH.
      </p>

      <h2>Publication des témoignages</h2>
      <p>
        Lorsqu&apos;un témoignage est susceptible d&apos;être utilisé ou diffusé par SPLASH, les
        modalités de son utilisation sont définies avec son auteur avant toute publication.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les contenus présents sur le site SPLASH, notamment les textes, éléments graphiques, logos,
        photographies, vidéos, contenus audio et éléments d&apos;identité visuelle, sont protégés
        par les droits de propriété intellectuelle applicables et demeurent la propriété de leurs
        titulaires respectifs.
      </p>
      <p>
        Sauf autorisation préalable ou exception prévue par la loi, toute reproduction,
        représentation, modification ou exploitation de tout ou partie de ces contenus est
        interdite.
      </p>

      <h2>Discord</h2>
      <p>
        L&apos;accès à la communauté Discord SPLASH est soumis au respect d&apos;une charte de
        modération, disponible directement sur le serveur. Tout comportement contraire à cette
        charte peut entraîner une exclusion.
      </p>
      <p>
        L&apos;utilisation de Discord est également soumise aux conditions d&apos;utilisation et
        aux règles propres à cette plateforme.
      </p>

      <h2>Liens et services externes</h2>
      <p>
        Le site peut contenir des liens vers des sites ou services exploités par des tiers. SPLASH
        n&apos;exerce aucun contrôle sur ces services externes et n&apos;est pas responsable de leur
        fonctionnement, de leur contenu ou de leurs pratiques, sous réserve des obligations légales
        applicables.
      </p>

      <h2>Responsabilité</h2>
      <p>
        SPLASH s&apos;attache à proposer des contenus rigoureux, documentés et fondés sur
        l&apos;échange avec des professionnels, chercheurs et acteurs concernés, notamment avec
        l&apos;appui de RESET.
      </p>
      <p>
        Malgré cette démarche, les contenus proposés ne sauraient se substituer, lorsqu&apos;un
        sujet l&apos;exige, à un diagnostic, un avis ou un accompagnement individuel délivré par un
        professionnel compétent.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données personnelles effectué dans le cadre de l&apos;utilisation du site
        est décrit dans la{" "}
        <a href="/confidentialite" className="underline hover:text-ink">
          Politique de confidentialité
        </a>{" "}
        de SPLASH.
      </p>

      <h2>Modification des CGU</h2>
      <p>
        SPLASH peut modifier les présentes CGU afin de tenir compte de l&apos;évolution du site, de
        ses fonctionnalités ou de la réglementation applicable. La version en vigueur est celle
        publiée sur le site à la date de consultation.
      </p>

      <h2>Droit applicable</h2>
      <p>Les présentes CGU sont soumises au droit français.</p>
    </LegalPage>
  );
}
