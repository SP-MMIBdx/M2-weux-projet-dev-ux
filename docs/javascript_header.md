# Comprendre le chargement des fragments HTML en JavaScript

Note pédagogique — 13/10/2026. Le nom du fichier est conservé pour ne pas casser les liens existants.

**Parcours de lecture :** les sections 1 à 12 décrivent la première version, `loadHeader()`, conservée comme exercice d’apprentissage. Les extraits HTML de cette première version précèdent également l’ajout du conteneur de mise en forme de l’en-tête. La section 13 présente le code actuel de `frontend/public/assets/js/main.js`, `loadPartial(containerId, filePath)`, et explique sa réutilisation pour le pied de page. Pour reprendre le travail UX/UI, lire d’abord cette dernière section ; les bases restent disponibles pour révision.

## 1. Les trois fichiers impliqués

| Fichier | Rôle |
| --- | --- |
| `frontend/public/fluxparrain.html` | Contient le conteneur de l’en-tête et un lien de secours. |
| `frontend/public/includes/header.html` | Contient le fragment HTML partagé à insérer. |
| `frontend/public/assets/js/main.js` | Demande le fragment au serveur et l’insère dans la page. |

Le navigateur exécute JavaScript. Live Server fournit les fichiers via HTTP : il n’exécute pas le JavaScript à la place du navigateur. Pour ce fonctionnement, ouvrir la page avec Live Server plutôt qu’avec une adresse `file://`.

## 2. Le code complet de la première version (historique)

```javascript
async function loadHeader() {
  const header = document.getElementById("site-header");

  if (!header) {
    return;
  }

  try {
    const response = await fetch("includes/header.html");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const html = await response.text();
    header.innerHTML = html;
  } catch (error) {
    console.error("Impossible de charger l’en-tête commun.", error);
  }
}

loadHeader();
```

## 3. Déclarer une fonction et l’appeler

```javascript
async function loadHeader() {
  // Instructions de la fonction.
}
```

Une fonction est un groupe d’instructions auquel on donne un nom.

- `function` déclare la fonction.
- `loadHeader` est le nom choisi par le développeur.
- `()` contient ses paramètres, c’est-à-dire les entrées qu’elle peut recevoir. Ici, elle n’en attend aucune.
- Les accolades `{ }` délimitent son contenu.
- `async` autorise l’utilisation de `await` dans la fonction. Une fonction `async` renvoie une Promise.

La déclaration prépare les instructions ; elle ne les exécute pas. L’appel suivant démarre leur exécution :

```javascript
loadHeader();
```

## 4. Trouver l’élément HTML

```javascript
const header = document.getElementById("site-header");
```

`document` représente le document de la page courante. Sa méthode `getElementById` recherche l’élément dont l’attribut `id` correspond exactement au texte fourni.

Dans notre page, il s’agit de :

```html
<header class="site-header" id="site-header">
  <a class="site-brand" href="index.html">Parrainage étudiant</a>
</header>
```

Le résultat est stocké dans la variable `header`. Si aucun élément ne correspond, le résultat est `null`, c’est-à-dire l’absence de résultat.

`const` empêche de réaffecter la variable à une autre valeur. Cela n’empêche pas de modifier le contenu de l’élément auquel elle fait référence.

La classe `site-header` sert ici au CSS ; l’identifiant `site-header` sert à retrouver le conteneur en JavaScript. Ce sont deux attributs distincts, même si nous avons choisi le même texte.

## 5. Comprendre `!`, `if` et `return`

```javascript
if (!header) {
  return;
}
```

`if` exécute son bloc lorsque la condition est vraie. `!` signifie « non » : cet opérateur inverse la valeur logique de ce qui le suit.

| Résultat de la recherche | `!header` | Conséquence |
| --- | --- | --- |
| Un élément a été trouvé | `false` | La fonction continue. |
| Aucun élément trouvé : `null` | `true` | `return` arrête la fonction. |

`return;` quitte uniquement cette fonction, pas tout le JavaScript de la page.

Pour cette recherche précise, on pourrait aussi écrire :

```javascript
if (header === null) {
  return;
}
```

`===` compare strictement deux valeurs. À l’inverse, `=` affecte une valeur à une variable ou à une propriété.

Ce contrôle permet de charger le même fichier JavaScript sur les autres pages : tant qu’elles ne possèdent pas ce conteneur, la fonction s’arrête sans tenter de charger l’en-tête.

## 6. Demander le fragment : `fetch` et `await`

```javascript
const response = await fetch("includes/header.html");
```

`fetch` demande une ressource au serveur. Cette opération prend du temps et renvoie une Promise : un objet représentant un résultat à venir, ou un échec.

`await` suspend la suite de cette fonction jusqu’à ce que la Promise soit résolue. Il ne bloque pas toute la page : le navigateur peut continuer d’autres tâches. Si la Promise échoue, une erreur est levée.

`response` reçoit un objet représentant la réponse HTTP : statut, en-têtes et accès au contenu. Ce n’est pas encore la chaîne HTML que nous voulons insérer.

Dans notre page, le chemin `includes/header.html` est résolu relativement à l’URL du document, pas à l’emplacement de `main.js`.

## 7. Vérifier le statut HTTP

```javascript
if (!response.ok) {
  throw new Error(`Erreur HTTP : ${response.status}`);
}
```

`response.ok` vaut `true` pour un statut HTTP de succès (200 à 299), sinon `false`. `!response.ok` signifie donc « si la réponse n’est pas un succès ».

Une réponse HTTP 404, par exemple, ne fait pas automatiquement échouer la Promise de `fetch`. Il faut vérifier explicitement le statut.

- `new Error(...)` crée un objet décrivant une erreur.
- `throw` lève cette erreur et interrompt le déroulement normal du bloc.
- Les accents graves délimitent une chaîne de caractères permettant l’interpolation.
- `${response.status}` insère le numéro du statut dans le message, par exemple `Erreur HTTP : 404`.

## 8. Lire le contenu, puis l’insérer

```javascript
const html = await response.text();
header.innerHTML = html;
```

`response.text()` lit le contenu de la réponse comme du texte. Cette lecture est asynchrone, d’où le second `await`.

`html` contient alors le texte du fragment :

```html
<a class="site-brand" href="index.html">
  Parrainage étudiant
</a>
```

L’affectation à `header.innerHTML` remplace le contenu intérieur de l’en-tête par ce fragment, interprété comme HTML par le navigateur. L’élément `<header>` lui-même conserve sa classe et son identifiant.

Ici, nous insérons un fichier du projet que nous contrôlons. Il ne faut pas utiliser cette insertion pour du contenu utilisateur non vérifié, qui pourrait introduire du code malveillant.

Le script est placé à la fin du `<body>` : le navigateur a donc déjà créé le conteneur lorsque la fonction le recherche.

## 9. Gérer les erreurs : `try/catch`

```javascript
try {
  // Opérations qui peuvent échouer.
} catch (error) {
  console.error("Impossible de charger l’en-tête commun.", error);
}
```

Si une opération du bloc `try` lève une erreur, l’exécution passe au bloc `catch`. La variable `error` contient les informations sur cette erreur.

`console.error` les affiche dans la console des outils de développement. Il n’ajoute pas de message dans la page.

En cas d’échec avant l’insertion, le lien de secours reste visible.

## 10. Pourquoi le lien est-il présent dans deux fichiers ?

Le lien directement écrit dans `fluxparrain.html` est un secours minimal. Il est disponible avant le chargement du fragment, sans JavaScript ou si la requête échoue.

Le déroulement est le suivant :

1. Le navigateur affiche le contenu HTML initial, avec le lien de secours.
2. JavaScript tente de charger le fragment partagé.
3. Si le chargement réussit, le fragment remplace le lien initial.
4. Si le chargement échoue, le lien initial reste en place.

Les deux liens ne s’accumulent pas : `innerHTML = html` remplace, il n’ajoute pas à la suite.

Un conteneur vide fonctionnerait aussi en cas de succès, mais resterait vide en cas d’échec. Cette petite duplication est volontaire. Plus tard, des inclusions PHP pourront assembler le document côté serveur avant son envoi au navigateur.

## 11. Vérifier le fonctionnement

### Réseau et cache

Dans le panneau Réseau, une ligne `header.html` de type `fetch`, initiée par `main.js`, confirme que le script a demandé le fichier.

Un statut 304 signifie que le serveur confirme que la copie en cache du navigateur est toujours valide. Lors d’une revalidation normale, le navigateur réutilise cette copie et fournit à `fetch` une réponse exploitable ; notre contrôle `response.ok` réussit.

La connexion `ws` avec statut 101 appartient à Live Server et sert au rafraîchissement automatique. Une connexion persistante peut rester affichée comme « Pending ».

La requête réseau seule ne prouve pas que l’insertion finale a eu lieu.

### Test visuel de bout en bout

1. Ajouter temporairement « — test » au texte dans `includes/header.html` uniquement.
2. Enregistrer et rafraîchir la page.
3. Vérifier que le texte modifié apparaît : cela confirme la requête, la lecture et l’insertion.
4. Retirer le texte de test et enregistrer à nouveau.

Steve a confirmé la réussite de ce test pendant la séance. Les cas d’échec restent à tester séparément.

## 12. À retenir avant de modifier ce mécanisme

```text
Appeler loadHeader()
    ↓
Trouver le conteneur ; arrêter la fonction s’il est absent
    ↓
Demander le fragment au serveur
    ↓
Vérifier le statut de la réponse
    ↓
Lire son contenu HTML
    ↓
Remplacer le contenu du conteneur
```

Question de révision : si l’identifiant HTML devient `page-header` mais que JavaScript cherche toujours `site-header`, que se passe-t-il ?

Réponse : la recherche renvoie `null`, `!header` vaut `true` et `return` arrête la fonction avant la requête. Le lien de secours reste visible.

Ce premier parcours explique la version initiale. La version utilisée maintenant est décrite ci-dessous.

## 13. Version actuelle : une fonction pour l’en-tête et le pied de page

### Pourquoi modifier la fonction ?

Le pied de page nécessite les mêmes opérations que l’en-tête : trouver un conteneur, demander un fichier, vérifier la réponse et insérer le HTML. Copier toute la fonction créerait deux blocs presque identiques à maintenir.

Nous avons donc rendu variables les deux informations qui changent : l’identifiant du conteneur et le chemin du fichier. Ce changement de structure, appelé refactorisation, conserve le mécanisme de chargement tout en permettant sa réutilisation.

### Code actuel

```javascript
async function loadPartial(containerId, filePath) {
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(
      `Impossible de charger le fragment : ${filePath}`,
      error
    );
  }
}

loadPartial("site-header", "includes/header.html");
loadPartial("site-footer", "includes/footer.html");
```

### Étape 1 — Déclarer deux paramètres

```javascript
async function loadPartial(containerId, filePath) {
```

`loadPartial` est le nom choisi pour « charger un fragment ». Ce n’est pas une fonction fournie automatiquement par JavaScript : nous la déclarons nous-mêmes.

`containerId` et `filePath` sont des **paramètres** : des noms qui recevront une valeur à chaque appel. Ils ne demandent aucune saisie à l’utilisateur.

### Étape 2 — Fournir les valeurs lors de l’appel

```javascript
loadPartial("site-footer", "includes/footer.html");
```

Les valeurs fournies à un appel sont ses **arguments**. Leur ordre compte : le premier va dans `containerId`, le second dans `filePath`.

| Appel | Valeur de `containerId` | Valeur de `filePath` |
| --- | --- | --- |
| En-tête | `"site-header"` | `"includes/header.html"` |
| Pied de page | `"site-footer"` | `"includes/footer.html"` |

Pour l’appel du pied de page, on peut lire mentalement les instructions comme ceci :

```javascript
// Illustration des valeurs utilisées, pas du code à ajouter.
document.getElementById("site-footer");
fetch("includes/footer.html");
```

### Étape 3 — Utiliser les paramètres à la place des textes fixes

```javascript
const container = document.getElementById(containerId);
```

Sans guillemets, `containerId` signifie « utiliser la valeur reçue ». Avec des guillemets, `"containerId"` serait le texte littéral à rechercher : ce n’est pas l’identifiant de notre pied de page.

La variable locale s’appelle maintenant `container` plutôt que `header`, car l’élément trouvé peut être un en-tête ou un pied de page.

```javascript
if (!container) {
  return;
}
```

La protection reste identique : si l’élément est absent, cet appel s’arrête avant de demander le fichier.

### Étape 4 — Charger et insérer le fichier correspondant

```javascript
const response = await fetch(filePath);
```

Cette ligne demande le fichier dont le chemin a été fourni à cet appel. Le contrôle `response.ok`, la lecture avec `response.text()` et les deux `await` fonctionnent exactement comme auparavant.

```javascript
container.innerHTML = html;
```

Le contenu du fichier remplace le contenu de secours du conteneur sélectionné. Le conteneur extérieur conserve sa classe et son identifiant. Le fragment `footer.html` ne doit donc pas contenir un second élément `<footer>` extérieur.

### Étape 5 — Identifier le fichier en cas d’erreur

Le message dans `catch` contient maintenant `${filePath}`. Si une requête échoue, la console indique quel fragment était concerné. Le contenu de secours reste présent si le chargement échoue avant son remplacement.

### Étape 6 — Comprendre les deux appels

Chaque appel possède ses propres paramètres et variables locales (`container`, `response`, `html`). Charger le pied de page ne remplace pas les variables de l’appel de l’en-tête.

Le premier appel commence puis attend sa réponse réseau. Le second peut alors commencer sans attendre la fin du premier, car nous n’avons pas placé de `await` devant ces appels. L’ordre de fin des chargements n’est donc pas garanti et n’a pas d’importance : chaque fragment possède son propre conteneur. Les erreurs sont traitées séparément.

### Ce qui change et ce qui reste identique

| Avant | Maintenant | Raison |
| --- | --- | --- |
| `loadHeader()` | `loadPartial(containerId, filePath)` | Réutiliser les instructions avec deux entrées. |
| Variable `header` | Variable `container` | Nom adapté aux deux types d’éléments. |
| Identifiant et chemin fixes | Valeurs fournies à chaque appel | Choisir le fragment et sa destination. |
| Un appel | Deux appels | Charger l’en-tête et le pied de page. |
| Message d’erreur dédié à l’en-tête | Message contenant le chemin | Identifier le fragment en échec. |

Le contrôle d’absence, `fetch`, `async/await`, le contrôle HTTP, la lecture du texte, `innerHTML` et `try/catch` suivent le même fonctionnement que dans les sections précédentes.

### Vérifications et limites actuelles

- Steve a partagé les requêtes réseau : `header.html` avec statut 304 et `footer.html` avec statut 200, initiées par la même ligne `fetch` de `main.js`. C’est attendu pour une fonction réutilisée.
- Steve a confirmé le rechargement du pied de page après le test proposé. Les erreurs de chargement restent à tester séparément.
- Les fragments utilisent nos propres fichiers HTML ; cette fonction n’est pas destinée à insérer des données utilisateur non vérifiées.
- Les chemins supposent toujours que les pages se trouvent directement dans `frontend/public/`. Les revoir si des pages sont déplacées dans des sous-dossiers.
- Le footer dispose encore de son contenu de secours dans `fluxparrain.html`. Son style sera ajouté lors de la prochaine étape UX/UI.

**À retenir pour continuer :** une seule recette, deux entrées et deux appels. Chaque appel choisit où insérer le contenu et quel fichier charger. Il n’est pas nécessaire de mémoriser tous les détails pour poursuivre le CSS ; revenir aux sections précédentes au besoin.
