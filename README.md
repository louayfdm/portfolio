# Portfolio de Louay Ben Hassine

Site en deux langues (anglais par défaut, français), construit avec Astro.

Pourquoi pas de fichier `.html` ? Les pages sont des modèles `.astro` (dans `src/pages`). La commande `npm run build` fabrique les vraies pages `.html` dans un dossier `dist/`. Vercel le fait tout seul à chaque mise à jour.
Pages : accueil (`/en/`, `/fr/`) et 4 études de cas (`/en/work/...`, `/fr/work/...`).

---

## 1. Installer les outils (une seule fois)

1. **Node.js** (version LTS) : https://nodejs.org → bouton « LTS » → installer avec les options par défaut.
2. **Git** : https://git-scm.com/download/win → installer avec les options par défaut.
3. **VS Code** : https://code.visualstudio.com → installer.
4. Redémarrer l'ordinateur.

## 2. Voir le site sur ton ordinateur

1. Ouvrir VS Code → **Fichier > Ouvrir le dossier** → choisir `D:\LOUAY\Portfolio`.
2. Ouvrir le terminal : menu **Terminal > Nouveau terminal**.
3. Taper, puis Entrée :
   ```
   npm install
   ```
   (une seule fois, ça prend une minute)
4. Taper, puis Entrée :
   ```
   npm run dev
   ```
5. Ouvrir dans le navigateur l'adresse affichée (en général http://localhost:4321/en/).
6. Pour arrêter : dans le terminal, `Ctrl + C`.

## 3. Mettre le code sur GitHub (une seule fois)

1. Créer un compte sur https://github.com.
2. Cliquer **New repository** → nom : `portfolio` → **Private** ou Public → **Create repository** (sans README).
3. Dans le terminal de VS Code, taper ces lignes une par une (remplacer `TON-PSEUDO`) :
   ```
   git init
   git add .
   git commit -m "Premier envoi du portfolio"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/portfolio.git
   git push -u origin main
   ```
   Une fenêtre de connexion GitHub peut s'ouvrir : se connecter.

## 4. Mettre le site en ligne avec Vercel (une seule fois)

1. Aller sur https://vercel.com → **Sign up** → **Continue with GitHub**.
2. **Add New… > Project** → choisir le dépôt `portfolio` → **Import**.
3. Vercel détecte Astro tout seul. Cliquer **Deploy**.
4. Après une minute, le site est en ligne sur une adresse du type `portfolio-xxxx.vercel.app`.
5. Ouvrir `astro.config.mjs` et remplacer `site: 'https://louay-portfolio.vercel.app'` par ta vraie adresse, puis envoyer la modification (étape 5).

## 5. Publier une modification

Après chaque changement :
```
git add .
git commit -m "Ce que j'ai changé"
git push
```
Vercel remet le site à jour automatiquement en une minute.

## 6. Le formulaire de contact

- Il utilise Web3Forms. Les messages arrivent sur la boîte mail liée à la clé.
- Après la mise en ligne : envoyer un message test depuis le site, vérifier la réception.
- Dans le tableau de bord Web3Forms, ajouter le domaine du site dans les domaines autorisés (protection anti-spam).

## 7. Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Les textes de l'accueil, du menu, du contact (EN et FR) | `src/data/site.ts` |
| Une étude de cas (EN et FR) | `src/data/zain.ts`, `omniflow.ts`, `maxit.ts`, `maroc-telecom.ts` |
| Les couleurs, typographies, espacements | `src/styles/global.css` (en haut : les tokens) |
| Les images | `public/img/...` (même nom de fichier pour remplacer) |
| Les CV téléchargeables (anglais, français) | `public/cv/Louay-Ben-Hassine-CV-EN.pdf` et `-FR.pdf` |

Pour les modifications, le plus simple : ouvrir Claude Code dans VS Code et lui demander. Il lit `CLAUDE.md` automatiquement.
