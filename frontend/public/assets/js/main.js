// JavaScript principal de l'application

/** Relie le bouton à son champ via aria-controls et reprend les libellés du gabarit. */
function setupPasswordToggle(buttonId) {
  const button = document.getElementById(buttonId);

  if (!button) {
    return;
  }

  const input = document.getElementById(button.getAttribute("aria-controls"));
  const showLabel = button.textContent.trim();
  const hideLabel = button.dataset.hideLabel;

  if (!input || !showLabel || !hideLabel) {
    return;
  }

  button.addEventListener("click", function () {
    const shouldReveal = input.type === "password";
    input.type = shouldReveal ? "text" : "password";
    button.textContent = shouldReveal ? hideLabel : showLabel;
  });
}

setupPasswordToggle("toggle-login-password");
setupPasswordToggle("toggle-register-password");
setupPasswordToggle("toggle-register-password-confirm");

/** Affiche les erreurs de longueur ou de format selon les contraintes HTML du champ. */
function setupUsernameValidation(inputId, feedbackId) {
  const input = document.getElementById(inputId);
  const feedback = document.getElementById(feedbackId);

  if (!input || !feedback) {
    return;
  }

  /** Synchronise le message visible et l’état de validité du champ. */
  function updateFeedback() {
    let message = "";

    if (input.value.length > input.maxLength) {
      message = `Limite de ${input.maxLength} caractères dépassée.`;
    } else if (input.validity.patternMismatch) {
      message = "Utilise uniquement des lettres A–Z, des chiffres, _ ou -, sans espace.";
    }

    // Une chaîne vide efface l’erreur personnalisée après correction.
    input.setCustomValidity(message);
    feedback.textContent = message;

    if (message) {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
  }

  input.addEventListener("input", updateFeedback);
  updateFeedback();
}

setupUsernameValidation("register-username", "register-username-feedback");
setupUsernameValidation("login-username", "login-username-feedback");

/** Compare les valeurs exactes de deux champs et actualise le retour à chaque saisie. */
function setupFieldConfirmation(inputId, confirmationId, feedbackId, matchMessage, mismatchMessage) {
  const input = document.getElementById(inputId);
  const confirmationInput = document.getElementById(confirmationId);
  const feedback = document.getElementById(feedbackId);

  if (!input || !confirmationInput || !feedback) {
    return;
  }

  /** N’affiche aucun message tant que la confirmation est vide. */
  function updateFeedback() {
    const confirmationValue = confirmationInput.value;
    const message = input.value === confirmationValue ? matchMessage : mismatchMessage;
    feedback.textContent = confirmationValue === "" ? "" : message;
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

/** Compte les unités UTF-16, comme la limite native maxlength du champ. */
function setupCharacterCounter(inputId, counterId) {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(counterId);

  if (!input || !counter) {
    return;
  }

  /** Affiche la longueur actuelle et la limite lue dans le champ. */
  function updateCount() {
    const count = input.value.length;
    counter.textContent = `${count} / ${input.maxLength} caractères`;
  }

  input.addEventListener("input", updateCount);
  updateCount();
}

setupCharacterCounter("profile-description", "profile-description-count");
setupCharacterCounter("contact-message", "contact-message-count");

/** Installe le compteur et les actions groupées sur un fieldset. */
function setupTagSelection(group) {
  const checkboxes = group.querySelectorAll('input[type="checkbox"]');
  const counter = group.querySelector("[data-selection-count]");
  const selectButton = group.querySelector("[data-select-all]");
  const clearButton = group.querySelector("[data-clear-selection]");

  if (!counter || !selectButton || !clearButton || checkboxes.length === 0) {
    return;
  }

  /** Recalcule le statut et l’état des boutons à partir des cases cochées. */
  function updateSelection() {
    const count = group.querySelectorAll('input[type="checkbox"]:checked').length;
    const label = count > 1 ? "options sélectionnées" : "option sélectionnée";
    counter.textContent = `${count} ${label}`;
    selectButton.disabled = count === checkboxes.length;
    clearButton.disabled = count === 0;
  }

  /** Applique le même état à toutes les cases et replace le focus sans défilement. */
  function setSelection(checked) {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = checked;
    });
    checkboxes[0].focus({ preventScroll: true });
    // Modifier checked par script ne déclenche pas l’événement change.
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

document.querySelectorAll("#profile-interests, #profile-needs").forEach(setupTagSelection);
