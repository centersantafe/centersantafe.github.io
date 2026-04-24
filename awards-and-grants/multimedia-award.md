---
layout: base
title: Multimedia Award
header-image-url: "https://images.squarespace-cdn.com/content/v1/64598f7e21c8fa4bf436e45d/3d584755-e432-45f3-a4f0-c13a2ab432ad/7D-04.jpg?format=2500w"
header-caption: "Image detail © Gregory Constantine"
header-height: 80vh
header-position:
---

# Multimedia Award

The Multimedia Award recognizes outstanding storytellers using lens-based media to create narrative-driven projects. The award is open to — but not limited to — photography, video, new media, photojournalism, installation, and web-based works. Artists whose projects inspire social action, document crucial issues, and amplify underrepresented voices are encouraged to apply.

**Note** — The Multimedia Award is not offered in 2026.

## Project Advancement Package

- Winners Exhibition at CENTER
- Review Santa Fe participation
- Publication in _LENSCRATCH_
- Professional Development Seminars access
- Inclusion in the printed Program Guide
- Inclusion in the CENTER Winners Gallery & Archive

## 2025 Juror

**Sam Wolson** — Interactives Visual Features Editor, [The New Yorker](https://www.newyorker.com/)

Sam Wolson is the Interactives Visual Features Editor at _The New Yorker_, as well as a director, photographer, and journalist focused on creating work at the intersection of documentary storytelling and emerging technology. He has worked globally as a visual storyteller, with his projects premiering at festivals such as Sundance, Venice, and SXSW. He co-directed _We Who Remain_, the first character-driven VR film shot in an active war zone, and his immersive project _Reeducated_ earned both a Peabody Award and an Emmy.

## 2025 Recipient

**Gregory Constantine** — [Seven Doors: An American Gulag](https://www.centerwinners.org/multimedia2025)

> Today, immigration detention is a central component of immigration and asylum policy for governments around the world. In the United States, over 46,000 immigrants are detained each day in a web of prison-like detention centers while they wait for their asylum claims to be heard. Media coverage and policy discussion of immigration is often defined by the politicized optics of border crossings. Moreover, the visual translation of the use of immigration detention, especially in the United States, is usually reduced down to infographics or illustrated maps. But how much does the US public really know about the scale and scope of this system and the trauma it inflicts on people?

## Previous Recipients

{% assign mm1 = site.pages | where: "award", "Excellence in Multimedia Storytelling" %}
{% assign mm2 = site.pages | where: "award", "Multimedia Award" %}
{% assign mm3 = site.pages | where: "award", "Excellence in Multimedia Award" %}
{% assign winners = mm1 | concat: mm2 | concat: mm3 | sort: "project-year" | reverse %}
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

Winners galleries for years not listed above are archived at the CENTER Winners site: [2025](https://www.centerwinners.org/2025) · [2024](http://centerwinners.org/2024) · [2023](https://www.centerwinners.org/2023) · [2022](https://www.centerwinners.org/2022) · [2021](https://awards.visitcenter.org/awards2021) · [2020](https://awards.visitcenter.org/awards2020/) · [2019](https://awards.visitcenter.org/awards2019).

{% include yml-to-json.html %}
