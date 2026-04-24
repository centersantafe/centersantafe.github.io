---
layout: base
title: Project Launch Grant
header-image-url: "https://images.squarespace-cdn.com/content/v1/64598f7e21c8fa4bf436e45d/a4f11f85-6795-44a9-b5c9-b4e0658b5046/Eva%E2%80%99s_Family_Adalynn.jpg?format=2500w"
header-caption: "© Sarah Sudhoff"
header-height: 80vh
header-position:
---

# Project Launch Grant

The Project Launch Grant supports a complete or nearly completed documentary or fine art series. The $5,000 grant package includes professional development and public presentation opportunities.

## Project Advancement Package

- $5,000 USD
- Group exhibition at CENTER
- Review Santa Fe participation
- Publication in _LENSCRATCH_
- Professional Development Seminars access
- Inclusion in the printed Program Guide
- Inclusion in the Online Gallery & Archive

**Submit** — 15–20 images and a project statement limited to 400 words. Check out CENTER's additional [open calls for entry](/awards-and-grants/calls-for-entry).

[Apply Now](https://awards.visitcenter.org/awards-entry-form/) &nbsp;·&nbsp; [FAQs](/review-santa-fe/calls-for-entry-faqs)

## 2026 Juror

**Diane Waggoner** — Curator, Department of Photographs, [National Gallery of Art](https://www.nga.gov/)

Diane Waggoner is curator and acting head of the department of photographs at the National Gallery of Art, Washington. After earning a PhD in art history from Yale University, she joined the National Gallery in 2004, where she has organized or co-curated numerous exhibitions, including _The Art of the American Snapshot, 1888–1978_ (2007), _The Pre-Raphaelite Lens: British Photography and Painting, 1848–1875_ (2010), _Pre-Raphaelites: Victorian Art and Design, 1848–1900_ (2013), _East of the Mississippi: Nineteenth-Century American Landscape Photography_ (2017), and _James Van Der Zee's Photographs: A Portrait of Harlem_ (2021). In 2020, she published the monograph _Lewis Carroll's Photography and Modern Childhood_ (Princeton University Press). Her current project, _Beneath the Surface: Mining and American Photography_, co-curated with Kristen Gaylord, Herzfeld Curator of Photography and New Media Arts at the Milwaukee Museum of Art, will be on view at the National Gallery, May 23–August 23, 2026.

## 2025 Recipient

**Sarah Sudhoff** — [77 Minutes in Their Shoes](https://www.centerwinners.org/launch2025)

> 77 Minutes in Their Shoes includes long-term, community involvement with the victims' families and survivors devastated by the 2022 shooting in Uvalde, Texas, at Robb Elementary, which took the lives of 19 students and 2 teachers. Since 2022, I have been fostering a relationship with the nonprofit Lives Robbed, formed by the families, to witness and understand the full impact of these massacres and the role of art in helping communities process grief, establish connection, and enact change.

## Previous Recipients

{% assign winners = site.pages | where: "award", "Project Launch Grant" | sort: "project-year" | reverse %}
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
