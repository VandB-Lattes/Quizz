# VandB Quizz — soirée quiz au bar

Écran TV / vidéoprojecteur = questions, chrono, classement (plein écran automatique).
Téléphones = les joueurs répondent en scannant le QR code, après avoir accepté les conditions.
Télécommande = l'animateur pilote la partie depuis son téléphone ou sa tablette, au micro.

## Fichiers (tous dans le même dossier sur GitHub)
| Fichier | Rôle |
| --- | --- |
| `index.html` | Le jeu (écran TV, joueurs, télécommande, éditeur de quiz) |
| `config.js` | **À compléter** : organisateur (conditions), relais TURN |
| `conditions.html` | Conditions d'utilisation acceptées par les joueurs |
| `test.html` | Test de connexion de l'appareil |
| `simulateur.html` | Téléphones virtuels (démo hors ligne ou vraie partie) |
| `mock-reseau.js` | Réseau simulé utilisé par la démo |
| `modele-questions.csv` | Modèle Excel pour importer des questions |
| `logo.png`, `qrcode.min.js`, `qrcode-LICENSE.txt` | Logo et générateur de QR code |

## Mise en ligne
1. github.com → **New repository** `quiz-bar` (Public).
2. **Add file → Upload files** → déposer tous les fichiers → **Commit changes**.
3. **Settings → Pages** → Branch `main` / `(root)` → **Save**. Adresse : `https://VOTRE-PSEUDO.github.io/quiz-bar/`.
4. Ouvrir `config.js` → crayon ✏️ → remplir `ORGANISATEUR` (nom, adresse, contact) et, si possible, `TURN_API_URL` → **Commit**.
5. Ouvrir `…/quiz-bar/test.html` sur l'ordinateur TV puis sur un téléphone (Wi-Fi et 4G).

## Pendant la soirée
- Écran TV : ouvrir l'adresse → **Lancer l'écran TV** (passe en plein écran tout seul ; double-clic pour y revenir).
- Le public ne voit que le QR code, les joueurs et le jeu. Les réglages sont derrière **⚙️** (en haut à droite, ou touche R).
- Télécommande : dans ⚙️, scanner le QR code « Télécommande » (ou Accueil → Télécommande animateur + PIN).
  Elle affiche la bonne réponse à annoncer au micro, et permet de régler, lancer, dévoiler, avancer, arrêter, exclure, envoyer un quiz à l'écran.
- Onglet TV fermé ou rechargé : rouvrir l'adresse → **Reprendre la partie**.

## Questions
- 213 questions intégrées, 9 catégories, consultables par onglets : Accueil → Créer / modifier mes quiz → **Banque de questions**.
- Import : télécharger `modele-questions.csv`, le remplir dans Excel (une question par ligne :
  `Catégorie;Question;Bonne réponse;Faux 1;Faux 2;Faux 3`, 2 à 4 réponses), enregistrer en **CSV (séparateur point-virgule)**,
  puis Mes quiz → **Importer un fichier**. Les doublons sont ignorés automatiquement.
- OpenQuizzDB (openquizzdb.org/listing, licence CC BY-SA 4.0) : télécharger les quiz au format **JSON**, puis Mes quiz → **Importer un fichier**
  (plusieurs fichiers d'un coup possible). Anecdotes reprises, source affichée à l'écran automatiquement.

## Tester sans public
`simulateur.html` → **Démo complète** : écran TV + télécommande (PIN 0000) + téléphones virtuels, sans internet.
Onglet **Rejoindre une vraie partie** : des téléphones virtuels rejoignent une partie lancée sur l'écran TV.
