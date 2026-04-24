---
layout: base
title: CENTER Awards
header-image-url: "https://images.squarespace-cdn.com/content/v1/64598f7e21c8fa4bf436e45d/87286cb4-820a-4f97-a588-8fbd5a595b80/2024_WELSH_Smith+Grant_0001.JPG?format=2500w"
header-caption: "© Alex Welsh"
header-height: 80vh
header-position:
---

# The CENTER Awards

The CENTER Awards recognize outstanding images, singular or part of a series, in three categories: **Personal**, **Socially Engaged**, and **Environmental**. A broad and inclusive interpretation of the themes is encouraged.

- **Personal Award** — work engaging in the exploration and expression of the power of self-representation and/or underrepresented experiences.
- **Socially Engaged Award** — work addressing social issues. All projects exploring social topics or themes are eligible.
- **Environmental Award** — work focusing on the state of the environment. Topics may include, but are not limited to, conservation, biodiversity, ecology, climate change, or other issues concerning the natural world.

## Project Advancement Package

- Group exhibition at CENTER
- Review Santa Fe participation
- Publication in _LENSCRATCH_
- Professional Development Seminars access
- Inclusion in the printed Program Guide
- Inclusion in the Online Gallery & Archive

**Submit** — up to 6 images and a project statement limited to 400 words. Check out CENTER's additional [open calls for entry](/awards-and-grants/calls-for-entry).

[Apply Now](https://awards.visitcenter.org/awards-entry-form/) &nbsp;·&nbsp; [FAQs](/review-santa-fe/calls-for-entry-faqs)

## 2026 Jurors

### Personal Award

**Marina Chao** — Curator, [Center for Photography at Woodstock (CPW)](https://cpw.org/)

Marina Chao held curatorial positions at the International Center of Photography and the Museum of Modern Art in New York prior to her position at CPW. She organized the exhibition _Multiply, Identify, Her_ (ICP, 2018) and was awarded a 2019 Curatorial Research Fellowship from the Andy Warhol Foundation for the Visual Arts for _Seeing Meaning: From Pictographs to AI_, an interdisciplinary project exploring the intersections of image, language, and technology. She is currently working on a forthcoming exhibition, _Laugh Riots_, about the intersection of humor and political resistance in contemporary photography and video.

### Socially Engaged Award

**Jeffrey Henson Scales** — Photography Editor, [The New York Times](https://www.nytimes.com/)

Henson Scales is an award-winning _New York Times_ photography editor who has been co-editor of the annual Year in Pictures special section for over a dozen years, and he created and curated the photography column "Exposures," which ran in the Opinion section from 2011–2023. A photographer and author of three books of photographs — most recently _In A Time of Panthers, The Early Photographs_, an archive he made as a teenager in Oakland of the Black Panther Party in the 60s — he is also a professor of photojournalism at New York University.

### Environmental Award

**Dominique Hildebrand** — Climate & Environment Photo Assignment Editor, [The Washington Post](https://www.washingtonpost.com/)

Dominique commissions and curates visual narratives that illuminate the pressing environmental challenges of our time. Prior to joining _The Post_, Dominique was a photo editor at _National Geographic_, where she led multi-platform projects, including the September 2022 cover feature on America's land conservation strategy. Dominique was named a finalist for Visual Editor of the Year by POYi in 2025, and she was part of the team nominated as a finalist for the 2025 Pulitzer Prize in National Reporting.

## 2025 Recipients

### Personal Award — Debmalya Ray Choudhuri

[A Factless Autobiography](https://www.centerwinners.org/personal2025)

> _A Factless Autobiography_ is inspired by a chapter of the same name in the _Book of Disquiet_ by the Portuguese poet Fernando Pessoa. It is an intimate and personal exploration of loss, desire, and the fragile nature of our existence. I started this project in response to the death of a lover and my confrontation with tuberculosis as a young adult. It grapples with the complex and often conflicting emotions of grief, melancholia, and survival while also questioning the nature of gender, identity, and the human condition.

### Socially Engaged Award — Haruka Sakaguchi

[The Camps America Built](https://www.centerwinners.org/social2025)

> Following the Pearl Harbor attacks on December 7, 1941, President Franklin D. Roosevelt issued an executive order authorizing the forced removal and incarceration of 120,000 people of Japanese ancestry — two-thirds of whom were U.S. citizens — into concentration camps. Entire families were uprooted from their homes and sent to hastily constructed detention centers, some as crude as horse stalls, before being imprisoned in remote concentration camps for up to four years. The trauma of displacement, incarceration, and family separation continues to shape lives today.

### Environmental Award — Alex Welsh

[Salton Sea](https://www.centerwinners.org/environmental2025)

> As drought fueled by climate change batters the American West, evaporation and a decrease in flow of agricultural runoff from surrounding farms are causing California's Salton Sea to shrink. Today, the state's largest and most polluted lake teeters on the brink of ecological collapse. Residents living in its vicinity face the threat of toxic dust. As the soil dries and the winds stir, the lake's parched shores emit hazardous dust laced with arsenic, selenium, and pesticides — remnants of a century's worth of agricultural runoff.

## Previous Recipients — Personal Award

{% assign personal_winners = site.pages | where: "award", "Personal Award" | sort: "project-year" | reverse %}
{% for w in personal_winners %}
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

## Previous Recipients — Socially Engaged Award

{% assign social_winners = site.pages | where: "award", "Socially Engaged Award" | sort: "project-year" | reverse %}
{% for w in social_winners %}
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

## Previous Recipients — Environmental Award

{% assign environmental_winners = site.pages | where: "award", "Environmental Award" | sort: "project-year" | reverse %}
{% for w in environmental_winners %}
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
