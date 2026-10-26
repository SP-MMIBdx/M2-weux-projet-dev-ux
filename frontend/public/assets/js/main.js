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

// Retour immédiat sur la confirmation du mot de passe
function setupPasswordConfirmation() {
  const passwordInput = document.getElementById("register-password");
  const confirmationInput = document.getElementById("register-password-confirm");
  const feedback = document.getElementById("register-password-feedback");

  if (!passwordInput || !confirmationInput || !feedback) {
    return;
  }

  function updateFeedback() {
    if (confirmationInput.value === "") {
      feedback.textContent = "";
    } else if (passwordInput.value === confirmationInput.value) {
      feedback.textContent = "Les mots de passe correspondent.";
    } else {
      feedback.textContent = "Les mots de passe ne correspondent pas.";
    }
  }

  passwordInput.addEventListener("input", updateFeedback);
  confirmationInput.addEventListener("input", updateFeedback);
  updateFeedback();
}

setupPasswordConfirmation();

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
