## Utilisation de l'IA

L'intelligence artificielle est utilisée comme outil d'assistance au développement.

Selon les phases, elle peut servir à :

- expliquer des concepts techniques ;
- proposer une structure de code ;
- aider au débogage ;
- préparer des tests ;
- reformuler ou compléter la documentation ;
- générer des tâches répétitives après validation humaine.

Les choix fonctionnels, UX et architecturaux restent décidés et validés par l'équipe.

Le code généré ou suggéré par IA est relu, testé et adapté avant intégration au projet.

Lorsque l'IA intervient de manière importante dans une phase, son rôle est précisé dans le journal de développement.

07/10/2026
- Static frontend scaffold created.
- Seven preliminary pages added.
- Shared CSS/JS/assets structure established.
- No PHP or database implementation yet.
- AI used to assist with architecture planning and documentation.

### Organisation Git actuelle

Pendant la construction de la première base frontend, Steve travaille directement sur `main`.

Alexandre et Ange travaillent sur `dev`, principalement dans leurs dossiers de prototypes respectifs.

Lorsque la structure principale de l'application sera suffisamment stable, le développement sera regroupé autour de `dev` avec un travail isolé par membre avant intégration.

### 13/10/2026 — Réorganisation du scaffold frontend

**Objectif :** établir une structure claire avant de commencer l’intégration des wireframes.

**Modifications et décisions :**

- Déplacement du scaffold initial de `public/` vers `frontend/public/`.
- Regroupement des sept pages HTML directement dans `frontend/public/`.
- Conservation des ressources dans `assets/css/`, `assets/js/` et `assets/images/`.
- Conservation de `.gitkeep` pour permettre à Git de suivre le dossier d’images encore vide.
- Ajout de `includes/header.html` et `includes/footer.html` comme fichiers préparatoires pour les éléments communs.
- Conservation des chemins relatifs `assets/css/style.css` et `assets/js/main.js`, compatibles avec l’emplacement final des pages.
- Aucune modification de `.gitignore` : aucun fichier nécessitant une exclusion n’a été introduit.

**Vérifications :**

- Présence des sept pages et des ressources CSS/JavaScript confirmée.
- Cohérence des chemins vers les ressources vérifiée dans chaque page.
- Vérification de la structure uniquement ; aucun test visuel ou fonctionnel dans le navigateur à cette étape.

**État actuel et limites :**

Les pages restent des placeholders. Les fichiers header/footer contiennent encore des squelettes de documents HTML ; ils devront être transformés en fragments réutilisables. Aucun mécanisme d’inclusion n’est encore implémenté. Aucun backend PHP ni aucune base de données ne sont présents.

**Prochaine étape :**

Construire progressivement `fluxparrain.html` à partir du wireframe : structure sémantique, en-tête, cartes de demandes, titres, boutons, zone d’actualités et pied de page. La zone d’actualités sera uniquement une réservation visuelle pour une fonctionnalité ultérieure.

Chaque étape sera expliquée, vérifiée et documentée avant de réutiliser les mêmes principes sur les autres pages.

**Rôle de l’IA :**

Relecture des documents et du scaffold, vérification des chemins et proposition de documentation. Réorganisation réalisée manuellement par Steve ; aucune modification directe des fichiers par l’IA pendant la revue initiale.

**Finalisation documentaire avant commit :**

- README conservé à la racine du dépôt pour son affichage sur la page principale GitHub ; référence aux pages corrigée vers `frontend/public/`.
- Ancienne arborescence et ancien état de la phase 1 retirés du plan de développement et remplacés par un renvoi aux sections 5 et 8 pour éviter les informations contradictoires et les doublons à maintenir.
- Corrections documentaires appliquées par l’IA à la demande de Steve et consignées dans ce journal ; aucun fichier applicatif modifié.

### 13/10/2026 — Première structure HTML du flux parrain

- Construction manuelle de la structure de `fluxparrain.html` : emplacements pour l’en-tête et le pied de page, contenu principal, section des demandes et section des actualités.
- Conservation des métadonnées, du lien CSS et du chargement JavaScript ; mise à jour du titre de l’onglet.
- Ajout d’une carte de demande illustrative avec un nom, une description, une liste de centres d’intérêt et deux boutons désactivés.
- Utilisation d’une hiérarchie de titres `h1`, `h2`, `h3` et de relations `aria-labelledby` pour nommer les sections et la carte.
- Choix de l’identifiant `request-1-title`, indépendant du prénom affiché et unique dans la page.
- Ajout des classes `request-card`, `tag-list` et `request-actions` pour préparer le CSS.
- Relecture du code et vérification Git des espaces effectuées ; aucun test navigateur réalisé par l’IA.
- Aucun style ni comportement applicatif ajouté. Les inclusions header/footer et les données dynamiques restent à implémenter.
- IA utilisée pour expliquer les éléments HTML, proposer les extraits et relire les modifications réalisées par Steve.

**Prochaine étape :** appliquer les premiers styles CSS à cette structure.

13/10/2026 — Base CSS commune et approche mobile-first

Ajout de variables CSS dans :root pour centraliser la police, les couleurs provisoires et la largeur maximale du contenu.

Application de box-sizing: border-box pour inclure les espacements internes et les bordures dans les dimensions déclarées.

Définition de la typographie générale, de l’interligne et du fond de page ; héritage explicite de la police pour les boutons et champs de formulaire.

Mise en place d’un contenu principal fluide, avec marges latérales automatiques, espacements internes et largeur maximale de 60rem.

Suppression des marges par défaut des titres et paragraphes, puis définition d’espacements communs sous les titres et entre les sections.

Adoption d’une approche mobile-first : flux normal du document, aucune position absolue ni hauteur fixe de contenu. Les adaptations aux écrans plus larges seront ajoutées selon les besoins.

Conservation d’une feuille CSS courte et commune. Les choix graphiques restent provisoires et modifiables via les variables.

Aucun fichier de police ajouté : utilisation de polices système à cette étape.

Vérifications : affichage confirmé par Steve dans l’inspecteur au format iPhone SE, 375 × 667. Relecture du CSS et contrôle Git des espaces effectués par l’IA ; les autres dimensions restent à vérifier.

Rôle de l’IA : explication des règles, proposition des extraits et relecture du code saisi par Steve.

Prochaine étape : styliser la carte de demande, les tags et les boutons. Mise à jour du plan de développement prévue en fin de journée.

### 13/10/2026 — Styles de la carte, des tags et des boutons

- Ajout de variables pour les couleurs des surfaces, bordures et actions, ainsi que les arrondis des cartes et contrôles.
- Mise en page de la carte de demande avec Flexbox en colonne, espacements internes et séparation régulière de ses éléments.
- Présentation des centres d’intérêt sous forme de tags pouvant passer à la ligne selon la largeur disponible.
- Ajout des classes réutilisables `button` et `button--secondary` aux actions HTML.
- Disposition flexible des actions : partage de l’espace disponible et retour à la ligne sur les petites largeurs.
- Définition d’une hauteur minimale des boutons, sans hauteur fixe limitant leur contenu.
- Préparation des styles de survol, de focus clavier et d’état désactivé. Les boutons restent désactivés en attendant leur implémentation fonctionnelle.
- Conservation du flux normal, sans positionnement absolu ni media query nécessaire à cette étape.

**Vérifications :** affichage responsive confirmé par Steve dans le navigateur. Cohérence HTML/CSS relue par l’IA et contrôle Git des espaces réussi. Les états de survol et de focus des boutons activés restent à tester.

**Rôle de l’IA :** proposition et explication du code, puis relecture des modifications réalisées manuellement par Steve.

**Prochaine étape :** construire l’en-tête et le pied de page communs, puis expliquer leur intégration.

### 13/10/2026 — Chargement de l’en-tête partagé

- Transformation de `includes/header.html` en fragment HTML contenant le lien d’accueil et le nom provisoire du projet.
- Ajout de la classe `site-header` et de l’identifiant `site-header` au conteneur de `fluxparrain.html`.
- Conservation d’un lien de secours dans la page, utilisable sans JavaScript ou si le chargement échoue.
- Ajout de la fonction asynchrone `loadHeader()` dans `main.js` : recherche du conteneur, arrêt s’il est absent, requête du fragment avec `fetch`, contrôle du statut HTTP, lecture du contenu et insertion dans l’en-tête.
- Gestion des erreurs avec `try/catch` et message dans la console.
- Chargement limité pour le moment à la page parrain ; les autres pages ne possèdent pas encore le conteneur ciblé.
- Reformatage du bouton « Refuser » sans modification fonctionnelle.
- Aucun style d’en-tête ajouté à cette étape.

**Vérifications :** utilisation de Live Server par Steve et requête `header.html` observée dans le panneau Réseau avec un statut 304 correspondant à la validation du cache. Relecture du code, contrôle de syntaxe JavaScript et contrôle Git des espaces réussis. Les cas d’échec restent à tester dans le navigateur.

**Rôle de l’IA :** proposition du code, explication détaillée du JavaScript et revue des modifications saisies par Steve.

**À la reprise :** relire et discuter l’explication JavaScript avant de poursuivre : déclaration et appel de fonction, `const`, `!`, `return`, `async/await`, `fetch`, `response.ok`, `innerHTML` et `try/catch`. Ensuite, styliser l’en-tête, puis construire le pied de page partagé.

### 13/10/2026 — Note pédagogique sur le chargement de l’en-tête

- Ajout de [javascript_header.md](javascript_header.md) à la demande de Steve pour conserver l’explication détaillée du JavaScript et pouvoir la consulter ultérieurement.
- Documentation des fonctions, variables, conditions, opérations asynchrones, erreurs, chemins relatifs et du remplacement du lien de secours.
- Explication du cache HTTP et distinction entre la réussite de la requête réseau et celle de l’insertion dans la page.
- Test visuel avec modification temporaire du texte du fragment confirmé réussi par Steve : le chargement et l’insertion fonctionnent.
- Note rédigée par l’IA à partir du code actuel ; aucun fichier applicatif modifié pendant cette étape.

**Prochaine étape :** styliser l’en-tête. La note reste disponible pour réviser le JavaScript au rythme de Steve.

### 13/10/2026 — Mise en forme de l’en-tête partagé

- Ajout du conteneur `site-header__inner` dans le fragment partagé et dans le contenu de secours pour conserver une structure identique avant et après le chargement JavaScript.
- Application d’un fond et d’une bordure sur toute la largeur de l’en-tête.
- Alignement du contenu intérieur avec le contenu principal grâce à la même largeur maximale, aux marges automatiques et aux espacements latéraux.
- Mise en forme du lien d’accueil : taille, graisse, couleur, retour à la ligne et états de survol et de focus clavier.
- Modification des variables communes : surface grise `#D9D9D9` et bordure noire `#000000`. Ces valeurs s’appliquent également aux composants qui les utilisent, notamment les cartes et le fond du bouton secondaire.
- Conservation d’un en-tête dans le flux normal, sans hauteur fixe ni positionnement absolu.

**Vérifications :** Steve confirme l’adaptation de l’en-tête aux dimensions du navigateur, l’application des variables et le fonctionnement du lien vers `index.html`. Relecture HTML/CSS et contrôle Git des espaces réussis. Le focus clavier reste à vérifier.

**Rôle de l’IA :** proposition et explication du code, puis relecture des modifications réalisées par Steve.

**Prochaine étape :** construire et intégrer le pied de page partagé.

### 13/10/2026 — Documentation du chargeur de fragments réutilisable

- Mise à jour de [javascript_header.md](javascript_header.md) : ancienne fonction `loadHeader()` explicitement identifiée comme historique, ajout du code actuel `loadPartial(containerId, filePath)` et d’une explication pas à pas des paramètres et arguments.
- Documentation des renommages, des deux appels indépendants, du message d’erreur incluant le chemin et des limites liées aux chemins relatifs.
- Requêtes de l’en-tête et du pied de page observées dans les résultats réseau partagés par Steve ; rechargement du pied de page confirmé par Steve.
- Documentation rédigée par l’IA à la demande de Steve pour permettre une révision différée du JavaScript pendant la poursuite du travail UX/UI. Aucun fichier applicatif modifié par l’IA lors de cette mise à jour.
- Création du fragment `includes/footer.html` avec navigation vers l’accueil et le profil, et texte provisoire pour les futures rubriques.
- Ajout du conteneur `site-footer` et de son contenu de secours dans `fluxparrain.html`.
- Remplacement de `loadHeader()` par `loadPartial(containerId, filePath)` et ajout de deux appels pour charger séparément l’en-tête et le pied de page.
- Pied de page conservé sans styles spécifiques pour ce checkpoint.
- Apparente disparition du pied de page résolue avec « Fit to window » dans DevTools : aperçu tronqué, aucune correction du code nécessaire.

**Prochaine étape :** styliser le pied de page et documenter le bilan de son intégration avant commit.
