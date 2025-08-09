---
layout: base
title: CENTER Winners
---

{% assign winner_pages = site.pages | where_exp: "page", "page.award != nil" %}
{% assign grouped_pages = winner_pages | group_by: "project-year" %}
{% assign sorted_groups = grouped_pages | sort: "name" | reverse %}

{% for group in sorted_groups %}
<h1>{{ group.name }}</h1> <!-- Year as a large heading -->

{% for matched_page in group.items %}
  {% assign title = matched_page.project-title %}
  {% assign artist = matched_page.artist %}
  {% assign award = matched_page.award %}
  {% assign year = matched_page.project-year %}
  {% assign header-image-id = matched_page.header-image-id %}
  {% assign link = "/listings/" | append: matched_page.project-year | append: "/" | append: artist | replace: ' ', '-' | downcase  | append: ".html" %} 

  {% include card-winner.html
    height = 50
    title = title
    artist = artist
    award = award
    header-image-id = header-image-id
    link = link
    year = year
  %}
{% endfor %}
{% else %}
  <p>No matching pages found.</p>
{% endfor %}

{% include yml-to-json.html %}