---
title: Map
layout: base
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
  <div id="map" style="height: 500px;"></div>
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>


<script>
document.addEventListener("DOMContentLoaded", function() {
  // Get the JSON data from the script tag
  const artists = JSON.parse(document.getElementById('artists-data').textContent);

  // Initialize the map
  var map = L.map('map').setView([39, -98], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  artists.forEach(artist => {
    if (artist.geo && artist.geo.length === 2) {
      L.marker(artist.geo)
        .addTo(map)
        .bindPopup(`<a href="${artist.url}"><strong>${artist.name}</strong><br>${artist.based}</a>`);
    }
  });
});
</script>