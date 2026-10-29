<?php
// Variante visuelle de la maquette, sans authentification ni autorisation.
$showDemoNavigation = true;
?>
<!-- Flux étudiant -->

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Espace étudiant — Binô</title>
    <link rel="stylesheet" href="assets/css/style.css" />
  </head>
  <body>
    <header class="site-header">
      <?php require __DIR__ . '/../../backend/includes/header.php'; ?>
    </header>

    <main>
      <h1 class="title-with-mascot">
        <span>Bienvenue dans ton espace étudiant</span>
        <svg viewBox="4 12 64 76" aria-hidden="true" focusable="false" width="256" height="256">
          <use href="assets/images/mascot-etudiant.svg#mascot-etudiant"></use>
        </svg>
      </h1>

      <section>
        <h2>Trois parrains à découvrir</h2>
        <p>Profils fictifs pour la maquette : les suggestions et les demandes ne sont pas encore disponibles.</p>

        <article class="request-card">
          <div class="profile-heading">
            <img src="assets/images/avatar-default.svg" alt="" width="64" height="64" />
            <div>
              <h3>Vincent</h3>
              <p>Parrain</p>
              <p>Étudiant en M1 à Poitiers</p>
            </div>
          </div>

          <ul class="tag-list">
            <li>Musique</li>
            <li>Culture</li>
          </ul>

          <div class="request-actions">
            <button type="button" class="button" disabled>
              Demander un parrainage
            </button>
            <button type="button" class="button button--secondary" disabled>
              Écarter ce profil
            </button>
          </div>
        </article>

        <article class="request-card">
          <div class="profile-heading">
            <img src="assets/images/avatar-default.svg" alt="" width="64" height="64" />
            <div>
              <h3>Sarah</h3>
              <p>Marraine</p>
              <p>Étudiante en L3 à Poitiers</p>
            </div>
          </div>

          <ul class="tag-list">
            <li>Sport</li>
            <li>Sorties</li>
          </ul>

          <div class="request-actions">
            <button type="button" class="button" disabled>
              Demander un parrainage
            </button>
            <button type="button" class="button button--secondary" disabled>
              Écarter ce profil
            </button>
          </div>
        </article>

        <article class="request-card">
          <div class="profile-heading">
            <img src="assets/images/avatar-default.svg" alt="" width="64" height="64" />
            <div>
              <h3>Amine</h3>
              <p>Parrain</p>
              <p>Étudiant en M2 à Poitiers</p>
            </div>
          </div>

          <ul class="tag-list">
            <li>Jeux vidéo</li>
            <li>Études</li>
          </ul>

          <div class="request-actions">
            <button type="button" class="button" disabled>
              Demander un parrainage
            </button>
            <button type="button" class="button button--secondary" disabled>
              Écarter ce profil
            </button>
          </div>
        </article>

        <p>Aucun de ces profils ne te convient ?</p>
        <button type="button" class="button button--secondary" disabled>
          Voir d’autres profils
        </button>
      </section>

      <section>
        <h2>La vie étudiante</h2>
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
