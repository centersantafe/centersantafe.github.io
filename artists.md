---
title: Artists
layout: base
---

<!-- gather data to send to card include -->
{% assign artist_pages = site.pages | where_exp: "page", "page.artist"  %}

{% for page in artist_pages %}
  {% assign header =  page.artist %}
  {% assign text =  page.bio %}
  {% assign image =  page.header-image-id %}
  {% assign social =  page.social %}

  {% include card-horizontal-img-left.html 
  header=header
  text=text
  image=image
  social=social
  %}

{% endfor %}




<script>
    document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll("img[data-pic]");

        images.forEach((img) => {
            const picId = img.getAttribute("data-pic");

            // Replace with your Piwigo API endpoint and authentication details
            const apiUrl = `http://localhost:3000/ws.php?method=pwg.images.getInfo&image_id=${picId}&format=json`;

            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    if (data.stat === "ok") {
                        // Use the small size URL from the API response
                        const smallImageUrl = data.result.derivatives.small.url;
                        img.setAttribute("src", smallImageUrl);
                    } else {
                        console.error("Error fetching image:", data.message);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching image:", error);
                });
        });
    });
</script>