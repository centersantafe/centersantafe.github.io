---
layout: base
date: 2025-05-09
---

{% assign pages_with_year = site.pages | where_exp: "page", "page.project-year != nil" %}

{% assign grouped_pages = pages_with_year | group_by: "project-year" %}

<ul>
  {% for group in grouped_pages %}
    <li>
      <a href="{{ group.name }}/index.html">{{ group.name }}</a> <!-- Year as the group name -->
      <ul>
        {% for page in group.items %}
          <li>
            <a href="{{ page.url }}">{{ page.title }}</a> <!-- Link to each page in the group -->
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>

<!-- maybe in addition to year listing have other more visual display?
would that be different from gallery page 
-->