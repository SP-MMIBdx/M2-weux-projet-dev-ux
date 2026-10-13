# Comprendre le chargement de l’en-tête en JavaScript

Note pédagogique — 13/10/2026. Cette explication correspond à la fonction actuelle de `frontend/public/assets/js/main.js`.

## 1. Les trois fichiers impliqués

| Fichier | Rôle |
| --- | --- |
| `frontend/public/fluxparrain.html` | Contient le conteneur de l’en-tête et un lien de secours. |
| `frontend/public/includes/header.html` | Contient le fragment HTML partagé à insérer. |
| `frontend/public/assets/js/main.js` | Demande le fragment au serveur et l’insère dans la page. |

Le navigateur exécute JavaScript. Live Server fournit les fichiers via HTTP : il n’exécute pas le JavaScript à la place du navigateur. Pour ce fonctionnement, ouvrir la page avec Live Server plutôt qu’avec une adresse `file://`.

## 2. Le code complet

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

Cette note explique l’implémentation actuelle. Si le mécanisme change, mettre à jour les exemples pour qu’ils restent cohérents avec le code.
