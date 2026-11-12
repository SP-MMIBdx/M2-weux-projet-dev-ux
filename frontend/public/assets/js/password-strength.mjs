  import translations from "./vendor/zxcvbn-ts/translations-fr.mjs";

const input = document.getElementById("register-password");
const feedback = document.getElementById("register-password-strength");
const common = window.zxcvbnts["language-common"];
const estimator = new window.zxcvbnts.core.ZxcvbnFactory({
  dictionary: common.dictionary,
  graphs: common.adjacencyGraphs,
  translations
});

/** Actualise le score et le conseil sans modifier le mot de passe. */
function updateStrength() {
  if (!input.value) {
    feedback.textContent = "";
    return;
  }

  const result = estimator.check(input.value);
  const hint = result.feedback.warning || result.feedback.suggestions[0] || "";
  feedback.textContent = `Robustesse estimée : ${result.score}/4. ${hint}`.trim();
}

input.addEventListener("input", updateStrength);
updateStrength();
