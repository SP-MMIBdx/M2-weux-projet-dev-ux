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
