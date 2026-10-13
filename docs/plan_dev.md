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

---

## 5. Structure actuelle du dépôt

Au 13/10/2026, la structure de travail est la suivante :

```text
/
├── docs/
│   ├── wireframes/
│   │   └── WIREFRAME_V1.pdf
│   ├── dev_log.md
│   ├── documentation_technique.md
│   ├── apprentissage/
│   │   ├── javascript_header.md
│   │   └── 2026-10-13.md
│   └── plan_dev.md
├── frontend/
│   └── public/
│       ├── assets/
│       │   ├── css/
│       │   │   └── style.css
│       │   ├── images/
│       │   │   └── .gitkeep
│       │   └── js/
│       │       └── main.js
│       ├── includes/
│       │   ├── header.html
│       │   └── footer.html
│       ├── createprofile.html
│       ├── fluxetudiant.html
│       ├── fluxparrain.html
│       ├── index.html
│       ├── login.html
│       ├── profil.html
│       └── profileconfiguration.html
├── .gitignore
└── README.md
```

`frontend/public/` est destiné à servir de racine publique pour le frontend statique. Les pages HTML y sont placées directement ; les fichiers CSS, JavaScript et les images sont regroupés dans `assets/`.

Le dossier `includes/` contient les fragments HTML partagés. La fonction `loadPartial(containerId, filePath)` dans `assets/js/main.js` les charge avec `fetch`, puis remplace le contenu de secours du conteneur ciblé. Le flux parrain utilise les deux fragments ; la page de connexion utilise l’en-tête partagé et conserve un pied de page public local sans identifiant `site-footer`. Les autres pages n’intègrent pas encore ces conteneurs. Un serveur HTTP local est nécessaire pour tester ce mécanisme.

La branche `dev` contient également les prototypes d’Alexandre et Ange dans `prototypes/`.

Les dossiers PHP, SQL et de configuration seront ajoutés lorsqu’ils deviendront nécessaires.

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

### Notes pédagogiques

`docs/apprentissage/javascript_header.md` explique les versions initiale et actuelle du chargeur de fragments. Les fichiers `docs/apprentissage/YYYY-MM-DD.md` conservent une synthèse pédagogique par journée de travail : état atteint, fichiers concernés, interactions, explications du code, vérifications et questions reportées. Ils sont préparés lors du bilan EOD avec Steve, sans génération planifiée automatiquement. Les instantanés de code sont datés ; ils ne remplacent pas les fichiers applicatifs actuels.

Rythme retenu : journal mis à jour à chaque étape ; README et plan actualisés en fin de journée. Le périmètre fonctionnel est modifié uniquement si les décisions produit évoluent.

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

- [x] Scaffold réorganisé dans `frontend/public/`
- [x] Sept pages principales identifiées et fichiers HTML préliminaires créés
- [x] Structure CSS / JavaScript / images créée
- [x] Fragments header/footer créés dans `includes/`
- [x] Chemins relatifs CSS/JavaScript vérifiés
- [x] Première structure HTML du flux parrain et carte illustrative
- [x] Base CSS commune : typographie, variables, carte, tags, boutons et header/footer
- [x] Chargement JavaScript réutilisable des fragments avec contenu de secours
- [x] Structure HTML de connexion et champs étiquetés, soumission désactivée
- [ ] Structure HTML sémantique de chaque page
- [ ] Styles spécifiques du formulaire et choix d’inscription
- [ ] Éléments communs intégrés aux autres pages selon la navigation publique/connectée retenue
- [ ] Navigation complète entre les pages
- [ ] Responsive vérifié sur toutes les pages
- [ ] Interactions métier JavaScript de base selon les besoins
- [ ] Vérifications navigateur complètes, clavier et cas d’échec du chargement

Structure actuelle : voir la section 5, « Structure actuelle du dépôt ».

**État actuel au 13/10/2026 :** le flux parrain dispose d’une première présentation responsive avec données illustratives et actions désactivées. La connexion possède ses champs HTML mais pas encore de styles spécifiques ni les deux choix d’inscription du wireframe. Cinq autres pages restent des placeholders. Les tests visuels rapportés par Steve ne constituent pas encore une validation exhaustive du responsive ou de l’accessibilité. Aucun code PHP ou SQL n’a été introduit.

**Prochaine étape :** créer les styles réutilisables des champs et du formulaire de connexion, puis ajouter les choix d’inscription étudiant/parrain. Continuer ensuite les autres écrans avec la même méthode expliquée et documentée.

**Décisions reportées :** direction artistique finale, navigation selon connexion/rôle, destinations FAQ/démarches/mentions légales, placement du footer en bas des pages courtes. Le footer reste dans le flux normal. L’absence de lien vers un profil sur la connexion est une décision d’interface, pas un contrôle d’accès : les protections réelles seront implémentées côté PHP.

### Phase 2 — Intégration UX/UI depuis Figma
Commencée partiellement en parallèle de la phase 1 : première intégration depuis le wireframe V1 sur le flux parrain et la connexion. Direction artistique provisoire ; autres écrans et détails du wireframe à compléter. Les actualités restent une réservation visuelle d’une fonctionnalité ultérieure.

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

Structure et état d’avancement actuels : voir la section 5 et la rubrique « État d’avancement actuel » de la section 8.

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


