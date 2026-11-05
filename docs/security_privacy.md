# Binô — Checklist de sécurité et de confidentialité

Document partagé pour l’équipe et ses outils d’assistance au développement. Adapté le 05/11/2026 par l’IA, à la demande de Steve, à partir de sa checklist fournie hors dépôt.

Appliquer les points lorsque la fonctionnalité concernée existe. Il s’agit de critères de revue, pas de protections déjà implémentées ni d’une attestation de conformité. Rester proportionné au projet et avancer par petits changements expliqués et vérifiés.

## Utilisation et état actuel

Le [plan de développement](plan_dev.md) indique quand construire et vérifier les protections. Cette checklist rassemble les contrôles transversaux ; le [journal](dev_log.md) conserve leurs résultats, auteurs et limites, sans recopier toute la liste à chaque étape.

Les pages PHP actuelles utilisent des inclusions et une présélection de rôle, avec données fictives et soumissions désactivées. Base, PDO, authentification, sessions, uploads et persistance ne sont pas implémentés. Leur absence n’est pas une validation de leur sécurité future.

| Résultat de revue | À consigner pour le point concerné |
| --- | --- |
| Vérifié | Contrôle réellement effectué, méthode, résultat et fichier/route |
| Problème trouvé | Défaut observé, impact et correction minimale proposée |
| Non applicable | Fonction absente ou point hors de l’incrément ; expliquer pourquoi |
| Non testé | Point pertinent mais sans vérification suffisante ; garder l’action ouverte |

Ne cocher un point qu’avec les éléments de vérification correspondants. Distinguer relecture, simulation, contrôle HTTP et essai navigateur ; annoncer et afficher les essais navigateur selon la méthode du plan. Réexaminer les contrôles après un changement pertinent.

## Pendant le développement

### Données et accès

- [ ] Inventorier les données réellement collectées, stockées, affichées ou partagées ; éviter les données personnelles inutiles.
- [ ] Vérifier les autorisations côté PHP sur chaque route/action sensible et chaque enregistrement : identité, rôle, propriétaire et état de demande. Un lien masqué ou `$showDemoNavigation` ne protège pas l’accès.
- [ ] Si l’authentification existe : `password_hash` / `password_verify`, renouvellement de l’identifiant de session à la connexion, invalidation à la déconnexion, expiration et cookies HttpOnly/SameSite, Secure en HTTPS ; appliquer les critères de session du plan.
- [ ] Protéger côté serveur les requêtes modifiant l’état contre le CSRF lorsque pertinent ; ne pas vérifier seulement la présence d’un champ HTML.

### Entrées, base et sorties

- [ ] Valider types, longueurs et valeurs autorisées côté serveur ; la validation client reste une aide de saisie.
- [ ] Utiliser PDO et des requêtes préparées pour les valeurs SQL ; ne pas concaténer l’entrée utilisateur. Utiliser des listes autorisées pour les identifiants SQL dynamiques non paramétrables.
- [ ] Encoder les sorties selon leur contexte (texte HTML, attribut, URL, JavaScript) ; une seule transformation ne protège pas tous les contextes contre le XSS.
- [ ] Si des uploads existent : limiter types/taille, vérifier le contenu réel, maîtriser les noms et stocker sans possibilité d’exécution.
- [ ] Éviter les erreurs détaillées exposées en production ; exclure mots de passe, jetons et données personnelles inutiles des journaux.

### Configuration, tiers et confidentialité

- [ ] Garder les secrets hors Git et de la racine publique ; vérifier exclusions et fichiers déjà suivis. Aucun vrai identifiant dans le frontend ou les modèles `.example`. Le [README](../README.md) précise les conventions ; aucun chargement `.env` n’est actuellement implémenté.
- [ ] Examiner dépendances et appels externes ; corriger les vulnérabilités connues avec des changements ciblés et testés, sans mise à jour massive non vérifiée.
- [ ] Documenter cookies et stockage de session nécessaires lorsqu’ils existent. Identifier les traceurs optionnels et vérifier les règles de consentement applicables avant activation ; ne pas déduire une exemption du seul nom « cookie technique ».
- [ ] Avant traitement de données personnelles et publication : préciser finalités, base légale à confirmer, destinataires, conservation/suppression, droits et contact ; préparer l’information utilisateur. Vérifier les exigences applicables avec l’équipe et l’encadrement.
- [ ] Avant production avec données persistantes : HTTPS, droits SQL limités et sauvegarde/restauration testée. Les critères par étape restent dans le plan.

## Avant intégration ou publication d’une fonctionnalité

- [ ] Tester entrées invalides, accès aux enregistrements d’autrui, tentatives d’injection SQL, contenu XSS, CSRF applicable, connexion/déconnexion et réponses d’erreur, selon les fonctions réellement présentes.
- [ ] Vérifier confidentialité, accès et cookies en session anonyme et avec les profils utilisateurs pertinents ; ne pas se limiter à un compte administrateur. Contrôler conservation/suppression lorsqu’elles sont implémentées.
- [ ] Présenter les résultats à l’équipe dans le journal avec statut, méthode, références fichiers/routes et correction minimale si nécessaire. Déclarer les contributions humaines/IA ; ne pas prétendre à une certification juridique ou à une sécurité globale à partir de contrôles ciblés.

Les décisions et validations restent humaines. Les premiers mécanismes sont expliqués et saisis manuellement avec Steve, sauf demande explicite de réalisation par l’IA. Cette checklist n’autorise pas un changement de périmètre, un envoi à un tiers ou un staging/commit à sa place.

## Références à consulter aux étapes concernées

Liens issus de la checklist fournie ; leur présence ne constitue pas une revue juridique, un audit ou une vérification actuelle de tous leurs contenus.

- [OWASP — revue de code sécurisée](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Code_Review_Cheat_Sheet.html)
- [OWASP — gestion des sessions](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [OWASP — accès sécurisé à la base](https://devguide.owasp.org/en/04-design/02-web-app-checklist/03-secure-database-access/)
- [CNIL — démarche de conformité au RGPD](https://www.cnil.fr/fr/ma-conformite-au-rgpd/me-mettre-en-conformite)
- [CNIL — cookies et autres traceurs](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi)
