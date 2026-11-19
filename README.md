# Binô — Projet UX / Développement M2 WEUX

**Binô** est le nom provisoire, en attente de validation du groupe. Application web de parrainage destinée à faciliter l'intégration des étudiants étrangers grâce à une mise en relation avec des étudiants parrains.

## Équipe

- Alexandre
- Ange
- Steve

## Stack

- Actuellement : PHP pour le rendu, HTML/CSS et JavaScript natif pour les interactions. zxcvbn-ts est chargé localement à l’inscription.
- Prévu pour les données : SQL / MySQL via PDO.

## Lancement local

### Choisir la version du projet

Depuis la fusion du 19/11/2026, les deux branches contiennent la version PHP :

| Branche | Version | Lancement |
| --- | --- | --- |
| `main` | Huit pages PHP avec inclusions partagées | Serveur PHP local nécessaire |
| `dev` | Version PHP intégrée depuis `main` | Serveur PHP local nécessaire |

Le checkpoint HTML du 29/10 reste consultable au commit `c453c1c`. Les deux branches utilisent désormais les mêmes commandes de lancement. Le workflow des prochaines intégrations reste à convenir avec le groupe.

### Premier lancement de la version PHP pour un membre du groupe

Prévoir Git et un interpréteur PHP CLI installé. Référence testée sur la machine de Steve : PHP 8.3.14 ; utiliser une version PHP 8.3 maintenue à jour pour rester proche de cet environnement. Aucun MySQL/MariaDB, service Apache, Composer, npm, compte utilisateur ou fichier de configuration privé n’est requis pour le rendu actuel.

Dans un terminal, télécharger la branche PHP dans le dossier de son choix :

```text
git clone --branch main https://github.com/SP-MMIBdx/M2-weux-projet-dev-ux.git bino-php
cd bino-php
php -v
php -S 127.0.0.1:8000 -t frontend/public
```

Les deux dernières commandes fonctionnent dans PowerShell, Terminal macOS et les shells Linux si `php` est dans le PATH. Si la commande est inconnue, PHP doit être installé ou son chemin déclaré ; utiliser sinon le chemin complet de l’exécutable déjà installé. Exemple PowerShell propre à la machine de Steve, à adapter :

Le projet n’a pas besoin d’être placé dans `C:\wamp64\www`. Sur la machine de Steve, les chemins ont trois rôles distincts :

| Chemin | Rôle |
| --- | --- |
| `D:\University\Github\M2-weux-projet-dev-ux\M2-weux-projet-dev-ux` | Racine du dépôt, depuis laquelle lancer le serveur |
| `C:\wamp64\bin\php\php8.3.14\php.exe` | Programme PHP installé par Wampserver ; aucun fichier du projet à y copier |
| `frontend/public` dans le dépôt | Racine HTTP définie par `-t` ; fichiers publics servis au navigateur |

Chaque membre conserve son clone où il le souhaite et utilise son propre exécutable PHP. Le serveur intégré fonctionne indépendamment du DocumentRoot Apache de Wampserver ; ce README ne configure pas Apache.

```powershell
& "C:\wamp64\bin\php\php8.3.14\php.exe" -S 127.0.0.1:8000 -t frontend/public
```

Ouvrir [l’accueil](http://127.0.0.1:8000/), [le flux parrain](http://127.0.0.1:8000/fluxparrain.php) ou [la connexion](http://127.0.0.1:8000/login.php). Garder le terminal ouvert, rafraîchir manuellement et arrêter avec Ctrl+C. Les services WAMP/MySQL ne sont pas nécessaires à cette étape.

`-S` lance le serveur de développement et `-t frontend/public` limite les fichiers servis à la racine publique ; lancer la commande depuis la racine du dépôt. `127.0.0.1` désigne la machine du membre du groupe : chacun ouvre sa propre adresse locale. Si le port 8000 est occupé, utiliser 8001 dans la commande et dans l’adresse du navigateur. Ce serveur reste destiné aux essais locaux.

Vérification simple : accueil avec logo, connexion, inscription depuis les deux choix de rôle et FAQ accessibles ; rôle initial correct et boutons de soumission désactivés. Si du PHP brut s’affiche, que le fichier est téléchargé ou que la page est ouverte depuis `file://`, vérifier que l’adresse utilise bien le serveur PHP. Les pages fictives ne permettent pas encore de créer un compte ou sauvegarder un profil.

Pour récupérer une mise à jour dans une copie existante : vérifier `git status`, puis, si le travail local est sauvegardé et l’arbre propre, `git fetch origin`, `git switch main` et `git pull --ff-only`. En cas de divergence ou de travail local en attente, s’arrêter pour décider de son intégration ; aucune commande de réinitialisation n’est nécessaire au lancement.

### Consulter le checkpoint statique sans toucher à la copie PHP

Une seconde copie est possible dans un autre dossier :

```text
git clone https://github.com/SP-MMIBdx/M2-weux-projet-dev-ux.git bino-static
cd bino-static
git switch --detach c453c1c
php -S 127.0.0.1:8001 -t frontend/public
```

Ouvrir `http://127.0.0.1:8001/index.html`. Cette copie détachée permet de consulter l’ancien checkpoint HTML. PHP y sert les fichiers statiques. Les branches actuelles utilisent des pages PHP.

Le serveur PHP exécute désormais les huit pages. Live Server et les URL `file://` ne permettent pas cette exécution. Le changement de prévisualisation du 28/10, puis la suppression du chargement JavaScript des fragments le 29/10, sont détaillés dans le journal. Aucun changement d’environnement ni build requis.

Le serveur fournit les fichiers ; le navigateur exécute JavaScript. Aucun build ni installation de dépendances applicatives n’est nécessaire. Dans l’émulation mobile des outils de développement, utiliser « Fit to window » pour voir l’intégralité du viewport simulé.

## État du projet

Au 19/11/2026, `main` et `dev` contiennent huit écrans PHP dans `frontend/public/`, avec un en-tête et un pied de page partagés. Les profils et demandes affichés sont fictifs. La création de compte, la connexion et l’enregistrement du profil restent à implémenter. L’adresse publique sur Azraël reste à renseigner dans la documentation technique après déploiement et vérification.

**Prochain chantier.** Définir les champs requis et les tags propres à chaque rôle, puis préparer la validation, l’enregistrement et l’affichage d’un premier profil avec PHP et MySQL. Le [plan de développement](docs/plan_dev.md#priorités-actuelles) indique les prérequis des prochaines interactions JavaScript.

| Écrans | État |
| --- | --- |
| Accueil et FAQ | Présentation, parcours de démonstration, cinq réponses et formulaire de contact désactivé. |
| Connexion et inscription | Champs avec contrôles client, confirmations et révélation des mots de passe. Rôle présélectionné par PHP. |
| Configuration du profil | Nom affiché, pays, parcours, description limitée à 500 unités UTF-16, six intérêts et sept besoins provisoires avec sélection groupée. |
| Profil et deux flux | Profil fictif de Lucia, trois propositions de parrains et une demande illustrative. Actions métier désactivées. |

Le CSS commun est mobile-first, avec palette provisoire, variables et composants réutilisés. Logo et mascottes SVG sont locaux. Les animations respectent la préférence de réduction des mouvements.

`main.js` est chargé sur la connexion, l’inscription, la configuration et la FAQ. L’inscription utilise aussi le [module local de robustesse](frontend/public/assets/js/password-strength.mjs) et zxcvbn-ts. Les événements, versions et tâches JavaScript restantes sont détaillés dans la [documentation technique](docs/documentation_technique.md#7-programmation-côté-client).

## Organisation du frontend

Les pages et assets publics sont dans `frontend/public/`. Les fragments partagés sont dans `backend/includes/`, hors racine HTTP, et inclus via des chemins fixes avec `__DIR__`. Le footer affiche les variantes publique et de démonstration selon la page. La navigation authentifiée sera définie avec les sessions PHP.

L’arborescence est dans le [plan](docs/plan_dev.md#5-structure-actuelle-du-dépôt). Le [journal](docs/dev_log.md) conserve les essais et l’historique de la migration HTML vers PHP.


## Fichiers privés et exclusions Git

Les règles couvrent ces noms/emplacements, sans créer de base ni implémenter de traitement de données :

| Exclu de Git | Usage |
| --- | --- |
| `backend/config/*.local.php` | Configuration personnelle, notamment `database.local.php` et futurs identifiants |
| `.env` et `.env.*` | Éventuels secrets, à tout niveau ; aucun chargement .env implémenté |
| `backend/logs/` | Journaux locaux |
| `backend/sql/private/` | Emplacement réservé aux exports/sauvegardes contenant des données privées |
| `*.sqlite`, `*.sqlite3` | Fichiers de bases locales éventuelles ; SQLite non utilisé actuellement |

Les modèles `.env.example`, `.env.*.example` et `database.local.php.example` restent versionnables et doivent contenir uniquement des exemples sans vrais secrets. `backend/db.php` et `backend/sql/schema.sql` restent partagés : code et structure, sans identifiants ni données privées. Un export SQL placé ailleurs que dans le dossier privé n’est pas automatiquement ignoré ; ne pas y ajouter de données réelles.

`.gitignore` évite l’ajout ordinaire de fichiers non suivis correspondant aux règles. Il ne masque pas les dossiers dans l’éditeur, ne retire pas les fichiers déjà suivis et ne protège pas les URL. La séparation HTTP repose sur `frontend/public/` ; configuration et fichiers privés restent hors de cette racine. Vérifier `git status` avant staging : aucun motif de nommage ne détecte un secret collé dans un fichier suivi.

## Documentation

- [Documentation technique](docs/documentation_technique.md) : fonctionnement et périmètre du projet
- [Plan de développement](docs/plan_dev.md) : feuille de route et bilan quotidien
- [Sécurité et confidentialité](docs/security_privacy.md) : checklist partagée et statuts de vérification, selon les fonctionnalités présentes
- [Journal de développement](docs/dev_log.md) : suivi chronologique des changements
- [Wireframes](docs/wireframes/WIREFRAME_V1.pdf) : référence fonctionnelle
