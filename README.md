# Binô — Projet UX / Développement M2 WEUX

**Binô** est le nom provisoire, en attente de validation du groupe. Application web de parrainage destinée à faciliter l'intégration des étudiants étrangers grâce à une mise en relation avec des étudiants parrains.

## Équipe

- Alexandre
- Ange
- Steve

## Stack

- Actuellement : HTML, CSS et JavaScript natif.
- Prévu pour le backend : PHP et SQL / MySQL.

## État du projet

Au 28/10/2026, les huit pages du frontend sont regroupées dans `frontend/public/`. Le projet reste une maquette statique en cours de construction, avec de premières interactions client.

- Flux parrain : structure sémantique, carte de demande illustrative, carte d’attente des actualités, tags, boutons désactivés et en-tête/pied de page partagés et stylisés.
- Connexion : formulaire stylisé, panneaux de surface provisoire, silhouette de profil et liens vers la création de compte selon le rôle choisi.
- Création de compte : sélection du rôle, identifiant, e-mail et mot de passe avec champs de confirmation, regroupés en panneaux. Identifiant de connexion limité à 24 caractères (A–Z, chiffres, _ et -) avec retour JavaScript partagé avec la connexion, distinct du nom affiché public.
- Configuration du profil : nom affiché, pays, parcours et description avec compteur et limite native de 500 caractères confirmée dans le navigateur par Steve, plus six centres d’intérêt et sept besoins sélectionnables sous forme de mini-cartes. Chaque groupe possède un compteur et les actions « Tout sélectionner » / « Tout désélectionner », disposées dans une ligne flexible ; essais navigateur de ce nouvel ajout à confirmer. Choix provisoires, sans enregistrement.
- Flux étudiant : trois profils fictifs, tags, avatars, actions désactivées et actualités à venir dans une carte.
- Accueil : présentation du service, étapes du parcours prévu et liens vers les formulaires et les deux espaces de démonstration.
- Aide / FAQ : cinq réponses issues du périmètre fonctionnel et formulaire de contact de démonstration (nom, e-mail, message limité à 500 unités UTF-16 avec compteur), avec envoi désactivé.
- Profil : exemple statique de Lucia, présentation, intérêts, besoins et lien vers la configuration non préremplie. Accueil et profil restent des propositions à valider, sans écran dédié dans le wireframe V1.

Les cartes des deux flux et la présentation du profil réutilisent `.profile-heading` pour regrouper avatar circulaire, nom, rôle et études. Les informations restent fictives.

Les trois pages de formulaire utilisent la même silhouette décorative et un pied de page public simplifié. Leurs soumissions restent désactivées : aucune connexion, création de compte ou sauvegarde de profil n’est disponible. Une fonction partagée compare les mots de passe et les e-mails pendant la saisie ; Steve a confirmé son fonctionnement dans le navigateur. La présélection du rôle et la validation serveur restent à implémenter.

Le CSS commun suit une approche mobile-first avec une palette provisoire : fond crème, cartes saumon pâle, header/footer jaune atténué, boutons secondaires jaune vif et actions vertes, titres fluides avec H1 gras saumon à contour noir, H2 à accent jaune, H3 sobres et paragraphes limités à 65ch, espacements et ombres de composants centralisés en variables. Le JavaScript charge les fragments HTML communs et permet d’afficher/masquer indépendamment les mots de passe de connexion et d’inscription, y compris la confirmation, avec une fonction réutilisable. Il ne gère pas de comptes ni de données enregistrées.

À l’inscription, un conseil textuel indique une longueur inférieure à 15 caractères ou quelques motifs prévisibles. Ce repère pédagogique n’est pas une estimation complète de robustesse ; Steve a confirmé son fonctionnement dans le navigateur.

Le scaffold `backend/` contient uniquement des fichiers préparatoires commentés (inclusions, PDO, schéma et modèle de configuration) ; aucun backend fonctionnel ni base de données n’est implémenté. La configuration locale privée est exclue de Git. Une phase d’apprentissage JavaScript vanilla précède l’introduction de PHP, conformément à la demande enseignant rapportée par Steve. PHP reste prévu pour les traitements serveur ; la répartition est précisée dans le [plan](docs/plan_dev.md).

## Organisation du frontend

Le header associe un duo de personnages SVG original (`assets/images/logo.svg`) au texte « Binô », centré sous le logo au sein d’un bloc aligné à gauche, en saumon avec un contour noir de 3px, comme les H1. Le jaune représente le parrain, le saumon l’étudiant ; deux SVG autonomes (`mascot-parrain.svg`, `mascot-etudiant.svg`) accompagnent les titres des flux correspondants sur leur droite, avec une hauteur fluide de 6 à 16rem et retour centré sous le titre si nécessaire. Le duo reste réservé au header. Couleurs issues des variables existantes. Au chargement, le logo du header joue une légère pulsation de 450ms, distincte du salut avec inclinaison des mascottes de flux (700ms). Chaque effet joue une fois, uniquement sans préférence de réduction des mouvements. Dans ce même mode, les cartes de profils des flux apparaissent par un fondu de 400ms et le logo du header et les boutons actifs réagissent au survol avec une souris ; aucun mouvement continu.

Les pages HTML restent à la racine de `frontend/public/` ; les styles, scripts et images sont dans `assets/`, et les fragments communs dans `includes/`.

```mermaid
flowchart TD
    Pages["Huit pages HTML"] --> CSS["style.css"]
    Pages --> JS["main.js"]
    JS --> Header["header.html"]
    JS --> Footer["footer.html : deux flux et profil"]
    JS --> Interactions["Interactions des formulaires"]
```

Les formulaires, les deux flux et le profil partagent l’image `assets/images/avatar-default.svg`. Le schéma représente les dépendances de fichiers, pas le parcours utilisateur.

Le script remplace le contenu de secours des conteneurs identifiés par `site-header` et `site-footer`, lorsqu’ils existent. L’accueil, l’aide et les pages de formulaire n’ont pas de conteneur `site-footer` : leur pied de page public reste local. Il ne s’agit pas encore d’un affichage conditionné par une session utilisateur. Le footer propose l’icône Accueil sur les huit pages ; Mon profil (icône seule) reste limité aux deux flux et au profil. Aide / FAQ (icône seule) est accessible sur les huit pages ; Démarches est un bouton à icône désactivé sur les deux flux et le profil ; son contenu et le menu restent à construire ; navigation persistante différée. Cette répartition par page est provisoire, sans contrôle de session.

Les huit pages disposent d’une première structure de contenu. Steve a confirmé les vérifications mobile et clavier des mini-cartes de configuration et les confirmations partagées ; cela ne constitue pas une validation exhaustive des huit pages. Suite frontend proposée : tester les compteurs et les actions de sélection/désélection des groupes, puis reprendre les premiers exercices PHP/SQL. Le filtrage des profils est réservé au serveur, selon la répartition convenue avec Steve. La configuration reste à adapter au rôle parrain ; navigation selon rôle et vérifications navigateur globales restent ouvertes. Les retours enseignant du 14/10 sont consignés dans le journal et à revoir dans le plan ; les schémas Mermaid, les variables d’espacement et la suppression du soulignement au survol des boutons ont été appliqués ; les autres points restent à revoir.

## Lancement local

Depuis un terminal à la racine du dépôt, lancer le serveur de développement PHP installé localement (adapter le chemin selon la machine) :

```powershell
& "C:\wamp64\bin\php\php8.3.14\php.exe" -S 127.0.0.1:8000 -t frontend/public
```

Ouvrir [le flux parrain](http://127.0.0.1:8000/fluxparrain.html) ou [la connexion](http://127.0.0.1:8000/login.html). Garder le terminal ouvert, rafraîchir manuellement après modification et arrêter le serveur avec Ctrl+C. Les services WAMP ne sont pas nécessaires pour cette prévisualisation.

Ce serveur sert les fichiers HTML/CSS/JavaScript existants : aucune migration vers des pages PHP ni des inclusions serveur n’est réalisée. Live Server est écarté pour cette prévisualisation : son injection de rechargement dans les SVG du fragment footer produit une réponse tronquée, constatée le 28/10. Ouvrir directement les fichiers en `file://` ne permet pas de tester correctement les fragments avec `fetch`.

Le serveur fournit les fichiers ; le navigateur exécute JavaScript. Aucun build ni installation de dépendances applicatives n’est nécessaire. Dans l’émulation mobile des outils de développement, utiliser « Fit to window » pour voir l’intégralité du viewport simulé.

## Documentation

- [Documentation technique](docs/documentation_technique.md) : fonctionnement et périmètre du projet
- [Plan de développement](docs/plan_dev.md) : feuille de route et bilan quotidien
- [Journal de développement](docs/dev_log.md) : suivi chronologique des changements
- [Wireframes](docs/wireframes/WIREFRAME_V1.pdf) : référence fonctionnelle
