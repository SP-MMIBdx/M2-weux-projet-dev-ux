# Documentation technique — [Titre du projet à définir]

## 1. Description synthétique

- **Titre du projet :** À définir
- **Membres du groupe :** Alexandre, Ange, Steve
- **Date de mise à jour du document :** 24/09/2026
- **Adresse :** https://github.com/SP-MMIBdx/M2-weux-projet-dev-ux

### Pitch

Une application de parrainage destinée aux étudiants étrangers arrivant en France, leur permettant de créer un profil et de trouver des étudiants parrains correspondant à leurs besoins, leurs centres d’intérêt et leur parcours afin de faciliter leur intégration sociale, universitaire et quotidienne.

---

## 2. Scénarios d'utilisation

### Scénario 1 — Lucia cherche un parrain

*Étudiante étrangère colombienne de 19 ans en L1 à Poitiers.*

Lucia arrive en France  
↓  
Crée son compte  
↓  
Choisit « Étudiant étranger »  
↓  
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
Complète son profil  
↓  
Indique ses centres d'intérêt et les domaines dans lesquels il souhaite aider  
↓  
Son profil devient disponible  
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

L'étudiant étranger crée un profil afin de présenter sa situation, ses centres d'intérêt et ses besoins.

**Informations possibles :**

- Nom et prénom
- Pays d'origine
- Photo de profil facultative
- Université et formation
- Parcours / niveau d'études
- Langues parlées
- Description personnelle
- Centres d'intérêt
- Types d'aide recherchés

**Côté parrain :**

Le parrain présente également son parcours, ses centres d'intérêt, ses disponibilités et les domaines dans lesquels il souhaite accompagner un étudiant.

### 3.2 Trouver un parrain adapté

L'étudiant consulte une sélection de parrains correspondant à son profil.

La mise en relation s'appuie notamment sur :

- les centres d'intérêt ;
- les besoins exprimés ;
- les études / formations ;
- les langues parlées ;
- éventuellement les disponibilités et d'autres critères pertinents.

### 3.3 Demande de mise en relation

L'étudiant peut sélectionner un ou plusieurs profils de parrains et envoyer une demande de parrainage.

Le parrain ne peut pas contacter directement les étudiants.

Tant que la demande n'est pas acceptée, les informations de contact personnelles restent masquées.

### 3.4 Accepter ou refuser une demande

Le parrain dispose d'un espace lui permettant de consulter les demandes reçues.

Il peut :

- accepter une demande ;
- refuser une demande ;
- consulter les informations pertinentes du profil avant de prendre sa décision.

Une fois la demande acceptée, les deux utilisateurs peuvent accéder au moyen de communication prévu par l'application.

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

- Création de compte / connexion
- Choix du type de profil : étudiant étranger ou parrain
- Création et modification du profil
- Ajout d'une photo facultative
- Ajout d'une description
- Informations personnelles pertinentes : formation, établissement, parcours, langues, etc.
- Sélection de tags correspondant aux centres d'intérêt et aux besoins
- Consultation des profils de parrains proposés
- Système de mise en relation basé sur les informations et tags des profils
- Possibilité pour l'étudiant étranger de sélectionner un ou plusieurs parrains
- Envoi d'une demande de parrainage
- Réception et gestion des demandes côté parrain
- Acceptation ou refus d'une demande
- Transmission des coordonnées / ouverture du contact uniquement après acceptation

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
- Vérification du statut des parrains
- Signalement et modération des utilisateurs
- Gestion des demandes ou problèmes liés aux mises en relation
- Tableau de bord administrateur pour suivre l'activité de l'application

---

## 5. Maquette fonctionnelle

Les maquettes fonctionnelles de l'application sont fournies dans le fichier associé au format PDF.

Elles présentent notamment :

- la connexion et la création de compte ;
- la création du profil étudiant ou parrain ;
- le flux de propositions de parrains ;
- le flux des demandes de parrainage.