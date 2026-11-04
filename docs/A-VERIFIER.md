# À vérifier avant la mise en ligne

## Contenu
- Zain : l'app est bien publiée sur les stores ? Si oui, ajouter les liens dans `src/data/zain.ts` (bloc `close`, champ `links`).
- Zain, décision 4 : c'est bien Zain qui a demandé plus de place pour les offres.
- Zain : « about three months » pour la nouvelle identité, OK à afficher.
- Maroc Telecom : la règle du rouge sur le site en ligne (rouge pour les offres, noir pour les actions) est-elle exacte ?
- Omniflow 360 : les données d'exemple (Orange Côte d'Ivoire) peuvent-elles être montrées (NDA) ?
- Les slides utilisées (Max it : boutons illustrés ; Omniflow : tokens, modules) peuvent-elles être montrées (NDA) ?
- Nouveaux CV (EN et FR) refaits dans l'identité du site : relire chaque ligne avant de les envoyer.
- Zain : le cadre « One app, three segments » affiche encore « VIP » dans l'image, et la valeur réelle du token Strings/Master Swirl est « VIP ». À renommer dans Figma si tu veux « High-end » partout.
- Phrases « What I'd keep » en fin de chaque étude de cas : à remplacer par tes propres mots si tu préfères.

## Microcopy visible dans les captures (à corriger dans Figma puis réexporter)
- Zain : « Unimixte » (High-end), « Defaultt », « Text will goes here », « Amazon 10$ », date Comic Con, « 31-02-2023 ».
- Omniflow : « Tota Lines », « Description text here. », « Send Quick », « Another Actions », « Traduction », lorem ipsum dans la Control Tower, heures du chat Hermes.
- Maroc Telecom : « Profitez de nous smartphones », « Brand / Product Name », prix barré plus bas que le prix, mensualité 12000 DH/mois, cartes Divertissement identiques.
- Max it : « Credit transer », « My informations », « Voir tout » en français dans l'app anglaise.

## Technique
- Remplacer `site` dans `astro.config.mjs` par l'adresse finale.
- Tester le formulaire de contact une fois en ligne.
- Ajouter le domaine dans les domaines autorisés de Web3Forms.
