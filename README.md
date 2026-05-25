# Livret d’exposition photographique

Ce projet Hugo propose un livret d’exposition en ligne minimaliste, pensé comme un catalogue photographique élégant et accessible.

## Structure

- `content/oeuvres/` : collection d’œuvres en bundles Hugo
- `content/exposition/_index.md` : page galerie
- `content/propos/_index.md` : page À propos
- `content/_index.md` : page d’accueil
- `layouts/` : templates personnalisés
- `static/css/` et `static/js/` : style et scripts

## Ajouter une œuvre

1. Créez un dossier pour l’œuvre :
   - `content/oeuvres/oeuvre-03/`
2. Ajoutez un fichier `index.md` avec ce frontmatter :

```yaml
title: "Titre de l’œuvre"
date: 2026-05-25
thumbnail: "thumbnail.jpg"
hero: "photo.jpg"
series: "Série"
location: "Lieu"
description: |
  Première ligne de description.
  Deuxième ligne avec saut de ligne.
intention: "Intention artistique"
context: "Contexte de prise de vue"
order: 3
```

3. Placez les images à côté du fichier :
   - `thumbnail.jpg`
   - `photo.jpg`

## Ajouter des images

- `thumbnail.jpg` : vignette carrée
- `photo.jpg` : image principale de l’œuvre
- Les images sont optimisées automatiquement par Hugo dans les templates.

## Lancer localement

```bash
hugo server
```

Puis ouvrez `http://localhost:1313`.

## Générer le site

```bash
hugo
```

Le site statique sera créé dans le dossier `public/`.

## Déployer sur GitHub Pages

1. Poussez le dépôt sur GitHub.
2. Dans les paramètres GitHub Pages, choisissez la branche `gh-pages` ou un workflow de déploiement.
3. Pour un déploiement automatique, utilisez un workflow GitHub Actions qui publie le dossier `public/`.

### Déploiement automatique avec GitHub Actions

Un workflow est inclus dans `.github/workflows/deploy.yml`. Il construit le site avec Hugo et publie le contenu du dossier `public/` sur la branche `gh-pages` lorsque vous poussez sur `main`.

Étapes rapides pour activer le déploiement :

```bash
# 1. Pousser votre dépôt vers GitHub (branche `main`)
git add . && git commit -m "Initial site" && git push origin main

# 2. Vérifier l’exécution du workflow dans l’onglet Actions de GitHub

# 3. Dans les paramètres Pages de votre dépôt, sélectionnez la branche `gh-pages` comme source (ou attendez que GitHub Pages prenne en charge la branche automatiquement).
```

Si vous souhaitez utiliser un domaine personnalisé, remplacez le contenu de `static/CNAME` par votre nom de domaine, et mettez à jour `config.toml` `baseURL` avec la bonne URL.

## Domaine personnalisé

1. Ajoutez un fichier `static/CNAME` contenant votre nom de domaine.
2. Dans `config.toml`, remplacez `baseURL` par l’URL complète de votre domaine.

## Notes SEO

- Meta description propre
- Balises `rel="canonical"`
- Navigation simple
- Contenu structuré
