import type { Project } from './types';

const en: Project = {
  slug: 'maroc-telecom',
  client: 'Maroc Telecom',
  color: '#E00800',
  ink: '#FFFFFF',
  year: '2024',
  title: 'A national operator’s website, turned into a shop.',
  summary: 'The new iam.ma and the MT Shop app: plans, fibre, phones and entertainment, all bought in a few taps, on the web and on mobile.',
  card: 'The new iam.ma and the MT Shop app: plans, fibre, phones and entertainment, bought in a few taps.',
  tags: ['E-commerce', 'Web and app', 'Rebrand'],
  cover: [{ img: 'mt/home', kind: 'desktop', alt: 'New iam.ma home page' }, { img: 'mt/app-home', kind: 'phone', alt: 'MT Shop app home' }],
  role: 'Product designer, then design lead for the rebrand',
  meta: [
    { label: 'Role', value: 'Product designer for the bid, scoping and final design. Design lead for the rebrand' },
    { label: 'Team', value: 'Lead designer, product designer, art director, graphic designer. Rebrand: me and one product designer' },
    { label: 'Client', value: 'Maroc Telecom, with Keyrus, Liferay and Casanet' },
    { label: 'Platforms', value: 'Responsive web, iOS and Android' },
  ],
  stats: [
    { value: '6', label: 'scoping workshops in one week' },
    { value: '20+', label: 'client stakeholders in the room' },
    { value: '4', label: 'weeks to rebrand the website and the app' },
    { value: '8', label: 'color variables replacing scattered values' },
  ],
  hero: [
    { img: 'mt/home', kind: 'desktop', alt: 'New iam.ma home page in the new red identity' },
  ],
  blocks: [
    {
      type: 'split',
      heading: 'A website that informed but did not sell',
      paras: [
        'Maroc Telecom wanted its digital channels to win and keep customers in a crowded market. The old iam.ma described offers. Buying happened somewhere else.',
        'The brief: rebuild iam.ma for every audience (individuals, professionals, businesses and the group), mobile first, merged with the online shop, and launch a new shopping app.',
      ],
      shots: [{ img: 'mt/home-old', kind: 'desktop', alt: 'Previous iam.ma home page', caption: 'The previous iam.ma.' }],
    },
    {
      type: 'split',
      flip: true,
      heading: 'One week, six workshops, twenty people',
      paras: ['In February 2024 we ran a week of scoping workshops with Maroc Telecom’s digital, marketing, offers, roaming, business, e-shop and IT teams. The design changed because of them.'],
      points: [
        { title: 'One banner, fully clickable', text: 'instead of three visuals competing for attention.' },
        { title: 'Price first on every offer card', text: 'the plan type named, the description moved to the detail page, the promo tag easier to see.' },
        { title: 'Phones show both prices', text: 'the monthly “from” amount and the cash price, with “Add to cart” on the card.' },
        { title: 'Quick actions in one row', text: 'scrolling sideways on mobile.' },
        { title: 'One word for bills', text: 'we kept “Facture” instead of “Paiement”, to match the customer app Mon Espace MT.' },
        { title: 'A shorter checkout', text: 'first and last name split, ID type chosen from a list, the billing address reused for delivery.' },
      ],
      shots: [{ img: 'mt/home-blue', kind: 'desktop', alt: 'iam.ma home page as delivered in the previous blue and orange identity', caption: 'The home as delivered, in the brand of the time.' }],
    },
    {
      type: 'decisions',
      heading: 'Key decisions',
      items: [
        {
          title: 'One offer card for everything Maroc Telecom sells',
          paras: ['Mobile plans, fibre, phones and entertainment share the same card logic on the web and in the app: name, price, the two or three facts that matter, one action. People compare offers without relearning the layout.'],
          shots: [
            { img: 'mt/plans', kind: 'desktop', alt: 'Mobile plans page with filters', caption: 'Mobile plans, with a budget filter.' },
            { img: 'mt/catalogue', kind: 'desktop', alt: 'Smartphone catalogue with filters', caption: 'The phone catalogue: brand, budget, storage, operating system.' },
          ],
        },
        {
          title: 'A shop in your pocket',
          paras: ['MT Shop opens on search, then categories. The tab bar follows what people buy: home, wifi, plans, phones and devices. At the client’s request, the comparison tool gave way to a store locator, and buying a plan asks one question first: capped or not capped.'],
          shots: [
            { img: 'mt/app-home', kind: 'phone', alt: 'MT Shop app home screen', caption: 'MT Shop: search first, then categories.' },
            { img: 'mt/app-smartphones', kind: 'phone', alt: 'MT Shop smartphones screen', caption: 'Phones, with the monthly price under the cash price.' },
          ],
        },
        {
          title: 'A new brand, four weeks before launch',
          paras: [
            'The project was finished in Maroc Telecom’s blue and orange. Just before launch, the e& group announced a new red identity for Maroc Telecom.',
            'I came back to lead the rebrand. The design files had no variables. I rebuilt the colors as eight variables, so one black now replaces three different colors on the same card. Structure, journeys and components stayed the same. The website and the app were rebranded in four weeks, approvals included.',
          ],
          shots: [{ img: 'mt/ds-rebrand', kind: 'frame', alt: 'The same offer card in the old and new brand with the color changes listed', caption: 'The same card in both brands. The old one is rebuilt from a reference image.' }],
        },
        {
          title: 'Two versions, and the client chose mine',
          paras: ['The first request was a direct swap: blue becomes red, orange becomes black. Once applied, it was hard to read and heavy on the page. I studied how e& uses its colors on its own sites and built a second version on that logic. We showed both. Maroc Telecom chose the second one.'],
          shots: [{ img: 'mt/home', kind: 'desktop', alt: 'iam.ma home in the new identity', caption: 'The new identity on the live site: red for offers, black for actions.' }],
        },
      ],
    },
    {
      type: 'wide',
      heading: 'The website',
      paras: ['From the home to the product page: fibre, plans, phones and entertainment services, each ending on an action.'],
      shots: [
        { img: 'mt/fibre', kind: 'desktop', alt: 'Wifi fibre page', caption: 'Fibre: offers, benefits and how to pay.' },
        { img: 'mt/product', kind: 'desktop', alt: 'iPhone 15 product page', caption: 'Product page: storage, color, financing and add-ons.' },
        { img: 'mt/service', kind: 'desktop', alt: 'Shahid streaming service page', caption: 'Entertainment service: passes, benefits and how to subscribe.' },
      ],
    },
    {
      type: 'row',
      heading: 'The app',
      intro: 'MT Shop on iOS and Android, in the new identity.',
      shots: [
        { img: 'mt/app-home', kind: 'phone', alt: 'App home', caption: 'Home.' },
        { img: 'mt/app-wifi', kind: 'phone', alt: 'App wifi screen', caption: 'Wifi: fibre, ADSL, 4G box.' },
        { img: 'mt/app-plans', kind: 'phone', alt: 'App plans screen', caption: 'Mobile plans.' },
        { img: 'mt/app-devices', kind: 'phone', alt: 'App connected devices screen', caption: 'Connected devices and accessories.' },
        { img: 'mt/app-entertainment', kind: 'phone', alt: 'App entertainment screen', caption: 'Entertainment.' },
      ],
    },
    {
      type: 'split',
      heading: 'A UI kit, cleaned up for the rebrand',
      points: [
        { title: '8 color variables', text: 'reds, blacks, greys and white, used by every component.' },
        { title: '29 text styles', text: 'in Montserrat, on ten sizes.' },
        { title: '33 component sets', text: 'buttons, forms, tags, navigation and the offer, product and content cards.' },
        { title: 'On the app', text: 'the same Material roles kept their names and took new values: 9 of 12 changed.' },
      ],
      shots: [
        { img: 'mt/ds-ui-kit', kind: 'frame', alt: 'UI kit: color variables, text styles and main components', caption: 'The web UI kit.' },
      ],
    },
    {
      type: 'close',
      heading: 'Live',
      points: [
        'iam.ma relaunched with individuals, professionals, businesses and the group in one site.',
        'MT Shop is available on the App Store and Google Play.',
      ],
      reflection: 'A rebrand is a set of choices, not a color swap. Showing the client both versions settled the question faster than any argument.',
      links: [
        { label: 'Visit iam.ma', href: 'https://www.iam.ma/' },
        { label: 'MT Shop on Google Play', href: 'https://play.google.com/store/apps/details?id=ma.maroctelecom.mtshop' },
        { label: 'MT Shop on the App Store', href: 'https://apps.apple.com/app/mt-shop/id6759094401' },
      ],
    },
  ],
};

const fr: Project = {
  ...en,
  year: '2024',
  title: 'Le site d’un opérateur national, devenu une boutique.',
  summary: 'Le nouveau iam.ma et l’app MT Shop : forfaits, fibre, smartphones et divertissement, achetés en quelques clics, sur le web et sur mobile.',
  card: 'Le nouveau iam.ma et l’app MT Shop : forfaits, fibre, smartphones et divertissement, achetés en quelques clics.',
  tags: ['E-commerce', 'Web et app', 'Rebranding'],
  cover: [{ img: 'mt/home', kind: 'desktop', alt: 'Nouvelle page d’accueil iam.ma' }, { img: 'mt/app-home', kind: 'phone', alt: 'Accueil de l’app MT Shop' }],
  role: 'Product designer, puis lead design du rebranding',
  meta: [
    { label: 'Rôle', value: 'Product designer pour l’appel d’offres, le cadrage et le design final. Lead design du rebranding' },
    { label: 'Équipe', value: 'Lead designer, product designer, directeur artistique, graphiste. Rebranding : moi et un product designer' },
    { label: 'Client', value: 'Maroc Telecom, avec Keyrus, Liferay et Casanet' },
    { label: 'Plateformes', value: 'Web responsive, iOS et Android' },
  ],
  stats: [
    { value: '6', label: 'ateliers de cadrage en une semaine' },
    { value: '20+', label: 'interlocuteurs côté client' },
    { value: '4', label: 'semaines pour le rebranding du site et de l’app' },
    { value: '8', label: 'variables de couleur à la place de valeurs dispersées' },
  ],
  hero: [{ img: 'mt/home', kind: 'desktop', alt: 'Accueil du nouveau iam.ma dans la nouvelle identité rouge' }],
  blocks: [
    {
      type: 'split',
      heading: 'Un site qui informait, sans vendre',
      paras: [
        'Maroc Telecom voulait que ses canaux digitaux gagnent et fidélisent des clients sur un marché très disputé. L’ancien iam.ma présentait les offres. L’achat se faisait ailleurs.',
        'Le brief : refaire iam.ma pour tous les publics (particuliers, professionnels, entreprises et groupe), en mobile first, fusionné avec la boutique en ligne, et lancer une nouvelle app de vente.',
      ],
      shots: [{ img: 'mt/home-old', kind: 'desktop', alt: 'Ancienne page d’accueil d’iam.ma', caption: 'L’ancien iam.ma.' }],
    },
    {
      type: 'split',
      flip: true,
      heading: 'Une semaine, six ateliers, vingt personnes',
      paras: ['En février 2024, nous avons mené une semaine d’ateliers de cadrage avec les équipes digital, marketing, offres, roaming, entreprises, e-boutique et SI de Maroc Telecom. Le design a changé grâce à eux.'],
      points: [
        { title: 'Une seule bannière, entièrement cliquable', text: 'au lieu de trois visuels qui se disputaient l’attention.' },
        { title: 'Le prix d’abord sur chaque carte d’offre', text: 'le type de forfait nommé, la description déplacée dans la page détail, la pastille promo plus visible.' },
        { title: 'Deux prix pour les smartphones', text: 'le montant mensuel « à partir de » et le prix comptant, avec « Ajouter au panier » sur la carte.' },
        { title: 'Les actions rapides sur une ligne', text: 'qui défile horizontalement sur mobile.' },
        { title: 'Un seul mot pour les factures', text: 'nous avons gardé « Facture » plutôt que « Paiement », comme dans l’app Mon Espace MT.' },
        { title: 'Un checkout plus court', text: 'nom et prénom séparés, type de pièce d’identité dans une liste, adresse de facturation réutilisée pour la livraison.' },
      ],
      shots: [{ img: 'mt/home-blue', kind: 'desktop', alt: 'Accueil d’iam.ma livré dans l’ancienne identité bleu et orange', caption: 'L’accueil tel que livré, dans la marque de l’époque.' }],
    },
    {
      type: 'decisions',
      heading: 'Les décisions clés',
      items: [
        {
          title: 'Une seule carte d’offre pour tout ce que vend Maroc Telecom',
          paras: ['Forfaits mobiles, fibre, smartphones et divertissement partagent la même logique de carte sur le web et dans l’app : nom, prix, les deux ou trois infos qui comptent, une action. On compare les offres sans réapprendre la mise en page.'],
          shots: [
            { img: 'mt/plans', kind: 'desktop', alt: 'Page des forfaits mobiles avec filtres', caption: 'Les forfaits mobiles, avec un filtre de budget.' },
            { img: 'mt/catalogue', kind: 'desktop', alt: 'Catalogue de smartphones avec filtres', caption: 'Le catalogue : marque, budget, stockage, système.' },
          ],
        },
        {
          title: 'Une boutique dans la poche',
          paras: ['MT Shop s’ouvre sur la recherche, puis les catégories. La barre d’onglets suit ce que les gens achètent : accueil, wifi, forfaits, smartphones et objets. À la demande du client, le comparateur a laissé la place aux magasins, et l’achat d’un forfait pose d’abord une question : plafonné ou non.'],
          shots: [
            { img: 'mt/app-home', kind: 'phone', alt: 'Accueil de l’app MT Shop', caption: 'MT Shop : la recherche d’abord, puis les catégories.' },
            { img: 'mt/app-smartphones', kind: 'phone', alt: 'Écran smartphones de MT Shop', caption: 'Les smartphones, avec le prix mensuel sous le prix comptant.' },
          ],
        },
        {
          title: 'Une nouvelle marque, quatre semaines avant le lancement',
          paras: [
            'Le projet était terminé dans le bleu et l’orange de Maroc Telecom. Juste avant le lancement, le groupe e& a annoncé une nouvelle identité rouge pour Maroc Telecom.',
            'Je suis revenu pour mener le rebranding. Les fichiers n’avaient aucune variable. J’ai reconstruit les couleurs en huit variables : un seul noir remplace désormais trois couleurs différentes sur la même carte. Structure, parcours et composants n’ont pas bougé. Le site et l’app ont été rebrandés en quatre semaines, validations comprises.',
          ],
          shots: [{ img: 'mt/ds-rebrand', kind: 'frame', alt: 'La même carte d’offre dans l’ancienne et la nouvelle marque, avec les changements de couleur', caption: 'La même carte dans les deux marques. L’ancienne est reconstruite à partir d’une image de référence.' }],
        },
        {
          title: 'Deux versions, et le client a choisi la mienne',
          paras: ['La première demande était un remplacement direct : le bleu devient rouge, l’orange devient noir. Une fois appliqué, c’était difficile à lire et lourd sur la page. J’ai étudié la façon dont e& utilise ses couleurs sur ses propres sites et construit une seconde version sur cette logique. Nous avons présenté les deux. Maroc Telecom a choisi la seconde.'],
          shots: [{ img: 'mt/home', kind: 'desktop', alt: 'Accueil d’iam.ma dans la nouvelle identité', caption: 'La nouvelle identité sur le site en ligne : le rouge pour les offres, le noir pour les actions.' }],
        },
      ],
    },
    {
      type: 'wide',
      heading: 'Le site',
      paras: ['De l’accueil à la fiche produit : fibre, forfaits, smartphones et services de divertissement, chaque page se termine par une action.'],
      shots: [
        { img: 'mt/fibre', kind: 'desktop', alt: 'Page Wifi Fibre', caption: 'Fibre : offres, avantages et moyens de paiement.' },
        { img: 'mt/product', kind: 'desktop', alt: 'Fiche produit iPhone 15', caption: 'Fiche produit : stockage, couleur, financement et accessoires.' },
        { img: 'mt/service', kind: 'desktop', alt: 'Page du service de streaming Shahid', caption: 'Service de divertissement : pass, avantages et souscription.' },
      ],
    },
    {
      type: 'row',
      heading: 'L’app',
      intro: 'MT Shop sur iOS et Android, dans la nouvelle identité.',
      shots: [
        { img: 'mt/app-home', kind: 'phone', alt: 'Accueil de l’app', caption: 'Accueil.' },
        { img: 'mt/app-wifi', kind: 'phone', alt: 'Écran wifi de l’app', caption: 'Wifi : fibre, ADSL, box 4G.' },
        { img: 'mt/app-plans', kind: 'phone', alt: 'Écran forfaits de l’app', caption: 'Forfaits mobiles.' },
        { img: 'mt/app-devices', kind: 'phone', alt: 'Écran objets connectés de l’app', caption: 'Objets connectés et accessoires.' },
        { img: 'mt/app-entertainment', kind: 'phone', alt: 'Écran divertissement de l’app', caption: 'Divertissement.' },
      ],
    },
    {
      type: 'split',
      heading: 'Un UI kit, remis en ordre pour le rebranding',
      points: [
        { title: '8 variables de couleur', text: 'rouges, noirs, gris et blanc, utilisées par chaque composant.' },
        { title: '29 styles de texte', text: 'en Montserrat, sur dix tailles.' },
        { title: '33 sets de composants', text: 'boutons, formulaires, tags, navigation et cartes d’offre, de produit et de contenu.' },
        { title: 'Dans l’app', text: 'les mêmes rôles Material ont gardé leur nom et pris de nouvelles valeurs : 9 sur 12 ont changé.' },
      ],
      shots: [{ img: 'mt/ds-ui-kit', kind: 'frame', alt: 'UI kit : variables de couleur, styles de texte et composants principaux', caption: 'L’UI kit du site.' }],
    },
    {
      type: 'close',
      heading: 'En ligne',
      points: [
        'iam.ma a été relancé avec les particuliers, les professionnels, les entreprises et le groupe sur un seul site.',
        'MT Shop est disponible sur l’App Store et Google Play.',
      ],
      reflection: 'Un rebranding est une suite de choix, pas un changement de couleur. Montrer les deux versions au client a tranché plus vite que n’importe quel argument.',
      links: [
        { label: 'Voir iam.ma', href: 'https://www.iam.ma/' },
        { label: 'MT Shop sur Google Play', href: 'https://play.google.com/store/apps/details?id=ma.maroctelecom.mtshop' },
        { label: 'MT Shop sur l’App Store', href: 'https://apps.apple.com/app/mt-shop/id6759094401' },
      ],
    },
  ],
};

export default { en, fr };
