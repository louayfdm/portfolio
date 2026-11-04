import type { Project } from './types';

const en: Project = {
  slug: 'zain-bahrain',
  client: 'Zain Bahrain',
  color: '#00696F',
  ink: '#FFFFFF',
  year: '2024 to today',
  title: 'One app for everything Zain sells, designed end to end.',
  summary: 'Telecom, payments, shop and tickets in one place, themed for every Zain customer segment.',
  card: 'Telecom, payments, shop and tickets in one app, themed for three customer segments.',
  tags: ['Super app', 'iOS and Android', 'Design system'],
  cover: [{ img: 'zain/home', kind: 'phone', alt: 'Zain home, Consumers theme' }, { img: 'zain/home-business', kind: 'phone', alt: 'Zain home, Business theme' }, { img: 'zain/home-highend', kind: 'phone', alt: 'Zain home, High-end theme' }],
  role: 'Sole product designer',
  meta: [
    { label: 'Role', value: 'Sole product designer' },
    { label: 'Team', value: '1 art director, 1 graphic designer, Keyrus product and engineering teams' },
    { label: 'Platforms', value: 'iOS, Android and Huawei, built in Flutter' },
    { label: 'Back office', value: 'Omniflow Control Tower' },
  ],
  stats: [
    { value: '3', label: 'customer segments, each with its own theme' },
    { value: '5', label: 'account types served by the same app' },
    { value: '6', label: 'product modules' },
    { value: '2', label: 'releases, the second with a new brand identity' },
  ],
  hero: [
    { img: 'zain/home', kind: 'phone', alt: 'Zain app home screen in the Consumers theme' },
    { img: 'zain/home-business', kind: 'phone', alt: 'Zain app home screen in the Business theme' },
    { img: 'zain/home-highend', kind: 'phone', alt: 'Zain app home screen in the High-end theme' },
  ],
  blocks: [
    {
      type: 'split',
      heading: 'A telecom app that also had to sell',
      paras: [
        'Zain Bahrain wanted one app for telecom, e-commerce and entertainment. Its brief set four goals.',
      ],
      points: [
        { title: 'Fewer taps', text: 'on every journey, from paying a bill to buying a pass.' },
        { title: 'No release for content', text: 'offers, banners and navigation managed from a CMS.' },
        { title: 'A home per plan', text: 'the first screen adapts to each customer.' },
        { title: 'Under 2 seconds', text: 'to load, on every screen.' },
      ],
      shots: [
        { img: 'zain/home-old', kind: 'phone', alt: 'Home screen of the previous Zain app', caption: 'The previous app: five tabs of features, and any update forced users to log in again.' },
        { img: 'zain/home-r1', kind: 'phone', alt: 'Home screen of the first release of the new app', caption: 'The first release: one home built around the customer’s line.' },
      ],
    },
    {
      type: 'list',
      heading: 'One app, many kinds of customers',
      intro: 'The screens look simple. What sits behind them does not.',
      points: [
        { title: 'Five account types', text: 'Guest, non-Zain, prepaid, postpaid and hybrid users each see different content, actions and ways to pay.' },
        { title: 'One person, many lines', text: 'Customers switch the active line from the home, then pay for one number or a whole contract.' },
        { title: 'Local rules', text: 'Bahraini dinar with three decimals, amounts in steps of BD 0.100, a charity donation inside the payment, BenefitPay as the local default.' },
        { title: 'Uneven APIs', text: 'Native screens where Zain’s APIs were ready, webviews where they were not, without the customer noticing the switch.' },
        { title: 'Business control', text: 'Every home block, quick action and banner had to be configurable per segment.' },
      ],
    },
    {
      type: 'decisions',
      heading: 'Key decisions',
      items: [
        {
          title: 'Five tabs, built around what people do most',
          paras: ['Home, My Bill, My Zain, Shop and My Profile. Paying and checking usage sit one tap away. My Zain, the hub for plans, add-ons and services, takes the center of the bar.'],
          shots: [{ img: 'zain/my-zain', kind: 'phone', alt: 'My Zain screen with plan, usage and services', caption: 'My Zain: plan, usage, add-ons for you, active services, roaming and devices.' }],
        },
        {
          title: 'Every segment looks different. The components stay the same.',
          live: 'segments',
          paras: [
            'Consumers, Business and High-end customers each get their own look, applied automatically from the customer’s segment at login.',
            'Colors come from the Zain group brand book. For Consumers we proposed Azure Waters and Jade Horizon, and Zain chose Jade Horizon, the closest to its existing brand. Business uses Midnight Sky. The brand book had no gradient for a premium tier, so we created a black one for High-end. Zain validated all three.',
          ],
          shots: [{ img: 'zain/ds-segments', kind: 'frame', alt: 'The same home header in three color modes with the variables that change', caption: 'One header component, three color modes. Even the brand swirl in the background is a variable.' }],
        },
        {
          title: 'Recharge, bills, passes, shop and tickets share one payment flow',
          bullets: [
            'BenefitPay, Apple Pay, cards, mobile balance or the monthly bill, depending on the account type.',
            'Payment methods sit on the same screen as My Bill, Quick Pay and Recharge.',
            'The default method is the one the customer used last, or the one set by Zain in the CMS.',
            'Customers with several lines can set a different amount for each number.',
            'Not enough balance for a pass? “Recharge & subscribe” tops up and buys in one go, instead of stopping the customer.',
          ],
          shots: [{ img: 'zain/my-bill', kind: 'phone', alt: 'My Bill screen with line selector, bill summary and payment methods', caption: 'My Bill: line selector, bill summary and payment methods on one screen.' }],
        },
        {
          title: 'Less on the home, more space for what matters',
          paras: ['For the second release, Zain asked for more room for offers. We moved promotions to horizontal banners, turned hot offers into a grid of four and removed two cards. Fewer cards also meant fewer API calls on the screen everyone opens first. The contract bill now loads on swipe, with a retry if it fails.'],
          shots: [{ img: 'zain/home', kind: 'phone', alt: 'Home screen of the second release', caption: 'The home of the second release.' }],
        },
        {
          title: 'Marketing changes the content. The app stays the same.',
          paras: ['Home blocks, quick actions per segment, banners, shop categories and in-app alerts are all managed from the Control Tower. Alerts for an expired line, an expired bundle or no active bundle stack one at a time, the most urgent first.'],
        },
      ],
    },
    {
      type: 'row',
      heading: 'From the line to the shop',
      intro: 'One marketplace sits inside the app: telco passes, entertainment, gift cards, devices and local events. Sections fill themselves from recommendations, “Popular” over 30 days and “Trending” over 7, or from picks by the Zain team. Devices open the Zain e-shop without a new login. Event tickets are bought in the app and scanned at the door.',
      shots: [
        { img: 'zain/home', kind: 'phone', alt: 'Home screen', caption: 'Home: balance or bill, active pass, usage, quick actions and offers.' },
        { img: 'zain/my-bill', kind: 'phone', alt: 'My Bill screen', caption: 'My Bill: one line or a whole contract, with six months of history.' },
        { img: 'zain/shop', kind: 'phone', alt: 'Shop screen', caption: 'Shop: passes, entertainment, gift cards, devices and events.' },
        { img: 'zain/my-profile', kind: 'phone', alt: 'My Profile screen', caption: 'My Profile: account, saved cards, autopay, managed numbers and care.' },
      ],
    },
    {
      type: 'split',
      heading: 'One system, three themes',
      points: [
        { title: '266 color variables in 3 modes', text: '144 of them change from one segment to another.' },
        { title: '12 size variables', text: 'for spacing and corner radius.' },
        { title: '26 text styles', text: 'on a Material type scale.' },
        { title: 'Gradients that follow the theme', text: 'they reference other colors, and the header artwork switches through a variable, so no component is duplicated per segment.' },
        { title: 'One main card, 6 variants', text: 'the same structure in every mode.' },
      ],
      shots: [
        { img: 'zain/ds-foundations', kind: 'frame', alt: 'Foundations: colors per mode, type scale, spacing and radius', caption: 'Foundations: colors for each segment, type scale, spacing and radius.' },
        { img: 'zain/ds-main-card', kind: 'frame', alt: 'The main card component with its six variants in three modes', caption: 'The main card: six variants, and the same dark variant in three modes.' },
      ],
    },
    {
      type: 'close',
      heading: 'Live, and still growing',
      points: [
        'The first release shipped on iOS, Android and Huawei.',
        'The second release is rolling out in phases: a new brand identity in about three months, three segment themes, a new home and payment flow, line reconnection and roaming safeguards.',
        'Every phase ran through workshops with Zain’s marketing, product and technical teams.',
      ],
      reflection: 'Design the theme logic before the screens. Once segments were variables, a new brand took weeks, not a redesign.',
    },
  ],
};

const fr: Project = {
  ...en,
  year: '2024 à aujourd’hui',
  title: 'Une seule app pour tout ce que vend Zain, conçue de bout en bout.',
  summary: 'Télécom, paiements, boutique et billetterie au même endroit, avec un thème pour chaque segment de clients Zain.',
  card: 'Télécom, paiements, boutique et billetterie dans une seule app, avec un thème par segment de clients.',
  tags: ['Super app', 'iOS et Android', 'Design system'],
  cover: [{ img: 'zain/home', kind: 'phone', alt: 'Accueil Zain, thème Consumers' }, { img: 'zain/home-business', kind: 'phone', alt: 'Accueil Zain, thème Business' }, { img: 'zain/home-highend', kind: 'phone', alt: 'Accueil Zain, thème High-end' }],
  role: 'Seul product designer',
  meta: [
    { label: 'Rôle', value: 'Seul product designer' },
    { label: 'Équipe', value: '1 directeur artistique, 1 graphiste, équipes produit et développement de Keyrus' },
    { label: 'Plateformes', value: 'iOS, Android et Huawei, développée en Flutter' },
    { label: 'Back office', value: 'Omniflow Control Tower' },
  ],
  stats: [
    { value: '3', label: 'segments de clients, chacun avec son thème' },
    { value: '5', label: 'types de comptes servis par la même app' },
    { value: '6', label: 'modules produit' },
    { value: '2', label: 'versions, la seconde avec une nouvelle identité de marque' },
  ],
  hero: [
    { img: 'zain/home', kind: 'phone', alt: 'Accueil de l’app Zain, thème Consumers' },
    { img: 'zain/home-business', kind: 'phone', alt: 'Accueil de l’app Zain, thème Business' },
    { img: 'zain/home-highend', kind: 'phone', alt: 'Accueil de l’app Zain, thème High-end' },
  ],
  blocks: [
    {
      type: 'split',
      heading: 'Une app télécom qui devait aussi vendre',
      paras: ['Zain Bahrain voulait une seule app pour le télécom, le e-commerce et le divertissement. Son brief fixait quatre objectifs.'],
      points: [
        { title: 'Moins de clics', text: 'sur chaque parcours, du paiement de facture à l’achat d’un pass.' },
        { title: 'Pas de mise à jour pour le contenu', text: 'offres, bannières et navigation gérées depuis un CMS.' },
        { title: 'Un accueil par forfait', text: 'le premier écran s’adapte à chaque client.' },
        { title: 'Moins de 2 secondes', text: 'de chargement, sur chaque écran.' },
      ],
      shots: [
        { img: 'zain/home-old', kind: 'phone', alt: 'Accueil de l’ancienne app Zain', caption: 'L’ancienne app : cinq onglets de fonctionnalités, et chaque mise à jour obligeait à se reconnecter.' },
        { img: 'zain/home-r1', kind: 'phone', alt: 'Accueil de la première version de la nouvelle app', caption: 'La première version : un seul accueil construit autour de la ligne du client.' },
      ],
    },
    {
      type: 'list',
      heading: 'Une app, beaucoup de profils de clients',
      intro: 'Les écrans paraissent simples. Ce qu’il y a derrière ne l’est pas.',
      points: [
        { title: 'Cinq types de comptes', text: 'Invité, non-client Zain, prépayé, postpayé et hybride : chacun voit des contenus, des actions et des moyens de paiement différents.' },
        { title: 'Une personne, plusieurs lignes', text: 'Le client change de ligne active depuis l’accueil, puis paie un seul numéro ou tout son contrat.' },
        { title: 'Des règles locales', text: 'Dinar bahreïni à trois décimales, montants par pas de 0,100 BD, don à une œuvre intégré au paiement, BenefitPay par défaut.' },
        { title: 'Des API inégales', text: 'Des écrans natifs quand les API de Zain étaient prêtes, des webviews sinon, sans que le client voie la différence.' },
        { title: 'La main au business', text: 'Chaque bloc de l’accueil, chaque action rapide et chaque bannière devaient être configurables par segment.' },
      ],
    },
    {
      type: 'decisions',
      heading: 'Les décisions clés',
      items: [
        {
          title: 'Cinq onglets, autour de ce que les gens font le plus',
          paras: ['Accueil, My Bill, My Zain, Shop et My Profile. Payer et suivre sa consommation sont à un clic. My Zain, qui regroupe forfaits, options et services, prend le centre de la barre.'],
          shots: [{ img: 'zain/my-zain', kind: 'phone', alt: 'Écran My Zain avec forfait, consommation et services', caption: 'My Zain : forfait, consommation, options suggérées, services actifs, roaming et appareils.' }],
        },
        {
          title: 'Chaque segment a son style. Les composants restent les mêmes.',
          live: 'segments',
          paras: [
            'Les clients Consumers, Business et High-end ont chacun leur apparence, appliquée automatiquement selon le segment du client à la connexion.',
            'Les couleurs viennent du brand book du groupe Zain. Pour Consumers, nous avons proposé Azure Waters et Jade Horizon ; Zain a choisi Jade Horizon, le plus proche de sa marque actuelle. Business utilise Midnight Sky. Le brand book n’avait aucun dégradé pour un segment premium : nous en avons créé un noir pour High-end. Zain a validé les trois.',
          ],
          shots: [{ img: 'zain/ds-segments', kind: 'frame', alt: 'Le même en-tête d’accueil dans trois modes de couleur, avec les variables qui changent', caption: 'Un seul composant d’en-tête, trois modes de couleur. Même le motif de marque en fond est une variable.' }],
        },
        {
          title: 'Recharge, factures, pass, boutique et billets partagent un seul parcours de paiement',
          bullets: [
            'BenefitPay, Apple Pay, cartes, solde ou facture mensuelle, selon le type de compte.',
            'Les moyens de paiement sont sur le même écran que My Bill, Quick Pay et Recharge.',
            'Le moyen par défaut est le dernier utilisé par le client, ou celui choisi par Zain dans le CMS.',
            'Les clients multilignes peuvent fixer un montant différent pour chaque numéro.',
            'Pas assez de solde pour un pass ? « Recharge & subscribe » recharge et achète en une fois, au lieu de bloquer le client.',
          ],
          shots: [{ img: 'zain/my-bill', kind: 'phone', alt: 'Écran My Bill avec sélection de ligne, résumé de facture et moyens de paiement', caption: 'My Bill : sélection de ligne, résumé de facture et moyens de paiement sur un seul écran.' }],
        },
        {
          title: 'Moins de choses sur l’accueil, plus de place pour l’essentiel',
          paras: ['Pour la seconde version, Zain voulait plus de place pour les offres. Nous avons passé les promotions en bannières horizontales, transformé les offres phares en grille de quatre et retiré deux cartes. Moins de cartes, c’est aussi moins d’appels API sur l’écran que tout le monde ouvre en premier. La facture du contrat se charge désormais au swipe, avec un bouton pour réessayer en cas d’échec.'],
          shots: [{ img: 'zain/home', kind: 'phone', alt: 'Accueil de la seconde version', caption: 'L’accueil de la seconde version.' }],
        },
        {
          title: 'Le marketing change le contenu. L’app ne bouge pas.',
          paras: ['Blocs de l’accueil, actions rapides par segment, bannières, catégories de la boutique et alertes in-app se gèrent depuis la Control Tower. Les alertes (ligne expirée, bundle expiré, aucun bundle actif) s’affichent une par une, la plus urgente d’abord.'],
        },
      ],
    },
    {
      type: 'row',
      heading: 'De la ligne à la boutique',
      intro: 'Une marketplace est intégrée à l’app : pass télécom, divertissement, cartes cadeaux, appareils et événements locaux. Les sections se remplissent grâce aux recommandations, « Popular » sur 30 jours et « Trending » sur 7, ou avec les choix de l’équipe Zain. Les appareils ouvrent l’e-shop Zain sans nouvelle connexion. Les billets s’achètent dans l’app et se scannent à l’entrée.',
      shots: [
        { img: 'zain/home', kind: 'phone', alt: 'Écran d’accueil', caption: 'Accueil : solde ou facture, pass actif, consommation, actions rapides et offres.' },
        { img: 'zain/my-bill', kind: 'phone', alt: 'Écran My Bill', caption: 'My Bill : une ligne ou tout un contrat, avec six mois d’historique.' },
        { img: 'zain/shop', kind: 'phone', alt: 'Écran Shop', caption: 'Shop : pass, divertissement, cartes cadeaux, appareils et événements.' },
        { img: 'zain/my-profile', kind: 'phone', alt: 'Écran My Profile', caption: 'My Profile : compte, cartes enregistrées, paiement automatique, numéros gérés et assistance.' },
      ],
    },
    {
      type: 'split',
      heading: 'Un système, trois thèmes',
      points: [
        { title: '266 variables de couleur en 3 modes', text: 'dont 144 changent d’un segment à l’autre.' },
        { title: '12 variables de taille', text: 'pour les espacements et les arrondis.' },
        { title: '26 styles de texte', text: 'sur une échelle typographique Material.' },
        { title: 'Des dégradés qui suivent le thème', text: 'ils pointent vers d’autres couleurs, et le visuel de l’en-tête change via une variable : aucun composant n’est dupliqué par segment.' },
        { title: 'Une carte principale, 6 variantes', text: 'la même structure dans chaque mode.' },
      ],
      shots: [
        { img: 'zain/ds-foundations', kind: 'frame', alt: 'Fondations : couleurs par mode, échelle typographique, espacements et arrondis', caption: 'Fondations : couleurs de chaque segment, échelle typographique, espacements et arrondis.' },
        { img: 'zain/ds-main-card', kind: 'frame', alt: 'Le composant carte principale avec ses six variantes dans trois modes', caption: 'La carte principale : six variantes, et la même variante sombre dans trois modes.' },
      ],
    },
    {
      type: 'close',
      heading: 'En ligne, et en évolution',
      points: [
        'La première version est sortie sur iOS, Android et Huawei.',
        'La seconde version se déploie par phases : nouvelle identité de marque en trois mois environ, trois thèmes de segment, nouvel accueil et nouveau paiement, reconnexion de ligne et garde-fous pour le roaming.',
        'Chaque phase est passée par des ateliers avec les équipes marketing, produit et techniques de Zain.',
      ],
      reflection: 'Concevoir la logique des thèmes avant les écrans. Une fois les segments passés en variables, une nouvelle marque a pris des semaines, pas une refonte.',
    },
  ],
};

export default { en, fr };
