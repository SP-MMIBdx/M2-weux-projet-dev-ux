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

### 14/10/2026 — Références de la documentation technique

- Relecture du document fonctionnel et ajout d’un court bloc précisant son rôle : périmètre cible, scénarios et lots prévus, distincts de l’état d’implémentation.
- Ajout des liens relatifs vers README, plan, journal et wireframes, avec leur fonction respective ; lien PDF explicite également dans la section maquette. Date de mise à jour actualisée, sans modification des scénarios ni des lots.
- Modification et résumé générés et écrits par l’IA à la demande de Steve, sans duplication du suivi détaillé. Cibles des liens locaux et espaces Git vérifiés. Aucun code applicatif modifié ; commit laissé à Steve.

### 14/10/2026 — Mini-cartes de sélection des tags

- À la demande de Steve, remplacement de la présentation en listes par des mini-cartes sélectionnables pour les intérêts et besoins. Clarification retenue : fond jaune via `--color-surface` sur chaque option, sans grande carte derrière le groupe ; titres et instructions sur le fond de page.
- Suppression des deux wrappers `form-panel` autour des fieldsets et ajout d’un conteneur `tag-options` autour des choix de chaque groupe. Une seule nouvelle classe, réutilisée pour les deux groupes ; fieldsets, légendes, labels et treize cases natives conservés.
- Disposition Flexbox avec retour à la ligne ; styles des labels adaptés en réutilisant les variables de surface, bordure et arrondi. Sélection signalée par la coche native et un contour intérieur CSS (`:has(input:checked)`), sans changement de dimensions. Focus du groupe label signalé par un contour extérieur (`:focus-within`). Aucun JavaScript ni traitement PHP ajouté.
- Code et présente entrée générés et écrits par l’IA à la demande de Steve. Contrôle Git des espaces réussi ; présentation mobile, sélection multiple et navigation clavier à confirmer dans le navigateur par Steve. Commit laissé à Steve.

### 19/10/2026 — Bilan documentaire différé de la séance du 14/10

- Relecture du code actuel et de l’historique : mini-cartes présentes dans le commit `74e419e`, suivi de `bf442fc` ; arbre de travail propre avant cette mise à jour. Aucun commit effectué par l’IA.
- README et état d’avancement du plan synchronisés : intérêts et besoins statiques présents, six et sept choix respectivement ; adaptation au rôle parrain, présélection du rôle, comparaison des confirmations et soumissions restent ouverts. Remplacement de la mention périmée des panneaux gris par la surface provisoire actuelle.
- Prochaine étape proposée : flux étudiant du wireframe, sans démarrage applicatif dans cette passe. Revues enseignant du 14/10 maintenues en attente, inclusions JavaScript conservées.
- Journal relu comme historique : les étapes intermédiaires (listes puis wrappers puis mini-cartes) restent datées, sans réécriture rétrospective. Le bon affichage de la correction des légendes avait été confirmé par Steve ; aucun résultat de test navigateur supplémentaire des mini-cartes n’est déduit du seul commit.
- Documentation technique relue : son rôle de spécification cible et ses liens restent adaptés ; aucune duplication du bilan d’implémentation ajoutée.
- Résumé personnel Markdown de la séance du 14/10 généré hors dépôt, dans l’espace local de fichiers de cette conversation : composants, formulaires, accessibilité, variables, Flexbox, sélection CSS et rappel détaillé du chargeur JavaScript, avec questions de compréhension. Aucun lien personnel ajouté au dépôt.

**Rôle de l’IA :** revue et rédaction documentaire réalisées à la demande de Steve le 19/10. Vérification des liens Markdown locaux et contrôle Git des espaces ; aucun test navigateur effectué pendant cette passe. Aucun code applicatif modifié ; commit laissé à Steve.

### 20/10/2026 — Première structure du flux étudiant

- Remplacement du placeholder de `fluxetudiant.html` par un écran statique après relecture visuelle du wireframe V1 : titre d’accueil, trois suggestions de parrains, possibilité de demander d’autres profils et réservation des actualités.
- Profils explicitement fictifs (Vincent, Sarah, Amine), parcours et tags illustratifs. Chaque profil est un `article` avec titre, silhouette décorative commune et liste de tags. Les données ne proviennent pas d’un moteur de suggestion.
- Réutilisation de `request-card`, `tag-list`, `request-actions` et des boutons existants, sans nouvelle classe ni modification CSS. Première présentation empilée ; proportions et disposition finale du wireframe à revoir après consultation navigateur.
- Actions explicites « Demander un parrainage », « Écarter ce profil » et « Voir d’autres profils », toutes désactivées et de type `button` ; aucune interaction, recherche ou demande réelle implémentée.
- Ajout du header/footer partagés avec leur contenu de secours, en conservant le chargeur JavaScript existant et le même footer que le flux parrain. Cela ne constitue pas un contrôle de session ou de rôle. Titre du document et indentation harmonisés.
- Code HTML et présente entrée générés et écrits par l’IA au démarrage de l’étape autorisée par Steve. README et plan à synchroniser au prochain bilan après validation.

**Vérifications :** imbrication HTML, chemins locaux, unicité des identifiants, trois articles, sept boutons désactivés et conteneurs des fragments contrôlés ; espaces Git vérifiés. Rendu mobile, clavier et chargement effectif des fragments à vérifier dans le navigateur par Steve. Aucun test navigateur effectué par l’IA ; staging et commit laissés à Steve.

### 20/10/2026 — Silhouette commune sur le flux parrain

- Ajout de `avatar-default.svg` avant le nom dans la carte de demande de `fluxparrain.html`, avec les mêmes dimensions 64 × 64 et `alt=""` décoratif que sur le flux étudiant, pour harmoniser les deux écrans.
- Modification HTML et présente entrée générées et écrites par l’IA à la demande de Steve. Aucune nouvelle classe ni modification CSS ou JavaScript. Chemin de l’image et espaces Git vérifiés ; rendu navigateur à confirmer par Steve. Commit laissé à Steve.

### 20/10/2026 — Premières pages accueil et profil

- Remplacement des deux derniers placeholders à la demande de Steve. Aucun écran dédié à l’accueil ou au profil dans le wireframe V1 : structures proposées à partir du périmètre fonctionnel, à valider ; aucune fidélité à une maquette inexistante revendiquée.
- Accueil : présentation du service, liens de connexion/création de compte, étapes du parcours prévu et accès explicitement présentés comme démonstrations aux deux flux. Distinction visible entre le fonctionnement cible et les capacités statiques actuelles.
- Profil : exemple fictif de Lucia, rôle étudiant accompagné, pays, parcours, présentation, silhouette décorative, intérêts et besoins. Aucun contact personnel affiché. Lien vers le formulaire existant, avec précision qu’il n’est pas prérempli et n’enregistre rien ; aucune liaison de données implémentée.
- Header partagé avec contenu de secours sur les deux pages ; footer public local à l’accueil et footer commun chargé sur le profil. Aucune gestion de session ou de rôle introduite.
- Réutilisation de `form-panel`, `tag-list` et des styles communs ; liens de navigation textuels. Aucun ajout de classe, de CSS, de JavaScript ou de dépendance. Titres des documents, contenu principal et hiérarchie des titres définis pour les deux pages.
- README et plan synchronisés avec le flux étudiant déjà construit et les deux nouvelles pages : sept structures initiales présentes, diagrammes et périmètre des footers actualisés. Revue des écrans/navigation proposée ensuite ; choix produit, retours enseignant et validation navigateur restent ouverts. Spécification technique inchangée.

**Vérifications :** imbrication HTML, titre principal unique, identifiants, références, chemins locaux et conteneurs des fragments contrôlés sur les deux pages ; liens documentaires, concordance des diagrammes et espaces Git vérifiés. Aucun test navigateur effectué par l’IA ; responsive, navigation clavier et chargement des fragments à confirmer par Steve.

**Rôle de l’IA :** rédaction des pages et des mises à jour documentaires à la demande de Steve. Staging et commit laissés à Steve.

### 20/10/2026 — Actions et cartes de tags accueil/profil

- À la demande de Steve après consultation, présentation des liens principaux de l’accueil et du profil avec les classes existantes `button`, `button--secondary` et `request-actions`. Les éléments restent des liens `a` avec destination, regroupés en lignes flexibles avec retour à la ligne. Libellé du lien de configuration raccourci en « Configurer mon profil » ; avertissement de formulaire non prérempli conservé.
- Ajout d’un wrapper `form-panel` autour de chacune des listes d’intérêts et de besoins du profil : fond jaune partagé derrière les pastilles `tag-list`, dont le fond était identique à celui de la page et donc peu distinct. Titres de section conservés hors des cartes.
- Choix explicite de Steve d’utiliser ici les liens visuellement présentés en boutons ; la remarque enseignant sur ce sujet reste consignée et à revoir. Aucune nouvelle classe, variable ou modification CSS/JavaScript.
- Correction HTML et présente entrée générées et écrites par l’IA à la demande de Steve. Espaces Git et destinations locales vérifiés ; rendu mobile à confirmer par Steve. Commit laissé à Steve.

### 20/10/2026 — Suppression du soulignement des boutons

- Après validation de l’accueil/profil par Steve, suppression de la règle `.button:not(:disabled):hover` qui ajoutait `text-decoration: underline`. La règle commune `.button` contient déjà `text-decoration: none` : aucune surcharge, classe ou variable ajoutée. Le soulignement observé pendant le clic venait de l’état de survol maintenu par le pointeur.
- Focus clavier, styles désactivés et liens ordinaires conservés. Les éléments qui naviguent restent des liens `a`, les actions des boutons `button` ; aucune interaction JavaScript ajoutée.
- Plan actualisé pour distinguer ce point désormais traité des autres suggestions enseignant différées. Code et résumé générés et écrits par l’IA à la demande de Steve ; espaces Git vérifiés. Rendu du survol à confirmer par Steve.
- Les modifications accueil/profil étaient encore non commitées au contrôle de départ ; aucun staging ni commit effectué par l’IA.

### 20/10/2026 — Retour visuel à la pression des boutons

- À la demande de Steve, ajout d’une seule règle partagée `.button:not(:disabled):active` avec `filter: brightness(0.85)` : assombrissement temporaire pendant la pression, sans soulignement ni déplacement. Les couleurs restent issues des variables existantes ; aucune nouvelle classe, variable, transition ou logique JavaScript.
- `:active` représente l’état pressé, pas une sélection persistante après clic ; les boutons désactivés sont exclus et le focus clavier existant est conservé.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Contrôle Git des espaces réussi ; effet visuel à vérifier dans le navigateur par Steve. Commit laissé à Steve.

### 20/10/2026 — Répartition PHP/JavaScript et transfert de contexte

- Steve réaffirme la priorité au serveur PHP pour les traitements qui lui reviennent ; JavaScript vanilla réservé aux interactions client et éventuels appels AJAX. Plan complété pour rendre la décision explicite, y compris rendu/inclusions, rôle, validation serveur, sessions, accès et données. CSS conserve la présentation et ses états.
- Le chargeur JavaScript des fragments reste temporaire pendant la phase statique ; aucune migration PHP engagée. La proposition antérieure de commencer par une présélection du rôle en JavaScript est à revoir selon cette décision.
- Handoff Markdown généré hors dépôt pour la prochaine conversation : état des pages, méthode pédagogique, responsabilités techniques, retours enseignant, vérifications restantes et changements non commitées au contrôle de départ. Aucun nouveau document de contexte ajouté au dépôt.
- Documentation et fichier de transfert générés et écrits par l’IA à la demande de Steve ; espaces Git vérifiés. Aucun changement applicatif lors de cette étape, commit laissé à Steve.

### 20/10/2026 — Revue globale avant changement de conversation

- Relecture des sept pages, fragments communs, CSS, JavaScript, SVG et documents du dépôt. Aucun problème bloquant relevé pour le scaffold statique dans les contrôles effectués ; aucune validation fonctionnelle PHP ou conformité globale d’accessibilité déclarée.
- Contrôles des sept pages : imbrication, unicité des identifiants, titre principal et structure principale, labels associés aux contrôles, références ARIA, attributs alt, chemins des liens/ressources et présence des conteneurs attendus. Liens Markdown locaux et clôture des blocs de code contrôlés ; XML du SVG valide.
- Syntaxe JavaScript contrôlée avec Node ; simulation isolée du chargeur couvrant absence de conteneur, remplacement réussi, erreur HTTP et échec réseau. Contenu de secours conservé dans les deux cas d’erreur simulés. Ces contrôles ne sont pas des essais navigateur.
- CSS relu : variables utilisées toutes définies et accolades équilibrées. Aucun parseur CSS complet disponible dans cette passe ; pas de nouvelle dépendance installée. Styles de pression/focus et retours à la ligne restent à confirmer visuellement.
- Ajustements documentaires limités : date de l’arborescence, intégration provisoire des éléments communs et bilan de la phase UI dans le plan ; rappel de la répartition PHP/JavaScript dans le README. Historique du journal et périmètre fonctionnel conservés.
- Restent ouverts : revue mobile/clavier et échec réel des fragments, choix de navigation/rôle, configuration parrain, présélection du rôle et confirmations, environnement PHP puis données/sessions. Aucun nouveau code applicatif ajouté lors de cette revue. `.gitignore` inchangé : aucun nouveau fichier à exclure identifié.
- Revue, corrections documentaires et actualisation du fichier de transfert hors dépôt générées par l’IA à la demande de Steve ; espaces Git vérifiés. Aucun staging ni commit réalisé par l’IA.

### 26/10/2026 — Afficher et masquer le mot de passe de connexion

- Première interaction client ajoutée dans la phase JavaScript souhaitée avant PHP : bouton natif de type `button` associé au champ par `aria-controls`, avec les classes CSS existantes. Soumission de connexion toujours désactivée.
- `setupPasswordToggle()` retrouve le champ et le bouton, quitte la fonction si un élément est absent, puis enregistre un écouteur de clic. Celui-ci alterne le type `password` / `text` et actualise le libellé avec `textContent`. Aucun traitement serveur ni nouvelle règle CSS.
- Code proposé et expliqué ligne par ligne par l’IA, saisi manuellement par Steve. Relecture des sources et rédaction de cette entrée réalisées par l’IA ; fonctionnement confirmé par Steve dans le navigateur. Aucun essai navigateur effectué par l’IA ; activation clavier de ce nouveau bouton non confirmée séparément.
- Steve a également confirmé les vérifications précédemment proposées sur les mini-cartes de configuration, notamment leur fonctionnement au clavier ; ne pas les considérer comme de nouveaux essais réalisés par l’IA.
- Suite proposée : rendre la fonction réutilisable pour les champs de création de compte, progressivement et sans duplication du traitement. Aucun staging ni commit effectué par l’IA ; notes pédagogiques conservées hors dépôt.

### 26/10/2026 — Réutilisation et boutons de révélation à l’inscription

- Steve a saisi la fonction paramétrée par identifiants et confirmé son fonctionnement sur la connexion. Lors du contrôle suivant, le bouton d’inscription ciblait correctement le premier champ mais se trouvait après les deux groupes ; la confirmation ne disposait pas encore de bouton ni d’appel dédié. Aucun défaut de correspondance des identifiants du premier bouton trouvé ; la cause de l’échec signalé par Steve n’est donc pas établie.
- À la demande explicite de Steve, l’IA a déplacé le premier bouton dans son `form-field`, ajouté le bouton de confirmation dans le sien et connecté ce dernier à la fonction partagée. Chaque bouton contrôle uniquement son champ.
- Deux paramètres de libellé avec valeurs par défaut permettent de conserver les appels existants tout en distinguant « Afficher/Masquer la confirmation du mot de passe ». Aucun changement CSS, serveur ou activation des soumissions.
- Vérifications IA : syntaxe JavaScript et simulation Node avec éléments simplifiés issus des identifiants HTML, couvrant les trois boutons, deux clics successifs, indépendance des champs, restauration des libellés, conservation des valeurs et absence des éléments propres à l’autre page. Contrôle Git des espaces réussi. Aucun essai navigateur effectué par l’IA ; rendu et comportement réels de l’inscription à confirmer par Steve. Aucun staging ni commit effectué.

### 26/10/2026 — Cohérence documentaire avant commit et suite pédagogique

- À la demande de Steve, revue des quatre fichiers Markdown du dépôt : README, plan, journal et documentation technique. README et plan actualisés pour les boutons de révélation, les contrôles des mini-cartes déjà confirmés par Steve et l’ordre d’apprentissage JavaScript avant PHP demandé par l’enseignant selon Steve. Schémas des dépendances synchronisés pour inclure l’interaction de mot de passe.
- Documentation technique inchangée : elle décrit toujours le produit cible et non l’inventaire des réalisations. Anciennes entrées du journal et bilan daté du 20/10 conservés comme historique ; les compléments du 26/10 précisent l’état actuel. Aucune validation navigateur supplémentaire déduite du seul accord pour préparer le commit.
- Prochain exercice proposé, non implémenté : aide immédiate à la correspondance des confirmations, d’abord mot de passe puis e-mail, sans activer les soumissions ni remplacer la future validation PHP. Un compteur pour la description du profil pourra ensuite introduire le traitement des chaînes et l’événement `input`, après définition de son utilité et de ses critères.
- Demande de Steve confirmée : premiers exemples saisis manuellement, explications détaillées et fiche d’apprentissage de fin de journée hors dépôt, centrée sur les interactions entre fichiers, événements/callbacks, paramètres/arguments, valeurs par défaut, portée des variables et vérifications. Fiche complète à préparer au bilan de séance ; aucun support personnel ajouté au dépôt.
- Mises à jour documentaires réalisées par l’IA. Contrôle des liens Markdown locaux, clôtures des blocs de code, concordance des schémas README/plan et espaces Git ; pas de nouvel essai navigateur. Message de commit proposé, staging et commit laissés à Steve.
- Suite confirmée par Steve : poursuivre les fonctionnalités JavaScript et conserver la matière des exercices pour une fiche personnelle détaillée, comme pour HTML/CSS et le chargeur initial. Une préparation de structure PHP/SQL et un transfert vers un nouvel agent sont envisagés ensuite ; aucun transfert ni travail backend engagé. Prochain petit ajout guidé : zone de retour associée au champ de confirmation du mot de passe, à saisir par Steve avant de connecter les événements JavaScript.

### 26/10/2026 — Zone de retour pour la confirmation du mot de passe

- À la demande de Steve de réaliser cet ajout, l’IA a ajouté un paragraphe vide `register-password-feedback` immédiatement après le champ de confirmation, avant son bouton de révélation, et l’a associé au champ avec `aria-describedby`.
- Cette étape prépare uniquement la destination du message ; comparaison et écouteurs JavaScript restent à implémenter. Aucune modification CSS ni activation de la soumission.
- Vérifications IA : identifiant unique, correspondance de la référence descriptive et emplacement dans le même `form-field` contrôlés dans les sources ; espaces Git vérifiés. Aucun essai navigateur ni commit effectué par l’IA. Explications de l’exercice à reprendre dans la fiche personnelle hors dépôt au bilan.

### 26/10/2026 — Comparaison JavaScript des mots de passe

- Code ajouté par l’IA à la demande de Steve : `setupPasswordConfirmation()` retrouve les deux champs et le paragraphe de retour, avec arrêt si l’un manque. Sa fonction interne `updateFeedback()` lit les valeurs exactes, efface le message si la confirmation est vide et indique correspondance ou différence autrement. Aucun retrait des espaces ni modification des valeurs saisies.
- Les deux champs écoutent l’événement `input` et partagent le même callback ; un appel initial synchronise le message avec les valeurs présentes lors du chargement. Pas de nouvelle règle CSS, de soumission activée, d’enregistrement ou de validation serveur. La correspondance ne mesure pas la robustesse du mot de passe.
- Vérifications IA : syntaxe et simulation Node réussies pour état initial, confirmation vide, différence, correspondance, modification de chaque champ, espace supplémentaire, effacement et éléments absents. Contrôle Git des espaces réussi. Aucun essai navigateur effectué par l’IA ; consignes de test fournies à Steve. README et checklist du plan précisés ; comparaison e-mail encore à faire. Aucun staging ni commit effectué.
- Notions à détailler dans la fiche personnelle de fin de journée hors dépôt : événement `input`, propriété `value`, comparaison stricte, fonction interne et portée des variables, référence de callback sans parenthèses et appel initial avec parenthèses.
- Steve confirme ensuite le bon fonctionnement dans le navigateur. README et checklist du plan synchronisés par l’IA ; cette confirmation ne constitue pas un essai navigateur réalisé par l’IA. Steve propose un commit puis un indicateur de robustesse : prochaine étape consignée, critères encore à définir et code non ajouté à ce stade. Contrôle Git des espaces réussi ; staging et commit laissés à Steve.

### 26/10/2026 — Première étape de l’indicateur de robustesse

- Après accord de Steve pour poursuivre, l’IA ajoute le paragraphe vide `register-password-strength` après le premier champ de mot de passe, avant son bouton, et l’associe au champ par `aria-describedby`. Cette étape HTML prépare le retour ; aucun calcul ni indicateur fonctionnel ajouté pour l’instant.
- Référence consultée : [OWASP, contrôles de robustesse des mots de passe](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls). Le choix de l’estimation reste à expliquer avant le JavaScript ; une simple longueur ou une liste de catégories de caractères ne suffira pas à déclarer un mot de passe sûr.
- Référence descriptive et identifiant contrôlés dans les sources, espaces Git vérifiés. Aucun essai navigateur, staging ou commit effectué par l’IA. Liens entre HTML, calcul et retour visuel à reprendre dans la fiche personnelle hors dépôt.

### 26/10/2026 — Conseil de mot de passe en JavaScript, sans CSS

- À la demande de Steve, ajout par l’IA de deux fonctions courtes : `getPasswordGuidance(password)` renvoie un texte sans modifier le DOM ; `setupPasswordGuidance()` retrouve le champ et le paragraphe, protège leur absence et actualise le texte au chargement et sur `input`.
- Ordre des contrôles : vide → aucun message ; présence d’une des six suites courantes ou répétition d’un seul caractère → conseil sur les motifs ; longueur inférieure à 15 caractères → conseil de longueur ; sinon → longueur suffisante pour ce repère, sans déclarer le mot de passe sûr. Liste volontairement limitée, sans dictionnaire exhaustif ni vérification des mots de passe compromis. Référence OWASP consultée à l’étape précédente ; seuil utilisé comme conseil client, pas comme validation serveur.
- Notions pour la fiche personnelle hors dépôt : fonction qui retourne une valeur, tableau et `some`, callback avec paramètre, `toLowerCase` et `includes`, expression régulière `^(.)\1+$` (un caractère répété), `Array.from(...).length` pour compter les points de code Unicode, séparation calcul/affichage. Les graphèmes composés peuvent contenir plusieurs points de code.
- Aucun ajout ni changement CSS. Indentation d’un attribut HTML corrigée ; README et plan synchronisés. Aucun mot de passe enregistré, affiché dans le message, transmis ni journalisé ; soumission inchangée.
- Vérifications IA : syntaxe et simulation Node réussies pour champ vide, seuil de longueur (dont Unicode), motifs courants insensibles à la casse, répétition, mise à jour par événement, effacement et éléments absents. Espaces Git vérifiés. Aucun essai navigateur par l’IA ; tests à effectuer par Steve. Code et documentation écrits par l’IA, aucun staging ni commit effectué.
- Steve confirme ensuite le bon fonctionnement dans le navigateur. En bref : la première fonction calcule un message, la seconde l’affiche sur l’événement `input` ; HTML fournit le paragraphe lié au champ par `aria-describedby`, sans CSS ajouté. Cette confirmation humaine complète les simulations, sans constituer un test navigateur réalisé par l’IA.
- Point d’arrêt JavaScript proposé : préparation d’un transfert hors dépôt pour cadrer PHP/SQL avant implémentation. Comparaison e-mail et compteur de description restent différés. Fiche personnelle détaillée JavaScript toujours à produire au bilan ; notes des notions conservées dans les entrées précédentes. Transfert et mises à jour documentaires rédigés par l’IA, aucun agent backend lancé ni code backend créé.

### 26/10/2026 — Fiche personnelle de révision JavaScript

- À la demande de Steve, fiche Markdown téléchargeable rédigée par l’IA hors dépôt : relations HTML/DOM/JavaScript, révélation réutilisable, paramètres et valeurs par défaut, événements et callbacks, portée et fermetures, comparaison des champs, calcul/affichage du conseil, tableaux, regex et Unicode, tests et questions corrigées.
- Sources actuelles relues ; les quatre fonctions reproduites dans la fiche correspondent au code actuel et les extraits JavaScript ont une syntaxe valide. Limites du conseil et distinction entre simulations IA et essais navigateur de Steve précisées. Aucun code applicatif changé, aucun staging ni commit effectué.

### 26/10/2026 — Inventaire local et proposition de cadrage PHP/SQL

- À la demande de Steve, lecture des deux copies du handoff hors dépôt, du README, du plan, de la spécification fonctionnelle, des dernières entrées du journal et des sources concernées. Handoff traité comme contexte à vérifier. État confirmé : sept pages HTML, fragments chargés par JavaScript, interactions de mot de passe et boutons de soumission désactivés ; aucun code PHP/SQL applicatif. Le dossier `backend/` existe mais est vide ; `.gitignore` est vide. Aucune instruction `AGENTS.md` trouvée dans le dépôt ou ses répertoires parents contrôlés.
- Git au départ : arbre propre sur `main`, sans avance/retard affiché par rapport à la référence locale `origin/main` ; dernier commit local `ec807df` (conseil de mot de passe). Aucun accès distant Git effectué : cela ne confirme pas l’état actuel du serveur GitHub.
- Vérifications en lecture seule par l’IA : PHP CLI 8.3.14 disponible via `C:/wamp64/bin/php/php8.3.14/php.exe`, configuration CLI chargée depuis son `php.ini`, pilotes PDO `mysql` et `sqlite` annoncés. Avertissement Xdebug : ouverture de son fichier de journal impossible ; les commandes PHP ont néanmoins retourné version et pilotes. Aucun réglage corrigé.
- Wampserver présent avec répertoires MySQL 9.1.0, MariaDB 11.5.2 et Apache 2.4.62.1. Versions des clients MySQL/MariaDB confirmées par leurs exécutables ; clients absents du PATH. Ports déclarés dans les configurations : MySQL 3306, MariaDB 3307. Les hôtes virtuels Apache lus ciblent d’autres projets, pas ce dépôt. Extension VS Code Live Server 5.7.10 présente, cohérente avec le lancement documenté ; aucun essai HTTP ni navigateur effectué pendant cette passe.
- Limites : inventaires des services et des ports en écoute refusés par l’environnement ; aucune connexion SQL, version du serveur en fonctionnement, base, identité SQL ou disponibilité effective du service validée. Aucun service démarré, aucune installation, aucun identifiant recherché ou utilisé.
- Proposition seulement : conserver `frontend/public/` comme racine HTTP ; placer progressivement les inclusions PHP dans `backend/includes/`, la configuration locale dans `backend/config/`, la connexion PDO dans `backend/db.php` et le schéma dans `backend/sql/schema.sql`. Ne créer ces éléments qu’au moment de leur utilisation. Exclure la configuration contenant des secrets de Git avant de la créer. Le chargeur de fragments actuel reste conservé jusqu’à une migration PHP délibérée ; la racine du dépôt ne devra pas être exposée par le futur serveur PHP.
- Modèle initial proposé, non validé ni créé : `users` (identifiant, username/e-mail uniques, empreinte de mot de passe, rôle étudiant/parrain), `profiles` (clé primaire également étrangère vers users), `interests` et `profile_interests`, `help_domains` et `profile_help_domains`, puis `mentorship_requests` (étudiant, parrain, statut, dates). Clés composées des associations pour éviter les doublons ; domaines partagés, interprétés comme besoins ou aide proposée selon le rôle. Une demande acceptée représente d’abord la relation, sans table de parrainage dupliquant son état. Rôles des participants et autorisation de consulter le contact à contrôler côté PHP. Langues, photo et autres champs prévus au MVP restent à détailler dans un incrément du modèle ; règles de nouvelle demande après refus, cumul/changement des rôles et fin de relation à arbitrer avant leur implémentation.
- Première étape proposée à saisir par Steve : une page PHP d’exercice isolée générant une phrase HTML, sans base ni conversion de page existante. Le serveur intégré PHP avec racine explicite pourra être utilisé lorsque cette étape sera choisie ; aucune commande de lancement exécutée. Critères futurs : phrase rendue dans le navigateur, code PHP absent de la réponse HTML, pages statiques et fragments toujours accessibles. Référence technique consultée : [manuel PHP, serveur intégré et option de racine publique](https://www.php.net/manual/en/features.commandline.webserver.php).
- Inventaire, proposition et présente entrée rédigés par l’IA ; aucun code applicatif, support pédagogique détaillé, staging ou commit créé pendant ce cadrage. Seul le journal est modifié. Vérification documentaire et contrôle Git des espaces effectués ; aucun test fonctionnel PHP/SQL revendiqué. Steve conserve la saisie des premiers exemples et tous les staging/commits.

### 26/10/2026 — Création du scaffold backend

- À la demande explicite de Steve, création par l’IA des dossiers `backend/includes/`, `backend/config/` et `backend/sql/`, avec `header.php`, `footer.php`, `database.local.php.example`, `database.local.php` et `schema.sql`, ainsi que `backend/db.php`.
- Fichiers réservés aux prochaines étapes : commentaires explicatifs uniquement, sans rendu, chargement de configuration, connexion PDO ni instruction SQL exécutable. Aucun identifiant ajouté. Le modèle de configuration `.example` est versionnable ; la copie locale `backend/config/database.local.php` est exclue par une règle précise ajoutée à `.gitignore`.
- Aucun fichier frontend modifié : pages HTML, fragments, chargement JavaScript, formulaires désactivés et prévisualisation Live Server conservés. Aucun serveur démarré ni installation effectuée. Les premiers exemples fonctionnels restent à saisir par Steve.
- Vérifications IA : syntaxe des cinq fichiers PHP contrôlée avec `php -n -l` (configuration locale PHP non chargée pour ce contrôle), exclusion de la configuration locale confirmée par `git check-ignore`, absence de différence frontend et contrôle Git des espaces réussis. Aucun essai navigateur, connexion SQL ni exécution de schéma. Fichiers et présente entrée écrits par l’IA ; aucun staging ni commit effectué.

### 26/10/2026 — Critères de sécurité intégrés au plan

- Steve demande de prendre en compte la sécurité dès le début du développement. L’IA ajoute au plan une rubrique transversale associant protections et vérifications à chaque étape : racine publique/secrets, PDO et droits SQL, validation et encodage des sorties, CSRF, mots de passe et limitation des tentatives, sessions et autorisations, uploads et déploiement. La revue finale est conservée comme complément.
- Références officielles OWASP (injection SQL, CSRF) et PHP (sessions) consultées et liées dans le plan. Critères marqués comme futurs, sans déclarer ces protections implémentées. Sécurité et performance distinguées ; aucune abstraction ni installation ajoutée.
- Plan et présente entrée rédigés par l’IA. Différence documentaire relue et contrôle Git des espaces réussi. Aucun code applicatif modifié, test de sécurité exécuté, staging ou commit effectué ; prévisualisation actuelle conservée.

### 26/10/2026 — Hébergement différé et accompagnement pédagogique

- À la demande de Steve, discussion Azrael/Vercel consignée dans le plan comme point à revoir. Exigence Azrael rapportée par Steve ; caractéristiques du serveur encore inconnues. Hébergement précoce de test proposé, sans décision ni déploiement. Références Vercel consultées pendant la discussion précédente conservées dans le plan.
- Méthode pédagogique précisée pour PHP/SQL : expliquer l’utilité et les dépendances de chaque fichier, puis chaque ligne des premiers exemples avant saisie par Steve et vérification progressive. Bilan quotidien détaillé hors dépôt, en complément des explications pendant la séance.
- Documentation rédigée par l’IA ; différence relue et contrôle Git des espaces réussi. Aucun fichier applicatif créé ou modifié, aucun test navigateur/PHP/SQL, staging ou commit effectué lors de cette étape. L’exercice PHP proposé reste à saisir.

### 26/10/2026 — Essai de palette jaune et bleu marine

- À la demande de Steve, conservation de la surface jaune principale `#FBB609` et modification des variables existantes : texte `#252A34`, fond de page blanc chaud `#FAF9F6`, bordures `#736344`, actions et focus bleu marine `#203653`. Blanc des champs et du texte sur les actions conservé, notation harmonisée en `#FFFFFF`.
- Aucun ajout de classe, variable, règle CSS ou dépendance ; répercussion sur les composants qui consomment ces valeurs, y compris header/footer, cartes et boutons. Palette provisoire à consulter dans le navigateur ; couleurs des boutons désactivés toujours atténuées par leur opacité existante.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Contrôle Git des espaces effectué ; rendu et validation des contrastes restent à confirmer. Autres modifications documentaires déjà présentes conservées ; commit laissé à Steve.

### 26/10/2026 — Contraste visuel renforcé du header/footer

- Après le premier essai jugé trop subtil par Steve, application du bleu marine au header/footer et de texte blanc chaud, en conservant les cartes et choix jaunes et le fond de page blanc chaud.
- Deux variables ajoutées pour les éléments communs : `--color-header-footer`, initialement liée à `--color-action`, et `--color-on-header-footer`. Les couleurs du header/footer peuvent désormais évoluer indépendamment des surfaces des cartes.
- Marque et liens du footer héritent de la couleur de leur conteneur. Contours de focus correspondants en `currentColor` pour rester visibles sur le fond sombre. Aucune modification HTML/JavaScript ou de disposition.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Différence et espaces Git contrôlés ; rendu à consulter par Steve avant validation. Palette toujours provisoire ; commit laissé à Steve.

### 26/10/2026 — Statut provisoire de la direction visuelle

- Steve précise que la palette jaune/bleu actuelle reste un essai, sans validation définitive : l’intention est une interface moderne, accueillante, tournée vers les interactions sociales entre jeunes étudiants, avec de futurs visuels cartoon dans un esprit Discord.
- Le jaune reste la couleur principale souhaitée. Le bleu marine testé et sa répartition sont à réévaluer ; aucune nouvelle couleur ou illustration ajoutée lors de cette clarification.
- Changements CSS limités à la palette et à son application : valeurs centralisées dans `:root`, deux variables dédiées au header/footer, héritage de leur texte et contours de focus adaptés. Aucun changement de disposition ou de JavaScript dans cet essai visuel.
- Steve travaille également sur PHP en parallèle. Cette entrée concerne uniquement la direction visuelle ; elle ne décrit ni ne valide l’avancement PHP. Aucun fichier PHP ni autre travail parallèle modifié pendant cette mise à jour.
- Entrée générée et écrite par l’IA à la demande de Steve. Contrôle Git des espaces effectué ; commit laissé à Steve.

### 26/10/2026 — Essai visuel plus ludique bleu vif / jaune doux

- Steve autorise une direction plus expressive, y compris la révision du jaune. Remplacement des seules valeurs existantes dans `:root` : texte bleu nuit `#25264B`, fond légèrement lavande `#F5F4FF`, surfaces jaune doux `#FFE179`, bordures bleu violacé `#454783`, actions `#454BCE`, header/footer bleu vif `#5056DF` avec texte blanc. Le header/footer utilise désormais une valeur distincte de celle des actions.
- Aucune classe, variable ou règle supplémentaire ; mise en page, typographie, états et logique conservés. Essai de palette pour consultation, sans nouvelle illustration ni décision de direction artistique définitive.
- Calcul des contrastes des couleurs opaques : texte/fond 13.22:1, texte/carte 11.18:1, blanc/action 6.67:1, blanc/header-footer 5.62:1 et texte secondaire/jaune 5.17:1. Ces cinq couples dépassent 4.5:1 ; cela ne constitue pas une validation globale d’accessibilité, des états filtrés ou des boutons désactivés.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Espaces Git vérifiés ; rendu navigateur à consulter par Steve. Travail PHP parallèle laissé séparé et inchangé ; commit laissé à Steve.

### 26/10/2026 — Retour à la palette précédente

- Steve ne retient pas l’essai bleu vif / jaune doux et demande son retrait. Restauration des seules valeurs de couleur antérieures : jaune `#FBB609`, bleu marine `#203653`, fond blanc chaud `#FAF9F6`, texte `#252A34`, bordures `#736344` ; header/footer à nouveau liés à la couleur d’action avec texte blanc chaud.
- L’essai précédent reste dans le journal comme historique, sans constituer une direction validée. Couleur du fond et équilibre général de la palette à reconsidérer avant un prochain essai.
- Restauration CSS et présente entrée générées et écrites par l’IA à la demande de Steve. Espaces Git vérifiés. Aucun changement de disposition, de JavaScript ni du travail PHP parallèle ; commit laissé à Steve.

### 26/10/2026 — Bleu vif rétabli avec le jaune original

- Après clarification, Steve choisit de restaurer les couleurs de l’essai bleu vif tout en conservant le jaune original `#FBB609` pour les surfaces.
- Valeurs existantes actualisées : texte `#25264B`, fond lavande très pâle `#F5F4FF`, bordures `#454783`, actions `#454BCE`, header/footer `#5056DF` et texte blanc. Aucun ajout de règle, variable ou classe ; travail PHP parallèle inchangé.
- Modification CSS et présente entrée générées et écrites par l’IA à la demande de Steve. Espaces Git vérifiés ; combinaison à consulter dans le navigateur. Les mesures de contraste de l’essai précédent sur le jaune doux ne décrivent pas ce jaune rétabli. Commit laissé à Steve.

### 26/10/2026 — Texte sombre sur les surfaces jaunes

- Steve conserve la combinaison bleu vif / fond lavande pâle / jaune original, mais demande un texte noir plutôt que bleu sur le jaune. Variable `--color-text` ramenée au quasi-noir `#222222` et texte de `.button--secondary` relié à cette variable plutôt qu’à la couleur d’action.
- Texte courant, champs et tags suivent ainsi la même couleur sombre. Texte blanc sur les actions bleues et le header/footer conservé ; bordures et focus bleus inchangés. Aucune nouvelle variable, classe ou règle.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Espaces Git vérifiés ; travail PHP parallèle inchangé et commit laissé à Steve.

### 26/10/2026 — Essai de la palette de référence cartoon

- À la demande de Steve après partage de sa palette précédente, essai des couleurs proposées : fond crème `#E9E6DD`, cartes jaunes `#E4CF72`, actions vertes `#64CE80`, header/footer saumon `#CB5A52`, texte et bordures quasi-noirs `#111113`. Champs blancs conservés ; rose et bleu de la référence non ajoutés.
- Modification des valeurs de couleur existantes. Bordure des boutons, contours de focus des contrôles et contour des tags sélectionnés reliés à `--color-border` plutôt qu’au vert d’action pour conserver des repères sombres sur les fonds clairs. Aucun ajout de classe, variable ou règle, aucune modification des épaisseurs, arrondis, disposition, HTML ou JavaScript.
- Contrastes calculés des couples opaques : texte/fond 15.11:1, texte/jaune 12.10:1, texte/vert 9.59:1, texte/saumon 4.60:1 et texte/champ blanc 18.86:1. Ces cinq couples dépassent 4.5:1 ; états désactivés et filtrés non couverts par ces mesures, sans déclaration de conformité globale.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Différence et espaces Git contrôlés ; rendu navigateur à consulter avant validation. Travail PHP parallèle inchangé ; commit laissé à Steve.

### 26/10/2026 — Header/footer charbon pour équilibrer la palette

- Steve conserve le fond crème, les cartes jaunes et les actions vertes, mais ne retient pas le saumon. Modification des deux seules variables header/footer : fond charbon `#242426` et texte crème `#E9E6DD`.
- Avant commit, Steve précise que le charbon reste à reconsidérer : cette teinte n’est pas validée définitivement. Note ajoutée par l’IA à sa demande.
- Les liens et contours de focus du header/footer suivent déjà leur couleur de texte par héritage et `currentColor`. Aucun autre style, HTML, JavaScript ou travail PHP modifié.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Espaces Git vérifiés ; rendu à consulter par Steve. Commit laissé à Steve.

### 26/10/2026 — Revue de cohérence frontend avant poursuite PHP

- Après le commit palette `843666b`, contrôle des sept pages : structure, titres principaux, labels, identifiants et références ARIA (dont contrôles des mots de passe), chemins locaux, classes présentes dans la feuille commune et soumissions désactivées. Aucun écart bloquant relevé dans ces contrôles sources.
- Contenus de secours header/footer comparés aux fragments partagés : cohérents sur toutes les pages qui les chargent. Palette commune crème/jaune/vert/charbon et texte sombre appliqués via variables ; charbon toujours à reconsidérer. États de focus et de sélection distincts des couleurs de remplissage.
- Syntaxe du JavaScript actuel vérifiée, y compris les interactions de mots de passe ajoutées dans le travail parallèle. Variables CSS définies, accolades équilibrées, SVG XML, liens documentaires et clôture des blocs Markdown contrôlés. Aucun nouveau test navigateur ni validation CSS complète pendant cette revue.
- Écarts de périmètre conservés : pas de navigation conditionnée par session/rôle ; profil fictif non relié au formulaire ; configuration encore orientée étudiant ; e-mails non comparés. Le bloc daté du 20/10 du plan reste un instantané antérieur et ne décrit pas les nouvelles interactions du 26/10 ; sa mention de surface partagée avec le header/footer a été dépassée par les essais de palette consignés ci-dessus.
- Fichiers préparatoires PHP/SQL désormais visibles dans `backend/` : existence constatée seulement, sans lecture des configurations privées ni revue ou modification de ce travail parallèle. L’état PHP et les prochains changements de routes/inclusions sont à documenter dans cette étape séparée ; cette revue ne les valide pas.
- Revue et présente entrée générées et écrites par l’IA à la demande de Steve. Aucun changement applicatif réalisé ; espaces Git vérifiés, commit laissé à Steve.

### 27/10/2026 — Confirmation des e-mails et réutilisation du JavaScript

- Après reprise demandée par Steve, arbre Git propre constaté avant modification. Lecture du JavaScript et des groupes de formulaire actuels ; fichiers préparatoires backend repérés, sans modification ni revue de leurs configurations.
- L’IA remplace `setupPasswordConfirmation()` par `setupFieldConfirmation(inputId, confirmationId, feedbackId, matchMessage, mismatchMessage)`. Le mécanisme est conservé : références DOM, garde-fou si élément absent, message vide pour confirmation vide, comparaison exacte et écoute de `input` sur les deux champs. Deux appels fournissent les identifiants et textes propres aux mots de passe et aux e-mails, sans duplication du traitement.
- Ajout du paragraphe `register-email-feedback` après la confirmation e-mail, associé par `aria-describedby`. Aucune normalisation de casse ni modification des valeurs ; le message décrit seulement l’égalité des saisies, pas la validité du format ni la possession de l’adresse. Validation serveur et soumissions désactivées conservées. Aucun CSS ajouté.
- Code et documentation rédigés par l’IA. Syntaxe et simulations Node réussies : vide, différence, correspondance, modification de chaque champ, casse, espaces, effacement, indépendance des paires, fonctionnement des révélations et du conseil de mot de passe, éléments absents. Identifiants HTML uniques et références ARIA contrôlés, espaces Git vérifiés. Aucun nouvel essai navigateur effectué par l’IA ; consignes fournies à Steve.
- README et checklist du plan synchronisés, fiche personnelle JavaScript complétée hors dépôt pour expliquer les cinq paramètres et la conservation du comportement. Compteur de description et filtrage proposés ensuite, sans implémentation dans cette étape. Aucun staging ni commit effectué par l’IA.
- Steve confirme ensuite que les interactions fonctionnent toujours dans le navigateur. Statut du README et de la checklist actualisé par l’IA avant le commit laissé à Steve ; aucun nouvel essai navigateur réalisé par l’IA. Prochain exercice : compteur de description sans limite métier arbitraire ; champ existant relu, aucun code de compteur ajouté dans ce commit.

### 27/10/2026 — Compteur de description du profil

- Steve a saisi le paragraphe `profile-description-count` et sa référence `aria-describedby` sur le textarea. Au contrôle initial, seul ce fichier HTML était modifié. L’IA ajoute `setupCharacterCounter(inputId, counterId)` : recherche des éléments, garde-fou, calcul sur `input` et initialisation immédiate.
- `Array.from(input.value).length` compte les points de code Unicode, espaces et retours à la ligne compris. Le ternaire choisit le libellé singulier/pluriel et un littéral de gabarit compose le texte. Ce compteur ne compte pas les graphèmes composés ; aucune limite de longueur ni règle métier ajoutée. Aucun CSS ou backend modifié, aucune sauvegarde ou soumission activée.
- Vérifications IA : syntaxe, référence HTML unique et simulation Node réussies pour contenu prérempli, zéro/un/plusieurs caractères, changement équivalent à un collage, effacement, espaces, retours à la ligne, emoji simple, accent combiné, valeurs conservées et éléments absents. Espaces Git vérifiés ; aucun essai navigateur effectué par l’IA. Tests réels de saisie/collage/effacement à confirmer par Steve.
- Attribution : HTML saisi par Steve ; JavaScript et mises à jour documentaires par l’IA. README/plan et fiche personnelle hors dépôt actualisés. Aucun staging ni commit effectué par l’IA.

### 27/10/2026 — Essai de saumon pâle pour le header/footer

- À la demande de Steve, remplacement de la couleur actuellement jaune du header/footer par un saumon très clair `#F2D6D0` dans la variable partagée ; texte quasi-noir `#111113` déjà présent et conservé.
- Cartes jaunes, actions vertes, fond crème et autres styles conservés. Liens et contours de focus suivent la couleur de texte existante par héritage et `currentColor` ; aucune nouvelle règle, classe ou variable.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Espaces Git vérifiés ; rendu à consulter avant validation. Modifications parallèles déjà présentes conservées et aucun fichier PHP modifié ; commit laissé à Steve.

### 27/10/2026 — Ajustement léger du saumon

- À la demande de Steve, saumon du header/footer légèrement foncé : `--color-header-footer` passe de `#F2D6D0` à `#EBC3BA`. Texte et reste de la palette conservés.
- Modification de cette seule valeur CSS et note générées par l’IA ; espaces Git vérifiés, autres travaux parallèles inchangés. Rendu à consulter par Steve ; commit laissé à Steve.

### 27/10/2026 — Limite de 500 pour la description

- Steve confirme avoir commité le compteur avec ses changements de palette ; arbre propre constaté au départ. L’entrée du compteur était déjà présente dans le journal. Il choisit explicitement une limite de 500.
- L’IA ajoute `maxlength="500"` au textarea et adapte le compteur en `nombre / limite caractères`. JavaScript lit `input.maxLength`, ce qui garde la valeur HTML comme référence pour la limite. Le HTML initial affiche `0 / 500 caractères`.
- `input.value.length` remplace `Array.from(input.value).length` pour compter les mêmes unités UTF-16 que le `maxlength` natif ; un emoji simple tel que 🙂 compte désormais pour deux unités. Le navigateur gère la limite de saisie, JavaScript affiche le compte sans tronquer la valeur ni masquer un dépassement provenant d’un autre script. Validation serveur future nécessaire ; soumission toujours désactivée. Aucun CSS ni backend modifié.
- Référence consultée : [MDN — maxlength](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/maxlength). Simulations IA réussies : initialisation, vide, un caractère, 499/500, dépassement assigné par script, Unicode, changement de limite et absence des éléments ; syntaxe et espaces Git contrôlés. Saisie et collage au-delà de la limite restent à tester dans le navigateur par Steve ; aucun essai navigateur effectué par l’IA.
- Code et documentation actualisés par l’IA, fiche personnelle complétée hors dépôt. Aucun staging ni commit effectué par l’IA.

### 27/10/2026 — Hiérarchie typographique et unité d’espacement

- À la demande de Steve, première passe de typographie/espacement avant une prochaine revue du header/footer. Police système existante conservée, sans téléchargement de fonte ni ajout de dépendance.
- Tailles explicites : h1 fluide via `clamp` de 1.75rem à 2.5rem, h2 de 1.25rem à 1.5rem, h3 à 1.125rem. Interligne des titres à 1.2, texte courant de 1.5 à 1.6 ; ligne des boutons inchangée à 1.5. Les titres peuvent revenir à la ligne et ne reçoivent pas de hauteur fixe.
- Ajout d’une seule variable `--space: 1rem`, réutilisée dans marges, paddings et gaps existants avec `var` et `calc`. Valeurs numériques des espacements existants conservées, y compris fractions 0.25/0.5/0.75/1.25/1.5 ; padding fin de 0.625rem des contrôles laissé en place. Tailles de police, rayons, dimensions d’avatar et hauteurs minimales ne dépendent pas de cette unité.
- Ajout d’une marge au paragraphe qui suit directement une `request-card`, pour séparer la dernière suggestion du message « Aucun de ces profils… ». Aucune classe supplémentaire, aucun changement de palette, HTML, JavaScript ou travail PHP.
- Point du plan sur les variables d’espacement marqué traité pour la mise en page ; autres retours enseignant conservés ouverts. Le header/footer consomme la même unité pour ses espacements existants, sans refonte de son contenu ni de sa disposition.
- CSS et documentation générés et écrits par l’IA à la demande de Steve. Références de variables, accolades et espaces Git contrôlés. Bornes de tailles vérifiées par calcul à 375, 768 et 1440px avec racine 16px ; ce calcul ne remplace pas une vérification navigateur. Rendu mobile/desktop et zoom à consulter par Steve avant validation ; commit laissé à Steve.

### 27/10/2026 — Alignement responsive du header/footer

- Avant intervention, arbre Git propre et commit `ac9cfc3` constatés. Les entrées « Limite de 500 pour la description » et « Hiérarchie typographique et unité d’espacement » décrivent séparément les changements JavaScript/HTML et CSS ; aucun chevauchement de responsabilité relevé dans leur contenu.
- À la demande de Steve de poursuivre sur le header/footer, modification CSS seulement : `.site-brand` passe en `inline-flex` avec centrage vertical et hauteur minimale de 2.75rem pour agrandir la cible du lien d’accueil sans imposer une hauteur fixe au texte.
- Footer : remplacement de la colonne forcée par une ligne flexible avec retour à la ligne, centrage vertical et répartition de l’espace. Navigation et texte peuvent partager une ligne si la place suffit, sinon reviennent à la ligne naturellement. Gap existant fondé sur `--space` conservé, sans media query ni classe supplémentaire ; footer toujours dans le flux normal.
- Conservation des classes et du découpage HTML actuel : la mise en page s’applique aussi aux futurs fragments inclus par PHP. Aucun changement au chargeur JavaScript, aux formulaires, aux liens ni au travail PHP parallèle ; migration des inclusions toujours à réaliser dans cette étape séparée.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Différence, références de variables, accolades et espaces Git contrôlés ; affichage sur petites/grandes largeurs et clic/focus du lien à confirmer dans le navigateur par Steve. Commit laissé à Steve.

### 27/10/2026 — Ombre franche des boutons

- À la demande de Steve après partage d’une référence visuelle, ajout de `box-shadow: 3px 3px 0 var(--color-border)` dans la règle commune `.button`. Décalage de 3px vers la droite et le bas, sans flou, pour un relief graphique similaire à la référence.
- Une seule déclaration ajoutée, couleur de bordure existante réutilisée ; aucune nouvelle classe ou variable. Bordure, arrondi et disposition conservés. Effet commun aux boutons et liens `.button`, y compris la variante secondaire ; l’opacité des contrôles désactivés atténue aussi leur ombre.
- Aucune nouvelle animation de clic : effet de pression existant conservé, raffinement interactif reporté à la demande de Steve. Aucun HTML, JavaScript ou fichier PHP modifié.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Différence et espaces Git contrôlés ; rendu et absence de débordement à vérifier dans le navigateur par Steve. Commit laissé à Steve.

### 27/10/2026 — Relief commun des cartes et boutons

- À la demande de Steve, extension de l’ombre franche aux cartes de profils/demandes (`request-card`), panneaux (`form-panel`) et mini-cartes de sélection (`tag-options label`), via une règle groupée sans nouvelle classe. Pastilles de lecture `tag-list` conservées sans relief supplémentaire.
- Ajout d’une variable partagée `--shadow-raised: 3px 3px 0 var(--color-border)` et réutilisation sur les boutons : modification du relief désormais centralisée. État sélectionné des mini-cartes adapté pour cumuler le contour intérieur existant et l’ombre extérieure, sans effacer cette dernière.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Différence et espaces Git contrôlés ; rendu mobile et état sélectionné à vérifier dans le navigateur. Aucun HTML, JavaScript ou travail PHP parallèle modifié ; commit laissé à Steve.

### 27/10/2026 — Navigation principale conservée dans le footer

- Steve confirme que la navigation principale reste dans le footer pour le moment. Header limité à l’identité du projet et au lien d’accueil ; variantes selon connexion/rôle et destinations détaillées encore à définir, avec rendu prévu côté PHP.
- Décision ajoutée au plan et présente synthèse rédigées par l’IA. Aucun changement applicatif ou de positionnement du footer ; espaces Git vérifiés. Commit laissé à Steve.

### 27/10/2026 — Navigation persistante mobile différée

- Après discussion d’une barre de navigation toujours visible en bas sur mobile, Steve demande de mettre l’idée en attente et d’y revenir ultérieurement. Point de suivi ajouté au plan ; footer conservé dans le flux normal, sans modification CSS/HTML/JavaScript ou PHP.
- Note et mise à jour documentaire rédigées par l’IA à la demande de Steve ; espaces Git vérifiés. Commit laissé à Steve.

### 27/10/2026 — Sélections des intérêts et besoins : compteur et désélection

- À la demande de Steve, ajout de `profile-interests` et `profile-needs` sur les deux fieldsets, d’un paragraphe de statut et d’un bouton natif « Tout désélectionner » dans chacun. Fieldsets, légendes et treize cases natives avec leurs noms/valeurs sont conservés ; la formulation du deuxième groupe reste orientée étudiant, sans nouvelle gestion du rôle.
- `setupTagSelection(groupId)` prépare une interaction indépendante par groupe : sélection DOM limitée au fieldset, compteur des cases `:checked`, singulier/pluriel et bouton désactivé lorsque rien n’est coché. Un écouteur `change` sur le groupe reçoit les changements remontés depuis les cases. Le bouton parcourt les cases avec `forEach`, affecte `checked = false`, replace le focus sur la première case puis recalcule le statut. L’appel initial prend aussi en compte d’éventuelles cases précochées.
- La modification de `.checked` par script ne déclenche pas automatiquement `change` : l’actualisation est appelée explicitement après la boucle. Pas de limite de sélection, de sauvegarde, de requête réseau ou de CSS supplémentaire. Apparence existante réutilisée ; validation et enregistrement futurs restent côté PHP. Filtrage des profils réservé à PHP/SQL après clarification de Steve, proposition JavaScript antérieure abandonnée.
- Vérifications IA : syntaxe et simulations Node réussies pour zéro/une/plusieurs sélections, préselection, groupes indépendants, désélection, toutes les options, décochage manuel, cible du focus et éléments manquants. Treize noms/valeurs de cases comparés à la version Git, boutons de type `button`, statuts et soumission toujours désactivée contrôlés. La remontée réelle des événements, le focus clavier et le rendu restent à vérifier dans le navigateur par Steve ; aucun essai navigateur réalisé par l’IA.
- JavaScript, HTML, mises à jour README/plan et nouvelle fiche pédagogique Markdown hors dépôt rédigés par l’IA. Explications et checklist fournies à Steve ; message de commit proposé, aucun staging ni commit effectué. Les modifications documentaires de navigation déjà présentes au départ sont conservées.

### 27/10/2026 — Sélection de toutes les options par groupe

- À la demande de Steve, ajout d’un bouton natif « Tout sélectionner » avant « Tout désélectionner » dans chacun des deux groupes. Conteneur `request-actions` existant réutilisé pour l’alignement horizontal avec retour à la ligne selon la largeur ; aucune nouvelle règle CSS.
- Traitement partagé par `setSelection(checked)` : `true` coche toutes les cases du groupe, `false` les décoche. Les deux boutons appellent cette fonction ; focus sur la première case et actualisation du statut conservés. « Tout sélectionner » se désactive lorsque toutes les cases sont cochées ; « Tout désélectionner » lorsque rien n’est coché. Les changements manuels réactualisent les deux états.
- Vérifications IA : syntaxe et simulations Node réussies pour sélection/désélection complète, état partiel, préselection, groupes indépendants, cible du focus et contrôles manquants. Présence des deux boutons dans le même conteneur flexible contrôlée dans le HTML. Disposition réelle, retour à la ligne et clavier restent à confirmer par Steve dans le navigateur ; aucun essai navigateur effectué par l’IA.
- HTML, JavaScript, README/plan et complément de fiche hors dépôt rédigés par l’IA. Aucune modification PHP, CSS ou activation des soumissions ; espaces Git vérifiés, aucun staging ni commit effectué.

### 27/10/2026 — Synchronisation documentaire après revue globale

- À la demande de Steve, correction documentaire sans modification applicative : arborescence versionnée du plan actualisée au 27/10 avec les placeholders backend, et précision que la configuration locale est exclue de Git. Suppression de la phrase annonçant ces dossiers comme futurs.
- Consolidation des anciens bilans 20/10 et 26/10 du plan en un état actuel unique : confirmations, compteur limité à 500, actions de sélection groupée, styles partagés, soumissions désactivées et scaffold backend non fonctionnel. Prochaines étapes périmées retirées ; essais navigateur restant à effectuer conservés ouverts. Historique détaillé maintenu dans les entrées antérieures du journal.
- README aligné sur les couleurs/espacements/ombres actuels, l’existence des placeholders backend et le footer textuel présent. Schémas README/plan synchronisés avec un nœud compact pour les interactions des formulaires. Reprise du footer et navigation persistante restent différées, sans nouveau développement.
- Documentation technique fonctionnelle relue et laissée inchangée : pas de décision produit à modifier. Aucun fichier d’apprentissage personnel ajouté au dépôt.
- Vérifications de la revue précédente : structure, labels/références, chemins et classes des sept pages, parité des fallbacks, variables/accolades CSS, SVG et syntaxe JavaScript ; simulations des interactions et du chargeur réussies. Placeholders PHP exécutables lintés sans chargement du php.ini, exclusion de la configuration locale confirmée ; aucune connexion SQL ni configuration privée lue. Aucun essai navigateur ni validation CSS complète effectué par l’IA.
- Mises à jour et présente entrée rédigées par l’IA à la demande de Steve. Liens documentaires locaux, blocs de code, concordance des schémas, arborescence et espaces Git vérifiés. Seuls README, plan et journal modifiés ; staging et commit laissés à Steve.

### 28/10/2026 — Pression des boutons cohérente avec le relief

- À la demande de Steve, remplacement du simple assombrissement dans la règle `.button:not(:disabled):active` par un décalage vers le bas/droite et la suppression temporaire de l’ombre. Le bouton rejoint ainsi la position de son ombre pendant la pression, puis reprend son aspect au relâchement.
- Une seule variable ajoutée, `--shadow-offset: 3px`, partagée par les deux décalages de `--shadow-raised` et la translation du bouton. Couleurs, géométrie des cartes et classes existantes conservées ; aucun nouvel écouteur JavaScript, temporisation ou règle de transition. La transformation visuelle ne réorganise pas les éléments voisins.
- Liens `.button` toujours sans soulignement grâce à la déclaration commune existante `text-decoration: none`. Focus clavier conservé, contrôles désactivés exclus de l’effet. Liens ordinaires du header/footer inchangés.
- Personnalisation des cases à cocher réservée à l’étape suivante : leur apparence native n’est pas modifiée dans cette passe.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Références de variables, différence et espaces Git contrôlés ; pression/relâchement, focus clavier et petits écrans à confirmer dans le navigateur par Steve. Aucun HTML ni travail PHP/JavaScript parallèle modifié ; commit laissé à Steve.

### 28/10/2026 — Retour à la connexion présenté en bouton

- Steve confirme les tests du nouvel effet de pression des boutons avant cette étape ; aucun essai navigateur supplémentaire effectué par l’IA.
- À sa demande, remplacement du paragraphe contenant le lien de connexion dans `createprofile.html` par un lien portant les classes existantes `button button--secondary`, avec le libellé « Déjà un compte ? Connecte-toi » et la destination `login.html` conservée. Il reste sémantiquement un lien de navigation.
- Apparence, focus, absence de soulignement et effet de pression réutilisés sans nouvelle déclaration CSS ni JavaScript. Disposition en colonne du formulaire conservée. Personnalisation et interaction visuelle des choix de listes à traiter à l’étape suivante.
- HTML et présente entrée générés et écrits par l’IA à la demande de Steve. Destination locale et espaces Git vérifiés ; rendu du lien à confirmer par Steve. Aucun travail PHP parallèle modifié ; commit laissé à Steve.

### 28/10/2026 — États visuels des mini-cartes de sélection

- Après le commit des boutons par Steve, personnalisation CSS des choix intérêts/besoins à sa demande : `accent-color` des cases natives reliée au texte sombre pour remplacer l’accent bleu par défaut ; aucune reconstruction du contrôle ni masquage de la case.
- Une mini-carte cochée prend le fond vert `--color-action`, en conservant son texte sombre, le contour intérieur et l’ombre partagée. Carte non cochée toujours jaune. Les sélections effectuées par les boutons de groupe utilisent aussi ce rendu puisque le CSS lit l’état natif `:checked`.
- Sélecteur `.tag-options label:has(input:enabled):active` ajouté à la règle de pression existante des boutons : translation selon `--shadow-offset` et retrait temporaire de l’ombre. Sa spécificité permet de conserver l’effet pressé même sur une carte déjà cochée. Aucune transition ou animation JavaScript ajoutée ; focus clavier existant conservé. Le rendu exact de la coche native reste dépendant du navigateur.
- Aucun ajout de classe ou variable ; seules une règle d’accent natif, une déclaration de fond sélectionné et l’extension du sélecteur de pression sont nécessaires. HTML, logique de sélection/compteurs, JavaScript et PHP inchangés.
- CSS et présente entrée générés et écrits par l’IA à la demande de Steve. Variables, accolades, différence et espaces Git contrôlés ; clic sur case/texte, décochage, sélection groupée, Tab/Espace et état pressé à vérifier dans le navigateur par Steve. Commit laissé à Steve.

### 28/10/2026 — Sélection groupée : défilement et retour tactile

- Steve signale un retour en haut du groupe et un effet pressé peu visible après alternance des actions en émulation mobile Chrome ; comportement desktop correct selon ses essais. La couleur bleu clair apparaît au tap sur mobile.
- Cause du déplacement identifiée dans `setSelection` : focus explicite sur la première case. Ajout de `{ preventScroll: true }` à cet appel pour conserver le focus existant sans demander son défilement dans le viewport. Référence : [MDN — focus et preventScroll](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
- Ajout d’une seule déclaration `-webkit-tap-highlight-color: transparent` dans `.button` pour retirer la surbrillance tactile native susceptible de masquer le retour visuel personnalisé. Extension navigateur ciblée, sans remplacement du focus clavier ni nouvel écouteur tactile ; source : [MDN — tap highlight](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/-webkit-tap-highlight-color). La sélection se produit toujours au clic et le bouton concerné devient désactivé lorsque son action n’est plus applicable ; l’état `:active` reste limité à la pression.
- Correction JS minimale, CSS et présente entrée rédigés par l’IA. Syntaxe et trois cycles sélectionner/désélectionner simulés avec états des boutons et option preventScroll contrôlés ; espaces Git vérifiés. Défilement réel et effet pressé répété restent à confirmer par Steve dans Chrome mobile émulé. Aucune affirmation de reproduction ou de résolution complète de l’affichage mobile par l’IA ; aucun HTML/PHP modifié, commit laissé à Steve.

### 28/10/2026 — Préparation des icônes SVG de navigation

- À la demande de Steve, création de `assets/images/icons/navigation.svg` : sprite local contenant cinq symboles originaux en tracés vectoriels (Accueil, FAQ, Démarches, Menu, Profil), chacun avec un viewBox commun `0 0 24 24`, traits arrondis et dessin contenu dans la grille.
- Symboles conçus pour une référence `svg` / `use` : couleur héritée par `currentColor`, épaisseur héritée du SVG qui les utilise, dimensions contrôlables par CSS. Aucun bitmap, fonte, script, bibliothèque ou générateur d’image ajouté. Un affichage de 24px est distinct de la cible interactive, qui devra rester suffisamment grande.
- Préparation de l’asset seulement : aucun footer, HTML de page, CSS, JavaScript ou PHP modifié. Intégration prévue progressivement, en commençant par Accueil et Profil après consultation. Libellés accessibles à fournir par les liens/contrôles lors de cette étape.
- Aperçu autonome de deux couleurs/épaisseurs généré hors dépôt pour consultation. XML, cinq identifiants uniques et viewBoxes contrôlés ; aucun essai navigateur effectué par l’IA. Asset et présente entrée rédigés par l’IA, commit laissé à Steve.

### 28/10/2026 — Style et couleur communs des icônes

- Après validation de l’aperçu par Steve, sprite conservé dans `assets/images/icons/navigation.svg` et ajout d’une classe CSS réutilisable `.icon` : dimensions 1.5rem, absence de rétrécissement en Flexbox, épaisseur 1.8 et couleur issue de la nouvelle variable unique `--color-icon`.
- Variable reliée par défaut à `--color-text` ; les tracés du sprite consomment cette couleur via `currentColor`. Couleur des cinq icônes modifiable à un seul endroit ; taille et épaisseur dans une seule règle partagée, sans classes par dessin.
- CSS et présente entrée rédigés par l’IA à la demande de Steve. Asset préparé et styles définis, sans intégration ni modification du footer, du HTML des pages, du JavaScript ou du PHP. Références de variables et espaces Git vérifiés ; commit laissé à Steve.

### 28/10/2026 — Première icône intégrée : Accueil

- À la demande de Steve de poursuivre progressivement, ajout du seul symbole `#home` au lien Accueil du fragment footer et de ses copies de secours sur les deux flux et le profil. Texte « Accueil » et destination `index.html` conservés ; SVG décoratif avec `aria-hidden` et `focusable="false"`, dimensions 24 × 24 et classe `.icon`.
- Une seule déclaration CSS ajoutée au lien de footer : gap d’une demi-unité pour séparer icône et texte. Couleur/épaisseur déjà gérées par le style partagé. Autres icônes, footer public, JavaScript et PHP inchangés.
- HTML/CSS et présente entrée rédigés par l’IA. Symbole, imbrication, présence dans le lien et concordance fragment/fallbacks vérifiés ; espaces Git contrôlés. Test via Live Server sur un flux ou le profil à effectuer par Steve : dessin, couleur, clic vers l’accueil et focus clavier. Aucun test navigateur effectué par l’IA ; commit laissé à Steve.

### 28/10/2026 — Deuxième icône intégrée : Mon profil

- Steve confirme le bon affichage de l’icône Accueil, avec texte conservé à côté. À sa demande, ajout du symbole `#profile` au lien Mon profil du fragment footer et des mêmes copies de secours sur les deux flux et le profil.
- Classe `.icon`, dimensions 24 × 24, SVG décoratif et espacement déjà définis réutilisés ; libellé visible et destination `profil.html` conservés. Aucune nouvelle règle CSS, classe ou logique JavaScript ; autres icônes et travail PHP inchangés.
- HTML et présente entrée rédigés par l’IA. Symbole, destination, unicité de l’utilisation et concordance fragment/fallbacks contrôlés ; espaces Git vérifiés. Rendu, couleur, clic et focus du lien Mon profil à confirmer par Steve dans le navigateur. Aucun test navigateur effectué par l’IA ; commit laissé à Steve.

### 28/10/2026 — Accueil sans texte visible avant checkpoint

- Steve confirme le fonctionnement de l’icône Mon profil. À sa demande, retrait du seul texte visible Accueil dans le fragment et les trois copies de secours ; ajout d’`aria-label="Accueil"` au lien pour conserver un nom accessible. SVG toujours décoratif ; destination inchangée. Texte Mon profil conservé.
- Ajout de `min-width: 2.75rem` à la règle existante des liens footer pour que le lien Accueil réduit à une icône garde une cible large, en complément de sa hauteur minimale existante. Aucune nouvelle classe/variable ou logique JavaScript.
- Checkpoint prévu avec les deux icônes avant tout élargissement aux autres pages. Footers publics inchangés ; accès selon connexion/rôle à définir et faire respecter côté PHP, sans afficher par anticipation le profil sur les formulaires publics.
- HTML/CSS et présente entrée rédigés par l’IA. Nommage accessible, concordance fragment/fallbacks et espaces Git vérifiés ; rendu final sans texte à confirmer par Steve. Aucun travail PHP modifié ; commit laissé à Steve.
