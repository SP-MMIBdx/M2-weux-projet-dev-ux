// JavaScript principal de l'application

// Chargement des fragments HTML communs
async function loadPartial(containerId, filePath) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(`Impossible de charger le fragment : ${filePath}`, error);
  }
}

loadPartial("site-header", "includes/header.html");
loadPartial("site-footer", "includes/footer.html");

// Affichage indépendant des champs de mot de passe
function setupPasswordToggle(
  inputId,
  buttonId,
  showLabel = "Afficher le mot de passe",
  hideLabel = "Masquer le mot de passe"
) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = document.getElementById(buttonId);

  if (!passwordInput || !toggleButton) {
    return;
  }

  toggleButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = hideLabel;
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = showLabel;
    }
  });
}

setupPasswordToggle("login-password", "toggle-login-password");
setupPasswordToggle("register-password", "toggle-register-password");
setupPasswordToggle(
  "register-password-confirm",
  "toggle-register-password-confirm",
  "Afficher la confirmation du mot de passe",
  "Masquer la confirmation du mot de passe"
);

// Retour immédiat sur deux champs à comparer
function setupFieldConfirmation(inputId, confirmationId, feedbackId, matchMessage, mismatchMessage) {
  const input = document.getElementById(inputId);
  const confirmationInput = document.getElementById(confirmationId);
  const feedback = document.getElementById(feedbackId);

  if (!input || !confirmationInput || !feedback) {
    return;
  }

  function updateFeedback() {
    if (confirmationInput.value === "") {
      feedback.textContent = "";
    } else if (input.value === confirmationInput.value) {
      feedback.textContent = matchMessage;
    } else {
      feedback.textContent = mismatchMessage;
    }
  }

  input.addEventListener("input", updateFeedback);
  confirmationInput.addEventListener("input", updateFeedback);
  updateFeedback();
}

setupFieldConfirmation(
  "register-password",
  "register-password-confirm",
  "register-password-feedback",
  "Les mots de passe correspondent.",
  "Les mots de passe ne correspondent pas."
);

setupFieldConfirmation(
  "register-email",
  "register-email-confirm",
  "register-email-feedback",
  "Les adresses e-mail correspondent.",
  "Les adresses e-mail ne correspondent pas."
);

// Repères pédagogiques : ce contrôle simple n’est pas un score de sécurité.
function getPasswordGuidance(password) {
  if (password === "") {
    return "";
  }

  const commonPatterns = ["123456", "abcdef", "azerty", "qwerty", "password", "motdepasse"];
  const hasCommonPattern = commonPatterns.some(function (pattern) {
    return password.toLowerCase().includes(pattern);
  });

  if (hasCommonPattern || /^(.)\1+$/u.test(password)) {
    return "Motif prévisible : évite les suites courantes et les caractères répétés.";
  }

  if (Array.from(password).length < 15) {
    return "Mot de passe court : vise au moins 15 caractères.";
  }

  return "Longueur suffisante pour ce repère. Privilégie une phrase de passe unique.";
}

function setupPasswordGuidance() {
  const passwordInput = document.getElementById("register-password");
  const feedback = document.getElementById("register-password-strength");

  if (!passwordInput || !feedback) {
    return;
  }

  function updateGuidance() {
    feedback.textContent = getPasswordGuidance(passwordInput.value);
  }

  passwordInput.addEventListener("input", updateGuidance);
  updateGuidance();
}

setupPasswordGuidance();

// Compteur aligné sur la limite native du champ
function setupCharacterCounter(inputId, counterId) {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(counterId);

  if (!input || !counter) {
    return;
  }

  function updateCount() {
    const count = input.value.length;
    counter.textContent = `${count} / ${input.maxLength} caractères`;
  }

  input.addEventListener("input", updateCount);
  updateCount();
}

setupCharacterCounter("profile-description", "profile-description-count");
setupCharacterCounter("contact-message", "contact-message-count");

// Compteur et sélection groupée indépendants pour chaque groupe de cases
function setupTagSelection(groupId) {
  const group = document.getElementById(groupId);

  if (!group) {
    return;
  }

  const checkboxes = group.querySelectorAll('input[type="checkbox"]');
  const counter = group.querySelector("[data-selection-count]");
  const selectButton = group.querySelector("[data-select-all]");
  const clearButton = group.querySelector("[data-clear-selection]");

  if (!counter || !selectButton || !clearButton || checkboxes.length === 0) {
    return;
  }

  function updateSelection() {
    const count = group.querySelectorAll('input[type="checkbox"]:checked').length;
    const label = count > 1 ? "options sélectionnées" : "option sélectionnée";
    counter.textContent = `${count} ${label}`;
    selectButton.disabled = count === checkboxes.length;
    clearButton.disabled = count === 0;
  }

  function setSelection(checked) {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = checked;
    });
    checkboxes[0].focus({ preventScroll: true });
    updateSelection();
  }

  group.addEventListener("change", updateSelection);
  selectButton.addEventListener("click", function () {
    setSelection(true);
  });
  clearButton.addEventListener("click", function () {
    setSelection(false);
  });

  updateSelection();
}

setupTagSelection("profile-interests");
setupTagSelection("profile-needs");
