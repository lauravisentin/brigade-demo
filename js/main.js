// ==============================
// BRIGADE — Script principal
// ==============================
// Gère :
// - Le toggle (Employé / Employeur)
// - Le changement dynamique du formulaire
// - L’adaptation du texte dans la section Vision
// ==============================

// === Sélection des éléments ===
const toggle = document.getElementById("modeToggle");
const titre = document.getElementById("profil-titre");
const desc = document.getElementById("profil-description");
const formEmploye = document.querySelector(".form-employe");
const formEmployeur = document.querySelector(".form-employeur");
const sectionVision = document.getElementById("vision");

// === Section "Vision" ===
const visionBlocks = [
  {
    titre: document.getElementById("vision1-titre"),
    texte: document.getElementById("vision1-texte"),
  },
  {
    titre: document.getElementById("vision2-titre"),
    texte: document.getElementById("vision2-texte"),
  },
  {
    titre: document.getElementById("vision3-titre"),
    texte: document.getElementById("vision3-texte"),
  },
];

// === Textes employés / employeurs ===
const visionEmploye = [
  {
    titre: "Une expérience fluide",
    texte: "Swipez, matchez, recrutez — aussi simple qu’un geste.",
  },
  {
    titre: "Un réseau d’excellence",
    texte: "Chefs, sommeliers et gestionnaires réunis dans une plateforme humaine.",
  },
  {
    titre: "Une sélection sur mesure",
    texte: "Les meilleurs talents, connectés aux meilleures tables.",
  },
];

const visionEmployeur = [
  {
    titre: "Un recrutement simplifié",
    texte: "Trouvez vos talents en un geste, sans CV ni formulaires compliqués.",
  },
  {
    titre: "Un réseau qualifié",
    texte: "Des professionnels expérimentés, validés par la communauté Brigade.",
  },
  {
    titre: "Une mise en valeur unique",
    texte: "Présentez votre maison avec élégance et attirez les bons profils.",
  },
];

const initialMode = toggle.checked;
sectionVision.classList.add(initialMode ? "gradient-employeur" : "gradient-employe");




// ==============================
// FONCTION : bascule du mode
// ==============================
toggle.addEventListener("change", () => {
  const isEmployeur = toggle.checked;

  // Changement de thème global (classe sur <body>)
  document.body.classList.toggle("employeur-mode", isEmployeur);

  // Affichage / masquage des formulaires
  formEmploye.classList.toggle("hidden", isEmployeur);
  formEmployeur.classList.toggle("hidden", !isEmployeur);

  // Texte du titre + description de la section Profil
  titre.textContent = isEmployeur
    ? "Publie ta maison brigade."
    : "Crée ton profil brigade.";
  desc.textContent = isEmployeur
    ? "Accède au réseau exclusif de talents en gastronomie."
    : "Rejoins le réseau des talents gastronomiques du Québec.";

    if (isEmployeur) {
        sectionVision.classList.remove("gradient-employe");
        sectionVision.classList.add("gradient-employeur");
    } else {
        sectionVision.classList.remove("gradient-employeur");
        sectionVision.classList.add("gradient-employe");
    }
  // Mise à jour de la section Vision
  const contenu = isEmployeur ? visionEmployeur : visionEmploye;
  visionBlocks.forEach((bloc, i) => {
    // Animation de transition douce
    bloc.titre.classList.add("fade-out");
    bloc.texte.classList.add("fade-out");

    setTimeout(() => {
      bloc.titre.textContent = contenu[i].titre;
      bloc.texte.textContent = contenu[i].texte;
      bloc.titre.classList.remove("fade-out");
      bloc.texte.classList.remove("fade-out");
      bloc.titre.classList.add("fade-in");
      bloc.texte.classList.add("fade-in");

      // Nettoyage après animation
      setTimeout(() => {
        bloc.titre.classList.remove("fade-in");
        bloc.texte.classList.remove("fade-in");
      }, 400);
    }, 200);
  });
});
