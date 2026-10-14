### Utilisation de l'IA

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

L’IA est également utilisée pour générer et rédiger les synthèses de ce journal à partir de la lecture du code, de la documentation et des différences Git du dépôt local, dans les limites des permissions d’accès accordées aux dossiers du projet. Les synthèses sont proposées pour ajout manuel ou écrites directement dans le fichier à la demande de Steve. Elles s’appuient aussi sur les échanges de la séance et distinguent les vérifications effectuées par l’IA des tests navigateur rapportés par Steve. Leur relecture et leur validation avant commit restent sous la responsabilité de l’équipe.

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

### 13/10/2026 — Base CSS commune et approche mobile-first

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

- Ajout initial de la note `javascript_header.md` à la demande de Steve pour conserver l’explication détaillée du JavaScript (support retiré du dépôt ensuite, voir la décision de séparation en fin de journal).
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

### 13/10/2026 — Intégration du pied de page et chargeur de fragments réutilisable

- Mise à jour de la note pédagogique JavaScript : ancienne fonction `loadHeader()` explicitement identifiée comme historique, ajout du code actuel `loadPartial(containerId, filePath)` et d’une explication pas à pas des paramètres et arguments.
- Documentation des renommages, des deux appels indépendants, du message d’erreur incluant le chemin et des limites liées aux chemins relatifs.
- Requêtes de l’en-tête et du pied de page observées dans les résultats réseau partagés par Steve ; rechargement du pied de page confirmé par Steve.
- Documentation rédigée par l’IA à la demande de Steve pour permettre une révision différée du JavaScript pendant la poursuite du travail UX/UI. Aucun fichier applicatif modifié par l’IA lors de cette mise à jour.
- Création du fragment `includes/footer.html` avec navigation vers l’accueil et le profil, et texte provisoire pour les futures rubriques.
- Ajout du conteneur `site-footer` et de son contenu de secours dans `fluxparrain.html`.
- Remplacement de `loadHeader()` par `loadPartial(containerId, filePath)` et ajout de deux appels pour charger séparément l’en-tête et le pied de page.
- Pied de page conservé sans styles spécifiques pour ce checkpoint.
- Apparente disparition du pied de page résolue avec « Fit to window » dans DevTools : aperçu tronqué, aucune correction du code nécessaire.

**Prochaine étape :** styliser le pied de page et documenter le bilan de son intégration avant commit.

### 13/10/2026 — Styles du pied de page partagé

- Mutualisation de la largeur maximale, du centrage et des espacements internes des conteneurs header/footer avec un sélecteur commun.
- Ajout du fond et de la bordure supérieure via les variables CSS existantes.
- Organisation du contenu du footer en colonne avec un espacement régulier.
- Présentation des liens avec Flexbox et retour à la ligne lorsque la largeur disponible diminue ; suppression des puces et marges de liste.
- Définition d’une hauteur minimale des zones cliquables, du décalage du soulignement et des styles de survol et de focus clavier.
- Correction d’une virgule manquante entre les sélecteurs partagés, qui empêchait l’application des espacements à l’en-tête.

**Décision de mise en page :** le footer reste dans le flux normal, immédiatement après le contenu. Un espace libre peut apparaître en dessous sur les écrans hauts. Le placement en bas du viewport sera réévalué lors de l’intégration des pages courtes, notamment la connexion et l’inscription. Aucune règle de hauteur de page ni position fixe ajoutée.

**Vérifications :** rendu de base confirmé par Steve ; relecture CSS et contrôle Git des espaces réussis. Le parcours clavier des liens et les cas d’échec restent à vérifier explicitement.

**Rôle de l’IA :** explication des styles, diagnostic du comportement sur les écrans hauts et relecture des modifications manuelles.

### 13/10/2026 — Première structure de la page de connexion

- Remplacement des titres placeholders par un document structuré avec titre d’onglet « Connexion — Parrainage étudiant », en-tête partagé, contenu principal et deux sections nommées.
- Ajout des classes `auth-page`, `auth-form` et `form-field` pour préparer les styles spécifiques, non implémentés à cette étape.
- Création des champs nom d’utilisateur et mot de passe avec labels reliés par `for`/`id`, noms de données, types adaptés, attributs `autocomplete` et `required`.
- Formulaire déclaré en POST, décrit par un message de maquette avec `aria-describedby`. Aucune destination d’authentification configurée ; bouton de soumission désactivé. Aucun compte vérifié ni aucune donnée enregistrée.
- Section d’inscription préparée ; les deux choix étudiant/parrain restent à ajouter.
- Pied de page public simplifié conservé directement dans la page, sans `id="site-footer"` : le chargeur le laisse intact et n’insère pas le lien « Mon profil ». Duplication temporaire assumée en attendant les choix de navigation.
- En-tête doté de son identifiant, donc chargé par la fonction commune. Liens CSS/JS et métadonnées conservés ; mise en forme du HTML harmonisée par Steve.

**Vérifications :** Steve confirme l’affichage responsive, le focus obtenu en cliquant sur les labels, le masquage visuel du mot de passe et le bouton désactivé. Ces vérifications ne valident pas une authentification : le backend n’existe pas encore.

**Rôle de l’IA :** proposition et explication des extraits, relecture du code saisi par Steve, puis rédaction de cette synthèse à partir des fichiers et des échanges.

### 13/10/2026 — Bilan documentaire de fin de journée

- README actualisé : état réel des pages, démarrage avec le serveur local existant et liens vers les documents.
- Plan actualisé : intégration partielle des wireframes, base commune et début de connexion terminés, tâches restantes et décisions reportées explicites.
- Documentation technique fonctionnelle relue et conservée : aucune modification du périmètre produit nécessaire aujourd’hui.
- Journal complété pour la connexion et les vérifications du footer ; titre de la base CSS harmonisé et titre de l’intégration footer précisé. Les entrées historiques sont conservées comme états datés.
- Création de la synthèse pédagogique du jour, avec interactions entre fichiers, explications et instantanés commentés du code. Ce bilan est préparé lors de la revue EOD, sans automatisation planifiée ; il a ensuite été retiré du dépôt pour conservation personnelle.
- Note JavaScript actualisée pour mentionner les styles du footer désormais présents et le footer public local de la connexion.
- Contrôles EOD réussis : syntaxe JavaScript, chemins locaux des liens et ressources des sept pages, unicité des IDs, cibles des labels et références ARIA, liens documentaires, clôture des blocs de code et correspondance des six instantanés avec les fichiers. Ces contrôles structurels ne remplacent pas un validateur HTML complet ni les tests navigateur.
- Revue et documentation effectuées par l’IA dans les limites de l’accès accordé au dépôt ; aucun fichier applicatif modifié par l’IA pendant cette clôture. Relecture et commit laissés à Steve.

- Regroupement de la note JavaScript dans `docs/apprentissage/` par Steve ; références du README, du plan, du journal et du bilan pédagogique corrigées par l’IA après vérification du déplacement.

**Reprise :** styles des champs et du formulaire de connexion, puis choix d’inscription. Garder les actions désactivées tant que leur traitement n’est pas implémenté.

### 13/10/2026 — Revue de la méthode de travail avec le support enseignant

- Comparaison de notre pratique avec la méthode de Yannis Delmas (septembre 2026) fournie par Steve : documentation assistée par IA, responsabilité humaine, progression expliquée et vérifications explicites.
- Ajout au plan de règles de travail accompagné, de critères de validation par page et d’une distinction entre revue du code et recette utilisateur. Les lacunes de vérification restent visibles ; aucune conformité globale déclarée.
- Clarification du rôle de chaque document et limitation des futures notes aux nouveautés pour éviter la répétition quotidienne des mêmes explications.
- Écart avec GitHub Flow consigné pour discussion en équipe, sans changement de branches.
- Révision pédagogique demandée par Steve sur les notions ayant suscité des questions : ARIA, paramètres, conditions, chargement asynchrone, remplacement des fallbacks et comportement responsive. Compréhension à vérifier par reformulation, pas présumée acquise.
- Synthèse et mises à jour documentaires rédigées par l’IA ; aucun fichier applicatif modifié.

### 13/10/2026 — Séparation des supports d’apprentissage et de la documentation projet

- Steve a retiré les deux supports pédagogiques du dépôt pour les conserver personnellement. Les explications approfondies et synthèses quotidiennes continueront d’être fournies séparément, hors du dépôt.
- Arborescence et règles documentaires du plan actualisées ; liens vers les fichiers retirés supprimés du README et du journal. Les entrées historiques restent conservées comme trace des étapes précédentes.
- Mise à jour documentaire réalisée par l’IA ; aucun changement applicatif ni modification de `.gitignore`. Révision de compréhension reportée à la prochaine séance avec Steve.

### 14/10/2026 — Styles du formulaire de connexion et choix d’inscription

- Ajout des variables de largeur maximale du formulaire (`32rem`) et de fond des champs, distinct du gris des surfaces communes.
- Mise en page du formulaire et des groupes label/champ en colonnes Flexbox, avec espacements, champs fluides, hauteur minimale et focus visible.
- Ajout des liens d’inscription étudiant et parrain vers `createprofile.html`, avec les paramètres `role=etudiant` et `role=parrain`. La page cible reste un placeholder et ne lit pas encore ces valeurs ; aucune attribution de droits ni création de compte n’est implémentée.
- Réutilisation de `.button` sur les liens : centrage avec `inline-flex`, suppression du soulignement par défaut et sélecteur de survol `:not(:disabled)` compatible avec liens et boutons actifs.
- Choix d’inscription empilés pour le mobile ; soumission de connexion conservée désactivée.
- Normalisation de la casse de la couleur `#d9d9d9`, sans changement de rendu. Commentaire CSS vide retiré du sélecteur de focus lors de la revue.

**Vérifications :** Steve confirme les contrôles proposés : affichage aux petites largeurs et sur desktop, focus clavier, labels cliquables, liens vers la page de création avec le paramètre attendu et bouton de connexion inactif. Revue des différences et contrôle Git des espaces effectués par l’IA. L’authentification et la prise en compte du rôle restent à implémenter.

**Rôle de l’IA :** proposition et explication du code saisi par Steve, revue, suppression du commentaire vide et rédaction du journal. Commit demandé par Steve. README et plan restent réservés au bilan EOD.

**Prochaine étape :** construire la page de création de compte en réutilisant les styles de formulaire, puis traiter explicitement le choix du rôle. Révision JavaScript reportée après la progression UI à la demande de Steve.

### 14/10/2026 — Formulaire statique de création de compte

- Remplacement des placeholders de `createprofile.html` par le formulaire de création de compte : nom d’utilisateur, e-mail et confirmation, mot de passe et confirmation, labels associés et attributs d’autocomplétion adaptés.
- Réutilisation du header partagé, du footer public local et des classes de formulaire. Titre de page actualisé et lien de retour vers la connexion ajouté.
- Ajout d’un sélecteur obligatoire de type de compte, utilisable également lors d’un accès direct à la page. Les valeurs `etudiant` et `parrain` correspondent aux paramètres des liens de connexion, mais aucune présélection depuis l’URL n’est encore implémentée.
- Extension des styles et du focus des champs aux éléments `select` via les sélecteurs partagés.
- Soumission conservée désactivée : aucune création de compte, vérification de concordance des confirmations ni attribution de droits implémentée.
- Correction par l’IA, à la demande de Steve, de l’imbrication du champ rôle : rôle et nom d’utilisateur sont désormais deux groupes frères directement dans le formulaire, avec l’espacement prévu entre les champs.

**Vérifications :** Steve confirme le rendu et les interactions proposés lors des étapes précédentes. Relecture HTML/CSS et contrôle des espaces effectués par l’IA ; le rendu après correction de l’imbrication reste à confirmer par Steve.

**Rôle de l’IA :** proposition et explication du code, revue, correction ciblée autorisée et rédaction du journal. Staging et commit laissés à Steve ; README et plan seront actualisés à EOD.

**Prochaine étape :** poursuivre les écrans du wireframe ; conserver la présélection du rôle et la validation des confirmations comme tâches explicites à traiter ultérieurement.

### 14/10/2026 — Écart visuel identifié sur les formulaires

- Relecture visuelle du wireframe V1 à la demande de Steve : la connexion présente deux conteneurs gris arrondis séparés, autour de l’identifiant et du mot de passe. La création de compte présente un conteneur identifiant, un groupe e-mail/confirmation et un groupe mot de passe/confirmation.
- Les formulaires actuels disposent des champs et de leurs styles, mais pas encore de ces surfaces de regroupement. Leur structure visuelle reste donc partielle ; les checkpoints précédents ne constituent pas une validation de fidélité complète au wireframe.
- À prévoir lors de la prochaine passe des formulaires : une classe de panneau réutilisable, utilisant les variables de surface, bordure et arrondi existantes ; regrouper chaque paire de confirmation au lieu d’ajouter une seule carte autour de tout le formulaire. Conserver une disposition mobile-first et les labels accessibles.
- L’icône de profil au-dessus des champs est également absente et reste à intégrer ou à arbitrer. Le placement des labels et les proportions seront revus avec la maquette ; aucune couleur ou dimension finale n’est figée.
- Constat et note rédigés par l’IA après comparaison visuelle ; aucun fichier applicatif modifié. La construction des autres écrans peut continuer en conservant ces écarts ouverts.

### 14/10/2026 — Informations personnelles du profil

- Entrée rédigée après le commit `b2e23a5` pour compléter le journal sans modifier l’historique Git.
- Remplacement des placeholders de `profileconfiguration.html` par un formulaire : nom affiché, pays d’origine, parcours d’études et description multiligne ; header partagé et footer public local réutilisés.
- Labels reliés aux champs et aides textuelles associées avec `aria-describedby`. Champs obligatoires non définis à ce stade, en attente de décision produit.
- Extension des styles communs et du focus aux `textarea`, avec redimensionnement vertical. Virgule manquante entre les sélecteurs `select` et `textarea` signalée en revue puis corrigée par Steve avant commit.
- Soumission désactivée et absence d’enregistrement explicites. Centres d’intérêt, besoins et icône de profil restent à construire ; cet écran est encore partiel.

**Vérifications :** Steve a confirmé le fonctionnement de la première version, puis signalé la correction CSS et son commit. Présence de la virgule vérifiée dans le fichier sauvegardé ; pas de nouveau test navigateur réalisé par l’IA.

**Rôle de l’IA :** proposition et explication du code, revue ciblée et rédaction différée du journal. Code applicatif et commit réalisés par Steve.

**Prochaine étape :** ajouter les panneaux gris des formulaires de connexion et de création de compte, puis poursuivre les éléments manquants des wireframes.

### 14/10/2026 — Synthèse du retour de Yannis Delmas

Notes de Steve prises lors du retour enseignant, synthétisées sans ajout de recommandations de l’IA :

- Appréciation générale positive ; CSS jugé peu chargé.
- `aria-labelledby` à revoir : l’utiliser seulement lorsque son utilité est justifiée. Utilité de `<nav aria-label="Navigation de pied de page">` également à revoir.
- Utiliser des flowcharts Mermaid dans les documents Markdown.
- Remarque sur « class button for an ID button » : jugé inutile ou trop chargé.
- Préférer les inclusions du header/footer en PHP côté serveur ; réserve sur le référencement avec leur chargement en JavaScript.
- Garder JavaScript pour les interactions et AJAX ; support de cours fourni à ce sujet.
- Éviter les liens transformés visuellement en boutons, notamment la classe `button` sur les liens ; distinguer la soumission d’un formulaire.
- Curseurs des boutons et textes à revoir (`pointer` / `inherit`, selon les notes prises).
- Soulignement des boutons à revoir. Référence partagée : https://cssbuttons.io/.
- Définir les espacements standards en variables avec des multiples simples : unité, demi-unité et double, pour gérer marges et paddings.
- Simplifier `*::before` et `*::after` en `::before` et `::after`.

**Modification documentaire effectuée :** conversion par l’IA des sept schémas de processus du plan en Mermaid ; arborescences conservées en texte et caractère `x` isolé retiré. Contrôle des références de nœuds et des espaces effectué ; rendu Mermaid à vérifier dans un aperçu compatible.

**Décision de Steve, distincte du retour enseignant :** conserver le script JavaScript comme inclusion côté client pour cette phase et reporter PHP. Hormis Mermaid, les suggestions sont consignées pour être revisitées, sans modification applicative pour le moment. Aucun staging ni commit réalisé par l’IA.

### 14/10/2026 — Panneaux du formulaire de connexion

- Réutilisation de la règle `.form-panel` déjà ajoutée par Steve dans le CSS : fond gris, bordure, arrondi et espacements fondés sur les variables existantes.
- Ajout par l’IA, à la demande de Steve, d’un panneau distinct autour de chacun des deux groupes label/champ de `login.html`, conformément au regroupement du wireframe.
- Conservation des labels, identifiants, attributs de saisie et du bouton désactivé. Message de maquette et soumission restent hors des panneaux.
- Vérification structurelle des deux panneaux et de leurs champs, puis contrôle Git des espaces. Rendu mobile et focus clavier après cette modification à confirmer dans le navigateur par Steve.
- Panneaux de création de compte encore à intégrer. Aucun ajustement issu du retour enseignant appliqué lors de cette étape ; revue différée maintenue. Staging et commit laissés à Steve.

### 14/10/2026 — Extension des panneaux et silhouette de profil

- Rendu des panneaux de connexion confirmé par Steve avant extension.
- Création de compte : panneaux distincts pour le rôle et le nom d’utilisateur, puis regroupement e-mail/confirmation et mot de passe/confirmation dans deux panneaux. Le panneau de rôle correspond au sélecteur ajouté au parcours, absent du dessin initial.
- Configuration du profil : panneaux pour le nom affiché, le groupe pays/parcours et la description. Les champs restent empilés pour cette passe mobile-first ; la disposition côte à côte du wireframe n’est pas encore reproduite.
- Réutilisation de `.form-panel`, sans duplication de ses styles. Indentation du contenu principal de la création de compte harmonisée pour rendre les groupes lisibles.
- Ajout d’une silhouette SVG locale commune dans `assets/images/avatar-default.svg`, affichée au-dessus des formulaires de connexion, création de compte et configuration. Style `.auth-avatar` centré, largeur de 4rem, hauteur proportionnelle et largeur maximale de 100 %.
- Image décorative avec `alt=""` : aucun compte réel ni photo utilisateur représenté, aucun téléversement implémenté. Dimensions HTML indiquées pour réserver la place de l’image.
- Champs, labels et descriptions conservés ; soumissions toujours désactivées. Les retours enseignant restent différés, sans passage à PHP.

**Vérifications :** contrôle structurel des groupes, de l’imbrication HTML, des identifiants et références label/ARIA, de la présence de l’image et des soumissions désactivées sur les trois pages ; syntaxe XML du SVG et contrôle Git des espaces réussis. Steve confirme ensuite le bon fonctionnement lors de sa vérification navigateur avant commit.

**Rôle de l’IA :** modifications applicatives et documentation réalisées à la demande de Steve. Staging et commit laissés à Steve.

### 14/10/2026 — Actualisation du README

- Mise à jour par l’IA, à la demande de Steve, du bilan des sept pages après le commit des panneaux et de la silhouette : quatre écrans développés partiellement, trois placeholders.
- Distinction entre la stack utilisée et le backend prévu ; rappel des soumissions désactivées, de la présélection du rôle et des confirmations non implémentées.
- Ajout d’un schéma Mermaid des fichiers partagés et explication de la différence entre le footer chargé par JavaScript sur le flux parrain et les footers publics locaux des formulaires.
- Prochaine étape indiquée : centres d’intérêt et besoins du profil. Revue différée des retours enseignant maintenue.
- Aucun fichier applicatif modifié. Plan de développement et documentation technique laissés pour le bilan de fin de journée.

**Vérifications :** contenu confronté aux pages et au chargeur JavaScript existants ; contrôle Git des espaces. Rendu graphique Mermaid non vérifié dans cette passe. Commit laissé à Steve.

### 14/10/2026 — Clarification du schéma et synchronisation du plan

- Capture fournie par Steve : Mermaid est bien rendu, mais le schéma présente deux branches déconnectées. Simplification en un seul graphe des dépendances communes, avec des libellés courts ; image et footers publics expliqués dans le texte voisin.
- Même schéma ajouté dans la section 5 du plan de développement, à la demande de Steve. Mise à jour de l’arborescence avec le SVG, du périmètre des inclusions et de l’état d’avancement au 14/10 pour correspondre au README.
- Checklist actualisée : formulaires, panneaux et silhouette présents ; intérêts/besoins, présélection du rôle et confirmations restent à traiter. Aucun changement applicatif ni application des retours enseignant différés.

**Vérifications :** schémas identiques dans les deux documents et contrôle Git des espaces ; nouvel aperçu graphique à confirmer. Modifications documentaires réalisées par l’IA, commit laissé à Steve.

### 14/10/2026 — Centres d’intérêt et besoins du profil

- Code HTML/CSS et présente entrée du journal générés et écrits par l’IA à la demande de Steve, pour consultation et validation humaine avant commit.
- Remplacement du commentaire d’attente dans `profileconfiguration.html` par deux groupes natifs `fieldset` / `legend` : six centres d’intérêt et sept besoins, issus des exemples de la documentation technique. Liste provisoire, sans catalogue métier définitif.
- Cases à cocher indépendantes, chacune imbriquée dans son `label` pour rendre le texte cliquable sans ajouter d’identifiant ni d’ARIA redondant. Noms `interests[]` et `needs[]` prévus pour transmettre plusieurs valeurs à PHP ultérieurement ; aucun traitement serveur ajouté.
- Réutilisation de `form-panel` et des variables existantes, sans nouvelle classe CSS. Trois règles ciblées ajoutées : neutralisation de la marge et de la largeur minimale des fieldsets, légende en gras, labels alignés avec espacement et hauteur minimale de 2.75rem. Les cases conservent leur apparence et leur focus natifs, hors des règles de saisie pleine largeur de `form-field`.
- Couleur provisoire `--color-surface: #FBB609` modifiée par Steve avant cette intervention et conservée ; elle s’applique aussi au header/footer et aux autres composants qui utilisent cette variable.
- Aucune option imposée ou présélectionnée. Le groupe des besoins décrit actuellement l’étudiant accompagné ; adaptation aux domaines d’aide du parrain différée avec la gestion du rôle. Soumission toujours désactivée, aucune sauvegarde ni nouvelle logique JavaScript.

**Vérifications :** imbrication HTML, labels des treize cases, unicité des identifiants et valeurs par groupe, et bouton de soumission désactivé contrôlés ; contrôle Git des espaces réussi. Rendu mobile et navigation clavier à vérifier par Steve, sans validation navigateur revendiquée par l’IA. README et plan à synchroniser lors du prochain bilan après validation. Commit laissé à Steve.

### 14/10/2026 — Titres des groupes à l’intérieur des cartes

- Après la capture de Steve montrant les légendes sur la bordure native des fieldsets, déplacement de `form-panel` vers un `div` entourant chacun des deux groupes. La carte porte désormais le fond, la bordure et le padding ; `fieldset` et `legend` conservent leur rôle sémantique à l’intérieur.
- Modification des règles CSS existantes : fieldsets sans bordure ni padding, disposition en colonne avec un écart de 1rem ; légendes sans padding avec une marge basse de 1rem. Aucune nouvelle classe, couleur ou logique JavaScript ; choix et labels inchangés.
- Correction et entrée du journal générées et écrites par l’IA à la demande de Steve. Contrôle des deux wrappers et des espaces Git ; rendu navigateur à confirmer par Steve. Commit laissé à Steve.
