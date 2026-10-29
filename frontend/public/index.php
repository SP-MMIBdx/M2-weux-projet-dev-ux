<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Accueil — Binô</title>
    <link rel="stylesheet" href="assets/css/style.css" />
  </head>
  <body>
    <header class="site-header">
      <?php require __DIR__ . '/../../backend/includes/header.php'; ?>
    </header>

    <main>
      <h1>Bienvenue sur Binô</h1>

      <section>
        <h2>Un accompagnement pour ton arrivée en France</h2>
        <div class="form-panel">
          <p>Rencontre des étudiants parrains pour découvrir la vie universitaire, partager des activités et trouver des repères au quotidien.</p>
          <p>Tu souhaites être accompagné ou aider un autre étudiant ?</p>
          <div class="request-actions">
            <a class="button" href="login.php">Se connecter</a>
            <a class="button button--secondary" href="createprofile.php">Créer un compte</a>
          </div>
        </div>
      </section>

      <section>
        <h2>Comment ça marche ?</h2>
        <ol>
          <li>Crée ton compte et choisis ton rôle : étudiant accompagné ou parrain.</li>
          <li>Complète ton profil, tes centres d’intérêt et tes besoins ou domaines d’aide.</li>
          <li>L’étudiant envoie une demande à un parrain ; le parrain peut l’accepter ou la refuser.</li>
          <li>Les coordonnées deviennent accessibles après acceptation.</li>
        </ol>
      </section>

      <section>
        <h2>Découvrir la maquette</h2>
        <div class="form-panel">
          <p>Le parcours décrit ci-dessus est prévu pour la suite du projet. Cette version utilise des profils fictifs, sans connexion, enregistrement ni demande réelle.</p>
          <div class="request-actions">
            <a class="button" href="fluxetudiant.php">Voir l’exemple d’espace étudiant</a>
            <a class="button button--secondary" href="fluxparrain.php">Voir l’exemple d’espace parrain</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <?php require __DIR__ . '/../../backend/includes/footer.php'; ?>
    </footer>
    <script src="assets/js/main.js"></script>
  </body>
</html>
