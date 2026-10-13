# VandB Quizz — soirée quiz au bar

Écran TV / vidéoprojecteur = questions, chrono, classement, voix.
Téléphones = les joueurs répondent en scannant le QR code. Aucune appli, aucun compte.

## Fichiers à mettre sur GitHub (dans le même dossier)
- `index.html` — l'appli
- `logo.jpg` — le logo
- `qrcode.min.js` — générateur de QR code (licence MIT, `qrcode-LICENSE.txt`)

## Mise en ligne depuis un téléphone
1. Enregistrer les 3 fichiers sur le téléphone (Fichiers / Téléchargements).
2. Dans le navigateur (pas l'appli GitHub), aller sur github.com et créer un compte.
3. Menu du navigateur → **Version pour ordinateur**.
4. **+** (en haut) → **New repository** → nom `quiz-bar` → **Public** → **Create repository**.
5. Lien **uploading an existing file** → **choose your files** → sélectionner les 3 fichiers → **Commit changes**.
6. **Settings** → **Pages** → Branch : `main` / `(root)` → **Save**.
7. Attendre 1–2 min, recharger : l'adresse s'affiche (`https://VOTRE-PSEUDO.github.io/quiz-bar/`).

## Relais TURN (recommandé, gratuit, 10 min)
Sans relais, certains téléphones en 4G ou sur un Wi-Fi « isolé » ne pourront pas se connecter.
1. Créer un compte gratuit sur metered.ca → section **TURN Server** (offre gratuite).
2. Copier l'URL « credentials » qui contient `apiKey=…`.
3. Sur GitHub, ouvrir `index.html` → crayon ✏️ → tout en haut, coller l'URL entre les guillemets de `TURN_API_URL: ""` → **Commit changes**.
4. Sur l'écran TV, le badge doit afficher « relais ✓ ».

## Pendant la soirée
- Ordinateur relié à la TV : ouvrir l'adresse → **Lancer l'écran TV** → **Plein écran**. Désactiver la mise en veille.
- **Espace / Entrée** fait avancer. Cliquer sur un pseudo pour exclure un joueur.
- Si l'onglet TV se ferme ou se recharge : rouvrir l'adresse → **Reprendre la partie**. Les téléphones se reconnectent seuls, scores conservés.
- Option **Question seulement sur la TV** (anti-triche, activée par défaut).
- **Voix** : choisir la voix française et cliquer **Tester**. Chrome ou Edge donnent les meilleures voix.

## Questions perso
Bouton **✏️ Questions perso** sur l'écran TV : une ligne par question,
`Catégorie;Question;Bonne réponse;Faux 1;Faux 2;Faux 3` (ou fichier .csv point-virgule depuis Excel).
Elles restent sur l'ordinateur TV, jamais publiées. Les 82 questions intégrées sont encodées dans le site.

## Limites restantes
- Le serveur gratuit PeerJS (mise en relation) n'a pas de garantie ; un serveur perso peut être indiqué dans `PEER_SERVER`.
- Jusqu'à ~40 joueurs conseillé.
- Faire un essai avec 2–3 téléphones (Wi-Fi du bar + 4G) avant la première soirée.
