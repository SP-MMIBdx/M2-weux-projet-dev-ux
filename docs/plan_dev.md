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

```mermaid
flowchart TD
    N0["Navigateur"]
    N1["HTML / CSS / JavaScript"]
    N2["PHP"]
    N3["SQL"]
    N4["MySQL / MariaDB"]
    N0 --> N1
    N1 --> N2
    N2 --> N3
    N3 --> N4
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

Au 14/10/2026, la structure de travail est la suivante :

```text
/
├── docs/
│   ├── wireframes/
│   │   └── WIREFRAME_V1.pdf
│   ├── dev_log.md
│   ├── documentation_technique.md
│   └── plan_dev.md
├── frontend/
│   └── public/
│       ├── assets/
│       │   ├── css/
│       │   │   └── style.css
│       │   ├── images/
│       │   │   ├── .gitkeep
│       │   │   └── avatar-default.svg
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

Le dossier `includes/` contient les fragments HTML partagés. La fonction `loadPartial(containerId, filePath)` dans `assets/js/main.js` les charge avec `fetch`, puis remplace le contenu de secours du conteneur ciblé. Le flux parrain utilise les deux fragments ; les pages de connexion, création de compte et configuration du profil utilisent l’en-tête partagé et conservent chacune un pied de page public local sans identifiant `site-footer`. Accueil, flux étudiant et profil restent des placeholders. Un serveur HTTP local est nécessaire pour tester ce mécanisme.

### Dépendances du frontend statique

```mermaid
flowchart TD
    Pages["Flux parrain et trois formulaires"] --> CSS["style.css"]
    Pages --> JS["main.js : loadPartial"]
    JS --> Header["header.html"]
    JS --> Footer["footer.html : flux parrain seulement"]
```

Les fichiers CSS et JavaScript se trouvent dans `assets/css/` et `assets/js/`, et les fragments dans `includes/`. Les trois formulaires utilisent également `assets/images/avatar-default.svg`. Leurs footers publics restent dans chaque page HTML. Ce schéma décrit les fichiers utilisés, pas un parcours utilisateur ni une gestion de session ; PHP n’est pas encore intégré.

La branche `dev` contient également les prototypes d’Alexandre et Ange dans `prototypes/`.

Les dossiers PHP, SQL et de configuration seront ajoutés lorsqu’ils deviendront nécessaires.

---

# 6. Méthodologie de travail

Le projet suivra une méthodologie progressive.

Chaque phase devra idéalement respecter le cycle suivant :

```mermaid
flowchart TD
    N0["Objectif"]
    N1["Explication du fonctionnement"]
    N2["Création des fichiers nécessaires"]
    N3["Développement"]
    N4["Tests"]
    N5["Correction"]
    N6["Documentation"]
    N7["Commit Git"]
    N0 --> N1
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
```

Chaque étape importante sera documentée.

Les schémas de processus utilisent des blocs Mermaid ; les arborescences restent en texte. Référence : [syntaxe des flowcharts Mermaid](https://mermaid.js.org/syntax/flowchart.html).
### Travail accompagné par l’IA et critères de validation

Référence pédagogique : Yannis Delmas, *Méthode de développement d’applications*, septembre 2026, fournie par Steve. Les pratiques suivantes traduisent ses principes pour ce projet ; elles ne constituent pas une attestation de conformité ni une validation par l’enseignant.

- Avant une modification, relire le code concerné, expliquer son fonctionnement, puis définir un objectif limité et des critères observables à partir du wireframe et des scénarios.
- Conserver le rôle de formateur de l’IA : proposer de petites étapes, expliquer les choix et les compromis, puis laisser Steve mettre en œuvre le code applicatif sauf demande explicite contraire. Une note à relire ne remplace pas la compréhension ; revenir sur les mécanismes incertains avant de les étendre.
- Garder la stack simple, la mise en page mobile-first et le HTML sémantique. Utiliser les principes WCAG/RGAA comme références de vérification, sans déclarer une conformité à partir de quelques attributs ARIA.
- Après chaque étape, distinguer relecture du code, contrôles automatiques et essais navigateur. Indiquer ce qui a été vérifié, par qui, et ce qui reste à tester. L’accord de l’IA n’est pas une recette fonctionnelle ou utilisateur.
- Ne pas inclure de secrets ni de données personnelles réelles dans les exemples, échanges ou documents partagés. Les responsabilités, choix et validations restent humains ; les contributions IA sont déclarées.

Pour chaque page ou comportement, préparer une courte liste de critères : contenu attendu, actions et destinations, état de maquette ou fonctionnel, petites/grandes largeurs, navigation clavier et labels, états d’erreur pertinents. Les critères non vérifiés restent ouverts. Une revue avec l’équipe et des utilisateurs représentatifs complétera les contrôles de développement.

Le travail initial directement sur `main` diffère de la recommandation avancée GitHub Flow du support (issue → branche dédiée → pull request → revue → fusion). Le workflow d’équipe sera réexaminé avant les prochaines intégrations communes ; aucune migration de branches n’est réalisée par cette décision documentaire.

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

### Supports pédagogiques personnels (hors dépôt)

Les explications approfondies sur les points ayant nécessité des clarifications et une synthèse quotidienne d’apprentissage continuent d’être préparées avec Steve. Ces supports Markdown sont remis séparément pour conservation personnelle hors dépôt, sans génération planifiée automatiquement. Aucun dossier local personnel n’est imposé ni référencé dans la documentation du projet.

Rythme retenu : journal mis à jour à chaque étape ; README et plan actualisés en fin de journée. Le périmètre fonctionnel est modifié uniquement si les décisions produit évoluent.

Pour limiter les doublons, le dépôt conserve la description du produit dans la documentation technique, l’état et les décisions de travail dans le plan, et l’historique factuel dans le journal. Les explications détaillées restent dans les supports personnels. Les synthèses quotidiennes portent surtout sur le code nouveau ou modifié, ses interactions et les notions à réviser ; elles ne recopient pas toute l’application chaque jour.

L’IA peut préparer et rédiger ces documents à partir des éléments fournis et des fichiers autorisés ; Steve et l’équipe en assurent la relecture, l’exactitude et la validation. La quantité de texte ne constitue pas une preuve de qualité ou de compréhension.

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
- [x] Styles réutilisables des formulaires et choix d’inscription depuis la connexion
- [x] Formulaire statique de création de compte avec champs de confirmation
- [x] Informations personnelles du profil : nom, pays, parcours et description
- [x] Panneaux de formulaire et silhouette décorative partagés
- [ ] Centres d’intérêt et besoins du profil
- [ ] Présélection du rôle depuis les liens et comparaison des confirmations
- [ ] Éléments communs intégrés aux autres pages selon la navigation publique/connectée retenue
- [ ] Navigation complète entre les pages
- [ ] Responsive vérifié sur toutes les pages
- [ ] Interactions métier JavaScript de base selon les besoins
- [ ] Vérifications navigateur complètes, clavier et cas d’échec du chargement

Structure actuelle : voir la section 5, « Structure actuelle du dépôt ».

**État actuel au 14/10/2026 :** le flux parrain dispose d’une première présentation responsive avec données illustratives et actions désactivées. Connexion et création de compte disposent de formulaires stylisés ; la configuration du profil contient les informations personnelles, sans centres d’intérêt ni besoins. Ces trois écrans utilisent des panneaux gris et une silhouette décorative commune. Accueil, flux étudiant et profil restent des placeholders. Les soumissions sont désactivées ; présélection du rôle et comparaison des confirmations restent à implémenter. Les tests visuels rapportés par Steve ne constituent pas encore une validation exhaustive du responsive ou de l’accessibilité. Aucun code PHP ou SQL n’a été introduit.

**Prochaine étape :** compléter les centres d’intérêt et besoins de la configuration du profil, puis poursuivre les écrans manquants avec la même méthode expliquée et documentée.

**Décisions reportées :** direction artistique finale, navigation selon connexion/rôle, destinations FAQ/démarches/mentions légales, placement du footer en bas des pages courtes. Le footer reste dans le flux normal. L’absence de lien vers un profil sur la connexion est une décision d’interface, pas un contrôle d’accès : les protections réelles seront implémentées côté PHP.

### Phase 2 — Intégration UX/UI depuis Figma
Commencée partiellement en parallèle de la phase 1 : première intégration depuis le wireframe V1 sur le flux parrain, la connexion, la création de compte et la configuration du profil. Direction artistique provisoire ; autres écrans et détails du wireframe à compléter. Les actualités restent une réservation visuelle d’une fonctionnalité ultérieure.

### Phase 3+ — PHP / SQL / authentification / données dynamiques
Non commencées.

### Retour enseignant du 14/10/2026 — à revisiter

La synthèse des suggestions de Yannis Delmas est conservée dans `docs/dev_log.md`, à la date du 14/10/2026. Seule la conversion des schémas du plan en Mermaid a été appliquée.

- [ ] Reprendre explicitement cette synthèse avec Steve lors d’une prochaine revue : ARIA et nom de navigation, classes/IDs des boutons, liens présentés en boutons, curseurs et soulignements, variables d’espacement, sélecteurs de pseudo-éléments, inclusions PHP et rôle de JavaScript/AJAX. Aucun de ces ajustements issus du retour enseignant n’a été implémenté ; aucune date de revue fixée. Cette liste reste ouverte jusqu’à discussion et décision pour chaque point.

**Décision de Steve :** conserver pour l’instant le chargement client du header/footer en JavaScript et l’environnement de prévisualisation actuel. Reporter l’introduction de PHP ainsi que les autres ajustements suggérés à une prochaine revue ; aucune migration ni refonte des contrôles engagée.


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

```mermaid
flowchart TD
    N0["PHP"]
    N1["PDO"]
    N2["requête SQL préparée"]
    N3["MySQL"]
    N0 --> N1
    N1 --> N2
    N2 --> N3
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

```mermaid
flowchart TD
    N0["Étudiant"]
    N1["consulte un parrain"]
    N2["envoie une demande"]
    N3["demande en attente"]
    N4["parrain accepte ou refuse"]
    N5["mise en relation"]
    N0 --> N1
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
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

```mermaid
flowchart TD
    N0["Ce que l'on veut faire"]
    N1["Quel langage intervient"]
    N2["Quel fichier intervient"]
    N3["Comment les données circulent"]
    N4["Comment vérifier le résultat"]
    N0 --> N1
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

Par exemple, pour une connexion :

```mermaid
flowchart TD
    N0["Formulaire HTML"]
    N1["requête POST"]
    N2["PHP"]
    N3["requête SQL"]
    N4["base de données"]
    N5["résultat"]
    N6["session PHP"]
    N7["page suivante"]
    N0 --> N1
    N1 --> N2
    N2 --> N3
    N3 --> N4
    N4 --> N5
    N5 --> N6
    N6 --> N7
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

```mermaid
flowchart TD
    N0["Comprendre"]
    N1["Construire"]
    N2["Tester"]
    N3["Documenter"]
    N4["Améliorer"]
    N0 --> N1
    N1 --> N2
    N2 --> N3
    N3 --> N4
```

L'application sera donc construite progressivement, sans chercher à créer dès le départ une architecture complète ou trop abstraite.

Chaque phase doit laisser le projet dans un état compréhensible, testable et documenté avant de passer à la suivante.


