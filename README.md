# 🎹 DactyloSenior

Un site de dactylographie gamifié, conçu spécialement pour les personnes âgées qui apprennent à taper au clavier.

## ✨ Fonctionnalités

- **3 thèmes** : Animaux 🐾 · Tour de France 🚴 · Bricolage 🔧
- **3 niveaux par thème** : Débutant, Intermédiaire, Avancé
- **Mécaniques de jeu** :
  - Lettre par lettre avec retour visuel immédiat (vert = correct, orange = erreur)
  - Système de points et série (streak)
  - Indice optionnel (réduit les points mais évite la frustration)
  - Confettis à chaque mot réussi 🎉
  - Écran de résultats avec score final
- **Interface accessible** :
  - Grande police (18px base, 24px input)
  - Fort contraste
  - Pas de chronomètre (pour ne pas stresser l'apprenant)
  - Images réelles pour chaque exercice

## 📁 Structure

```
dactyl-senior/
├── index.html        # Page principale
├── css/
│   └── style.css     # Styles
├── js/
│   ├── data.js       # Tous les exercices et thèmes
│   └── app.js        # Logique de l'application
└── README.md
```

## 🚀 Utilisation

Aucune dépendance, aucune installation requise. Ouvrez simplement `index.html` dans un navigateur, ou hébergez les fichiers sur n'importe quel serveur statique (GitHub Pages, Netlify, etc.).

```bash
# En local
open index.html

# Ou avec un petit serveur Python
python3 -m http.server 8080
```

## 🌐 Déploiement sur GitHub Pages

1. Pushez le projet sur GitHub
2. Allez dans `Settings > Pages`
3. Sélectionnez `main` branch, dossier `/` (root)
4. Votre site sera disponible sur `https://votre-pseudo.github.io/dactyl-senior`

## ➕ Ajouter un thème ou des exercices

Ouvrez `js/data.js` et ajoutez un objet dans le tableau `THEMES` en suivant la structure existante :

```js
{
  id: 'mon-theme',
  label: '🎨 Mon Thème',
  description: 'Description du thème.',
  banner: 'url-image-banniere.jpg',
  levels: [
    {
      id: 'debutant',
      name: 'Débutant',
      icon: '🌱',
      info: 'Description du niveau',
      exercises: [
        {
          word: 'monmot',
          hint: 'L\'indice pour ce mot',
          img: 'url-image.jpg',
          caption: 'Légende de l\'image'
        },
        // ...
      ]
    },
    // niveau intermédiaire, avancé...
  ]
}
```

> Les images utilisent [Unsplash](https://unsplash.com) (libres de droit, gratuites).

## 🎯 Principes pédagogiques

- **Pas de stress** : aucun chronomètre, possibilité de passer un mot
- **Feedback positif** : félicitations à chaque réussite
- **Progression douce** : mots courts → mots longs → phrases
- **Ancrage visuel** : chaque mot est associé à une image réelle
- **Récompenses** : système d'étoiles et de série pour motiver

## 📝 Licence

MIT — Libre d'utilisation et de modification.
