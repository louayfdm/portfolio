import type { Project } from './types';

const en: Project = {
  slug: 'max-it-orange',
  client: 'Max it, Orange MEA',
  color: '#FF7900',
  ink: '#000000',
  year: '2022 to 2023',
  title: 'Two apps and a marketplace, merged into one super app.',
  summary: 'Orange’s super app for self-care, Orange Money and a marketplace, built as one core product for eight markets in Africa and the Middle East.',
  card: 'Self-care, Orange Money and a marketplace in one super app, one core product for eight markets.',
  tags: ['Super app', 'Marketplace', '8 markets'],
  cover: [{ img: 'maxit/welcome-light', kind: 'phone', alt: 'Max it home' }, { img: 'maxit/marketplace', kind: 'phone', alt: 'Max it marketplace' }, { img: 'maxit/orange-money', kind: 'phone', alt: 'Orange Money inside Max it' }],
  role: 'Product designer',
  meta: [
    { label: 'Role', value: 'Product designer: marketplace and shared flows' },
    { label: 'Team', value: '1 lead designer, 2 product designers, 1 art director, 1 motion designer, 1 graphic designer' },
    { label: 'Client', value: 'Orange MEA, with Keyrus' },
    { label: 'My phases', value: 'Bid, scoping and first release of the core product' },
  ],
  stats: [
    { value: '8', label: 'markets on the core product' },
    { value: '3', label: 'products merged into one app' },
    { value: '2', label: 'themes, light and dark' },
  ],
  hero: [
    { img: 'maxit/welcome-light', kind: 'phone', alt: 'Max it welcome screen in light mode' },
    { img: 'maxit/marketplace', kind: 'phone', alt: 'Max it marketplace screen' },
    { img: 'maxit/welcome-dark', kind: 'phone', alt: 'Max it welcome screen in dark mode' },
  ],
  blocks: [
    {
      type: 'wide',
      heading: 'Three experiences for one customer',
      paras: ['Before Max it, an Orange customer used My Orange for their line, Orange Money for payments, and My Place, a webview inside My Orange that sold value-added services. Max it brings the three into one native app.'],
      shots: [
        { img: 'maxit/old-my-orange', kind: 'phone', alt: 'Previous My Orange self-care app', caption: 'My Orange: the line.' },
        { img: 'maxit/old-orange-money', kind: 'phone', alt: 'Previous Orange Money app', caption: 'Orange Money: payments.' },
        { img: 'maxit/old-my-place', kind: 'phone', alt: 'Previous My Place marketplace in a webview', caption: 'My Place: a webview of services.' },
      ],
    },
    {
      type: 'list',
      heading: 'One core product, eight markets',
      intro: 'The team named three challenges at the start: help people discover services without drowning them, give them a reason to come back every day, and keep every journey consistent inside one app.',
      points: [
        { title: 'Eight markets', text: 'The full app in six countries, the marketplace only in Morocco and Egypt. Each country adapts its menu.' },
        { title: 'Slow networks', text: 'Many customers browse on connections that make heavy screens painful.' },
        { title: 'Literacy', text: '33% of adults in Sub-Saharan Africa cannot read (World Bank, 2020). Actions had to be clear without reading.' },
        { title: 'One brand, many products', text: 'Care, money and shopping had to feel like Orange, not like three teams.' },
      ],
    },
    {
      type: 'decisions',
      heading: 'Key decisions',
      items: [
        {
          title: 'A native marketplace instead of a webview',
          paras: ['My part of the app. The marketplace moved from a webview of value-added services to a native module: services, gift cards, events with ticketing, and telecom offers. Countries that sell phones and accessories plug their e-shop into one of its menus.'],
          shots: [{ img: 'maxit/marketplace', kind: 'phone', alt: 'Max it marketplace', caption: 'The marketplace: services, gift cards, events and offers.' }],
        },
        {
          title: 'Buttons that explain themselves',
          paras: ['Quick actions use illustrations, not just icons, so people who cannot read still know what each button does. The product team tested them first, then Orange tested the validated versions.'],
          shots: [{ img: 'maxit/slide-buttons', kind: 'frame', alt: 'Illustrated quick action buttons', caption: 'Illustrated quick actions: the meaning comes from the picture.' }],
        },
        {
          title: 'Pay the merchant, don’t browse the merchants',
          paras: ['The scope included a directory of Orange Money partners, one page per merchant. There were too many, and the directory buried payment inside the marketplace. Orange dropped it. What people needed was to pay, and the QR scanner already sat on the Orange Money tab, one tap away.'],
          shots: [{ img: 'maxit/orange-money', kind: 'phone', alt: 'Orange Money tab in Max it', caption: 'Orange Money: payment first.' }],
        },
        {
          title: 'Mini-programs where the task starts',
          paras: ['Partner mini-programs have no tab of their own. They open from quick actions on the home, My Line or Orange Money, and run as mini apps inside Max it.'],
        },
        {
          title: 'We pitched more than the brief',
          paras: ['Orange asked for a super app with a marketplace. We also designed a creators space and a loyalty program across the app. Flows and screens were ready. Orange kept the core: budgets were tight, networks are often slow, and the goal was an app people open every day because it is fast and clear.'],
        },
        {
          title: 'The flows every screen depends on',
          paras: ['Beyond the marketplace, I designed the shared parts of the app: sign-in, profile, notifications, empty states and error states.'],
          shots: [{ img: 'maxit/profile', kind: 'phone', alt: 'Max it profile screen', caption: 'Profile and account.' }],
        },
      ],
    },
    {
      type: 'row',
      heading: 'The app',
      intro: 'Welcome, Orange Money, My Line and Marketplace: the core product as first shipped.',
      shots: [
        { img: 'maxit/welcome-light', kind: 'phone', alt: 'Welcome screen, light', caption: 'Welcome, light mode.' },
        { img: 'maxit/welcome-dark', kind: 'phone', alt: 'Welcome screen, dark', caption: 'Welcome, dark mode.' },
        { img: 'maxit/my-line', kind: 'phone', alt: 'My Line screen', caption: 'My Line: balance, usage and passes.' },
        { img: 'maxit/orange-money', kind: 'phone', alt: 'Orange Money screen', caption: 'Orange Money: pay, send and scan.' },
        { img: 'maxit/marketplace', kind: 'phone', alt: 'Marketplace screen', caption: 'Marketplace: services, gift cards and events.' },
      ],
    },
    {
      type: 'split',
      heading: 'A system that grew with the product',
      paras: [
        'I built the first atoms, molecules and organisms for the marketplace and the shared flows, on Atomic Design and Material 3, and set up the custom color palette on the Orange brand.',
        'The library has since grown to 1,398 components, with light and dark modes and English and Arabic variants.',
      ],
      shots: [
        { img: 'maxit/ds-light-dark', kind: 'frame', alt: 'The same card component in light and dark mode', caption: 'One component, two modes. Only the variable mode changes.' },
        { img: 'maxit/ds-scale', kind: 'frame', alt: 'Component counts and how atoms nest into organisms', caption: 'Atoms nest into molecules, then into cards and lists.' },
      ],
    },
    {
      type: 'close',
      heading: 'Where it stands',
      points: [
        'The core product launched first in Côte d’Ivoire and Cameroon.',
        'Max it runs on it in eight markets: the full app in six, the marketplace only in Morocco and Egypt.',
      ],
      reflection: 'A super app is decided as much by what you leave out. The modules we cut kept the app fast on the networks it runs on.',
    },
  ],
};

const fr: Project = {
  ...en,
  client: 'Max it, Orange MEA',
  year: '2022 à 2023',
  title: 'Deux apps et une marketplace, réunies en une super app.',
  summary: 'La super app d’Orange pour l’espace client, Orange Money et une marketplace, construite comme un produit commun pour huit marchés en Afrique et au Moyen-Orient.',
  card: 'Espace client, Orange Money et marketplace dans une super app, un produit commun pour huit marchés.',
  tags: ['Super app', 'Marketplace', '8 marchés'],
  cover: [{ img: 'maxit/welcome-light', kind: 'phone', alt: 'Accueil Max it' }, { img: 'maxit/marketplace', kind: 'phone', alt: 'Marketplace Max it' }, { img: 'maxit/orange-money', kind: 'phone', alt: 'Orange Money dans Max it' }],
  role: 'Product designer',
  meta: [
    { label: 'Rôle', value: 'Product designer : marketplace et parcours transverses' },
    { label: 'Équipe', value: '1 lead designer, 2 product designers, 1 directeur artistique, 1 motion designer, 1 graphiste' },
    { label: 'Client', value: 'Orange MEA, avec Keyrus' },
    { label: 'Mes phases', value: 'Appel d’offres, cadrage et première version du produit commun' },
  ],
  stats: [
    { value: '8', label: 'marchés sur le produit commun' },
    { value: '3', label: 'produits réunis en une app' },
    { value: '2', label: 'thèmes, clair et sombre' },
  ],
  hero: [
    { img: 'maxit/welcome-light', kind: 'phone', alt: 'Accueil Max it en mode clair' },
    { img: 'maxit/marketplace', kind: 'phone', alt: 'Marketplace Max it' },
    { img: 'maxit/welcome-dark', kind: 'phone', alt: 'Accueil Max it en mode sombre' },
  ],
  blocks: [
    {
      type: 'wide',
      heading: 'Trois expériences pour un seul client',
      paras: ['Avant Max it, un client Orange utilisait My Orange pour sa ligne, Orange Money pour ses paiements, et My Place, une webview dans My Orange qui vendait des services à valeur ajoutée. Max it réunit les trois dans une seule app native.'],
      shots: [
        { img: 'maxit/old-my-orange', kind: 'phone', alt: 'Ancienne app My Orange', caption: 'My Orange : la ligne.' },
        { img: 'maxit/old-orange-money', kind: 'phone', alt: 'Ancienne app Orange Money', caption: 'Orange Money : les paiements.' },
        { img: 'maxit/old-my-place', kind: 'phone', alt: 'Ancienne marketplace My Place en webview', caption: 'My Place : une webview de services.' },
      ],
    },
    {
      type: 'list',
      heading: 'Un produit commun, huit marchés',
      intro: 'L’équipe a posé trois défis au départ : faire découvrir les services sans noyer l’utilisateur, lui donner une raison de revenir chaque jour, et garder chaque parcours cohérent dans une seule app.',
      points: [
        { title: 'Huit marchés', text: 'L’app complète dans six pays, la marketplace seule au Maroc et en Égypte. Chaque pays adapte son menu.' },
        { title: 'Des réseaux lents', text: 'Beaucoup de clients naviguent avec des connexions qui rendent les écrans lourds pénibles.' },
        { title: 'L’illettrisme', text: '33 % des adultes d’Afrique subsaharienne ne savent pas lire (Banque mondiale, 2020). Les actions devaient se comprendre sans lire.' },
        { title: 'Une marque, plusieurs produits', text: 'Ligne, argent et achats devaient ressembler à Orange, pas à trois équipes.' },
      ],
    },
    {
      type: 'decisions',
      heading: 'Les décisions clés',
      items: [
        {
          title: 'Une marketplace native au lieu d’une webview',
          paras: ['Ma partie de l’app. La marketplace passe d’une webview de services à valeur ajoutée à un module natif : services, cartes cadeaux, événements avec billetterie et offres télécom. Les pays qui vendent des téléphones et des accessoires branchent leur e-shop dans un de ses menus.'],
          shots: [{ img: 'maxit/marketplace', kind: 'phone', alt: 'Marketplace Max it', caption: 'La marketplace : services, cartes cadeaux, événements et offres.' }],
        },
        {
          title: 'Des boutons qui s’expliquent seuls',
          paras: ['Les actions rapides utilisent des illustrations, pas seulement des icônes, pour que les personnes qui ne savent pas lire comprennent chaque bouton. L’équipe produit les a testés d’abord, puis Orange a testé les versions validées.'],
          shots: [{ img: 'maxit/slide-buttons', kind: 'frame', alt: 'Boutons d’actions rapides illustrés', caption: 'Des actions rapides illustrées : le sens vient de l’image.' }],
        },
        {
          title: 'Payer le marchand, pas parcourir les marchands',
          paras: ['Le cadrage prévoyait un annuaire des partenaires Orange Money, avec une page par marchand. Ils étaient trop nombreux, et l’annuaire enfouissait le paiement dans la marketplace. Orange l’a retiré. Les gens avaient besoin de payer, et le scanner QR était déjà dans l’onglet Orange Money, à un clic.'],
          shots: [{ img: 'maxit/orange-money', kind: 'phone', alt: 'Onglet Orange Money dans Max it', caption: 'Orange Money : le paiement d’abord.' }],
        },
        {
          title: 'Les mini-programmes là où la tâche commence',
          paras: ['Les mini-programmes des partenaires n’ont pas d’onglet. Ils s’ouvrent depuis les actions rapides de l’accueil, de My Line ou d’Orange Money, et tournent comme des mini-apps dans Max it.'],
        },
        {
          title: 'Nous avons proposé plus que le brief',
          paras: ['Orange demandait une super app avec une marketplace. Nous avons aussi conçu un espace créateurs et un programme de fidélité pour toute l’app. Les parcours et les écrans étaient prêts. Orange a gardé l’essentiel : budget serré, réseaux souvent lents, et l’objectif d’une app qu’on ouvre chaque jour parce qu’elle est rapide et claire.'],
        },
        {
          title: 'Les parcours dont dépend chaque écran',
          paras: ['En plus de la marketplace, j’ai conçu les parties communes de l’app : connexion, profil, notifications, écrans vides et écrans d’erreur.'],
          shots: [{ img: 'maxit/profile', kind: 'phone', alt: 'Écran profil Max it', caption: 'Profil et compte.' }],
        },
      ],
    },
    {
      type: 'row',
      heading: 'L’app',
      intro: 'Welcome, Orange Money, My Line et Marketplace : le produit commun tel qu’il est sorti.',
      shots: [
        { img: 'maxit/welcome-light', kind: 'phone', alt: 'Accueil, mode clair', caption: 'Accueil, mode clair.' },
        { img: 'maxit/welcome-dark', kind: 'phone', alt: 'Accueil, mode sombre', caption: 'Accueil, mode sombre.' },
        { img: 'maxit/my-line', kind: 'phone', alt: 'Écran My Line', caption: 'My Line : solde, consommation et pass.' },
        { img: 'maxit/orange-money', kind: 'phone', alt: 'Écran Orange Money', caption: 'Orange Money : payer, envoyer, scanner.' },
        { img: 'maxit/marketplace', kind: 'phone', alt: 'Écran Marketplace', caption: 'Marketplace : services, cartes cadeaux et événements.' },
      ],
    },
    {
      type: 'split',
      heading: 'Un système qui a grandi avec le produit',
      paras: [
        'J’ai construit les premiers atomes, molécules et organismes de la marketplace et des parcours transverses, sur Atomic Design et Material 3, et mis en place la palette de couleurs sur la marque Orange.',
        'La bibliothèque compte aujourd’hui 1 398 composants, avec des modes clair et sombre et des variantes en anglais et en arabe.',
      ],
      shots: [
        { img: 'maxit/ds-light-dark', kind: 'frame', alt: 'Le même composant carte en mode clair et sombre', caption: 'Un composant, deux modes. Seul le mode des variables change.' },
        { img: 'maxit/ds-scale', kind: 'frame', alt: 'Nombre de composants et imbrication des atomes dans les organismes', caption: 'Les atomes s’imbriquent dans les molécules, puis dans les cartes et les listes.' },
      ],
    },
    {
      type: 'close',
      heading: 'Où en est le produit',
      points: [
        'Le produit commun est sorti d’abord en Côte d’Ivoire et au Cameroun.',
        'Max it tourne dessus dans huit marchés : l’app complète dans six, la marketplace seule au Maroc et en Égypte.',
      ],
      reflection: 'Une super app se décide aussi par ce qu’on retire. Les modules coupés ont gardé l’app rapide sur les réseaux où elle tourne.',
    },
  ],
};

export default { en, fr };
