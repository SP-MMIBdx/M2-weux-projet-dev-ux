# Plan de développement — Application de parrainage

## 1. Objectif général

Le projet consiste à développer une application web de parrainage destinée aux étudiants étrangers arrivant en France.

L'application doit permettre de faciliter leur intégration sociale, universitaire et quotidienne grâce à une mise en relation avec des étudiants parrains selon leurs profils, besoins et centres d'intérêt.

Le projet est réalisé dans le cadre du Master 2 Web éditorial et stratégie UX.

---

## 2. Philosophie de développement

Le projet sera développé avec une stack web classique afin de renforcer la compréhension des mécanismes fondamentaux du développement web.

L'objectif n'est pas uniquement d'obtenir une application fonctionnelle, mais également de comprendre comment les différentes couches communiquent entre elles.

La logique générale sera :

```text
Navigateur
    ↓
HTML / CSS / JavaScript
    ↓
PHP
    ↓
SQL
    ↓
MySQL / MariaDB
```

Contrairement aux projets réalisés avec des frameworks modernes, il n'y aura pas de compilation automatique du frontend ni d'ORM pour abstraire les requêtes SQL.

Les différentes étapes seront donc construites progressivement afin de comprendre le rôle de chaque technologie.

---

## 3. Stack technique

### Frontend

- HTML
- CSS
- JavaScript vanilla

### Backend

- PHP

### Base de données

- MySQL ou MariaDB
- SQL écrit explicitement dans le code PHP
- PDO pour la connexion et l'exécution sécurisée des requêtes

### Outils complémentaires

- Git
- GitHub
- Visual Studio Code
- Figma / Figma Dev Mode
- IA comme outil d'assistance au développement, à la documentation et aux tests

### Choix volontairement exclus

Le projet ne reposera pas sur :

- React ;
- Vue ;
- Angular ;
- Laravel ;
- Node.js / Express ;
- Prisma ou autre ORM ;
- frameworks frontend ou backend similaires.

L'objectif est de travailler directement avec les technologies fondamentales du web.

---

## 4. Organisation Git

Deux branches principales sont utilisées :

```text
main
```

Branche stable correspondant aux étapes validées du projet.

```text
dev
```

Branche de développement commune à l'équipe.

Alexandre et Ange travaillent principalement dans leurs dossiers de prototypes :

```text
prototypes/
├── alexandre/
└── ange/
```

Steve prend en charge la structure principale de l'application, l'intégration, le backend et la base de données.

Les prototypes permettent à Alexandre et Ange de travailler sur les interfaces HTML/CSS issues des wireframes sans perturber directement l'application principale.

---

## 5. Structure actuelle du dépôt

La structure de référence sur `main` est actuellement la suivante :

```text
/
├── docs/
│   ├── wireframes/
│   │   └── WIREFRAME_V1.pdf
│   ├── dev_log.md
│   ├── documentation_technique.md
│   └── plan_dev.md
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── images/
│   │   │   └── .gitkeep
│   │   └── js/
│   │       └── main.js
│   ├── createprofile.html
│   ├── fluxetudiant.html
│   ├── fluxparrain.html
│   ├── index.html
│   ├── login.html
│   ├── profil.html
│   └── profileconfiguration.html
├── .gitignore
└── README.md
```

La branche `dev` contient également les prototypes HTML/CSS d'Alexandre et Ange dans `prototypes/`.

La structure applicative sera enrichie progressivement. Les dossiers PHP, SQL ou de configuration ne seront ajoutés que lorsqu'ils deviendront nécessaires.

---

# 6. Méthodologie de travail

Le projet suivra une méthodologie progressive.

Chaque phase devra idéalement respecter le cycle suivant :

```text
Objectif
    ↓
Explication du fonctionnement
    ↓
Création des fichiers nécessaires
    ↓
Développement
    ↓
Tests
    ↓
Correction
    ↓
Documentation
    ↓
Commit Git
```

Chaque étape importante sera documentée.

---

## 7. Documentation du développement

Plusieurs documents seront maintenus.

### Documentation technique

Décrit le produit, les fonctionnalités, les scénarios utilisateurs et le périmètre fonctionnel.

### Plan de développement

Le fichier `docs/plan_dev.md` présente la feuille de route technique, les phases prévues, les choix de stack et l'état d'avancement global.

### Journal de développement

Le fichier :

```text
docs/dev_log.md
```

retrace l'évolution technique du projet.

Pour chaque phase, il pourra contenir :

- l'objectif ;
- les fichiers créés ;
- les technologies utilisées ;
- les commandes exécutées ;
- les concepts appris ;
- les problèmes rencontrés ;
- les solutions retenues ;
- les tests effectués ;
- les décisions techniques ;
- l'état du projet en fin de phase.

### README

Le fichier `README.md` restera plus synthétique.

Il évoluera au fur et à mesure du développement et présentera notamment :

- le rôle du projet ;
- l'équipe ;
- la stack ;
- la structure principale ;
- les instructions de lancement ;
- l'état actuel du développement.

Il ne doit pas remplacer le journal de développement ni la documentation technique.

---

# 8. Phases de développement

## État d'avancement actuel

### Phase 0 — Repository et documentation
- [x] Repository recréé proprement
- [x] Workflow `main` / `dev` établi
- [x] Documentation technique
- [x] Wireframes
- [x] README
- [x] Journal de développement
- [x] Plan de développement

### Phase 1 — Scaffold frontend statique
- [x] Dossier `public/` créé
- [x] Pages principales identifiées
- [x] Structure CSS / JavaScript / images créée
- [x] Fichiers HTML préliminaires créés
- [ ] Structure HTML sémantique de chaque page
- [ ] Styles CSS communs
- [ ] Navigation entre les pages
- [ ] Responsive
- [ ] Interactions JavaScript de base

### Phase 2 — Intégration UX/UI depuis Figma
Non commencée.

### Phase 3+ — PHP / SQL / authentification / données dynamiques
Non commencées.

---

## Phase 0 — Repository et documentation

Objectif : disposer d'une base de travail propre avant le développement.

Contenu :

- création du dépôt ;
- branches `main` et `dev` ;
- documentation technique ;
- wireframes ;
- dossiers de prototypes ;
- README initial ;
- journal de développement.

À cette étape, aucun développement applicatif important n'est encore réalisé.

---

## Phase 1 — Scaffold frontend statique

Objectif : construire la structure initiale de l'application sans PHP ni base de données.

Technologies :

- HTML ;
- CSS ;
- JavaScript.

Travail prévu :

- définir les pages principales ;
- créer les fichiers HTML ;
- créer la feuille de style principale ;
- créer le fichier JavaScript principal ;
- établir la navigation entre les pages ;
- définir les éléments visuels communs ;
- préparer les dossiers d'images et autres ressources.

Structure initiale mise en place :

```text
public/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   └── .gitkeep
│   └── js/
│       └── main.js
├── createprofile.html
├── fluxetudiant.html
├── fluxparrain.html
├── index.html
├── login.html
├── profil.html
└── profileconfiguration.html
```

Cette structure pourra évoluer pendant le projet.

**État actuel :** le scaffold frontend statique a été créé et validé sur `main`, avec les pages principales identifiées, une structure commune pour les assets CSS/JavaScript/images et aucun code PHP ou SQL introduit à ce stade.

---

## Phase 2 — Intégration UX/UI depuis Figma

Objectif : transformer progressivement les wireframes en interfaces web fonctionnelles.

Pour chaque page :

1. analyser l'objectif de la page ;
2. identifier les informations affichées ;
3. définir la structure HTML ;
4. appliquer le CSS ;
5. rendre l'interface responsive ;
6. ajouter les interactions JavaScript nécessaires ;
7. identifier les éléments qui deviendront dynamiques avec PHP.

Les prototypes d'Alexandre et Ange pourront être utilisés comme base ou référence lorsque leur travail est pertinent pour l'application principale.

---

## Phase 3 — Introduction de PHP

Objectif : commencer à rendre les pages dynamiques.

Les pages HTML pourront progressivement être converties :

```text
login.html
```

vers :

```text
login.php
```

Cette phase permettra d'étudier :

- le fonctionnement d'un serveur PHP ;
- l'exécution du PHP côté serveur ;
- la génération de HTML par PHP ;
- les variables ;
- les conditions ;
- les boucles ;
- les inclusions ;
- les formulaires ;
- `GET` et `POST`.

La structure pourra commencer à intégrer des éléments réutilisables :

```text
includes/
├── header.php
├── footer.php
└── navigation.php
```

---

## Phase 4 — Conception de la base de données

Objectif : concevoir la structure relationnelle permettant de stocker les informations de l'application.

Technologies :

- MySQL ou MariaDB ;
- SQL ;
- PHP PDO.

Le modèle de données devra notamment représenter :

- les utilisateurs ;
- les profils ;
- les étudiants étrangers ;
- les parrains ;
- les centres d'intérêt ;
- les besoins ;
- les langues ;
- les demandes de parrainage ;
- les relations entre utilisateurs.

Le modèle sera conçu avant d'implémenter les requêtes applicatives.

---

## Phase 5 — Connexion PHP / SQL

Objectif : apprendre à connecter directement PHP à la base de données.

La connexion sera réalisée avec PDO.

Exemple de logique :

```text
PHP
 ↓
PDO
 ↓
requête SQL préparée
 ↓
MySQL
```

Les requêtes seront écrites explicitement.

Exemples :

```sql
SELECT
INSERT
UPDATE
DELETE
```

L'objectif est de comprendre précisément les opérations que les ORM masquent habituellement.

---

## Phase 6 — Comptes et authentification

Objectif : permettre aux utilisateurs de créer un compte et de se connecter.

Fonctionnalités envisagées :

- inscription ;
- connexion ;
- déconnexion ;
- sessions PHP ;
- stockage sécurisé des mots de passe ;
- vérification des identifiants ;
- contrôle de l'accès à certaines pages.

Cette phase permettra notamment de travailler :

- les formulaires ;
- `$_POST` ;
- les sessions ;
- les cookies si nécessaire ;
- `password_hash()` ;
- `password_verify()` ;
- les requêtes SQL préparées.

---

## Phase 7 — Gestion des profils

Objectif : rendre les profils étudiants et parrains réellement dynamiques.

Fonctionnalités :

- création du profil ;
- modification du profil ;
- consultation du profil ;
- centres d'intérêt ;
- besoins ;
- langues ;
- disponibilités ;
- informations universitaires.

Les pages statiques construites précédemment commenceront alors à afficher des données provenant réellement de la base de données.

---

## Phase 8 — Système de mise en relation

Objectif : proposer des parrains adaptés aux étudiants étrangers.

Le matching restera initialement simple et explicable.

Il pourra s'appuyer sur :

- centres d'intérêt communs ;
- besoins ;
- langues ;
- domaine d'études ;
- disponibilité.

Les résultats seront obtenus grâce à des requêtes SQL et à une logique PHP claire.

Aucune intelligence artificielle ou machine learning n'est nécessaire pour le MVP.

---

## Phase 9 — Demandes de parrainage

Objectif : permettre à un étudiant étranger de demander une mise en relation avec un parrain.

Cycle prévu :

```text
Étudiant
    ↓
consulte un parrain
    ↓
envoie une demande
    ↓
demande en attente
    ↓
parrain accepte ou refuse
    ↓
mise en relation
```

Fonctionnalités envisagées :

- envoi de demande ;
- consultation des demandes ;
- acceptation ;
- refus ;
- affichage du statut ;
- déblocage des informations de contact après acceptation.

---

## Phase 10 — Intégration et tests

Objectif : vérifier que toutes les parties fonctionnent ensemble.

Tests prévus :

- navigation ;
- formulaires ;
- authentification ;
- profils ;
- requêtes SQL ;
- matching ;
- demandes ;
- comportements incorrects ;
- erreurs utilisateur ;
- responsive ;
- cohérence UX.

Cette phase permettra également de corriger les problèmes détectés au fil du développement.

---

## Phase 11 — Finalisation et déploiement

Objectif : préparer une version finale démontrable.

Travail prévu :

- nettoyage du code ;
- finalisation UX/UI ;
- vérification de la sécurité ;
- tests complets ;
- finalisation du README ;
- finalisation de la documentation ;
- préparation du déploiement ;
- préparation de la démonstration.

---

# 9. Méthode d'apprentissage

Le projet sera également utilisé comme exercice d'apprentissage du développement web classique.

Pour chaque nouveau mécanisme important, le développement devra permettre de comprendre :

```text
Ce que l'on veut faire
↓
Quel langage intervient
↓
Quel fichier intervient
↓
Comment les données circulent
↓
Comment vérifier le résultat
```

Par exemple, pour une connexion :

```text
Formulaire HTML
      ↓
requête POST
      ↓
PHP
      ↓
requête SQL
      ↓
base de données
      ↓
résultat
      ↓
session PHP
      ↓
page suivante
```

L'objectif est de ne pas uniquement obtenir du code fonctionnel, mais également de pouvoir expliquer son fonctionnement.

---

# 10. Utilisation de l'intelligence artificielle

L'IA peut être utilisée pour :

- préparer les étapes ;
- expliquer les concepts ;
- proposer du code ;
- corriger des erreurs ;
- analyser les bugs ;
- préparer des tests ;
- générer de la documentation ;
- accélérer les tâches répétitives.

Cependant, pendant les premières implémentations importantes, l'objectif sera de conserver une forte implication manuelle.

Avant d'automatiser des tâches similaires avec des agents, il est préférable d'avoir réalisé et compris au moins une fois les mécanismes fondamentaux tels que :

- une page HTML complète ;
- un formulaire PHP ;
- une connexion PDO ;
- une requête `SELECT` ;
- une requête `INSERT` ;
- une requête `UPDATE` ;
- une authentification avec session ;
- une relation entre plusieurs tables SQL.

Les agents pourront ensuite être utilisés pour accélérer les tâches répétitives tout en conservant une architecture comprise par l'équipe.

---

# 11. Principe général

La priorité du projet est :

```text
Comprendre
    ↓
Construire
    ↓
Tester
    ↓
Documenter
    ↓
Améliorer
```

L'application sera donc construite progressivement, sans chercher à créer dès le départ une architecture complète ou trop abstraite.

Chaque phase doit laisser le projet dans un état compréhensible, testable et documenté avant de passer à la suivante.


