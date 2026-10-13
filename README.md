# M2 WEUX — Projet UX / Développement

Application web de parrainage destinée à faciliter l'intégration des étudiants étrangers grâce à une mise en relation avec des étudiants parrains.

## Équipe

- Alexandre
- Ange
- Steve

## Stack

- HTML
- CSS
- JavaScript
- PHP
- SQL / MySQL

## État du projet

Au 13/10/2026, les sept pages du scaffold sont regroupées dans `frontend/public/`.

- Flux parrain : structure sémantique, carte de demande illustrative, tags, boutons désactivés et en-tête/pied de page partagés et stylisés.
- Connexion : structure HTML, champs avec labels, en-tête partagé et pied de page public simplifié. Soumission désactivée ; styles spécifiques du formulaire et choix d’inscription à construire.
- Autres pages : placeholders à développer à partir des wireframes.

Le CSS commun suit une approche mobile-first avec des variables de présentation provisoires. Le JavaScript charge les fragments HTML communs ; il ne gère pas encore de logique métier.

Le backend PHP et la base de données ne sont pas encore implémentés.

## Lancement local

Ouvrir le dépôt dans VS Code et utiliser le Live Server déjà installé pour servir `frontend/public/fluxparrain.html` ou `frontend/public/login.html`. Conserver l’adresse HTTP locale fournie par le serveur : ouvrir directement les fichiers en `file://` ne permet pas de tester correctement le chargement des fragments avec `fetch`.

Le serveur fournit les fichiers ; le navigateur exécute JavaScript. Aucun build ni installation de dépendances applicatives n’est nécessaire. Dans l’émulation mobile des outils de développement, utiliser « Fit to window » pour voir l’intégralité du viewport simulé.

## Documentation

- [Documentation technique](docs/documentation_technique.md) : fonctionnement et périmètre du projet
- [Plan de développement](docs/plan_dev.md) : feuille de route et bilan quotidien
- [Journal de développement](docs/dev_log.md) : suivi chronologique des changements
- [Explication JavaScript](docs/apprentissage/javascript_header.md) : apprentissage du chargement des fragments
- [Bilan pédagogique du 13/10/2026](docs/apprentissage/2026-10-13.md) : synthèse quotidienne et lecture du code
- [Wireframes](docs/wireframes/WIREFRAME_V1.pdf) : référence fonctionnelle
