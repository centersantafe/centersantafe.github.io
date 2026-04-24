---
layout: base
title: Me&Eve Award
header-image-url: "https://images.squarespace-cdn.com/content/v1/64598f7e21c8fa4bf436e45d/aad9c327-170e-4295-8f91-9aea4c386bee/mitsumaeda_001.jpg?format=2500w"
header-caption: "© Mitsu Maeda"
header-height: 80vh
header-position:
---

# Me&Eve Award

The Me&Eve Award provides $1,000 in financial support to a female or LGBTQ+ photographer 40 years of age and over.

## Project Advancement Package

- $1,000 USD
- Group exhibition at CENTER
- Review Santa Fe participation
- Publication in _LENSCRATCH_
- Professional Development Seminars access
- Inclusion in the printed Program Guide
- Inclusion in the Online Gallery & Archive

**Submit** — 15–20 images and a project statement limited to 400 words. Check out CENTER's additional [open calls for entry](/awards-and-grants/calls-for-entry).

[Apply Now](https://awards.visitcenter.org/awards-entry-form/) &nbsp;·&nbsp; [FAQs](/review-santa-fe/calls-for-entry-faqs)

## 2026 Juror

**Barbara Tannenbaum** — Curator of Photography, [The Cleveland Museum of Art](https://www.clevelandart.org/home)

Barbara Tannenbaum has organized over 125 exhibitions during her four-decade career as a curator and academic. Recent exhibitions organized include _Ann Hamilton: still and moving • the tactile image_; _Refocusing Photography: China at the Millennium_; and _Matt Eich and Tyler Mitchell: Sunshine, Shadow, and A Rainbow_. She organized the first museum show of print-on-demand photobooks in 2011 and co-organized the first large-scale international exhibition chronicling women's historic achievements in fine art photography. She has curated solo shows of numerous living artists, including Aaron Rothman, TR Ericsson, Hank Willis Thomas, and Lois Conner. Tannenbaum came to the Cleveland Museum of Art in 2011 after serving for 26 years as chief curator at the Akron Art Museum, where she grew the photography collection from 500 to 2,500 works and organized the first traveling solo museum exhibition of the work of Adam Fuss.

## 2025 Recipient

**Mitsu Maeda** — [The Shining Lady](https://www.centerwinners.org/meeve2025)

> Memories of my grandmother, Tsuyajyo, kindly stay with me all the time — a small purse in which Tsuyajyo collected 500-yen coins to give to me and my sister when we visited her; hide-and-seek in a morning after I stayed a night at their house. Tsuyajyo began showing symptoms of dementia around 2009. It was the first time my mother experienced having a family member with dementia. She took care of her mother, who could hardly perform basic tasks like eating or taking a bath. Tsuyajyo would often get angry irrationally and became someone my mother no longer recognized as her mother. These days lasted for about two years.

## Previous Recipients

{% assign w1 = site.pages | where: "award", "Me&Eve" %}
{% assign w2 = site.pages | where: "award", "Eve&Me" %}
{% assign w3 = site.pages | where: "award", "Me&Eve Award" %}
{% assign winners = w1 | concat: w2 | concat: w3 | sort: "project-year" | reverse %}
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
