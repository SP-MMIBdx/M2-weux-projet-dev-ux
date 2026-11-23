# Documentation technique — Binô

## 1. Description synthétique

- **Titre de travail :** Binô (provisoire)
- **Membres du groupe :** Alexandre, Ange, Steve
- **Date de mise à jour du document :** 24/11/2026
- **Adresse :** https://github.com/SP-MMIBdx/M2-weux-projet-dev-ux

### Pitch

Une application de parrainage destinée aux étudiants étrangers arrivant en France, leur permettant de créer un profil et de trouver des étudiants parrains correspondant à leurs besoins, leurs centres d’intérêt et leur parcours afin de faciliter leur intégration sociale, universitaire et quotidienne.

### Rôle du document et références

Ce document décrit le périmètre fonctionnel visé, les scénarios d’utilisation et les lots prévus ; il ne constitue pas un inventaire des fonctionnalités déjà implémentées.

Au 24/11, les huit pages PHP présentent les parcours avec des données fictives. Les interactions JavaScript des formulaires sont implémentées. La création de compte et l’enregistrement de profils restent à réaliser. Le premier chantier serveur porte sur la validation, l’enregistrement et la relecture d’un profil, avant l’édition sur place et les actions AJAX de parrainage.

- [README](../README.md) : présentation du dépôt, état synthétique et lancement local.
- [Plan de développement](plan_dev.md) : méthode de travail, étapes, avancement et décisions à revoir.
- [Journal de développement](dev_log.md) : changements chronologiques, vérifications et rôle de l’IA.
- [Wireframes V1](wireframes/WIREFRAME_V1.pdf) : référence visuelle des écrans à construire.

---

## 2. Scénarios d'utilisation

### Contexte d’usage et personas provisoires

Binô accompagne l’arrivée dans une ville universitaire et la recherche d’aide au quotidien, depuis un navigateur sur téléphone ou ordinateur. Les deux personnages ci-dessous représentent les rôles principaux à partir des scénarios du projet. Ils restent des hypothèses de conception à confronter aux utilisateurs.

| Persona | Situation | Objectif et besoins |
| --- | --- | --- |
| Lucia, 19 ans | Étudiante colombienne en L1 à Poitiers, nouvellement arrivée | Trouver un parrain dans sa ville, rencontrer des étudiants et obtenir de l’aide pour les démarches et les études. Consulter les profils et choisir à qui envoyer une demande. |
| Vincent, 23 ans | Étudiant étranger en M1, déjà installé dans la ville | Proposer son aide selon ses centres d’intérêt et ses domaines de compétence. Examiner les demandes reçues et choisir celles qu’il accepte. |

### Scénario 1 — Lucia cherche un parrain

*Étudiante étrangère colombienne de 19 ans en L1 à Poitiers.*

Lucia arrive en France  
↓  
Crée son compte  
↓  
Choisit « Étudiant étranger »  
↓  
Vérifie son adresse e-mail<br>
↓<br>
Complète son profil  
↓  
Sélectionne ses centres d'intérêt et ses besoins  
↓  
L'application lui propose plusieurs parrains  
↓  
Elle consulte les profils  
↓  
Elle sélectionne Vincent  
↓  
Elle envoie une demande de parrainage  
↓  
Vincent reçoit la demande  
↓  
Vincent accepte  
↓  
Les moyens de communication sont débloqués

### Scénario 2 — Vincent devient parrain

*Étudiant étranger de 23 ans en M1.*

Vincent crée son compte  
↓  
Choisit « Parrain »  
↓  
Vérifie son adresse e-mail<br>
↓<br>
Complète son profil  
↓  
Indique ses centres d'intérêt et les domaines dans lesquels il souhaite aider  
↓  
Son profil devient disponible après validation de son rôle, une fois les champs requis renseignés<br>
↓  
Lucia lui envoie une demande  
↓  
Vincent consulte la demande  
↓  
Il accepte  
↓  
La mise en relation est établie

---

## 3. Fonctionnalités principales

### 3.1 Créer son profil

**Décisions de Steve du 24/11/2026 — à implémenter.** Un identifiant de connexion correspond à un compte, un profil et un rôle courant. L'inscription crée une ligne dans `users` ; la configuration complète cette même ligne. Aucun compte ne contrôle plusieurs profils. Les catalogues de langues, intérêts et accompagnement et leurs liaisons multiples sont rattachés à `users.id`, comme les jetons de vérification. Les types et noms techniques seront précisés dans le dictionnaire de données.

**Inscription et accès.** L'inscription demande uniquement rôle, nom d'utilisateur, e-mail et mot de passe, avec confirmations côté formulaire. PHP convertit les lettres ASCII du nom d'utilisateur en minuscules avant contrôle d'unicité et sauvegarde. L'e-mail d'inscription est unique et privé. Avant sa vérification, seuls vérification/renvoi et déconnexion sont accessibles dans l'espace de compte ; la configuration du profil attend. Les confirmations ne sont pas stockées et seul un hash du mot de passe est conservé.

| Champ ou sélection | Règle cible |
| --- | --- |
| Nom d'utilisateur | Unique, obligatoire à l'inscription ; 24 caractères maximum, lettres ASCII, chiffres, `_` et `-`, sans espace. |
| Nom affiché | Distinct du nom de connexion ; obligatoire pour un profil complet, 1 à 60 caractères après suppression des espaces de début/fin. Espaces et accents autorisés. |
| Ville universitaire | Une seule ville, celle de l'université ; obligatoire pour un profil complet. Catalogue initial : Poitiers, Bordeaux, Paris. |
| Parcours d'études | Obligatoire pour un profil complet ; texte libre, 150 caractères maximum. Pas de champs établissement/diplôme séparés dans le premier incrément. |
| Langues | Au moins une pour un profil complet, dans un catalogue, sans niveau. Liste initiale à proposer avant insertion des données de référence. |
| Accompagnement | Au moins une catégorie pour un profil complet : besoins pour l'étudiant, aide proposée pour le parrain. Catalogue commun ci-dessous. |
| Pays d'origine | Facultatif. |
| Description | Facultative, 500 points de code Unicode maximum. Compteur et limite navigateur actuels en unités UTF-16 : alignement avec PHP à réaliser. |
| Intérêts | Facultatifs, plusieurs choix dans le catalogue ci-dessous. |
| E-mail de contact | Distinct de l'e-mail d'inscription ; facultatif à la configuration mais obligatoire avant envoi ou acceptation d'une demande. Partagé pendant le parrainage actif seulement. |
| Photo | Avatar par défaut au premier incrément ; upload facultatif reporté. |

**Catalogues évolutifs.** Six intérêts : sport, jeux vidéo, sorties, culture, musique et études. Sept catégories communes d'accompagnement : vie sociale et rencontres ; études et fonctionnement de l'université ; démarches administratives ; transports ; sorties et activités culturelles ; bons plans étudiants ; aides disponibles pour les étudiants. Ajouts et renommages possibles sans modification de structure ; préserver les sélections existantes lors d'une évolution et traiter explicitement le retrait d'une valeur utilisée.

**Complétude et visibilité.** Les champs de profil non remplis peuvent rester `NULL` et les sélections vides après inscription. Un profil incomplet reste hors matching. Les profils complets et éligibles sont consultables uniquement par des utilisateurs connectés dont l'e-mail est vérifié, dans les parcours de parrainage autorisés ; aucun annuaire public. Le parrain peut masquer son profil. Les coordonnées suivent la section 3.4.

**Validation du parrain.** Après vérification de son e-mail, un parrain en attente peut compléter/modifier son profil mais ne figure pas dans les propositions et ne reçoit aucune demande. Steve valide manuellement les parrains au début, avec une procédure documentée à préparer. Critères de preuve encore ouverts. Des outils pourront assister ces contrôles après définition des critères ; aucune approbation algorithmique décidée. Les disponibilités détaillées restent une évolution.

**Changement de rôle.** Le passage étudiant vers parrain nécessite validation, aucun parrainage actif et aucune demande en attente. PHP bloque le changement tant que ces éléments ne sont pas clos. Le compte, son ID et son profil sont conservés ; les anciens besoins ne deviennent pas automatiquement des offres d'aide. Message prévu : « Pour devenir parrain, tu dois d'abord mettre fin à tes parrainages en cours et retirer tes demandes en attente. Tu pourras ensuite demander le changement de rôle. Ton compte et ton profil seront conservés. » Le détail de la procédure de validation reste ouvert.

**Édition sur place (prévue).** Modifier, enregistrer ou annuler depuis son propre profil, sur la même page, après l'enregistrement et la relecture d'un premier profil par PHP.

### 3.2 Trouver un parrain adapté

L'étudiant consulte une sélection de parrains correspondant à son profil.

Les propositions sont limitées aux parrains éligibles de la même ville universitaire, avec au moins une langue commune. Ces deux critères restent obligatoires même avec peu de résultats. Le classement tient compte des besoins et de l'aide proposée, des intérêts et des langues ; pondération à préciser dans l'incrément de matching.

### 3.3 Demande de mise en relation

L'étudiant peut sélectionner un ou plusieurs profils de parrains et envoyer une demande de parrainage.

Une seule demande peut être en attente pour un même duo. L’étudiant peut retirer une demande en attente et en envoyer une nouvelle après retrait. Un refus empêche une nouvelle demande au même parrain dans le MVP.

Le questionnaire fixe un maximum de trois parrains actifs par étudiant. Il retient aussi un plafond de trois demandes côté étudiant et de cinq côté parrain. Le périmètre exact de ces deux plafonds et le traitement des demandes lorsque la capacité est atteinte restent à confirmer.

**Retour prévu :** après confirmation de l’envoi par le serveur, la carte du parrain affiche « Ta demande est en attente » sans rechargement de la page, en conservant les informations du profil déjà visibles.

Le parrain ne peut pas contacter directement les étudiants.

Tant que la demande n'est pas acceptée, les informations de contact personnelles restent masquées.

### 3.4 Accepter ou refuser une demande

Le parrain dispose d'un espace lui permettant de consulter les demandes reçues.

Il peut :

- accepter une demande ;
- refuser une demande ;
- consulter les informations pertinentes du profil avant de prendre sa décision.

Après acceptation, chaque participant peut consulter l'e-mail de contact distinct renseigné par l'autre ; l'e-mail d'inscription reste privé. Cet accès est réservé aux deux participants pendant le parrainage actif. Chacun peut y mettre fin avec un motif facultatif.

**Retour prévu côté parrain :** après confirmation d’une acceptation ou d’un refus par le serveur, la carte concernée affiche le nouvel état sans rechargement. Côté étudiant, une notification d’acceptation avec un lien vers le profil du parrain est envisagée dans le lot 2. Depuis le 23/11, le footer de démonstration contient une cloche « Notifications — à venir », désactivée et sans compteur. Cette entrée prépare un futur panneau contenant les notifications autorisées fournies par PHP et des liens vers les profils ; ni le panneau ni le système de notifications ne sont implémentés. Les règles d’affichage connecté et le rafraîchissement restent à définir.

**Gestion du compte.** La désactivation masque le profil et coupe l’accès aux coordonnées. La suppression définitive retire les informations du compte de la base. Les liens de langues/tags et les jetons de vérification sont supprimés avec le compte. Le sort des futurs enregistrements partagés, notamment demandes et signalements, sera précisé dans leurs incréments. Les comptes étudiants et parrains peuvent faire l’objet d’un signalement. Le parcours de signalement et sa priorité de livraison restent à définir.

### 3.5 Faciliter l'intégration au-delà du parrainage

L'accompagnement peut concerner différents aspects de la vie en France, notamment :

- la vie sociale et les rencontres ;
- les études et le fonctionnement de l'université ;
- les démarches administratives ;
- les transports ;
- les sorties et activités culturelles ;
- les bons plans étudiants ;
- les aides disponibles pour les étudiants.

### 3.6 Favoriser les rencontres et la vie sociale

L'application vise notamment à aider l'étudiant étranger à sortir de l'isolement et à créer des relations.

Les profils et les centres d'intérêt permettent de favoriser les mises en relation autour d'activités communes, par exemple :

- sport ;
- jeux vidéo ;
- sorties ;
- culture ;
- musique ;
- études ;
- autres centres d'intérêt.

---

## 4. Définition des lots

### Lot 1 — MVP

- Création de compte, vérification de l’adresse e-mail et connexion
- Choix du rôle étudiant ou parrain et validation manuelle initiale par Steve, selon des critères à définir
- Création et modification du profil
- Avatar par défaut au premier incrément ; upload facultatif ultérieur
- Ajout d'une description
- Informations personnelles pertinentes : formation, établissement, parcours, langues, etc.
- Sélection de tags pour les centres d’intérêt et les besoins ou domaines d’aide selon le rôle
- Consultation des profils de parrains proposés
- Système de mise en relation basé sur les informations et tags des profils
- Possibilité pour l'étudiant étranger de sélectionner un ou plusieurs parrains
- Envoi d'une demande de parrainage
- Réception et gestion des demandes côté parrain
- Acceptation ou refus d’une demande, retrait d’une demande en attente et fin d’un parrainage actif
- Partage des adresses de contact choisies pendant un parrainage actif

### Lot 2 — Fonctionnalités complémentaires

- Notifications concernant les demandes et les mises en relation
- Amélioration du système de recommandation et de compatibilité
- Possibilité de préciser davantage les besoins et disponibilités
- Ressources et informations utiles pour les étudiants étrangers
- Flux d'actualité ou d'événements étudiants provenant de l'université, d'associations ou d'autres sources
- Mise en avant d'événements, sorties et activités permettant de favoriser les rencontres
- Recherche ou filtres complémentaires pour les profils

### Lot 3 — Administration et évolutions avancées

- Messagerie basique non instantanée entre étudiant et parrain après acceptation de la mise en relation
- Création d'un rôle administrateur
- Gestion des utilisateurs et des profils
- Gestion et modération des contenus
- Gestion du flux d'actualité
- Gestion des événements et ressources proposés dans l'application
- Système de vérification du statut étudiant
- Outils d’administration pour la vérification du statut des parrains
- Traitement des signalements et modération des utilisateurs
- Gestion des demandes ou problèmes liés aux mises en relation
- Tableau de bord administrateur pour suivre l'activité de l'application

---

## 5. Maquette fonctionnelle

Les maquettes fonctionnelles de l'application sont fournies dans les [wireframes V1](wireframes/WIREFRAME_V1.pdf).

Elles présentent notamment :

- la connexion et la création de compte ;
- la création du profil étudiant ou parrain ;
- le flux de propositions de parrains ;
- le flux des demandes de parrainage.

## 6. Version consultable et codes sources

- **Version sur Azraël :** adresse à renseigner après déploiement et vérification. La publication de la première version reste à effectuer.
- **Sources actuelles :** [dépôt GitHub](https://github.com/SP-MMIBdx/M2-weux-projet-dev-ux). La version PHP de `main` est intégrée à `dev` depuis la fusion du 19/11/2026 (PR #6).
- **Checkpoint statique :** [version HTML du 29/10/2026](https://github.com/SP-MMIBdx/M2-weux-projet-dev-ux/tree/c453c1c). Dans cette version, `fetch()` chargeait les fragments HTML d’en-tête et de pied de page. Dans les huit pages actuelles, PHP réalise ces inclusions côté serveur et présélectionne le rôle demandé à l’inscription. Le serveur transmet ensuite le HTML au navigateur, qui exécute les interactions JavaScript.

## 7. Programmation côté client

### Choix et bibliothèque utilisée

Les interactions utilisent JavaScript natif en syntaxe ES2017. `main.js` est chargé uniquement sur la connexion, l’inscription, la configuration du profil et la FAQ. Les animations et états visuels sont définis en CSS.

L’inscription utilise **zxcvbn-ts** pour estimer localement la force du mot de passe et afficher un score de 0 à 4 avec un conseil en français. Les fichiers distribués sont le cœur `@zxcvbn-ts/core` **4.2.0**, les données communes `@zxcvbn-ts/language-common` **4.1.3** et les traductions de `@zxcvbn-ts/language-fr` **4.1.2**. Le dictionnaire français complet est omis pour limiter le poids. La confirmation des deux saisies reste indépendante de cette estimation. L’intégration est décrite dans la [notice locale de la bibliothèque](../frontend/public/assets/js/vendor/zxcvbn-ts/README.md).

Les scripts de la bibliothèque sont servis localement. Le module applicatif `password-strength.mjs` importe les traductions et calcule l’estimation dans le navigateur. Aucun mot de passe n’est envoyé à un service d’estimation. La validation et le stockage du futur compte restent à construire côté serveur.

### Événements écoutés et comportements implémentés

| Événement | Contrôles concernés | Comportement |
| --- | --- | --- |
| `click` | Trois boutons de révélation des mots de passe | Basculer le champ entre `password` et `text` et actualiser le libellé fourni par le gabarit. |
| `input` | Identifiant de connexion ou d’inscription | Afficher le retour associé aux contraintes natives de format et de longueur. |
| `input` | E-mail, mot de passe et champs de confirmation | Comparer les deux valeurs et afficher leur correspondance. |
| `input` | Mot de passe d’inscription | Actualiser le score et le conseil zxcvbn-ts. |
| `input` | Description du profil et message de contact | Actualiser le compteur lié à la limite native de 500 unités UTF-16. |
| `change` | Groupes de cases intérêts et besoins | Actualiser le nombre de choix et l’état des boutons du groupe. |
| `click` | Tout sélectionner / Tout désélectionner | Modifier les cases du groupe et actualiser le compteur en conservant le focus sans demander de défilement. |

Les formulaires restent désactivés à la soumission. Les données affichées sont fictives. Les essais ciblés de ces interactions sont consignés dans le [journal](dev_log.md), notamment à la clôture de la passe du 12/11. La revue HTML/CSS a laissé des vérifications de lecteur d’écran et de rendu ouvertes.

### Actions JavaScript à reprendre après la création réelle des profils

| Fonctionnalité prévue | Prérequis et résultat attendu |
| --- | --- |
| Édition sur place du profil | Réutiliser les champs de création et les valeurs enregistrées. PHP contrôle le propriétaire et valide la sauvegarde. Annuler restaure les dernières valeurs enregistrées et un échec conserve le brouillon. |
| Envoi AJAX d’une demande | Définir la route PHP et les formats de requête/réponse. Après confirmation de l’enregistrement, afficher « Ta demande est en attente » dans la carte concernée en conservant les informations du parrain. |
| Acceptation ou refus en AJAX | PHP autorise et enregistre la décision. JavaScript actualise uniquement la carte concernée sans rechargement. |
| Notification d’acceptation, lot 2 | Entrée à cloche désactivée déjà présente dans le footer de démonstration. Prévoir le panneau, les données autorisées fournies par PHP et un lien vers le profil du parrain ; affichage connecté et rafraîchissement à définir. |

Les requêtes AJAX métier ne sont pas encore implémentées dans la version PHP actuelle. Elles utiliseront `fetch()` avec `async` et `await`, avec une commande désactivée pendant l’envoi, un retour accessible en cas d’erreur et conservation du dernier état confirmé. Le contrôle des rôles, des limites et des transitions reste côté PHP.
