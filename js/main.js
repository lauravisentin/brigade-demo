// ==============================
// BRIGADE — Script principal
// ==============================
// Gère :
// - Le choix entre Professionnel·le / Restaurateur·rice
// - Le changement dynamique du formulaire
// - Le toggle visuel (ON/OFF du switch dans le header)
// - L’animation du fond lumineux ("halo")
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const optionPro = document.getElementById("option-pro");
  const optionResto = document.getElementById("option-resto");
  const titre = document.getElementById("profil-titre");
  const formEmploye = document.querySelector(".form-employe");
  const formEmployeur = document.querySelector(".form-employeur");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // === Basculer le thème (switch ON/OFF) ===
  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      const isActive = themeToggle.checked;
      body.classList.toggle("light-mode", isActive);
    });
  }

  // === Affiche le bon formulaire selon le choix ===
  function updateForm(isEmployeur) {
    formEmploye.classList.toggle("hidden", isEmployeur);
    formEmployeur.classList.toggle("hidden", !isEmployeur);
  }

  // === Choix Professionnel·le ===
  optionPro.addEventListener("click", () => {
    optionPro.classList.add("active");
    optionResto.classList.remove("active");
    updateForm(false);
  });

  // === Choix Restaurateur·rice ===
  optionResto.addEventListener("click", () => {
    optionResto.classList.add("active");
    optionPro.classList.remove("active");
    updateForm(true);
  });
});