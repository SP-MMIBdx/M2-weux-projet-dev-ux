<!-- Login/account access -->

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Connexion — Binô</title>

    <link rel="stylesheet" href="assets/css/style.css" />
  </head>
  <body>
<header class="site-header">
  <?php require __DIR__ . '/../../backend/includes/header.php'; ?>
</header>

    <main class="auth-page">
      <h1>Bienvenue sur notre plateforme</h1>

      <section aria-labelledby="connexion-title">
        <h2 id="connexion-title">Connecte-toi</h2>
        <img
          class="auth-avatar"
          src="assets/images/avatar-default.svg"
          alt=""
          width="64"
          height="64"
        />

        <form class="auth-form" method="post" aria-describedby="login-note">
          <p id="login-note">
            Tous les champs sont obligatoires. Maquette : la connexion n’est pas encore disponible.
          </p>

          <div class="form-panel">
            <div class="form-field">
              <label for="login-username">Nom d’utilisateur</label>
              <input
                type="text"
                id="login-username"
                name="username"
                autocomplete="username"
                maxlength="24"
                pattern="[A-Za-z0-9_\-]+"
                autocapitalize="none"
                spellcheck="false"
                aria-describedby="login-username-help login-username-feedback"
                required
              />
              <p id="login-username-help">
                24 caractères maximum, lettres A–Z, chiffres, _ ou -, sans espace.
              </p>
              <p id="login-username-feedback"></p>
            </div>
          </div>

          <div class="form-panel">
            <div class="form-field">
              <label for="login-password">Mot de passe</label>
              <input
                type="password"
                id="login-password"
                name="password"
                autocomplete="current-password"
                required
              />
              <button
                type="button"
                id="toggle-login-password"
                class="button button--secondary"
                aria-controls="login-password"
              >
                Afficher le mot de passe
              </button>
            </div>
          </div>

          <button type="submit" class="button" disabled>Se connecter</button>
        </form>
      </section>

      <section aria-labelledby="inscription-title">
        <h2 id="inscription-title">Pas encore de compte ?</h2>
        <p>Rejoins la plateforme comme étudiant ou parrain.</p>
        <div class="registration-options">
          <a class="button" href="createprofile.php?role=etudiant">
            Créer un compte étudiant
          </a>

          <a
            class="button button--secondary"
            href="createprofile.php?role=parrain"
          >
            Créer un compte parrain
          </a>
        </div>
      </section>
    </main>

<footer class="site-footer">
  <?php require __DIR__ . '/../../backend/includes/footer.php'; ?>
</footer>

    <script src="assets/js/main.js"></script>
  </body>
</html>
