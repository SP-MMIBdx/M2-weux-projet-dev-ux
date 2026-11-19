# zxcvbn-ts — fichiers distribués avec Binô

Fichiers copiés sans modification depuis les archives npm publiées par [zxcvbn-ts](https://github.com/zxcvbn-ts/zxcvbn). Ils sont prêts à être servis par le serveur de Binô ; aucune installation npm ni compilation sur le serveur n’est requise.

| Fichier local | Archive et fichier d’origine |
| --- | --- |
| `core.js` | `@zxcvbn-ts/core@4.2.0`, `dist/zxcvbn-ts.js` |
| `language-common.js` | `@zxcvbn-ts/language-common@4.1.3`, `dist/zxcvbn-ts.js` |
| `translations-fr.mjs` | `@zxcvbn-ts/language-fr@4.1.2`, `dist/translations.mjs` |

Le pack commun fournit les données et motifs courants ; le fichier français fournit uniquement les traductions. Le dictionnaire français complet et les fichiers de débogage ne sont pas copiés. Taille mesurée des trois scripts : 539 777 octets bruts, 248 020 octets compressés en gzip séparément (estimation, pas une mesure de transfert HTTP).

Les trois archives contiennent le même texte de licence MIT, conservé dans `LICENSE.txt`. Le cœur inclut `fastest-levenshtein@1.0.16` (Copyright © 2020 Kasper Unn Weihe, [licence MIT d’origine](https://github.com/ka-weihe/fastest-levenshtein/blob/master/LICENSE.md) ; texte de permission MIT dans `LICENSE.txt`). La compression des dictionnaires fait partie de l’amont zxcvbn-ts. Les notices `NOTICE-fr.md` et `THIRD_PARTY_LICENSES-fr.md` sont conservées telles que fournies, y compris l’attribution OpenSubtitles/OPUS relative au dictionnaire français qui n’est pas distribué ici.

Seule l’inscription charge ces fichiers, via `createprofile.php` et `password-strength.mjs`. L’estimation s’exécute dans le navigateur, sans appel externe. Pour une mise à jour, vérifier à nouveau les versions, les notices, les tailles et l’exécution locale.
