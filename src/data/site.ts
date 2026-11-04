import type { Lang, Project } from './types';
import zain from './zain';
import omniflow from './omniflow';
import maxit from './maxit';
import mt from './maroc-telecom';

export const LANGS: Lang[] = ['en', 'fr'];

const order = [zain, omniflow, maxit, mt];
export const projects = (lang: Lang): Project[] => order.map((p) => p[lang]);
export const project = (lang: Lang, slug: string) => projects(lang).find((p) => p.slug === slug)!;

export const CONTACT = {
  email: 'louaybnh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/louaybnh',
  web3formsKey: '6e29d7a8-76c1-470c-a87f-8d08f0311677',
};

// Real token values from the Zain design system file (Colors collection).
export const zainModes = [
  { id: 'consumers', name: 'Consumers', img: 'zain/home', primary: '#33666B', tertiary: '#00696F', container: '#B8ECF1', swirl: 'Default' },
  { id: 'business', name: 'Business', img: 'zain/home-business', primary: '#60578D', tertiary: '#2156CA', container: '#E6DEFF', swirl: 'business' },
  { id: 'highend', name: 'High-end', img: 'zain/home-highend', primary: '#090A0A', tertiary: '#4C4C4C', container: '#E4E2E1', swirl: 'VIP' },
];

export const t = {
  en: {
    meta: {
      title: 'Louay Ben Hassine, Lead Product Designer',
      description: 'Lead Product Designer at Keyrus MEA. Telecom super apps, back offices and design systems for operators across the Middle East and Africa.',
    },
    nav: { work: 'Work', systems: 'Systems', about: 'About', contact: 'Contact', cta: 'Get in touch', switch: 'Français', switchLabel: 'Lire en français', skip: 'Skip to content', home: 'Louay Ben Hassine, home' },
    hero: {
      h1a: 'Louay Ben Hassine',
      h1b: 'Lead Product Designer',
      lead: 'I design telecom super apps, the back offices that run them, and the design systems that let one product carry many brands.',
      facts: ['6+ years in product design', 'Keyrus MEA, Tunis', 'Operators across the Middle East and Africa'],
      primary: 'See the work',
      secondary: 'Download CV',
      cv: '/cv/Louay-Ben-Hassine-CV-EN.pdf',
      available: 'Open to lead and senior product design roles',
      copy: 'Copy email',
      copied: 'Email copied',
      role: 'Lead Product Designer at Keyrus MEA, Tunis',
    },
    work: { heading: 'Selected work', intro: 'Four products for telecom operators, all shipped and in use.', open: 'Read the case study' },
    systems: {
      heading: 'One component, many brands',
      lead: 'Every project here had to carry more than one look: segments, modes, client brands. The rule stayed the same each time: a brand change touches values, never structure.',
      try: 'Switch the Zain customer segment',
      tokens: 'Values that change',
      steps: [
        { name: 'Max it', text: 'First atoms, molecules and organisms, and a custom palette on Material 3.' },
        { name: 'Zain Bahrain', text: 'My first full variable system: colors, sizes and text, in three segment modes.' },
        { name: 'Maroc Telecom', text: 'A UI kit with no variables, rebuilt as eight color variables for a rebrand in four weeks.' },
        { name: 'Omniflow', text: 'Semantic tokens for B2C and B2B themes, with a guide for designers and developers.' },
      ],
    },
    about: {
      heading: 'About',
      paras: [
        'I’m a Lead Product Designer at Keyrus MEA in Tunis. Since 2021 I have designed products for telecom operators: Orange, Zain Bahrain, Maroc Telecom, and Keyrus’s own Omniflow suite.',
        'My work sits where consumer apps meet complex back ends: many account types, many countries, many ways to pay, and content the business wants to change without a release.',
        'I take projects from the bid and the scoping workshops to the final screens and the hand-off. I lead small design teams and work every day with product owners, developers and client marketing teams.',
      ],
      do: 'What I do',
      doList: ['Product design for mobile and web', 'Design systems, variables and tokens', 'Back offices and B2B tools', 'Scoping workshops with clients', 'UX writing', 'Hand-off to engineering'],
      exp: 'Experience',
      expList: [
        { role: 'Lead Product Designer', org: 'Keyrus MEA, Tunis', when: '2021 to today' },
        { role: 'UX/UI and graphic designer', org: 'Freelance, Tunisia and France', when: '2017 to today' },
        { role: 'UX/UI designer, intern', org: 'LADAPT Normandie, Rouen, France', when: '2020 to 2021' },
      ],
      tools: 'Tools',
      toolsList: 'Figma, FigJam, Adobe XD, Photoshop, Illustrator, Premiere Pro, ChatGPT, Claude, Gemini',
      edu: 'Education',
      eduText: 'Professional Master’s in Media Engineering, ISAMM, Manouba, 2020',
      langs: 'Languages',
      langsText: 'Arabic, French, English',
    },
    contact: {
      heading: 'Let’s talk',
      lead: 'Hiring for a lead, senior or product designer role, full-time or freelance, remote or on site? Send a few lines.',
      name: 'Your name',
      email: 'Your email',
      company: 'Company (optional)',
      message: 'Message',
      messageHint: 'The role or the project, and when you want to start.',
      send: 'Send message',
      sending: 'Sending…',
      ok: 'Message sent. I’ll reply by email.',
      error: 'The message did not go through. Write to me directly at louaybnh@gmail.com.',
      direct: 'Or write directly',
      subject: 'New message from the portfolio',
    },
    footer: { line: 'Lead Product Designer, Tunis', top: 'Back to top' },
    cs: { stats: 'In numbers', next: 'Next project', all: 'All work', reflection: 'What I’d keep', view: 'Open full screen', close: 'Close', contents: 'On this page', overview: 'Overview', live: 'Switch the customer segment', tokens: 'Values that change', read: 'Read the case study' },
    thanks: { title: 'Message sent', text: 'Thanks. I’ll reply by email.', back: 'Back to the portfolio' },
    notFound: { title: 'This page does not exist', back: 'Go to the home page' },
  },
  fr: {
    meta: {
      title: 'Louay Ben Hassine, Lead Product Designer',
      description: 'Lead Product Designer chez Keyrus MEA. Super apps télécom, back offices et design systems pour des opérateurs au Moyen-Orient et en Afrique.',
    },
    nav: { work: 'Projets', systems: 'Systèmes', about: 'À propos', contact: 'Contact', cta: 'Me contacter', switch: 'English', switchLabel: 'Read in English', skip: 'Aller au contenu', home: 'Louay Ben Hassine, accueil' },
    hero: {
      h1a: 'Louay Ben Hassine',
      h1b: 'Lead Product Designer',
      lead: 'Je conçois des super apps télécom, les back offices qui les pilotent, et les design systems qui permettent à un même produit de porter plusieurs marques.',
      facts: ['Plus de 6 ans en product design', 'Keyrus MEA, Tunis', 'Opérateurs au Moyen-Orient et en Afrique'],
      primary: 'Voir les projets',
      secondary: 'Télécharger le CV',
      cv: '/cv/Louay-Ben-Hassine-CV-FR.pdf',
      available: 'Ouvert aux postes de lead et senior product designer',
      copy: 'Copier l’e-mail',
      copied: 'E-mail copié',
      role: 'Lead Product Designer chez Keyrus MEA, Tunis',
    },
    work: { heading: 'Projets choisis', intro: 'Quatre produits pour des opérateurs télécom, tous livrés et utilisés.', open: 'Lire l’étude de cas' },
    systems: {
      heading: 'Un composant, plusieurs marques',
      lead: 'Chaque projet devait porter plus d’une apparence : segments, modes, marques clientes. La règle est restée la même : un changement de marque touche les valeurs, jamais la structure.',
      try: 'Changer de segment client Zain',
      tokens: 'Les valeurs qui changent',
      steps: [
        { name: 'Max it', text: 'Les premiers atomes, molécules et organismes, et une palette sur mesure sur Material 3.' },
        { name: 'Zain Bahrain', text: 'Mon premier système complet en variables : couleurs, tailles et textes, en trois modes de segment.' },
        { name: 'Maroc Telecom', text: 'Un UI kit sans variables, reconstruit en huit variables de couleur pour un rebranding en quatre semaines.' },
        { name: 'Omniflow', text: 'Des tokens sémantiques pour les thèmes B2C et B2B, avec un guide pour les designers et les développeurs.' },
      ],
    },
    about: {
      heading: 'À propos',
      paras: [
        'Je suis Lead Product Designer chez Keyrus MEA, à Tunis. Depuis 2021, je conçois des produits pour des opérateurs télécom : Orange, Zain Bahrain, Maroc Telecom et la suite Omniflow de Keyrus.',
        'Mon travail se situe là où les apps grand public rencontrent des systèmes complexes : beaucoup de types de comptes, de pays, de moyens de paiement, et des contenus que le business veut changer sans nouvelle version.',
        'Je mène les projets de l’appel d’offres et des ateliers de cadrage jusqu’aux écrans finaux et à la passation. J’encadre de petites équipes de design et je travaille chaque jour avec les product owners, les développeurs et les équipes marketing des clients.',
      ],
      do: 'Ce que je fais',
      doList: ['Product design mobile et web', 'Design systems, variables et tokens', 'Back offices et outils B2B', 'Ateliers de cadrage avec les clients', 'UX writing', 'Passation aux équipes de développement'],
      exp: 'Expérience',
      expList: [
        { role: 'Lead Product Designer', org: 'Keyrus MEA, Tunis', when: '2021 à aujourd’hui' },
        { role: 'Designer UX/UI et graphiste', org: 'Freelance, Tunisie et France', when: '2017 à aujourd’hui' },
        { role: 'Designer UX/UI, stage', org: 'LADAPT Normandie, Rouen, France', when: '2020 à 2021' },
      ],
      tools: 'Outils',
      toolsList: 'Figma, FigJam, Adobe XD, Photoshop, Illustrator, Premiere Pro, ChatGPT, Claude, Gemini',
      edu: 'Formation',
      eduText: 'Master professionnel en ingénierie des médias, ISAMM, Manouba, 2020',
      langs: 'Langues',
      langsText: 'Arabe, français, anglais',
    },
    contact: {
      heading: 'Parlons-en',
      lead: 'Vous recrutez pour un poste de lead, senior ou product designer, en CDI ou en freelance, à distance ou sur place ? Écrivez-moi quelques lignes.',
      name: 'Votre nom',
      email: 'Votre e-mail',
      company: 'Entreprise (facultatif)',
      message: 'Message',
      messageHint: 'Le poste ou le projet, et la date de début souhaitée.',
      send: 'Envoyer le message',
      sending: 'Envoi…',
      ok: 'Message envoyé. Je vous réponds par e-mail.',
      error: 'Le message n’est pas parti. Écrivez-moi directement à louaybnh@gmail.com.',
      direct: 'Ou écrivez directement',
      subject: 'Nouveau message depuis le portfolio',
    },
    footer: { line: 'Lead Product Designer, Tunis', top: 'Haut de page' },
    cs: { stats: 'En chiffres', next: 'Projet suivant', all: 'Tous les projets', reflection: 'Ce que je retiens', view: 'Voir l’écran entier', close: 'Fermer', contents: 'Sur cette page', overview: 'Aperçu', live: 'Changer de segment client', tokens: 'Les valeurs qui changent', read: 'Lire l’étude de cas' },
    thanks: { title: 'Message envoyé', text: 'Merci. Je vous réponds par e-mail.', back: 'Retour au portfolio' },
    notFound: { title: 'Cette page n’existe pas', back: 'Aller à l’accueil' },
  },
};
