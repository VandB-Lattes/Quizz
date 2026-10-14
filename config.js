/* =====================================================================
   VandB Quizz — configuration (à modifier sur GitHub : crayon ✏️ puis Commit)
   ===================================================================== */
window.QB_CONFIG = {
  // Organisateur affiché dans les conditions d'utilisation (à compléter).
  ORGANISATEUR: {
    nom: "",       // ex. "SAS Exemple — V and B Ville"
    adresse: "",   // ex. "12 rue Exemple, 75000 Paris"
    contact: ""    // ex. "contact@exemple.fr"
  },

  // ---- Réglages avancés : rien à toucher, tout fonctionne sans compte ----

  // Relais public gratuit (Open Relay) pour la 4G et les Wi-Fi qui isolent les appareils.
  // Activé d'office ; mettre false seulement pour le désactiver.
  RELAIS_PUBLIC: true,

  // Optionnel : URL d'un relais TURN privé (ex. compte Metered), en plus du relais public.
  TURN_API_URL: "",

  // Optionnel : serveur de mise en relation perso. Exemple :
  // { host: "mon-serveur.onrender.com", port: 443, path: "/", secure: true }
  PEER_SERVER: null
};
