<?php
// Variante visuelle de la maquette, sans authentification ni autorisation.
$showDemoNavigation = true;
?>
<!-- Flux parrain -->

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Espace parrain — Binô</title>
    <link rel="stylesheet" href="assets/css/style.css" />
  </head>

  <body>
    <header class="site-header">
      <?php require __DIR__ . '/../../backend/includes/header.php'; ?>
    </header>
    <main>
      <h1 class="title-with-mascot">
        <span>Bienvenue dans ton espace parrain</span>
        <svg viewBox="4 12 64 76" aria-hidden="true" focusable="false" width="256" height="256">
          <use href="assets/images/mascot-parrain.svg#mascot-parrain"></use>
        </svg>
      </h1>

      <section aria-labelledby="demandes-title">
        <h2 id="demandes-title">Tes demandes de parrainage</h2>
        <p>Exemple de demande pour la maquette.</p>
        <article class="request-card" aria-labelledby="request-1-title">
          <div class="profile-heading">
            <img src="assets/images/avatar-default.svg" alt="" width="64" height="64" />
            <div>
              <h3 id="request-1-title">Lucia</h3>
              <p>Étudiante accompagnée</p>
              <p>L1 à Poitiers · Colombie</p>
            </div>
          </div>

          <ul class="tag-list" aria-label="Centres d’intérêt">
            <li>Musique</li>
            <li>Culture</li>
          </ul>

          <div class="request-actions">
            <button type="button" class="button" disabled>Accepter</button>
            <button type="button" class="button button--secondary" disabled>
              Refuser
            </button>
          </div>
        </article>
      </section>

      <section aria-labelledby="actualites-title">
        <h2 id="actualites-title">La vie étudiante</h2>
        <div class="request-card">
          <p>Les actualités seront disponibles prochainement.</p>
        </div>
      </section>
    </main>

<footer class="site-footer">
      <?php require __DIR__ . '/../../backend/includes/footer.php'; ?>
    </footer>
    <script src="assets/js/main.js"></script>
  </body>
</html>
