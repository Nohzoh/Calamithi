---
title: "{{ replace .Name "-" " " | title }}"
year: {{ now.Year }}
thumbnail: "thumbnail.jpg"
hero: "photo.jpg"
location: "Lieu"

# Accroche courte (125 caractères max) pour Google et les réseaux sociaux.
resume: ""
description: |
  Texte de présentation de l’œuvre.

informations: |
  Toile montée en caisse américaine noire.
  Production {{ now.Year }}.

edition: 12
formats:
  - size: "20 x 30"
    price: "220 €"
    stripe_url: ""
order: 99
---
