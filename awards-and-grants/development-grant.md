---
layout: base
title: Project Development Grant
header-image-url: "https://images.squarespace-cdn.com/content/v1/64598f7e21c8fa4bf436e45d/41f0a39f-1a94-488a-88fd-77a1e85f5798/DSC_4111_2.jpg?format=2500w"
header-caption: "© Chloé.A"
header-height: 80vh
header-position:
---

# Project Development Grant

The Project Development Grant provides financial support to an art, documentary, or photojournalistic work-in-progress. The $5,000 grant package includes professional development and public presentation opportunities.

## Project Advancement Package

- $5,000 USD
- Group exhibition at CENTER
- Review Santa Fe participation
- Publication in _LENSCRATCH_
- Professional Development Seminars access
- Inclusion in the printed Program Guide
- Inclusion in the Online Gallery & Archive

**Submit** — 7–10 images and a project statement limited to 400 words. Check out CENTER's additional [open calls for entry](/awards-and-grants/calls-for-entry).

[Apply Now](https://awards.visitcenter.org/awards-entry-form/) &nbsp;·&nbsp; [FAQs](/review-santa-fe/calls-for-entry-faqs)

## 2026 Juror

**Shana Lopes, PhD** — Assistant Curator of Photography, [San Francisco Museum of Modern Art](https://www.sfmoma.org/)

Shana Lopes is an Assistant Curator of Photography at SFMOMA. Born and raised in San Francisco, she has curated or co-curated exhibitions such as _Constellations: Photographs in Dialogue_, _Sightlines: Photographs from the Collection_, _A Living for Us All: Artists and the WPA_, _Zanele Muholi: Eye Me_, _The SECA 2024 Art Award_, _People Make This Place: SFAI Stories_, and _Alejandro Cartagena: Ground Rules_. Over the past fifteen years, she has gained curatorial experience at the Center for Creative Photography in Tucson, Arizona, and the Metropolitan Museum of Art in New York.

## 2025 Recipient

**Chloé.A** — [Yellow Tiger on Blue Background](https://www.centerwinners.org/development2025)

> I visited my cousins in the aftermath of the earthquake of 2 April, 2024. In the space of a month, the island had experienced more than 1,000 aftershocks. This unusual instability of the earth echoed the diplomatic blurring of international relations. This long-term project highlights the nuances and complexities of the Taiwanese situation. It follows people of different regions into adulthood, including my cousin, who will soon be serving in the military. I am interested in how the current political situation influences their sensibilities and the construction of identities.

## Previous Recipients

{% assign winners = site.pages | where: "award", "Project Development Grant" | sort: "project-year" | reverse %}
{% for w in winners %}
  {% assign link = "/archive/listings/" | append: w.project-year | append: "/" | append: w.artist | replace: ' ', '-' | downcase | append: ".html" %}
  {% include card-winner.html
    height = "50vh"
    artist = w.artist
    year = w.project-year
    header-image-id = w.header-image-id
    link = link
    hide-award = true
  %}
{% endfor %}

Winners galleries for years not listed above are archived at the CENTER Winners site: [2025](https://www.centerwinners.org/2025) · [2024](http://centerwinners.org/2024) · [2023](https://www.centerwinners.org/2023) · [2022](https://www.centerwinners.org/2022) · [2021](https://awards.visitcenter.org/awards2021) · [2020](https://awards.visitcenter.org/awards2020/) · [2019](https://awards.visitcenter.org/awards2019) · [2018](https://awards.visitcenter.org/awards2018) · [2017](https://awards.visitcenter.org/awards2017/) · [2016](https://awards.visitcenter.org/awards2016/).

{% include yml-to-json.html %}
