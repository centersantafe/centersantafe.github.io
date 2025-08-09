---
layout: base
title: Gallery
subtitle: load image from piwigo API 
author: Fred Gibbs
date: 2024-10-28
---

{::nomarkdown}
</div> <!-- close container for bg work-->
{:/nomarkdown}
  
<div id="galleryContainer" class="justified-gallery"></div>

<script type="text/javascript">
  const piwigoUrl = 'http://localhost:3000?'; // Update with your Piwigo API URL

  // Define URL params for the Piwigo API request
  const apiParams = new URLSearchParams({
    format: 'json',
    method: 'pwg.categories.getImages'
  });

  // Function to fetch random images and display them using LightGallery
  async function displayGallery() {
    try {
      // Fetch images from the Piwigo API
      const response = await fetch(piwigoUrl + apiParams.toString(), {
        method: 'GET'
      });
      const data = await response.json();

      if (data && data.result && data.result.images) {
        const images = data.result.images;

        // Shuffle the images array to display random images
        const shuffledImages = images.sort(() => 0.5 - Math.random());

        // Select a subset of random images (e.g., 10 images)
        const randomImages = shuffledImages.slice(0, 50);

        const galleryContainer = document.getElementById('galleryContainer');
        galleryContainer.innerHTML = ''; // Clear any existing content

        // Create LightGallery structure
        randomImages.forEach(image => {
          console.log("image id: " +  image.categories[0]?.id)
          const linkElement = document.createElement('a');
          linkElement.href = 'project?image_id=' + image.id + '&album_id=' + image.categories[0]?.id 
          linkElement.setAttribute('data-lg-size', `${image.width}-${image.height}`);
          linkElement.setAttribute('data-sub-html', `${image.name}  `); // Add image title

          const imgElement = document.createElement('img');
          imgElement.src = image.derivatives.xsmall.url; // Use the medium-sized image URL for thumbnails
          imgElement.alt = image.name;
          imgElement.setAttribute('loading', "lazy"); // Add image title

          linkElement.appendChild(imgElement);
          galleryContainer.appendChild(linkElement);
        });

        // Initialize LightGallery

      } else {
        console.log('No images found or error in response');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  // Call the function to fetch and display the gallery
  displayGallery();
</script>