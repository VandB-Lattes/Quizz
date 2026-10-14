# VandB Quizz — soirée quiz au bar

- **Régie** (ordinateur de l'animateur) : réglages, lancement, bonne réponse à annoncer, saison.
- **Écran TV** : fenêtre séparée à glisser sur le vidéoprojecteur (plein écran d'un clic).
- **Téléphones** : les joueurs scannent le QR code, choisissent nom, avatar, couleur et acceptent les conditions.
- **Télécommande** (optionnelle) : la régie sur téléphone ou tablette, pour animer au micro.
- **Saison** : classement annuel avec points, bonus et malus ; chaque joueur suit ses points.

## Fichiers (tous dans le même dossier sur GitHub)
| Fichier | Rôle |
| --- | --- |
| `index.html` | Le jeu (régie, écran TV, joueurs, télécommande, éditeur, saison) |
| `config.js` | **À compléter** : organisateur (conditions). Le reste fonctionne sans réglage |
| `conditions.html` | Conditions d'utilisation acceptées par les joueurs |
| `test.html` | Test de connexion de l'appareil |
| `simulateur.html` | Téléphones virtuels (démo hors ligne ou vraie partie) |
| `mock-reseau.js` | Réseau simulé utilisé par la démo |
| `modele-questions.csv` | Modèle Excel pour importer des questions |
| `logo.png`, `qrcode.min.js`, `qrcode-LICENSE.txt` | Logo et générateur de QR code |

Le dossier `data/` est créé automatiquement dans le dépôt par la sauvegarde en ligne (quiz chiffrés, saison) : ne pas le supprimer.

## Mise en ligne
1. github.com → **New repository** `quiz-bar` (Public).
2. **Add file → Upload files** → déposer tous les fichiers → **Commit changes**.
3. **Settings → Pages** → Branch `main` / `(root)` → **Save**. Adresse : `https://VOTRE-PSEUDO.github.io/quiz-bar/`.
4. `config.js` → crayon ✏️ → remplir `ORGANISATEUR` → **Commit**.
5. Sauvegarde en ligne (une fois par appareil admin) : Mes quiz → **Connecter** → suivre les 4 étapes (jeton GitHub « Contents : Read and write » limité au dépôt).

## Pendant la soirée
- Ordinateur : **Lancer la partie** → la régie s'affiche et l'écran TV s'ouvre dans une autre fenêtre.
  Glisser cette fenêtre sur le vidéoprojecteur (ou elle s'y place seule si le navigateur le permet), cliquer dedans → plein écran.
- Tablette seule branchée à la TV : **Mode écran unique**, et piloter avec la télécommande.
- Espace / Entrée dans la régie : étape suivante.

## Saison
Barème par défaut (modifiable dans la régie → Saison → Barème) :
place 25/18/15/12/10/8/6/4/2/1 · participation +5 · sans faute (≥ 5 questions) +10 · série de 5 bonnes réponses +5 · abandon −5.
Bonus / malus manuels avec motif, classement complet, « Afficher à l'écran », nouvelle saison (l'ancienne est archivée).
Chaque joueur a un **code joueur** (page « Classement de la saison ») pour retrouver ses points sur un autre téléphone.

## Questions
- **2 367 questions intégrées** : 10 catégories × 200 (chacune en 6 sous-catégories, ex. Cinéma & TV › Disney & Pixar)
  + **Soirées décennies** : Années 70, 80, 90, 2000, 2010, 2020 (60 questions chacune : Musique, Cinéma & TV, Actualité, Sport & société).
- Créer un quiz (Mes quiz) :
  - **⚡ Quiz express** : cocher des thèmes (ou un bouton « Soirée Années 80 »), choisir le nombre → créé. 🔄 remplace une question.
  - **✍️ Écrire mes questions** : question, bonne réponse, 1 à 3 mauvaises (ou Vrai / Faux), puis « Ajouter et continuer ».
  - **📥 Importer un fichier** : Excel (`modele-questions.csv`, CSV point-virgule) ou OpenQuizzDB en JSON (CC BY-SA 4.0, source affichée).
- Sans quiz perso : réglages → « Banque de questions » + choix des thèmes.

## Habillage et loi Évin
- Couleurs et typographies des visuels V and B (brun-noir, orange, jaune, bleu-vert, crème), logo conservé.
- 25 avatars illustrés originaux au choix des joueurs (aucun ne représente de l'alcool) + 10 couleurs.
- Thèmes Vins / Bières & spiritueux / Cocktails décochés par défaut : à cocher volontairement.
- Message « L'abus d'alcool est dangereux pour la santé, à consommer avec modération. » sur l'accueil, la salle d'attente,
  et sous chaque question qui parle d'alcool (écran TV et téléphones). Aucun lot alcoolisé (conditions v3).

## iPhone, jeton GitHub, classement
- **Plein écran iPhone / iPad** : Safari → Partager → « Sur l'écran d'accueil ». L'icône VandB Quizz s'ouvre sans barres (fichiers `manifest.webmanifest` + icônes).
- **Jeton GitHub** : le créer avec **Expiration : No expiration**. Sinon, saisir sa date d'expiration : l'appli prévient 30 jours avant ; un jeton expiré est signalé et rien n'est perdu.
- **Classement de la saison** : en partie, lu en direct depuis l'animateur ; hors partie, lu directement dans le dépôt GitHub (plus d'attente de GitHub Pages).

## Tester sans public
`simulateur.html` → **Démo complète** (écran TV + télécommande PIN 0000 + téléphones virtuels, sans internet)
ou **Rejoindre une vraie partie**.
