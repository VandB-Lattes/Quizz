/* =====================================================================
   VandB Quizz — configuration (à modifier sur GitHub : crayon ✏️ puis Commit)
   ===================================================================== */
window.QB_CONFIG = {
  // Relais TURN (recommandé pour la 4G et les Wi-Fi qui isolent les appareils).
  // Compte gratuit sur metered.ca → coller l'URL "credentials" qui contient apiKey=… entre les guillemets.
  TURN_API_URL: "",

  // Serveur de mise en relation perso (optionnel, laisser null).
  // Exemple : { host: "mon-serveur.onrender.com", port: 443, path: "/", secure: true }
  PEER_SERVER: null,

  // Organisateur affiché dans les conditions d'utilisation.
  ORGANISATEUR: {
    nom: "",       // ex. "SAS Exemple — V and B Ville"
    adresse: "",   // ex. "12 rue Exemple, 75000 Paris"
    contact: ""    // ex. "contact@exemple.fr"
  }
};
