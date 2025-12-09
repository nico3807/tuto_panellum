// --- 1. FONCTION PÉDAGOGIQUE POUR LE MENU (Partagée par toutes les pages) ---

/**
 * Fonction JavaScript appelée par le bouton pour déployer/rétracter les blocs de code (indices).
 * Elle assure la restauration du titre descriptif grâce à la propriété 'originalDescription'.
 * @param {HTMLElement} button - Le bouton cliqué (l'objet 'this' dans le HTML).
 */
function toggleCode(button) {
  // 1. Stocker le texte descriptif initial (ex: "Indice de syntaxe...")
  if (!button.originalDescription) {
    // Enlève le "[ + ] " qui fait 4 caractères et stocke le reste du texte descriptif.
    button.originalDescription = button.textContent.substring(4).trim();
  }

  // 2. Sélectionne le div.code-content (élément masqué)
  const content = button.nextElementSibling;

  // 3. Bascule la classe CSS 'is-expanded'
  content.classList.toggle("is-expanded");

  // 4. Mise à jour du texte du bouton [+] ou [-]
  if (content.classList.contains("is-expanded")) {
    button.textContent = "[ - ] Masquer le code";
  } else {
    // Rétablit le [+] et la description stockée
    button.textContent = "[ + ] " + button.originalDescription;
  }
}

// --- 2. FONCTIONS DE DÉMONSTRATION DU TD RÉFÉRENCE DU DOM ---

/**
 * Fonction de démonstration pour page_1.html (Sélection et Création).
 */
function runPage1Examples() {
  const outputDiv = document.getElementById("output");

  // Réinitialisation de la zone de sortie
  outputDiv.innerHTML = "<h2>Résultats de la Démo :</h2>";
  const bodyTitle = document.querySelector("h1");
  bodyTitle.textContent = "1. 🔎 SÉLECTION EN COURS...";

  // 1. getElementById
  const btnDemarrer = document.getElementById("start-btn");
  btnDemarrer.textContent = "Exécution en cours...";

  // 2. querySelector
  document.querySelector(".mon-lien").style.color = "red";

  // 3. querySelectorAll
  document.querySelectorAll(".mon-lien").forEach((lien) => {
    lien.style.fontWeight = "bold";
  });

  // 4. createElement & appendChild
  const msg = document.createElement("p");
  msg.innerHTML = "<strong>4. Message ajouté par appendChild !</strong>";
  outputDiv.appendChild(msg);

  // 5. createTextNode
  const text = document.createTextNode(" - 5. Fin de l'ajout en texte brut.");
  outputDiv.appendChild(text);

  // 6. remove
  setTimeout(() => {
    const btnToRemove = document.getElementById("start-btn");
    if (btnToRemove) {
      btnToRemove.remove();
    }
    bodyTitle.textContent = "1. 🔎 Sélection et Création d'Éléments (Terminé)";
  }, 3000);
}

/**
 * Fonction de démonstration pour page_2.html (Sélection) - Adaptée pour le nouveau TD DOM.
 */
function runPage2Examples() {
  const demoBox = document.getElementById("demo-box");

  // Réinitialisation de la démonstration :
  demoBox.style.backgroundColor = "transparent";
  document.querySelectorAll(".bouton-action").forEach((btn) => {
    btn.style.backgroundColor = "";
    btn.style.fontSize = "";
    btn.style.color = "black";
    btn.style.border = "none";
  });
  const titrePrincipal = document.getElementById("titre-principal");
  titrePrincipal.textContent = "Titre Principal";

  // Indice 1 : Sélection par ID (#)
  const monTitre = document.querySelector("#titre-principal");
  monTitre.textContent = "Titre SÉLECTIONNÉ !";

  // Indice 2 : Sélection du PREMIER élément par Classe (.)
  const monBouton = document.querySelector(".bouton-action");
  monBouton.style.backgroundColor = "#00CCFF";
  monBouton.style.color = "white";

  // Indice 3 : Sélectionner TOUS les éléments
  const tousLesBoutons = document.querySelectorAll(".bouton-action");
  tousLesBoutons.forEach((bouton) => {
    bouton.style.fontSize = "1.2em";
    bouton.style.border = "2px solid red";
  });

  demoBox.style.backgroundColor = "#e9f5ff";
  alert(
    "Démonstration de sélection terminée. Vérifiez les modifications et la console !"
  );
}

/**
 * Fonction de démonstration pour page_3.html (Contenu et Attributs).
 */
function runPage3Examples() {
  const targetBox = document.getElementById("target-box");
  const imageCible = document.getElementById("image-cible");
  const lienCible = document.getElementById("lien-cible");
  const bodyTitle = document.querySelector("h1");

  // Réinitialisation des éléments
  targetBox.innerHTML =
    "<p>Ceci est un paragraphe avec <strong>HTML</strong>.</p>";
  imageCible.src = "logo_MMI_Beziers.jpg";
  imageCible.alt = "Image initiale";
  lienCible.href = "https://www.umontpellier.fr/";
  lienCible.textContent = "Lien initial (Site de l'UM)";
  bodyTitle.textContent = "3. ✍️ Modifier le contenu et les attributs";

  // 1. textContent (supprime le HTML)
  setTimeout(() => {
    targetBox.textContent =
      "1. Contenu sans formatage HTML (textContent). Le HTML a disparu.";
  }, 500);

  // 2. innerHTML (ajoute le HTML)
  setTimeout(() => {
    targetBox.innerHTML =
      "<p>2. Nouveau <strong>contenu HTML</strong> inséré ! (innerHTML)</p>";
  }, 2000);

  // 3. Modifier src et alt (Image)
  setTimeout(() => {
    imageCible.src =
      "https://via.placeholder.com/100x100/e74c3c/ffffff?text=NEW_SRC";
    imageCible.alt = "Nouvelle image de démonstration.";
  }, 3500);

  // 4. Modifier href (Lien)
  setTimeout(() => {
    lienCible.href = "https://iut-beziers.edu.umontpellier.fr/";
    lienCible.textContent = "Lien vers IUT Béziers (modifié)";
  }, 5000);

  // Finalisation
  setTimeout(() => {
    bodyTitle.textContent = "3. ✍️ Modifier le contenu et les attributs";
    alert("Démonstration terminée ! Vérifiez l'URL du lien et l'image.");
  }, 6000);
}

/**
 * Fonction de démonstration pour page_4.html (Style, Classes et Événements).
 */
function runPage4Examples() {
  const target = document.getElementById("target-style");
  const bodyTitle = document.querySelector("h1");

  // Réinitialisation de l'élément cible et du titre
  target.className = "";
  target.style.cssText = "";
  target.textContent = "Élément cible de manipulation de style.";
  bodyTitle.textContent = "4. 🎨 Manipulation du Style en cours...";

  // 1. Style en ligne (backgroundColor)
  setTimeout(() => {
    target.style.backgroundColor = "tomato";
    target.textContent = "1. Couleur de fond modifiée (style.backgroundColor).";
  }, 1000);

  // 2. Style en ligne (display: none)
  setTimeout(() => {
    target.style.display = "none";
  }, 2500);

  // 3. Réapparition et classList.add/remove
  setTimeout(() => {
    target.style.display = "block";
    target.style.backgroundColor = "";

    target.classList.add("large-font");
    target.textContent = "3. Classe 'large-font' ajoutée (classList.add).";
  }, 4000);

  // 4. classList.remove
  setTimeout(() => {
    target.classList.remove("large-font");
    target.textContent = "4. Classe 'large-font' retirée (classList.remove).";
  }, 5500);

  // 5. classList.toggle
  setTimeout(() => {
    target.classList.toggle("dark-mode");
    target.textContent = "5. Mode Sombre Actif (classList.toggle).";
  }, 7000);

  // 6. classList.toggle (Retour à l'état initial)
  setTimeout(() => {
    target.classList.toggle("dark-mode");
    target.textContent = "6. Retour au mode clair (toggle).";
    bodyTitle.textContent = "4. 🎨 Manipuler le Style (CSS)";
  }, 8500);
}

/**
 * Fonction de démonstration pour page_5.html (Créer et Ajouter des éléments).
 */
function runPage5Examples() {
  const hero = document.getElementById("hero");
  hero.innerHTML = "Zone parent cible (ID: hero)"; // Réinitialisation

  // 1. Création et Customisation
  const nouveauBouton = document.createElement("button");
  nouveauBouton.textContent = "Bouton créé dynamiquement";
  nouveauBouton.classList.add("btn-primary");

  // 2. Insertion dans le DOM
  hero.appendChild(nouveauBouton);

  console.log("Élément créé et ajouté à la zone #hero.");
  alert("Un nouveau bouton vert a été inséré dans la zone pointillée !");
}

/**
 * Fonction de démonstration pour page_6.html (Événements).
 */
function runPage6Examples() {
  const btn = document.querySelector("#event-btn");
  const input = document.querySelector("#input-field-event");

  // Réinitialisation (Retirer les écouteurs précédents pour éviter les duplications)
  // Note: Ces handlers (fonctions) sont définis localement pour la démo
  btn.removeEventListener("click", btnClickHandler);
  input.removeEventListener("input", inputHandler);

  // Définir les Handlers (Fonctions)
  function btnClickHandler() {
    document.body.classList.toggle("dark-mode-site");
  }

  function inputHandler(e) {
    console.log("Saisie en temps réel (input event): " + e.target.value);
  }

  // Attacher les écouteurs (Fonctionnel)
  btn.addEventListener("click", btnClickHandler);
  input.addEventListener("input", inputHandler);

  alert(
    "Le bouton CLICK et le champ INPUT sont maintenant actifs. Ouvrez la console !"
  );
}

// --- INITIALISATION AU CHARGEMENT DE LA PAGE (Pour les TPs) ---

// Ce bloc gère l'initialisation du Générateur de MDP (si la page index.html est chargée)
window.onload = function () {
  const passwordDisplay = document.getElementById("password-display");
  if (passwordDisplay) {
    // Logique du Générateur de MDP : Initialisation des variables et premier lancement
    // Les fonctions setPasswordLength, updateOptions, generatePassword doivent exister
    setPasswordLength();
    updateOptions();
    generatePassword();
  }
};
