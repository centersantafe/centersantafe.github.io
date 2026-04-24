---
title: Map
layout: base
width: full
---

<script id="artists-data" type="application/json">
[
  {% assign first = true %}
  {% for page in site.pages %}
    {% if page.artist and page.geo %}
      {% unless first %},{% endunless %}
      {
        "name": {{ page.artist | jsonify }},
        "url": {{ page.url | jsonify }},
        "based": {{ page.based | jsonify }},
        "geo": {{ page.geo | jsonify }}
      }
      {% assign first = false %}
    {% endif %}
  {% endfor %}
]
</script>


<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

<style>
  #map {
    height: calc(100vh - 56px);
    width: 100vw;
    position: relative;
    left: 50%;
    margin-left: -50vw;
  }
</style>

<div id="map"></div>
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const artists = JSON.parse(document.getElementById('artists-data').textContent);

  var map = L.map('map').setView([39, -98], 4);

  const tiles = {
    light: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>'
    }),
    dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>'
    })
  };

  function isDark() {
    return document.body.getAttribute('data-bs-theme') === 'dark';
  }

  function applyTile() {
    const next = isDark() ? tiles.dark : tiles.light;
    const prev = isDark() ? tiles.light : tiles.dark;
    if (map.hasLayer(prev)) map.removeLayer(prev);
    if (!map.hasLayer(next)) next.addTo(map);
  }

  applyTile();

  // Swap tiles when dark mode toggles
  new MutationObserver(applyTile).observe(document.body, {
    attributes: true, attributeFilter: ['data-bs-theme']
  });

  artists.forEach(artist => {
    if (artist.geo && artist.geo.length === 2) {
      L.marker(artist.geo)
        .addTo(map)
        .bindPopup(`<a href="${artist.url}"><strong>${artist.name}</strong><br>${artist.based}</a>`);
    }
  });
});
</script>