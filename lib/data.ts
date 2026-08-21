export interface Episode {
  id: string;
  number: number;
  tags: string[];
  title: string;
  summary: string;
  guests: string;
  duration: string;
  releaseDate: string;
  available: boolean;
}

export const episodes: Episode[] = [
  {
    id: "stereotypes-prejuges",
    number: 1,
    tags: ["Stéréotypes", "préjugés"],
    title: "Stéréotypes, préjugés et préjudices",
    summary:
      "Le premier épisode de Splash sera consacré aux stéréotypes, aux préjugés et aux préjudices liés aux jeux vidéo et à l'esport.",
    guests: "Aurélien Pelte, joueur · Olivier Luttringer, Président de Reset",
    duration: "[Durée]",
    releaseDate: "Premier mercredi d'octobre 2026",
    available: false,
  },
  {
    id: "addiction-sante",
    number: 2,
    tags: ["Addiction", "Santé"],
    title: "Quand peut-on parler d'addiction au jeu vidéo ?",
    summary: "Le deuxième épisode s'intéressera à ce qui se joue derrière une addiction au jeu vidéo.",
    guests:
      "Gabriel Fauré, joueur · Dr Louis-Marie d'Ussel, addictologue, responsable médical en addictologie aux Hôpitaux universitaires de Strasbourg",
    duration: "[Durée]",
    releaseDate: "Premier mercredi de novembre 2026",
    available: false,
  },
  {
    id: "mixite-esport",
    number: 3,
    tags: ["Diversité", "mixité", "joueuses"],
    title: "La mixité au sein des équipes est-elle un atout pour l'esport ?",
    summary:
      "Enregistré en public aux Strasbourg Esport Days : entre témoignage vécu, données de recherche sur la représentation et pistes concrètes pour les organisations, un état des lieux sans détour.",
    guests: "Joueuse compétitive · Sociologue du sport",
    duration: "55 min",
    releaseDate: "Premier mercredi de décembre 2026",
    available: false,
  },
  {
    id: "episode-4",
    number: 4,
    tags: ["À venir"],
    title: "[Titre de l'épisode]",
    summary: "[Présentation de l'épisode]",
    guests: "[Intervenants]",
    duration: "[Durée]",
    releaseDate: "Premier mercredi de janvier 2027",
    available: false,
  },
  {
    id: "episode-5",
    number: 5,
    tags: ["À venir"],
    title: "[Titre de l'épisode]",
    summary: "[Présentation de l'épisode]",
    guests: "[Intervenants]",
    duration: "[Durée]",
    releaseDate: "Premier mercredi de février 2027",
    available: false,
  },
  {
    id: "episode-6",
    number: 6,
    tags: ["À venir"],
    title: "[Titre de l'épisode]",
    summary: "[Présentation de l'épisode]",
    guests: "[Intervenants]",
    duration: "[Durée]",
    releaseDate: "Premier mercredi de mars 2027",
    available: false,
  },
];

export type SupportTier = "sponsors" | "mecenes" | "partenaires";

export interface Supporter {
  name: string;
  description: string;
  tier: SupportTier;
  href?: string;
  placeholder?: boolean;
}

export const supporters: Supporter[] = [
  {
    name: "Votre marque ici",
    description: "Exemple de sponsor — à remplacer par un partenaire réel.",
    tier: "sponsors",
    placeholder: true,
  },
  {
    name: "Votre marque ici",
    description: "Exemple de sponsor — à remplacer par un partenaire réel.",
    tier: "sponsors",
    placeholder: true,
  },
  {
    name: "Fondation exemple",
    description: "Exemple de mécène — à remplacer par un partenaire réel.",
    tier: "mecenes",
    placeholder: true,
  },
  {
    name: "Fondation exemple",
    description: "Exemple de mécène — à remplacer par un partenaire réel.",
    tier: "mecenes",
    placeholder: true,
  },
  {
    name: "Fondation exemple",
    description: "Exemple de mécène — à remplacer par un partenaire réel.",
    tier: "mecenes",
    placeholder: true,
  },
  {
    name: "Skillcamp",
    description: "Structure porteuse du projet SPLASH.",
    tier: "partenaires",
    href: "#",
  },
  {
    name: "Le Grub",
    description: "Studio de tournage — lieu où est tourné le podcast SPLASH.",
    tier: "partenaires",
    href: "#",
  },
  {
    name: "Bemotion",
    description: "Partenaire production audiovisuelle : podcast, plateau, direction artistique vidéo.",
    tier: "partenaires",
    href: "#",
  },
  {
    name: "Reset",
    description: "Association dédiée à la prévention santé dans le numérique, le jeu vidéo et l'e-sport.",
    tier: "partenaires",
    href: "https://reset-association.vercel.app/",
  },
];

export interface ParticiperCard {
  title: string;
  description: string;
  cta: string;
  href: string;
}

export const participerCards: ParticiperCard[] = [
  {
    title: "Devenir bénévole",
    description:
      "Recherche audio, community management, recherche documentaire, design, développement web : chaque compétence compte.",
    cta: "Proposer mon aide",
    href: "/temoigner",
  },
  {
    title: "Devenir partenaire",
    description: "Contribuez techniquement ou humainement au projet et gagnez en visibilité auprès de notre communauté.",
    cta: "Devenir partenaire",
    href: "/temoigner",
  },
  {
    title: "Devenir sponsor",
    description: "Soutenez financièrement SPLASH et associez votre marque à un projet à impact durable.",
    cta: "Devenir sponsor",
    href: "/temoigner",
  },
  {
    title: "Devenir mécène",
    description: "Un soutien libre, sans objectif commercial, pour permettre à SPLASH de rester indépendant.",
    cta: "Devenir mécène",
    href: "/temoigner",
  },
  {
    title: "Proposer une expertise",
    description: "Chercheur, professionnel de santé, juriste, spécialiste esport : partagez votre regard avec la communauté.",
    cta: "Proposer une expertise",
    href: "/temoigner",
  },
  {
    title: "Intervenir dans un épisode",
    description: "Vécu, expertise ou facilitation : rejoignez le triptyque d'un prochain épisode SPLASH.",
    cta: "Candidater",
    href: "/temoigner",
  },
  {
    title: "Organiser un événement ensemble",
    description: "Viewing party, conférence, tournoi solidaire : construisons un temps fort commun.",
    cta: "Proposer un événement",
    href: "/temoigner",
  },
];

export interface PressAsset {
  label: string;
  description: string;
}

export const pressAssets: PressAsset[] = [
  { label: "Présentation courte de SPLASH", description: "Le projet en une page : pitch, ligne éditoriale, partenaires" },
  { label: "Dossier de presse", description: "Présentation complète du projet, de son équipe et de ses ambitions" },
  { label: "Communiqué(s) de presse", description: "Annonces officielles liées au lancement et aux temps forts de SPLASH" },
  { label: "Logos", description: "Fichiers vectoriels et rasterisés, fonds clair et sombre" },
  { label: "Photos / visuels officiels", description: "Visuels plateau, équipe et événements en haute définition" },
  { label: "Présentation de l'équipe", description: "Bios et rôles de l'équipe qui conçoit et produit SPLASH" },
  { label: "Présentation des épisodes", description: "Résumés et angles éditoriaux de chaque épisode de la saison 1" },
];

export interface TeamMember {
  name: string;
  org: "Skillcamp" | "Bemotion" | "Reset";
  role: string;
  href?: string;
}

export const team: TeamMember[] = [
  {
    name: "Lucia",
    org: "Skillcamp",
    role: "Porteuse du projet, ligne éditoriale",
    href: "#",
  },
  {
    name: "Nils",
    org: "Bemotion",
    role: "Production",
    href: "#",
  },
  {
    name: "Matteo",
    org: "Bemotion",
    role: "Production",
    href: "#",
  },
  {
    name: "Olivier",
    org: "Reset",
    role: "Président",
    href: "https://reset-association.vercel.app/",
  },
  {
    name: "Alexandre",
    org: "Reset",
    role: "Animation",
    href: "https://reset-association.vercel.app/",
  },
];

export interface Intervenant {
  name: string;
  tags: string[];
  bio: string[];
  href?: string;
}

export const intervenants: Intervenant[] = [
  {
    name: "Alexandre",
    tags: ["Reset", "Animation", "Psychologie", "Épistémologie"],
    bio: ["Anime les échanges et met en perspective les sujets abordés à l'antenne."],
    href: "https://reset-association.vercel.app/",
  },
  {
    name: "Dr Louis-Marie d'Ussel",
    tags: ["Psychiatre", "Addictologue"],
    bio: [
      "Hôpitaux Universitaires de Strasbourg.",
      "Responsable médical du CSAPA de la Médicale B.",
      "Référent des addictions comportementales.",
    ],
    href: "#",
  },
  {
    name: "Lilith",
    tags: ["Joueuse de League of Legends", "Créatrice de contenu"],
    bio: ["Partage son vécu de joueuse et de créatrice pour éclairer les sujets traités dans les épisodes."],
    href: "#",
  },
];

export interface Actualite {
  id: string;
  date: string;
  title: string;
  body: string[];
  question: string;
  homeClosing: string;
  pageClosing: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta: { label: string; href: string; external?: boolean };
}

export const actualites: Actualite[] = [
  {
    id: "splash-strasbourg-esport-days",
    date: "6 septembre 2026",
    title: "Enregistrement public de Splash aux SED",
    body: [
      "Le troisième épisode de SPLASH sera enregistré en public le 6 septembre à 10h, au Palais de la musique et des congrès de Strasbourg, dans le cadre des Strasbourg Esport Days.",
    ],
    question: "La mixité des équipes est-elle un atout pour l'esport ?",
    homeClosing: "Venez assister au débat en direct et poser vos questions.",
    pageClosing: "Venez assister à l'enregistrement de l'épisode 3 et découvrir la conversation en direct.",
    primaryCta: { label: "En savoir plus sur l'épisode 3", href: "/episodes" },
    secondaryCta: { label: "Venir aux SED", href: "https://www.strasbourg-esport.fr/", external: true },
  },
];
