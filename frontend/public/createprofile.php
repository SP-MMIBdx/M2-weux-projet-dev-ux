<!-- Création de compte -->

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Créer un compte — Binô</title>

    <link rel="stylesheet" href="assets/css/style.css" />
  </head>
  <body>
    <header class="site-header">
      <?php require __DIR__ . '/../../backend/includes/header.php'; ?>
    </header>
    <main class="auth-page">
      <h1>Crée ton compte</h1>

      <img
        class="auth-avatar"
        src="assets/images/avatar-default.svg"
        alt=""
        width="64"
        height="64"
      />

      <form
        class="auth-form"
        method="post"
        aria-describedby="registration-note"
      >
        <p id="registration-note">
          Tous les champs sont obligatoires. Maquette : la création de compte n’est pas encore disponible.
        </p>

        <div class="form-panel">
          <div class="form-field">
            <label for="register-role">Type de compte</label>
            <select id="register-role" name="role" required>
              <option value="" disabled selected>Choisis ton type de compte</option>
              <option value="etudiant">Étudiant accompagné</option>
              <option value="parrain">Parrain</option>
            </select>
          </div>
        </div>

        <div class="form-panel">
          <div class="form-field">
            <label for="register-username">Nom d’utilisateur</label>
            <input
              type="text"
              id="register-username"
              name="username"
              autocomplete="username"
              maxlength="24"
              pattern="[A-Za-z0-9_\-]+"
              autocapitalize="none"
              spellcheck="false"
              aria-describedby="register-username-help register-username-feedback"
              required
            />
            <p id="register-username-help">
              24 caractères maximum, lettres A–Z, chiffres, _ ou -, sans espace.
            </p>
            <p id="register-username-feedback"></p>
          </div>
        </div>

        <div class="form-panel">
          <div class="form-field">
            <label for="register-email">Adresse e-mail</label>
            <input
              type="email"
              id="register-email"
              name="email"
              autocomplete="email"
              required
            />
          </div>

          <div class="form-field">
            <label for="register-email-confirm"
              >Confirmation de l’adresse e-mail</label
            >
            <input
              type="email"
              id="register-email-confirm"
              name="email_confirmation"
              autocomplete="email"
              aria-describedby="register-email-feedback"
              required
            />
            <p id="register-email-feedback"></p>
          </div>
        </div>

        <div class="form-panel">
          <div class="form-field">
            <label for="register-password">Mot de passe</label>
            <input
              type="password"
              id="register-password"
              name="password"
              autocomplete="new-password"
              aria-describedby="register-password-strength"
              required
            />
            <p id="register-password-strength"></p>
            <button
              type="button"
              id="toggle-register-password"
              class="button button--secondary"
              aria-controls="register-password"
            >
              Afficher le mot de passe
            </button>
          </div>

          <div class="form-field">
            <label for="register-password-confirm"
              >Confirmation du mot de passe</label
            >
            <input
              type="password"
              id="register-password-confirm"
              name="password_confirmation"
              autocomplete="new-password"
              aria-describedby="register-password-feedback"
              required
            />
            <p id="register-password-feedback"></p>
            <button
              type="button"
              id="toggle-register-password-confirm"
              class="button button--secondary"
              aria-controls="register-password-confirm"
            >
              Afficher la confirmation du mot de passe
            </button>
          </div>
        </div>

        <button type="submit" class="button" disabled>Créer mon compte</button>

        <a class="button button--secondary" href="login.html">
          Déjà un compte ? Connecte-toi
        </a>
      </form>
    </main>

<footer class="site-footer">
  <?php require __DIR__ . '/../../backend/includes/footer.php'; ?>
</footer>

    <script src="assets/js/main.js"></script>
  </body>
</html>
