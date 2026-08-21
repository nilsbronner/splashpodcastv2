# SPLASH — site web (v2, alternative)

Proposition de site alternative pour **SPLASH** (« Ça change la vie et le game ! » — l'onde de
soin dans le jeu vidéo), un podcast qui cherche à comprendre ce qui se joue derrière les préjugés,
les stéréotypes et les idées reçues dans le jeu vidéo et l'esport. Un projet porté par
**Skillcamp**, produit par **BEMOTION**, avec l'apport scientifique de **RESET**.

Cette version reprend le système de design et l'architecture technique du site v1, mais réorganise
entièrement le contenu et la navigation suivant le brief fourni (nom, ton, information
architecture, textes légaux).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) — design system SPLASH basé sur la charte graphique
  fournie : crème `#F8F0EA`, noir `#161616`, orange `#FF5011`, violet `#7F5CF9` / lavande `#A794D6`
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [lucide-react](https://lucide.dev/) pour les icônes

## Identité de marque

Les assets de marque (`public/brand/`) sont extraits de la charte graphique (DA/CG) fournie :
- `logo-wordmark-black.png` / `logo-wordmark-white.png` — le lettrage « Splash » façon graffiti
- `icon-orange.png` — le pictogramme éclaboussure/étincelle
- `pattern-blobs.png` — la texture organique utilisée comme bande décorative (masque CSS
  recolorable, voir `Hero.tsx`)

**Typographies** : **Anton** (titres, condensé/majuscules) et **Plus Jakarta Sans** en substitut de
Satoshi (texte courant, non distribué via Google Fonts). Pour un rendu fidèle à 100 %, remplacer
par les fichiers Satoshi auto-hébergés (`@font-face`) dans `app/layout.tsx`.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run lint    # lint
```

## Architecture du site

Une **home condensée** qui convertit, avec un teaser court par grande partie du projet, chacun
renvoyant vers une **page dédiée** plus fournie.

- `app/page.tsx` — la home, dans l'ordre du brief :
  1. `Hero` — premier écran
  2. `PourquoiSplash` — pourquoi le nom SPLASH ?
  3. `ActualiteHome` — dernière actualité, avec lien vers l'historique complet
  4. `RessourcesTeaser`
  5. `CommunauteTeaser`
  6. `CharteHome` — #PlayGG, charte pour un esport mixte et responsable
- Navigation (`lib/nav.ts`) — huit onglets : Les épisodes · L'équipe · Les intervenants ·
  Ressources · Communauté · Actualités · Nos soutiens · Presse.
- Pages dédiées, chacune `PageHeader` (lien retour) + le(s) composant(s) complet(s) de
  `components/sections/` + un `CtaBanner` de conversion en bas quand pertinent :
  - `/episodes` — `Episodes`
  - `/equipe` — `Equipe` (Lucia, Nils, Matteo, Olivier, Alexandre)
  - `/intervenants` — `Intervenants` (Alexandre, Dr Louis-Marie d'Ussel, Lilith)
  - `/ressources` — `Ressources`
  - `/communaute` — `Communaute`
  - `/actualites` — `Actualites` (historique complet)
  - `/soutenir` — `Soutiens` + `PourquoiSoutenir` + `Participer` (nav : « Nos soutiens »)
  - `/presse` — `Presse`
  - `/charte` — `Charte` (#PlayGG, non listée en nav, accessible depuis la home et le footer)
  - `/temoigner` — `Temoigner` (formulaire de contact, accessible depuis le footer « Contact »)
  - `/{mentions-legales,confidentialite,cgu,cgv,cookies}` — pages légales

- `components/sections/` — le contenu complet de chaque partie.
- `components/teasers/` — la version condensée de certaines sections pour la home.
- `components/ui/Teaser.tsx` — le composant générique derrière les teasers home.
- `components/ui/PageHeader.tsx` / `CtaBanner.tsx` — chrome partagé des pages dédiées.
- `lib/data.ts` — contenu structuré (épisodes, équipe, intervenants, actualités, soutiens, presse).
- `lib/nav.ts` — liens de navigation et liens de footer.

Pour ajouter du contenu à une page dédiée, éditer directement le composant correspondant dans
`components/sections/` — il est partagé, donc toute modification s'applique à sa page.

## Contenu v2 — à savoir

- Les visuels (plateau, logos partenaires, photos presse) sont pour l'instant des placeholders
  stylisés (dégradés, initiales) en attendant les vraies photos/captures.
- Le formulaire « Témoigner » est fonctionnel côté interface (validation, états) mais n'est pas
  encore relié à un backend / service d'envoi — à connecter avant mise en production.
- La page `/charte` présente le cadre #PlayGG (les trois piliers) ; le texte complet des articles
  de la Charte reste à rédiger et à publier.
- La section Actualités (home + `/actualites`) est pilotée par `lib/data.ts` (`actualites`) : un
  bloc éditorial vivant à mettre à jour au fil des annonces (nouvel épisode, prochain rendez-vous).
- La section Presse liste les livrables attendus, marqués « Bientôt disponible » : à remplacer par
  les vrais fichiers téléchargeables dès qu'ils existent.
- Les mentions légales et pages légales reprennent le texte détaillé du brief (Skillcamp
  Strasbourg Esport, SIREN 940 735 251) ; les champs `[à compléter]` restent à remplir avec les
  informations réelles (directeur de publication, hébergeur, emails de contact, durées de
  conservation).
