---
layout: base
title: Excellence in Works by Hand Award
header-image-url: "https://images.squarespace-cdn.com/content/v1/64598f7e21c8fa4bf436e45d/58398244-f1b5-482d-8752-899d5b9d003f/FrankLOpez.jpg?format=2500w"
header-caption: "© Frank Lopez"
header-height: 80vh
header-position:
---

# Jay and Susie Tyrrell Excellence in Works by Hand Award

The Jay and Susie Tyrrell Excellence in Works By Hand Award is $2,500 awarded to a Review Santa Fe participating photographer who, by their hand, works to make unique objects of art. The aim is to encourage the preservation of historical photographic processes, as well as works whose process may include collage, emulsion transfer, painting, sewing, and the use of sculpture and ceramics.

[Review Santa Fe reviewers](/review-santa-fe/reviewers) vote on works that have been juried into Review Santa Fe for the award.

## 2025 Recipient

**Frank Lopez** — [Manifestation of Light and Energy](https://www.franklopez.com/#/manifestation/)

> This project is an exploration in Buddhism, and the chemical transformation of expired silver gelatin prints. From the caves of Lascaux to digital icons, humans have delved into meaning from gestural drawings, symbols, and forms. The physical transformation allows expression that becomes a personal and meditative experience. As with Buddhist principles, I interpret the growth of self in an arch of a life — from recurrence of life, birth, community, to isolation, death, and rejuvenation. The analogy of abstract patterns opens the viewer to personal interpretations, all the while allowing the interactions of chemical reactions upon the silver gelatin print to produce an ethereal experience.
>
> The meditative and interpretive practice of Chromo is a rhythmic response to the natural state of imperfection. More specifically, it is my way of shifting the act of seeing into subjects that are interpretations of light, time, energy, and my conscious and unconscious awareness. It is through this meditative breathing tradition that the acceptance of natural imperfection is reflected in nature and self, revealing that the language of abstraction is truly a global human practice.
>
> These chemical reaction images are created on fiber-based paper using Chromoskedasic chemicals, developers, toners, and time. Renamed Chromo Halide Lift (or simply, Chromo), the mirror-like surface of the silver gelatin print is reminiscent of daguerreotypes in that they are impossible to digitally capture and are best experienced in person.

## Previous Recipients

{% assign wbh1 = site.pages | where: "award", "Excellence in Works by Hand" %}
{% assign wbh2 = site.pages | where: "award", "Jay and Susie Tyrrell Excellence in Works by Hand Award" %}
{% assign wbh3 = site.pages | where: "award", "Works by Hand Award" %}
{% assign winners = wbh1 | concat: wbh2 | concat: wbh3 | sort: "project-year" | reverse %}
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

Winners galleries on the CENTER Winners site: [2024 · Nancy E. Rivera](https://www.centerwinners.org/works-by-hand-2024) · [2023 · Elizabeth Z. Pineda](https://www.centerwinners.org/worksbyhand2023).

## Supporter

Thanks to a generous donor and Review Santa Fe Alum Jay Tyrrell in 2023, the Jay and Susie Tyrrell Excellence in Works by Hand Award provides a juried Review Santa Fe invitee with financial support to continue their work using handmade techniques and historical photographic processes.

{% include yml-to-json.html %}
