# Binô — Projet UX / Développement M2 WEUX

**Binô** est le nom provisoire, en attente de validation du groupe. Application web de parrainage destinée à faciliter l'intégration des étudiants étrangers grâce à une mise en relation avec des étudiants parrains.

## Équipe

- Alexandre
- Ange
- Steve

## Stack

- Actuellement : HTML, CSS, JavaScript natif et premières inclusions PHP.
- Prévu pour les données : SQL / MySQL via PDO.

## État du projet

Au 29/10/2026, les huit écrans sont des pages PHP dans `frontend/public/`, avec header/footer privés partagés. Les anciennes pages et fragments HTML sont supprimés après vérification progressive. Le contenu reste une maquette sans persistance ; les interactions JavaScript et la présélection PHP du rôle à l’inscription sont conservées.

- Flux parrain : structure sémantique, carte de demande illustrative, carte d’attente des actualités, tags, boutons désactivés et en-tête/pied de page partagés et stylisés.
- Connexion : formulaire stylisé, panneaux de surface provisoire, silhouette de profil et liens vers la création de compte selon le rôle choisi.
- Création de compte : sélection du rôle, identifiant, e-mail et mot de passe avec champs de confirmation, regroupés en panneaux. Identifiant de connexion limité à 24 caractères (A–Z, chiffres, _ et -) avec retour JavaScript partagé avec la connexion, distinct du nom affiché public.
- Configuration du profil : nom affiché, pays, parcours et description avec compteur et limite native de 500 caractères confirmée dans le navigateur par Steve, plus six centres d’intérêt et sept besoins sélectionnables sous forme de mini-cartes. Chaque groupe possède un compteur et les actions « Tout sélectionner » / « Tout désélectionner », disposées dans une ligne flexible et vérifiées dans le navigateur le 29/10. Choix provisoires, sans enregistrement.
- Flux étudiant : trois profils fictifs, tags, avatars, actions désactivées et actualités à venir dans une carte.
- Accueil : présentation du service, étapes du parcours prévu et liens vers les formulaires et les deux espaces de démonstration.
- Aide / FAQ : cinq réponses issues du périmètre fonctionnel et formulaire de contact de démonstration (nom, e-mail, message limité à 500 unités UTF-16 avec compteur), avec envoi désactivé.
- Profil : exemple statique de Lucia, présentation, intérêts, besoins et lien vers la configuration non préremplie. Accueil et profil restent des propositions à valider, sans écran dédié dans le wireframe V1.

Les cartes des deux flux et la présentation du profil réutilisent `.profile-heading` pour regrouper avatar circulaire, nom, rôle et études. Les informations restent fictives.

Les trois pages de formulaire utilisent la même silhouette décorative et un pied de page public simplifié. Leurs soumissions restent désactivées : aucune connexion, création de compte ou sauvegarde de profil n’est disponible. Les confirmations e-mail/mot de passe restent en JavaScript ; PHP présélectionne le rôle à partir d’une liste autorisée stricte, sans accorder de permission. La validation serveur des soumissions reste à implémenter.

Le CSS commun conserve la présentation mobile-first et la palette provisoire : fond crème, cartes saumon, header/footer jaune atténué, boutons secondaires jaunes et actions vertes. JavaScript gère révélation des mots de passe, confirmations, conseils, compteurs et sélections groupées ; son chargeur de fragments est supprimé. Aucun compte ou donnée enregistré.

À l’inscription, un conseil textuel indique une longueur inférieure à 15 caractères ou quelques motifs prévisibles. Ce repère pédagogique n’est pas une estimation complète de robustesse ; Steve a confirmé son fonctionnement dans le navigateur.

`backend/includes/header.php` et `footer.php` sont inclus par les huit pages via des chemins fixes fondés sur `__DIR__`. Un seul footer conserve les deux variantes actuelles : liens Accueil/FAQ partout, Démarches désactivé et profil sur les deux flux et le profil. Ces trois pages définissent `$showDemoNavigation = true` ; ce choix de présentation ne simule pas une session et n’accorde aucun accès. SQL, PDO et authentification restent à implémenter après accord sur le modèle de données.

## Organisation du frontend

Le header associe un duo de personnages SVG original (`assets/images/logo.svg`) au texte « Binô », centré sous le logo au sein d’un bloc aligné à gauche, en saumon avec un contour noir de 3px, comme les H1. Le jaune représente le parrain, le saumon l’étudiant ; deux SVG autonomes (`mascot-parrain.svg`, `mascot-etudiant.svg`) accompagnent les titres des flux correspondants sur leur droite, avec une hauteur fluide de 6 à 16rem et retour centré sous le titre si nécessaire. Le duo reste réservé au header. Couleurs issues des variables existantes. Au chargement, le logo du header joue une légère pulsation de 450ms, distincte du salut avec inclinaison des mascottes de flux (700ms). Chaque effet joue une fois, uniquement sans préférence de réduction des mouvements. Dans ce même mode, les cartes de profils des flux apparaissent par un fondu de 400ms et le logo du header et les boutons actifs réagissent au survol avec une souris ; aucun mouvement continu.

Les huit pages PHP restent à la racine de `frontend/public/`, avec les assets existants. Les deux fragments PHP sont dans `backend/includes/`, hors racine publique. Aucun fragment HTML public ni contenu de secours dupliqué ne reste utilisé.

```mermaid
flowchart TD
    Pages["Huit pages PHP"] --> Header["backend/includes/header.php"]
    Pages --> Footer["backend/includes/footer.php"]
    Pages --> CSS["style.css"]
    Pages --> JS["main.js : interactions client"]
    Footer --> Public["Accueil et FAQ"]
    Footer --> Demo["Option de maquette : Démarches désactivé et profil"]
```

Les formulaires, les deux flux et le profil partagent l’image `assets/images/avatar-default.svg`. Le schéma représente les dépendances de fichiers, pas le parcours utilisateur.

PHP assemble le header et le footer avant de transmettre le HTML au navigateur. JavaScript ne les remplace plus. La navigation de démonstration reste accessible et fictive, avec actions métier désactivées ; navigation authentifiée, contenu Démarches, menu et navigation persistante restent à définir.

**Jalon frontend statique du 29/10 atteint :** formulaires harmonisés, huit pages contrôlées dans le navigateur intégré à 320, 375, 768 et 1280px sans débordement horizontal, parcours de navigation et interactions principales vérifiés. Les échecs du chargeur de fragments ont aussi été simulés avec conservation du contenu de secours. Ce checkpoint permet de commencer une migration progressive des inclusions vers PHP ; il ne constitue pas une validation complète sur appareils physiques ni une certification d’accessibilité. Le filtrage des profils est réservé au serveur, selon la répartition convenue avec Steve. La configuration reste à adapter au rôle parrain ; navigation selon rôle et vérifications navigateur globales restent ouvertes. Les retours enseignant du 14/10 sont consignés dans le journal et à revoir dans le plan ; les schémas Mermaid, les variables d’espacement et la suppression du soulignement au survol des boutons ont été appliqués ; les autres points restent à revoir.

## Lancement local

### Choisir la version du projet

Au checkpoint du 29/10/2026, les branches ont volontairement deux états différents :

| Branche | Version | Lancement |
| --- | --- | --- |
| `main` | Huit pages PHP avec inclusions partagées | Serveur PHP local nécessaire |
| `dev` | Checkpoint frontend avant PHP, huit pages HTML | Serveur HTTP statique ou PHP ; pas d’exécution PHP requise |

`dev` est conservée à ce checkpoint par Steve. Ne pas y fusionner `main` uniquement pour lancer le projet. Le fonctionnement du footer du checkpoint statique peut être perturbé par l’injection Live Server ; le serveur PHP local peut aussi servir les fichiers HTML sans les modifier.

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
git clone --branch dev https://github.com/SP-MMIBdx/M2-weux-projet-dev-ux.git bino-static
cd bino-static
php -S 127.0.0.1:8001 -t frontend/public
```

Ouvrir `http://127.0.0.1:8001/index.html`. PHP ne fait ici que servir les fichiers statiques ; un serveur HTTP statique sans injection perturbant les fragments convient aussi. Les instructions de ce README concernent `main` : le README de la copie `dev` peut conserver les indications historiques du checkpoint.

Le serveur PHP exécute désormais les huit pages. Live Server et les URL `file://` ne permettent pas cette exécution. Le changement de prévisualisation du 28/10, puis la suppression du chargement JavaScript des fragments le 29/10, sont détaillés dans le journal. Aucun changement d’environnement ni build requis.

Le serveur fournit les fichiers ; le navigateur exécute JavaScript. Aucun build ni installation de dépendances applicatives n’est nécessaire. Dans l’émulation mobile des outils de développement, utiliser « Fit to window » pour voir l’intégralité du viewport simulé.

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
- [Journal de développement](docs/dev_log.md) : suivi chronologique des changements
- [Wireframes](docs/wireframes/WIREFRAME_V1.pdf) : référence fonctionnelle
