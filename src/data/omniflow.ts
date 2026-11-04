import type { Project } from './types';

const en: Project = {
  slug: 'omniflow-cx-suite',
  client: 'Omniflow CX Suite',
  color: '#0010CC',
  ink: '#FFFFFF',
  year: '2022 to today',
  title: 'The product suite behind several operator apps.',
  summary: 'Keyrus’s customer experience suite for telecom operators: consumer app, business portal, back office and customer 360, sold as modules and themed for each client.',
  card: 'A modular suite for telecom operators: consumer app, business portal, back office and customer 360.',
  tags: ['B2C and B2B', 'Back office', 'Design tokens'],
  cover: [{ img: 'omni/360', kind: 'desktop', alt: 'Omniflow 360 customer view' }, { img: 'omni/app-wallet', kind: 'phone', alt: 'Omniflow consumer app, wallet' }],
  role: 'Lead product designer',
  meta: [
    { label: 'Role', value: 'Lead product designer' },
    { label: 'Team', value: '2 product designers under my lead, Keyrus product and engineering teams' },
    { label: 'Scope', value: 'B2C mobile app, B2C and B2B web, Control Tower back office, Omniflow 360' },
    { label: 'Clients', value: 'The base for Orange’s Max it and Zain Bahrain’s app' },
  ],
  stats: [
    { value: '6', label: 'modules an operator can buy one by one' },
    { value: '2', label: 'audiences, consumers and businesses' },
    { value: '1', label: 'token system behind every client theme' },
    { value: '2', label: 'operator apps built on it' },
  ],
  hero: [
    { img: 'omni/app-welcome', kind: 'phone', alt: 'Omniflow consumer app welcome screen' },
    { img: 'omni/app-wallet', kind: 'phone', alt: 'Omniflow consumer app wallet screen' },
    { img: 'omni/app-loyalty', kind: 'phone', alt: 'Omniflow consumer app loyalty screen' },
  ],
  blocks: [
    {
      type: 'split',
      heading: 'Modules, not one big app',
      paras: [
        'Omniflow started at Keyrus as an idea, with an older brand and older apps. It became a suite of six modules that an operator can buy one by one: App Manager Studio, Selfcare, Marketplace, Event & Ticketing, Marketing and Data.',
        'The Omniflow-branded screens are the reference template. Sales teams demo them. Each client then gets them in its own brand, with its colors, fonts and, when needed, its own components.',
      ],
      shots: [{ img: 'omni/suite-modules', kind: 'frame', alt: 'Overview of the Omniflow modules around the Control Tower', caption: 'The suite: each module plugs into the same back office.' }],
    },
    {
      type: 'list',
      heading: 'One template, many brands',
      intro: 'Designing a product that other products are built from.',
      points: [
        { title: 'It has to sell and to bend', text: 'The template must look finished in a demo, then take a client’s brand without breaking.' },
        { title: 'Two audiences', text: 'Consumers manage a line, a wallet and points. Business customers manage fleets of lines and bulk invoices.' },
        { title: 'Modules sold separately', text: 'Each one must work alone and still feel like the same product next to the others.' },
        { title: 'Back-office users', text: 'Marketing, content and operations teams run the apps every day, with no designer next to them.' },
      ],
    },
    {
      type: 'decisions',
      heading: 'Key decisions',
      items: [
        {
          title: 'Semantic tokens, built under my lead',
          paras: [
            'With B2C and B2B themes, light and dark modes and a new brand for every client, raw color values could not scale. We chose semantic tokens named by category, property and role, for example color/surface/brand, on top of Material.',
            'Hover and pressed states come from state layers, not from extra tokens. We wrote one guide for designers and one for developers, from Figma variables to JSON to CSS, iOS and Android.',
          ],
          shots: [
            { img: 'omni/tokens-why', kind: 'frame', alt: 'Slide explaining why semantic tokens fit Omniflow', caption: 'Why semantic tokens: multiple themes, a Material base, and scale by meaning.' },
            { img: 'omni/tokens-button', kind: 'frame', alt: 'Slide showing color tokens applied to a button and its states', caption: 'Tokens applied to a button, with state layers for hover and pressed.' },
          ],
        },
        {
          title: 'Two audiences, one system',
          paras: ['The consumer app covers the line, the wallet, loyalty and the shop. The business portal covers what a company needs: a fleet of lines filtered by team and status, invoices paid in bulk and exported, a shop for business offers and office equipment.'],
          shots: [
            { img: 'omni/web-lines', kind: 'desktop', alt: 'Business portal: list of lines with filters and actions', caption: 'My lines: 145 lines, filters by team and status, actions per line.' },
            { img: 'omni/web-invoices', kind: 'desktop', alt: 'Business portal: invoices with bulk payment and statistics', caption: 'Invoices: select several, pay at once, export, follow the trend.' },
          ],
        },
        {
          title: 'Change the app without a release',
          paras: ['The Control Tower is the back office that runs every client app. I designed it with one designer: a product picker split into functional and technical products, then forms like “Create new service”, with media per format and per language (English, French, Arabic) and a catalog of sections and items.'],
          shots: [
            { img: 'omni/ct-products', kind: 'frame', alt: 'Control Tower product picker', caption: 'Control Tower: pick a product, then manage its content.' },
            { img: 'omni/ct-service', kind: 'desktop', alt: 'Control Tower form to create a new service', caption: 'Create a service: content type, media by language, catalog.' },
          ],
        },
        {
          title: 'AI next to the work, not in another tab',
          paras: [
            'Omniflow 360 gives customer care agents one view of a customer: contracts, bills, usage, services, recommendations and service quality. I led its rebrand and UI redesign and added new features, including Hermes AI, a built-in assistant.',
            'Hermes sits beside the customer file. Asked for a prediction, it gives a churn risk and the facts behind it, such as open claims and a missed SLA, so the agent can check before acting.',
          ],
          shots: [{ img: 'omni/360', kind: 'desktop', alt: 'Omniflow 360 customer view with the Hermes AI panel', caption: 'Omniflow 360 with Hermes AI: a risk level and its reasons, next to the customer file.' }],
        },
      ],
    },
    {
      type: 'row',
      heading: 'The consumer app',
      intro: 'Welcome, Lines, Wallet, Loyalty and Shop. The template every operator app starts from.',
      shots: [
        { img: 'omni/app-welcome', kind: 'phone', alt: 'Welcome screen', caption: 'Welcome: balance, wallet, points and offers.' },
        { img: 'omni/app-lines', kind: 'phone', alt: 'Lines screen', caption: 'Lines: plan, usage and quick actions the customer can customize.' },
        { img: 'omni/app-wallet', kind: 'phone', alt: 'Wallet screen', caption: 'Wallet: deposit, send, request, cash out and history.' },
        { img: 'omni/app-loyalty', kind: 'phone', alt: 'Loyalty screen', caption: 'Loyalty: daily check-in and challenges that earn points.' },
        { img: 'omni/app-shop', kind: 'phone', alt: 'Shop screen', caption: 'Shop: content, devices, passes, trends and events.' },
      ],
    },
    {
      type: 'wide',
      heading: 'The business portal',
      paras: ['A company dashboard: lines by type and status, latest bills, plan distribution, offers and deals for teams.'],
      shots: [
        { img: 'omni/web-home', kind: 'desktop', alt: 'Business portal home dashboard', caption: 'Home: lines, bills, line status and plan distribution at a glance.' },
        { img: 'omni/web-shop', kind: 'desktop', alt: 'Business portal shop', caption: 'Shop: connectivity, devices, gift cards and office equipment.' },
      ],
    },
    {
      type: 'close',
      heading: 'What shipped',
      points: [
        'The B2C mobile template and the B2C and B2B web templates.',
        'The Control Tower back office, first designed in 2022.',
        'The Omniflow 360 rebrand and redesign, with the Hermes AI assistant.',
        'A semantic token system documented for designers and developers.',
        'The base behind Orange’s Max it and Zain Bahrain’s app.',
      ],
      reflection: 'Agree on token names before drawing components. Once the names describe roles, a client’s brand becomes a setting, not a project.',
    },
  ],
};

const fr: Project = {
  ...en,
  year: '2022 à aujourd’hui',
  title: 'La suite produit derrière plusieurs apps d’opérateurs.',
  summary: 'La suite d’expérience client de Keyrus pour les opérateurs télécom : app grand public, portail entreprise, back office et vue client 360, vendus par modules et adaptés à chaque client.',
  card: 'Une suite modulaire pour opérateurs télécom : app grand public, portail entreprise, back office et vue client 360.',
  tags: ['B2C et B2B', 'Back office', 'Design tokens'],
  cover: [{ img: 'omni/360', kind: 'desktop', alt: 'Vue client Omniflow 360' }, { img: 'omni/app-wallet', kind: 'phone', alt: 'App grand public Omniflow, portefeuille' }],
  role: 'Lead product designer',
  meta: [
    { label: 'Rôle', value: 'Lead product designer' },
    { label: 'Équipe', value: '2 product designers sous ma direction, équipes produit et développement de Keyrus' },
    { label: 'Périmètre', value: 'App mobile B2C, web B2C et B2B, back office Control Tower, Omniflow 360' },
    { label: 'Clients', value: 'La base de Max it (Orange) et de l’app Zain Bahrain' },
  ],
  stats: [
    { value: '6', label: 'modules qu’un opérateur peut acheter séparément' },
    { value: '2', label: 'publics : particuliers et entreprises' },
    { value: '1', label: 'système de tokens derrière chaque thème client' },
    { value: '2', label: 'apps d’opérateurs construites dessus' },
  ],
  hero: [
    { img: 'omni/app-welcome', kind: 'phone', alt: 'Accueil de l’app grand public Omniflow' },
    { img: 'omni/app-wallet', kind: 'phone', alt: 'Écran portefeuille de l’app Omniflow' },
    { img: 'omni/app-loyalty', kind: 'phone', alt: 'Écran fidélité de l’app Omniflow' },
  ],
  blocks: [
    {
      type: 'split',
      heading: 'Des modules, pas une seule grosse app',
      paras: [
        'Omniflow a commencé chez Keyrus comme une idée, avec une ancienne marque et d’anciennes apps. C’est devenu une suite de six modules qu’un opérateur peut acheter séparément : App Manager Studio, Selfcare, Marketplace, Event & Ticketing, Marketing et Data.',
        'Les écrans aux couleurs d’Omniflow sont le template de référence. Les équipes commerciales s’en servent en démo. Chaque client les reçoit ensuite dans sa propre marque, avec ses couleurs, ses typographies et, si besoin, ses propres composants.',
      ],
      shots: [{ img: 'omni/suite-modules', kind: 'frame', alt: 'Vue d’ensemble des modules Omniflow autour de la Control Tower', caption: 'La suite : chaque module se branche sur le même back office.' }],
    },
    {
      type: 'list',
      heading: 'Un template, beaucoup de marques',
      intro: 'Concevoir un produit à partir duquel d’autres produits sont construits.',
      points: [
        { title: 'Il doit vendre et s’adapter', text: 'Le template doit paraître fini en démo, puis prendre la marque d’un client sans se casser.' },
        { title: 'Deux publics', text: 'Les particuliers gèrent une ligne, un portefeuille et des points. Les entreprises gèrent des flottes de lignes et des factures groupées.' },
        { title: 'Des modules vendus séparément', text: 'Chacun doit fonctionner seul, et ressembler au même produit à côté des autres.' },
        { title: 'Des utilisateurs de back office', text: 'Les équipes marketing, contenu et opérations pilotent les apps tous les jours, sans designer à côté d’elles.' },
      ],
    },
    {
      type: 'decisions',
      heading: 'Les décisions clés',
      items: [
        {
          title: 'Des tokens sémantiques, construits sous ma direction',
          paras: [
            'Avec des thèmes B2C et B2B, des modes clair et sombre et une nouvelle marque pour chaque client, des valeurs de couleur brutes ne pouvaient pas suivre. Nous avons choisi des tokens sémantiques nommés par catégorie, propriété et rôle, par exemple color/surface/brand, sur une base Material.',
            'Les états survol et appui viennent des state layers, pas de tokens en plus. Nous avons écrit un guide pour les designers et un pour les développeurs, des variables Figma au JSON, puis au CSS, à iOS et à Android.',
          ],
          shots: [
            { img: 'omni/tokens-why', kind: 'frame', alt: 'Slide expliquant pourquoi les tokens sémantiques conviennent à Omniflow', caption: 'Pourquoi des tokens sémantiques : plusieurs thèmes, une base Material, et une évolution par le sens.' },
            { img: 'omni/tokens-button', kind: 'frame', alt: 'Slide montrant les tokens de couleur appliqués à un bouton et à ses états', caption: 'Les tokens appliqués à un bouton, avec les state layers pour le survol et l’appui.' },
          ],
        },
        {
          title: 'Deux publics, un seul système',
          paras: ['L’app grand public couvre la ligne, le portefeuille, la fidélité et la boutique. Le portail entreprise couvre ce dont une société a besoin : une flotte de lignes filtrée par équipe et par statut, des factures payées en groupe et exportées, une boutique d’offres pro et d’équipement de bureau.'],
          shots: [
            { img: 'omni/web-lines', kind: 'desktop', alt: 'Portail entreprise : liste des lignes avec filtres et actions', caption: 'My lines : 145 lignes, filtres par équipe et par statut, actions par ligne.' },
            { img: 'omni/web-invoices', kind: 'desktop', alt: 'Portail entreprise : factures avec paiement groupé et statistiques', caption: 'Factures : en sélectionner plusieurs, payer en une fois, exporter, suivre l’évolution.' },
          ],
        },
        {
          title: 'Changer l’app sans nouvelle version',
          paras: ['La Control Tower est le back office qui pilote chaque app client. Je l’ai conçue avec un designer : un choix de produit divisé entre produits fonctionnels et techniques, puis des formulaires comme « Create new service », avec des médias par format et par langue (anglais, français, arabe) et un catalogue de sections et d’éléments.'],
          shots: [
            { img: 'omni/ct-products', kind: 'frame', alt: 'Choix du produit dans la Control Tower', caption: 'Control Tower : choisir un produit, puis gérer son contenu.' },
            { img: 'omni/ct-service', kind: 'desktop', alt: 'Formulaire de création d’un service dans la Control Tower', caption: 'Créer un service : type de contenu, médias par langue, catalogue.' },
          ],
        },
        {
          title: 'L’IA à côté du travail, pas dans un autre onglet',
          paras: [
            'Omniflow 360 donne aux conseillers du service client une vue unique sur un client : contrats, factures, consommation, services, recommandations et qualité de service. J’ai mené son rebranding et la refonte de son interface, et ajouté de nouvelles fonctionnalités, dont Hermes AI, un assistant intégré.',
            'Hermes est placé à côté de la fiche client. Quand on lui demande une prédiction, il donne un risque de départ et les faits qui le justifient, comme des réclamations en cours et un SLA dépassé : le conseiller peut vérifier avant d’agir.',
          ],
          shots: [{ img: 'omni/360', kind: 'desktop', alt: 'Vue client Omniflow 360 avec le panneau Hermes AI', caption: 'Omniflow 360 avec Hermes AI : un niveau de risque et ses raisons, à côté de la fiche client.' }],
        },
      ],
    },
    {
      type: 'row',
      heading: 'L’app grand public',
      intro: 'Welcome, Lines, Wallet, Loyalty et Shop. Le template d’où part chaque app d’opérateur.',
      shots: [
        { img: 'omni/app-welcome', kind: 'phone', alt: 'Écran Welcome', caption: 'Welcome : solde, portefeuille, points et offres.' },
        { img: 'omni/app-lines', kind: 'phone', alt: 'Écran Lines', caption: 'Lines : forfait, consommation et actions rapides personnalisables.' },
        { img: 'omni/app-wallet', kind: 'phone', alt: 'Écran Wallet', caption: 'Wallet : dépôt, envoi, demande, retrait et historique.' },
        { img: 'omni/app-loyalty', kind: 'phone', alt: 'Écran Loyalty', caption: 'Loyalty : check-in quotidien et défis qui rapportent des points.' },
        { img: 'omni/app-shop', kind: 'phone', alt: 'Écran Shop', caption: 'Shop : contenus, appareils, pass, tendances et événements.' },
      ],
    },
    {
      type: 'wide',
      heading: 'Le portail entreprise',
      paras: ['Un tableau de bord pour l’entreprise : lignes par type et par statut, dernières factures, répartition des forfaits, offres et promotions pour les équipes.'],
      shots: [
        { img: 'omni/web-home', kind: 'desktop', alt: 'Accueil du portail entreprise', caption: 'Accueil : lignes, factures, statut des lignes et répartition des forfaits en un coup d’œil.' },
        { img: 'omni/web-shop', kind: 'desktop', alt: 'Boutique du portail entreprise', caption: 'Boutique : connectivité, appareils, cartes cadeaux et équipement de bureau.' },
      ],
    },
    {
      type: 'close',
      heading: 'Ce qui a été livré',
      points: [
        'Le template mobile B2C et les templates web B2C et B2B.',
        'Le back office Control Tower, conçu en 2022.',
        'Le rebranding et la refonte d’Omniflow 360, avec l’assistant Hermes AI.',
        'Un système de tokens sémantiques documenté pour les designers et les développeurs.',
        'La base de Max it (Orange) et de l’app Zain Bahrain.',
      ],
      reflection: 'Se mettre d’accord sur le nom des tokens avant de dessiner les composants. Quand les noms décrivent des rôles, la marque d’un client devient un réglage, pas un projet.',
    },
  ],
};

export default { en, fr };
